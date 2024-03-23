import connectMongoDB from "@/libs/mongodb";
import TopicModel from "@/models/topic";
import { NextResponse } from "next/server";


// post a topic 
export async function POST(request) {
    try {
        const { title, description } = await request.json();
        await connectMongoDB();
        await TopicModel.create({ title, description }); // You should pass an object to create
        return NextResponse.json({ message: "topic created" });
    } catch (err) {
        console.error("Error creating topic:", err);
        return NextResponse.json({ message: "Error creating topic" }, { status: 500 });
    }
}

// read all topics 
export async function GET(request) {
    try {
        await connectMongoDB();
       const allTopics =  await TopicModel.find({}); 
        return NextResponse.json({allTopics});
    } catch (err) {
        console.error("Error reading topic:", err);
        return NextResponse.json({ message: "Error reading topic" }, { status: 500 });
    }
}

//delete the topic
export async function  DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await TopicModel.findByIdAndDelete(id)
    return NextResponse.json({msg:"topic has deleted"})
}
