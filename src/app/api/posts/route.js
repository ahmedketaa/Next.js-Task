import clientPromise from '@/app/lib/api'; // Reuse the clientPromise from api.js
import { ObjectId } from 'mongodb';

// Helper function to get the database instance
async function connectToDatabase() {
  const client = await clientPromise;
  return client.db('myBlog'); // Replace with your actual database name
}

// Fetch all posts
export async function fetchAllPosts() {
  const db = await connectToDatabase();
  const posts = db.collection('posts');
  const allPosts = await posts.find().toArray();
  return allPosts;
}

// Fetch a post by ID
export async function fetchPostById(id) {
  const db = await connectToDatabase();
  const posts = db.collection('posts');
  const post = await posts.findOne({ _id: new ObjectId(id) });
  return post;
}

// API route handler
export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        if (req.query.id) {
          const post = await fetchPostById(req.query.id);
          if (post) {
            res.status(200).json(post);
          } else {
            res.status(404).json({ message: 'Post not found' });
          }
        } else {
          const allPosts = await fetchAllPosts();
          res.status(200).json(allPosts);
        }
      } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
