import fs from "fs";
import path from "path";

export function getAllComments() {
  const filePath = path.join(process.cwd(), "data", "comments.json");
  const comments = fs.readFileSync(filePath);
  return JSON.parse(comments);
}
export function getFilteredComments(eventId) {
  const comments = getAllComments();
  const filteredComments = comments.filter((c) => c.eventId === eventId);
  return filteredComments;
}
export function updateEmailLetters(newemail) {
  const comments = getAllComments();
  const isThereTheSameEmail = registeredEmails.find(
    (el) => el.email === newemail.email
  );
  if (!isThereTheSameEmail) {
    const updatedEmails = registeredEmails.concat(newemail);
    const filePath = path.join(process.cwd(), "data", "comments.json");
    fs.writeFileSync(filePath, JSON.stringify(updatedEmails));
  }
}
