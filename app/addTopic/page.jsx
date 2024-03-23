'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [ title,setTitle ] = useState("")
  const [ description,setDescription ] = useState("")
  const router = useRouter()
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!title || !description){
      alert("please fill all fields")
    }

    try{
      const res = await fetch('http://localhost:3000/api/topic',{
        method:"POST",
        headers:{
          'Content-type':'application/json'
        },
        body: JSON.stringify({title,description})
      })
      if(res.ok){
        router.push("/")
      }
    } catch(err){
      console.log("failed to create topic");
    }

  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input 
        type = "text"
        className="border border-slate-600 px-3 py-2"
        placeholder = "Enter Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input 
        type = "text"
        className="border border-slate-600 px-3 py-2"
        placeholder = "Enter Description"
        onChange={(e) => setDescription(e.target.value)}

      />
      <button className = "bg-slate-800 text-white py-2 w-fit px-4" type="submit">Add Topic</button>
    </form>
  );
};

export default page;
