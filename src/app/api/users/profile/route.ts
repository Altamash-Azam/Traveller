import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import userModel from "@/models/user.model";

export async function GET() {
    const session = await auth();
    if(!session?.user){
        return NextResponse.json({
            error: "Unauthorized"
        },{status: 401});
    }

    try {
        const db = await connectDB();
        const user = await userModel.findOne({
            authid : session.user.id
        });

        if(!user){
            return NextResponse.json({
                success: false,
                message: "User Not Found",
            },{status: 404});
        }
        return NextResponse.json(user);

    } catch (error) {
        console.log("profile fetch error : ", error);
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        }, {status: 500})
    }
}

export async function PUT( request: NextRequest){
    const session = await auth();
    if(!session?.user){
        return NextResponse.json({
            success: false,
            message: "Unauthorized"
        }, {status: 401})
    }

    try {
        const body = await request.json();
        const {username, homeCountry, savedItineraries, bio} = body;
        if(username && (username.length<=2 || username.length>=20)){
            return NextResponse.json({
                success: false,
                message: "Username must be between 2-20 characters."
            }, {status: 400});
        }
        await connectDB();
        const user = await userModel.findOneAndUpdate(
            { authid: session.user.id },
            { username, homeCountry, savedItineraries, bio, updatedAt: new Date() },
            { new: true, runValidators: true}
        ).select('__v');

        if (!user) {
            return NextResponse.json({
                success: false,
                message: "User Not Found"
            }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            user
        });

    } catch (error) {
        console.log("profile update error : ", error);
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        }, { status: 500 });
    }
}