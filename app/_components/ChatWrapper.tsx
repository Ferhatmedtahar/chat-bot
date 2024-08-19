"use client";

import { useChat } from "ai/react";
import { Send } from "lucide-react";
import Messages from "./Messages";

export default function ChatWrapper({ sessionId }: { sessionId: string }) {
  const { messages, handleInputChange, input, handleSubmit } = useChat({
    api: "/api/chat-stream",
    body: { sessionId },
  });
  return (
    <div className="relative min-h-full flex flex-col gap-8 divide-stone-700">
      <div className=" max-h-[80vh]  flex-1 text-black bg-slate-600 justify-between flex flex-col">
        <Messages messages={messages} />
      </div>
      <form
        onSubmit={handleSubmit}
        className=" px-6 2xl:max-w-[1440px] md:min-w-[600px] lg:min-w-[1000px] min-w-[400px] flex items-center justify-center gap-4 mt-5"
      >
        <input
          type="text"
          onChange={handleInputChange}
          value={input}
          placeholder={"Enter you question..."}
          className=" flex-1 px-6 py-3 focus:outline-none hover:border-2 duration-300 transition-all hover:border-blue-300 focus:ring focus:ring-slate-500 rounded-sm"
        />
        <button
          type="submit"
          className="shadow-xl bg-slate-400 text-slate-900 font-semibold p-4  rounded-lg hover:bg-slate-500 hover:-translate-y-1 transition-all duration-100"
        >
          <Send className="size-4 text-white" />
        </button>
      </form>
    </div>
  );
}
