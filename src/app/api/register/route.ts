import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import userModel from "@/models/user.model";
import bcrypt from "bcryptjs";
import { signUpSchema } from "@/schemas/signupSchema";

export async function POST(request: NextRequest){

    try {
        await connectDB();
        const body = await request.json();

        const validation = signUpSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json({
                success: false,
                message: "Invalid input",
            }, { status: 400 });
        }

        const {username, email, password} = body;

        if(!username || !password || !email){
            return NextResponse.json({
                success: false, 
                message: "missing name, email, password"
            },{status:404});
        }

        const existingUser = await userModel.findOne({
            username, email
        })

        if(existingUser){
            return NextResponse.json({
                success: false,
                message: "user already exists"
            },{status: 409})
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await userModel.create({
            email,username,hashedPassword
        })

        if(!newUser){
            return NextResponse.json({
                success: false,
                message: "user not created"
            }, {status: 401})
        }
        await newUser.save();

        return NextResponse.json({
            success: true,
            newUser
        },{status: 201})


    } catch (error) {
        console.log("[register_post_error", error);
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        }, {status: 500})
    }
}