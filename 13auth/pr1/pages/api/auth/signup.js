import { connectToDatabase } from "../../../lib/db";
import { hashPassword } from "../../../lib/auth";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;
  const { email, password } = data;
  if (!email.trim() || !email.includes("@") || password.trim().length < 7) {
    res.status(422).json({
      message:
        "Invalid input - password should be at least of 7 characters and email should contain the '@' symbol",
    });
    return;
  }
  const client = await connectToDatabase();
  const db = client.db();
  const existingUser = await db.collection("users").findOne({ emsil: email });
  if (existingUser) {
    res.status(422).json({ message: "User exists already" });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);
  const result = await db
    .collection("users")
    .insertOne({ email: email, password: hashedPassword });
  res.status(201).json({ message: "Created user" });
  client.close();
}
export default handler;
