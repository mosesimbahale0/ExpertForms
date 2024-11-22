import { ObjectId } from "mongodb";
import { connectToDatabase } from "~/utils/db.server";

export class User {
  name: string;
  user_name: string;
  _id?: ObjectId;

  constructor({ name, user_name }: { name: string; user_name: string }) {
    this.name = name;
    this.user_name = user_name;
  }

  async save() {
    const db = await connectToDatabase();
    const result = await db.collection("users").insertOne({
      name: this.name,
      user_name: this.user_name,
    });
    this._id = result.insertedId;
  }
}
