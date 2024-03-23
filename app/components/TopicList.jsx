import React from 'react'
import RemoveBtn from './RemoveBtn'
import { HiPencilAlt } from "react-icons/hi"
import Link from 'next/link'

//below two lines are for shortcut method
import connectMongoDB from '@/libs/mongodb'
import TopicModel from '@/models/topic'

const getTopics = async() => {
  try{
     const res = await fetch("http://localhost:3000/api/topic",{
      cache:"no-store", //this line fetch the latest documents
     })
     if(!res.ok){
      throw new Error("failed to fetch data from database")
     }
     return res.json();
  } catch(err){
    console.log(err);
  }
}

const TopicList = async () => {
  
  // below two line are shortcut to fetch data form databse 
  // await connectMongoDB()
  // const allTopics = await TopicModel.find({});

  const {allTopics} = await getTopics()

  return (
    <>

      {
        allTopics.map((topic, i) => (
          <div className="p-4 border border-slate-300 my-3 flex justify-between gap-4" key={i}>
            <div>
              <h2 className="font-semibold text-2xl">{topic.title}</h2>
              <div>{topic.description}</div>
            </div>

            <div className="flex items-start gap-2">
              <RemoveBtn id = {topic._id}/>
              <Link href={`/editTopic/${topic._id}`}>
                <HiPencilAlt size="24" />
              </Link>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default TopicList
