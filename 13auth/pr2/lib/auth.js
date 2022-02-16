import { hash, compare } from "bcryptjs";

export async function hashPassword(plainPassword) {
  const hashedPassword = await hash(plainPassword, 12);
  return hashedPassword;
}

export async function verifyPassword(plainPassword, hashedPassword) {
  const isValid = await compare(plainPassword, hashedPassword);
  return isValid;
}
