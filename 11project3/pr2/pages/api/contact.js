import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    if (
      !email.trim() ||
      !email.includes("@") ||
      !name.trim() ||
      !message.trim()
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }
    const newMessage = { email, name, message };
    let client;
    try {
      client = await MongoClient.connect(process.env.BASE_URL);
    } catch (err) {
      client.close();
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }
    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage._id = result.insertedId;
    } catch (err) {
      client.close();
      res.status(500).json({ message: "Storing message faild" });
      return;
    }
    client.close();
    res
      .status(201)
      .json({ message: "Successfully stored", messageData: newMessage });
  }
}

export default handler;
