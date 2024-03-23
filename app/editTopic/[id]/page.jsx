'use client'
import EditForm from '@/app/components/EditForm'
const getTopicByID = async(id) => {
  try{ 
     const res = await fetch(`http://localhost:3000/api/topic/${id}`,{
      cache:"no-store"
     })
     if(!res.ok){
      throw new Error("fail to fetch topic")
     }
     return res.json();

  } catch(err){
    console.log("failed to update topic");
  }
}
const Edit = async({params}) => {
  // console.log("id:", params);
  const {id} = params;
  // nichay topic variable jo destructure howa wo backend sy aaya hai
  const {topic} = await getTopicByID(id);
  const {title,description} = topic;
  
  
  return (
    <div>
      <EditForm id={id} title={title} description = {description}/>
    </div>
  )
}

export default Edit
