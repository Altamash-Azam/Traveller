import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import ItineraryModel from "@/models/Itinerary.model";
import userModel from "@/models/user.model";

export async function GET(request: NextRequest){
    const {searchParams} = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const visibility = searchParams.get("visibility");
    const userId = searchParams.get("userId");
    const search = searchParams.get("search");

    try {
        await connectDB();

        const query: any = {};
        if(visibility){
            query.visibility = visibility;
        }
        if(userId){
            query.owner = userId;
        }
        if(search){
            query.$text = {$search:search};
        }
        if(!userId){
            query.visibility = 'public';
        }
        const skip = (page -1)*limit;

        const [itineraries, total] = await Promise.all([
            ItineraryModel.find(query)
            .populate('owner','username')
            .sort({createdAt:-1})
            .skip(skip)
            .limit(limit)
            .lean(),
            ItineraryModel.countDocuments(query)
        ])

        return NextResponse.json({
            itineraries,
            pagination:{
                limit,
                page,
                total,
                pages: Math.ceil(total/limit)
            }
        });

    } catch (error) {
        console.error("Itineraries fetch Error : ", error);
        return NextResponse.json({
            success: false,
            message: "Internal Server Error"
        }, {status: 500});
    }
}

export async function POST(request: NextRequest){
    const session = await auth()
    if(!session?.user){
        return NextResponse.json({
            success: false,
            message: "Unauthorized"
        }, {status: 401})
    }

    try {
        const body = await request.json();
        const {title, description, visibility, startDate, endDate, days, destination} = body;
        if(!title || title.length<3){
            return NextResponse.json({
                success: false,
                message: "Title should be longer than 3 characters."
            }, {status: 400})
        }
        if(new Date(startDate)>= new Date(endDate)){
            return NextResponse.json({
                success: false,
                message: "Invalid end Date."
            }, {status: 400})
        }

        await connectDB();

        const user = await userModel.findOne({authId: session.user.id});
        if (!user) {
            return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
        }
        const itinerary = new ItineraryModel({
            owner : user._id,
            title, 
            description,
            visibility: visibility || "private",
            startDate,
            endDate, 
            days: days || [],
            destination
        })

        await itinerary.save();
        await itinerary.populate("owner", "username");

        return NextResponse.json({
            success: true,
            itinerary
        }, {status:200})
    } catch (error) {
        console.error('Itinerary creation error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }

}