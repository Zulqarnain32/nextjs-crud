import connectMongoDB from "@/libs/mongodb";
import TopicModel from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(req,{params}){
    const {id} = params;
    console.log("params", params);
    const { newTitle:title,newDescription:description} = await req.json();
    await connectMongoDB();
    await TopicModel.findByIdAndUpdate(id,{title,description})
    return NextResponse.json({msg:"topic has updated"})
}

export async function GET(req, {params}){
    const {id} = params;
    await connectMongoDB();
    const topic = await TopicModel.findOne({_id:id});
    return NextResponse.json({topic})

}