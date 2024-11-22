import { MongoClient, Db } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI as string);
let db: Db | null = null;




async function connectToDatabase() {
  if (!db) {
    db = client.db("ExpertForms");
    await client.connect();
  }
  return db;
}

export { connectToDatabase };
