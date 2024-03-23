'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const EditForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topic/${id}`, {
        method: "PUT",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ newTitle, newDescription })
      });
      if (!res.ok) {
        throw new Error("failed to update");
      }
      router.push('/')
      router.refresh()
      return res.json();
    } catch (err) {
      console.log("failed to update topic", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        className="border border-slate-600 px-3 py-2"
        placeholder="Enter Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        type="text"
        className="border border-slate-600 px-3 py-2"
        placeholder="Enter Description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button type='submit' className="bg-slate-800 text-white py-2 w-fit px-4">Update Topic</button>
    </form>
  );
};

export default EditForm;
