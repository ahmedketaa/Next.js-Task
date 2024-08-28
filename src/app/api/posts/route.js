import clientPromise from "@/app/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("myBlogDB");
  const posts = await db.collection("posts").find({}).toArray();
  return new Response(JSON.stringify(posts), { status: 200 });
}

export async function POST(req) {
  const { title, body, image } = await req.json();
  const client = await clientPromise;
  const db = client.db("myBlogDB");
  const result = await db.collection("posts").insertOne({ title, body, image });
  return new Response(JSON.stringify(result), { status: 201 });
}
  
  
// export async function GET(req) {
//   const { id } = req.query;
//   const client = await clientPromise;
//   const db = client.db("myBlogDB");
//   const post = await db.collection("posts").findOne({ _id: new ObjectId(id) });
//   if (!post) {
//     return new Response(null, { status: 404 });
//   }
//   return new Response(JSON.stringify(post), { status: 200 });
// }
