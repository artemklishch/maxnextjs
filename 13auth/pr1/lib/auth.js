import { hash } from "bcryptjs";

export async function hashPassword(plainPassword) {
  const hashedPassword = await hash(plainPassword, 12);
  return hashedPassword;
}
