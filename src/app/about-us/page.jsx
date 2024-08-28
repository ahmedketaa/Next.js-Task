import { fetchAllPosts } from "../lib/api";

export default async function AboutUsPage() {
  const posts = await fetchAllPosts();

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map(post => (
          <div key={post._id} className="mb-4">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
}
