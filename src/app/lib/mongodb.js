const { MongoClient } = require("mongodb");

let mongoClient;
let clientPromise;
if (!clientPromise) {
  mongoClient = new MongoClient("mongodb://localhost:27017/netx-test");
  clientPromise = mongoClient.connect();
}

export default clientPromise;