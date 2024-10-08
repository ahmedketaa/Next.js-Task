"use client"
import { useEffect, useState } from 'react';
import OurLoading from './loading';
import PostCard from '@/Components/PostCard/PostCard';

export default function Home() {
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
    <div className="px-10 flex justify-start align-items-center gap-10 my-10 min-h-screen">
      {posts.map(post => (
        <PostCard key={post._id} id={post._id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}
