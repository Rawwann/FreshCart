
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/authOptions";

export async function getUserToken(): Promise<string | null> {
  const session = await getServerSession(authOptions);
  return (session?.accessToken as string) ?? null;
}