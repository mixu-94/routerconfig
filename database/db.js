import { MongoClient } from "mongodb";

const url = "mongodb+srv://test:12345@test.s3jvrrw.mongodb.net/test"; //mongodb url
const client = new MongoClient(url);

const dbName = "test"; //name der Datenbank

try {
  await client.connect(); //verbindung zu mongodb server
  console.log("Connection established");
} catch (err) {
  console.log(err);
}

const db = client.db(dbName);

export default db;
