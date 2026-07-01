"use client";

import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { Message } from "@/app/chat/page";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import {
  ImagePlus,
  Mic,
  Send,
} from "lucide-react";

import { toast } from "sonner";

import ImageUpload from "./ImageUpload";

interface Props {
  messages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export default function ChatInput({
  messages,
  setMessages,
  loading,
  setLoading,
}: Props) {
  const [input, setInput] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setInput(transcript);
    }
  }, [transcript]);

  function toggleListening() {
    if (!browserSupportsSpeechRecognition) {
      toast.error(
        "Browser tidak mendukung Voice Recognition"
      );
      return;
    }

    if (listening) {
      SpeechRecognition.stopListening();
      toast.info("🎤 Voice dimatikan");
    } else {
      resetTranscript();

      SpeechRecognition.startListening({
        language: "id-ID",
        continuous: true,
      });

      toast.info("🎤 Voice aktif");
    }
  }

  async function sendMessage() {
    if ((!input.trim() && !image) || loading) return;

    if (listening) {
      SpeechRecognition.stopListening();
    }

    const userMessage: Message = {
      role: "user",
      content: input || "📷 Mengirim gambar...",
      time: new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      let imageBase64 = "";

      if (image) {
        imageBase64 = await new Promise<string>((resolve) => {
          const reader = new FileReader();

          reader.onload = () => {
            resolve(reader.result?.toString() || "");
          };

          reader.readAsDataURL(image);
        });
      }

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
          image: imageBase64,
          mimeType: image?.type,
          history: messages,
        }),
      });

      const data = await res.json();

console.log("========== FRONTEND ==========");
console.log(data);
console.log("==============================");

setMessages((prev) => [
  ...prev,
  {
    role: "assistant",
    content: data.reply,
    time: new Date().toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
]);

      toast.success("🤖 Analisis selesai");

      setInput("");
      setImage(null);
      resetTranscript();
    } catch (error) {
      console.error(error);

      toast.error("Terjadi kesalahan");

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Terjadi kesalahan.",
          time: new Date().toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="border-t border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-950">
      <ImageUpload
        onSelect={(file) => {
          setImage(file);
          toast.success("🖼️ Gambar dipilih");
        }}
      />

      {image && (
        <div className="mb-4 flex items-center gap-2 rounded-xl bg-blue-50 p-3 text-blue-700 dark:bg-slate-900 dark:text-blue-300">
          <ImagePlus size={18} />
          <span className="text-sm font-medium">
            {image.name}
          </span>
        </div>
      )}

      <div className="mx-auto flex max-w-4xl items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Ceritakan gejala yang Anda alami..."
          className="flex-1 bg-transparent text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
        />

        <button
          onClick={toggleListening}
          className={`flex h-11 w-11 items-center justify-center rounded-xl transition ${
            listening
              ? "animate-pulse bg-red-500 text-white"
              : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
          }`}
        >
          <Mic size={20} />
        </button>

        <button
          onClick={sendMessage}
          disabled={loading}
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 font-semibold text-white transition hover:scale-105 disabled:opacity-50"
        >
          <Send size={18} />
          {loading ? "Mengirim..." : "Kirim"}
        </button>
      </div>
    </div>
  );
}