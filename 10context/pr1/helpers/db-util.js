import { MongoClient } from "mongodb";
const BASE_URL =
  "mongodb+srv://Artem2:Artem2@cluster0.fikvk.mongodb.net/events?retryWrites=true&w=majority";

export async function connectDatabase() {
  // MongoClient.connect(BASE_URL, (client) => {});
  const client = await MongoClient.connect(BASE_URL);
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find()
    .sort(sort) // значить, що останній коментар - на першому місці
    // .sort({ _id: -1 }) // значить, що останній коментар - на першому місці
    .toArray();
  return documents;
}
