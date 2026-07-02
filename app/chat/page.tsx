"use client";

import { useEffect, useState } from "react";

import ChatHeader from "@/components/chat/ChatHeader";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatWindow from "@/components/chat/ChatWindow";
import ChatInput from "@/components/chat/ChatInput";

export interface AIResponse {
  urgency: "Rendah" | "Sedang" | "Tinggi";
  recommendedService: string;
  possibleCondition: string;
  advice: string;
  hospitalKeyword: string;
  emergency: boolean;
}

export interface Message {
  role: "user" | "assistant";
  content: string | AIResponse;
  time: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("kompassehat-chat");

    if (saved) {
      setMessages(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "kompassehat-chat",
      JSON.stringify(messages)
    );
  }, [messages]);

  return (
    <main className="flex h-screen flex-col overflow-hidden bg-slate-50">

      <ChatHeader />

      <div className="flex min-h-0 flex-1 overflow-hidden">

        <ChatSidebar
          messages={messages}
          setMessages={setMessages}
        />

        <div className="flex min-h-0 min-w-0 flex-1 flex-col">

          <ChatWindow
            messages={messages}
            loading={loading}
          />

          <ChatInput
            messages={messages}
            setMessages={setMessages}
            loading={loading}
            setLoading={setLoading}
          />

        </div>

      </div>

    </main>
  );
}