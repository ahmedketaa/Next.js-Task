import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

export async function fetchAllPosts() {
  await client.connect();
  const database = client.db('next-test'); 
  const posts = database.collection('posts'); 
  const allPosts = await posts.find().toArray();
  return allPosts;
}
