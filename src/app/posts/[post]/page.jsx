// app/post/[id]/page.js

import { fetchPostByID, fetchAllPosts } from '@/lib/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function PostPage({ params }) {
  const [post, setPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    async function fetchData() {
      const postRes = await fetchPostByID(id);
      if (!postRes) {
        router.push('/404');
        return;
      }
      setPost(postRes);

      const allPosts = await fetchAllPosts();
      setPosts(allPosts);
    }

    fetchData();
  }, [id, router]);

  if (!post) return <div>Loading...</div>;

  const currentIndex = posts.findIndex(p => p._id === post._id);
  const nextPost = posts[currentIndex + 1];
  const prevPost = posts[currentIndex - 1];

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <Image src={post.image} alt={post.title} width={600} height={400} />
      <p>{post.body}</p>
      <div className="mt-6 flex justify-between">
        {prevPost && <a href={`/post/${prevPost._id}`}>Previous</a>}
        {nextPost && <a href={`/post/${nextPost._id}`}>Next</a>}
      </div>
    </div>
  );
}
