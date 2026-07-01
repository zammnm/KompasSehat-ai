"use client";

import { Dispatch, SetStateAction } from "react";
import { Message } from "@/app/chat/page";
import {
  MessageSquare,
  Plus,
  Trash2,
} from "lucide-react";

interface Props {
  messages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
}

export default function ChatSidebar({
  messages,
  setMessages,
}: Props) {
  const history = messages.filter(
    (m) => m.role === "user"
  );

  function newChat() {
    localStorage.removeItem("healthroute-chat");
    setMessages([]);
  }

  return (
    <aside className="flex w-72 flex-col border-r border-slate-200 bg-white p-5">

      <button
        onClick={newChat}
        className="mb-6 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 py-3 font-semibold text-white"
      >
        <Plus size={18} />
        New Chat
      </button>

      <div className="flex-1 overflow-y-auto">

        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
          History
        </p>

        {history.length === 0 ? (
          <p className="text-sm text-slate-400">
            Belum ada percakapan
          </p>
        ) : (
          history.map((msg, index) => (
            <div
              key={index}
              className="mb-2 rounded-xl border border-slate-200 p-3"
            >
              <div className="flex items-start gap-2">

                <MessageSquare
                  size={18}
                  className="mt-0.5 text-blue-600"
                />

                <p className="line-clamp-2 text-sm">
                  {typeof msg.content === "string"
                    ? msg.content
                    : ""}
                </p>

              </div>
            </div>
          ))
        )}

      </div>

      <button
        onClick={newChat}
        className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-red-300 py-3 text-red-600"
      >
        <Trash2 size={18} />
        Hapus Riwayat
      </button>

    </aside>
  );
}