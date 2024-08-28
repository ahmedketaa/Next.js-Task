"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function PostCard({ title, body, id }) {
  const [likes, setLikes] = useState(0);
  const [button, setButton] = useState("like")

  const handleToggleLike = ()=>{
    setButton(button==="like"?"dislike":"like")
    setLikes(button==="like"? likes+1 :likes -1)
  }
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 hover:shadow-lg h-fit transition-shadow">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700 mb-4">{body}</p>
    <footer className="flex justify-between items-center">
      <button 
        onClick={handleToggleLike} 
        className="bg-blue-500 w-40 text-white  py-2 rounded-full hover:bg-blue-600 transition-colors">
        {button} {likes}
      </button>
      <Link
        href={`/posts/${id}`} 
        className="text-blue-500 underline hover:text-blue-700 transition-colors">
        Read More
      </Link>
    </footer>
  </div>
  );
}
