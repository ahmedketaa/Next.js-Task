import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
export default async function fetchAllPosts() {
  const db = await connectToDatabase();
  const posts = db.collection('posts');
  const allPosts = await posts.find().toArray();
  return allPosts;
}

export default async function fetchPostById(id) {
  const db = await connectToDatabase();
  const posts = db.collection('posts');
  const post = await posts.findOne({ _id: new MongoClient.ObjectId(id) }); 
  return post;
}

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      if (req.query.id) {
        const post = await fetchPostById(req.query.id);
        res.status(200).json(post);
      } else {
        const allPosts = await fetchAllPosts();
        res.status(200).json(allPosts);
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
