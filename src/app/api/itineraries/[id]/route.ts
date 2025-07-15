import { NextRequest, NextResponse } from "next/server";
import ItineraryModel from "@/models/Itinerary.model";
import { auth } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import userModel from "@/models/user.model";
import { Schema } from "mongoose";

interface Itinerary {
  owner: Schema.Types.ObjectId;
  visibility: string
  // ... other fields
}

export async function GET(request :NextRequest, {params}: {params : {id:string}}){
    try {
        await connectDB();

        const itinerary = await ItineraryModel.findById(params.id)
            .populate('owner', 'username')
            .lean<Itinerary>();
        
        if(!itinerary){
            return NextResponse.json({
                success: false,
                message: "Itinerary not found"
            }, {status: 404});
        }
        
        const session = await auth();

        const isOwner = session?.user && itinerary.owner.toString() === session.user.id;

        if(itinerary.visibility === "private" && !isOwner){
            return NextResponse.json({
                success: false,
                message: "Not authorized to view this."
            }, {status: 403})
        }

        return NextResponse.json({success: true, itinerary}, {status: 200})


    } catch (error) {
        console.log("itinerary fetch error", error);
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        }, {status:500});
    }
}

export async function PUT(request :NextRequest, {params}:{params:{id:string}}){
    const session = await auth();
    if(!session?.user){
        return NextResponse.json({
            success: false,
            message: "Unauthorized"
        },{status: 401})
    }

    try {
        const body = await request.json();
        await connectDB();

        const user = await userModel.findOne({authId: session.user.id});
        if(!user){
            return NextResponse.json({
                success: false,
                message: "User not found"
            }, {status: 404})
        
        }

        const itinerary = await ItineraryModel.findOneAndUpdate(
            {_id: params.id, owner:user.id},
            {...body, updatedAt: new Date()},
            {new: true, runValidators: true}
        ).populate("owner","username");

        if(!itinerary){
            return NextResponse.json({
                success: false,
                message: "Itinerary not found or access denied"
            }, {status : 404})
        }

        return NextResponse.json({
            success: true,
            itinerary
        }, {status: 200})

    } catch (error) {
        console.error("itinerary update error ", error)
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        }, {status: 500})
    }
}

export async function DELETE(request :NextRequest, {params}:{params: {id:string}}){
    const session = await auth();
    if(!session?.user){
        return NextResponse.json({
            success: false,
            message: "Unauthorized"
        }, {status: 401})
    }

    try {
        await connectDB();

        const user = await userModel.findOne({authId: session.user.id});
        if(!user){
            return NextResponse.json({
                success: false,
                message: "user not found"
            }, {status: 404})
        }

        const itinerary = await ItineraryModel.findOneAndDelete({_id: params.id, owner: user.id});

        if(!itinerary){
            return NextResponse.json({
                success: false,
                message: "itinerary not found"
            },{status: 404})
        }

        return NextResponse.json({success: true, itinerary}, {status: 200});
    } catch (error) {
        console.log("errror deleting the itinerary ", error);
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        }, {status: 401})
    }
}