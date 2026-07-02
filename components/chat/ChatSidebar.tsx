"use client";

import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

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
    localStorage.removeItem("kompassehat-chat");
    setMessages([]);
  }

  return (
    <aside className="hidden w-72 flex-col border-r border-slate-200 bg-white p-5 lg:flex">

      <button
        onClick={newChat}
        className="mb-6 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 py-3 font-semibold text-white transition hover:scale-105"
      >
        <Plus size={18} />
        Chat Baru
      </button>

      <div className="mb-5 rounded-2xl bg-slate-100 p-4">

        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">
          Total Percakapan
          </span>

          <span className="font-bold text-slate-800">
            {history.length}
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-slate-500">
          Respons AI
          </span>

          <span className="font-bold text-slate-800">
            {
              messages.filter(
                (m) => m.role === "assistant"
              ).length
            }
          </span>
        </div>

      </div>

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
            <motion.div
              key={index}
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="mb-3 cursor-pointer rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >
              <div className="flex items-start gap-2">

                <MessageSquare
                  size={18}
                  className="mt-0.5 text-blue-600"
                />

                <div className="flex-1">

                  <p className="line-clamp-2 text-sm font-medium text-slate-700">
                    {typeof msg.content === "string"
                      ? msg.content
                      : ""}
                  </p>

                  <p className="mt-2 text-xs text-slate-400">
                    Chat #{index + 1}
                  </p>

                </div>

              </div>
            </motion.div>
          ))
        )}

      </div>

      <button
        onClick={newChat}
        className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-red-300 py-3 font-semibold text-red-600 transition hover:bg-red-50"
      >
        <Trash2 size={18} />
        Hapus Riwayat
      </button>

    </aside>
  );
}