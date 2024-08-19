import { type Message as TMessage } from "ai/react";
import { MessageSquare } from "lucide-react";
import Message from "./Message";
interface MessagesProps {
  messages: TMessage[];
}
export default function Messages({ messages }: MessagesProps) {
  return (
    <div className=" flex-1 flex-col overflow-y-auto flex max-h-[calc(100vh-3.5rem-7rem)]  bg-slate-600">
      {messages.length ? (
        messages.map((mesasge, i) => (
          <Message
            content={mesasge.content}
            isUserMessage={mesasge.role === "user"}
            key={i}
          />
        ))
      ) : (
        <div className="flex-1 flex bg-slate-700 rounded-md  flex-col items-center justify-center gap-2">
          <MessageSquare className="size-8 text-blue-500 lg:size-12" />
          <h3 className="font-semibold text-xl lg:text-3xl">
            You&apos;re all set{" "}
          </h3>
          <p className="text-zinc-500 text-sm lg:text-lg">
            Ask your first question
          </p>
        </div>
      )}
    </div>
  );
}
