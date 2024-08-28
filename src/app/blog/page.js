import { fetchAllPosts } from '@/lib/api';

export async function getStaticProps() {
  const posts = await fetchAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 10, 
  };
}

export default function BlogPage({ posts }) {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      {posts.map(post => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
