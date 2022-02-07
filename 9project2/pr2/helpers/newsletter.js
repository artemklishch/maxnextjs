import fs from "fs";
import path from "path";

export function getEmailLetters() {
  const filePath = path.join(process.cwd(), "data", "registration.json");
  const registeredEmails = fs.readFileSync(filePath);
  return JSON.parse(registeredEmails);
}
export function updateEmailLetters(newemail) {
  const registeredEmails = getEmailLetters();
  const isThereTheSameEmail = registeredEmails.find(
    (el) => el.email === newemail.email
  );
  if (!isThereTheSameEmail) {
    const updatedEmails = registeredEmails.concat(newemail);
    const filePath = path.join(process.cwd(), "data", "registration.json");
    fs.writeFileSync(filePath, JSON.stringify(updatedEmails));
  }
}
