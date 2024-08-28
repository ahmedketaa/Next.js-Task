import PostCard from '@/Components/PostCard/PostCard';
import { fetchAllPosts } from '../lib/api';

export default async function BlogPage() {
  const posts = await fetchAllPosts();

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 min-h-screen">
        {posts.map(post => (
          <PostCard key={post._id} id={post._id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
}
