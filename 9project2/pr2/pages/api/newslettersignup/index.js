import { updateEmailLetters } from "../../../helpers/newsletter";

async function handler(req, res) {
  if (req.method === "POST") {
    await updateEmailLetters(req.body);
    res.status(201).json({ message: "success" });
  }
}
export default handler;
