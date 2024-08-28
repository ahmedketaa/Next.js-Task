'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AddPost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body, image }),
    });

    if (res.ok) {
      router.push('/'); 
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Add New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 text-black rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Body</label>
          <textarea
            className="w-full p-2 border border-gray-300 text-black rounded"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 text-black rounded"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Add Post
        </button>
      </form>
    </div>
  );
}
