import { draftMode } from "next/headers";

export async function GET(request: Request) {
  const { isEnabled } = await draftMode()
  return new Response(`Draft mode is ${isEnabled}`);
}
