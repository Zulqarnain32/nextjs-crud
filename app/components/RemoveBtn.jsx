'use client'
import {  HiOutlineTrash } from 'react-icons/hi'
const RemoveBtn = async({id}) => {
  const handleRemoveTopic = () => {
    const confirmed = confirm("are you sure?");

    if(confirmed){
      fetch(`http://localhost:3000/api/topic?id=${id}`,{
       method:"DELETE"
      })
      window.location.reload();
   }

  }
 

  return (
    <button onClick={handleRemoveTopic} className = "text-red-500">
       <HiOutlineTrash size = "24"/>
    </button>
  )
}

export default RemoveBtn
