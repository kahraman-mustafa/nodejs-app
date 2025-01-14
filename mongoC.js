import dotenv from 'dotenv';
import {MongoClient} from "mongodb";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);

let conn;
try {
  conn = await client.connect();
  console.log("connection successful")
} catch (e) {
  console.error(e);
}
let db = conn.db("avukat_sitem");
export default db;