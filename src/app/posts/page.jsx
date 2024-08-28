"use client"
import { useEffect, useState } from 'react';
import OurLoading from './loading';
import PostCard from '@/Components/PostCard/PostCard';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
        console.log(data);
        
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return <OurLoading />;
  }

  return (
    <div className="px-10 grid grid-cols-1 my-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 min-h-screen">
      {posts.map(post => (
        <PostCard key={post._id} id={post._id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}
