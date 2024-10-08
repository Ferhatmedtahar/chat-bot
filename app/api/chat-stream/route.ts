import { ragChat } from "@/app/_lib/rag-chat";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const { messages, sessionId } = await req.json();
  const lastMessage = messages[messages.length - 1].content;
  const res = await ragChat.chat(lastMessage, { streaming: true, sessionId });
  return aiUseChatAdapter(res);
};
