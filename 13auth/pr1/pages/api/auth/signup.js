import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
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
  await db.collection("users").insertOne({ email: email, password: password });
  client.close();
}
export default handler;
