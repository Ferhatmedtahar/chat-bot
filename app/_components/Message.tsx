import { Bot, User } from "lucide-react";
import { cn } from "../_lib/utils";

interface MessageProps {
  content: string;
  isUserMessage: boolean;
}

export default function Message({ content, isUserMessage }: MessageProps) {
  return (
    <div
      className={cn({
        "bg-slate-400": isUserMessage,
        "bg-slate-600": !isUserMessage,
      })}
    >
      <div className=" max-w-3xl mx-auto items-start flex gap-2 p-3">
        <div
          className={cn(
            "size-10 shrink-0 border aspect-square rounded-full border-zinc-700 bg-zinc-900  flex justify-center items-center",
            {
              "bg-blue-950  border-blue-700  text-zinc-300": isUserMessage,
            }
          )}
        >
          {isUserMessage ? (
            <User className="size-5" />
          ) : (
            <Bot className="size-5 text-white" />
          )}
        </div>
        {content}
      </div>
    </div>
  );
}
