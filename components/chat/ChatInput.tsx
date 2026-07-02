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
    const text = input.trim();
  
    if (loading) return;
  
    if (!text && !image) return;
  
    // Tidak boleh kosong
if (!image && text.length === 0) {
  return;
}

// Minimal 5 karakter
if (!image && text.length < 5) {
  toast.error("Mohon jelaskan gejala Anda dengan lebih lengkap.");
  return;
}

// Hanya simbol
if (!image && /^[^a-zA-ZÀ-ÿ0-9\s]+$/.test(text)) {
  toast.error("Masukkan gejala yang valid.");
  return;
}

// Sapaan umum
const greetings = [
  "halo",
  "hai",
  "hi",
  "test",
  "tes",
  "woi",
  "p",
  "ping",
];

if (
  !image &&
  greetings.includes(text.toLowerCase())
) {
  toast.error(
    "Silakan jelaskan gejala yang Anda alami agar KompasSehat AI dapat membantu."
  );
  return;
}
  
    if (listening) {
      SpeechRecognition.stopListening();
    }
  
    const userMessage: Message = {
      role: "user",
      content: text || "📷 Mengirim gambar...",
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
          message: text,
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
  
      toast.error(
        "Maaf, KompasSehat AI sedang mengalami gangguan."
      );
  
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
  "Maaf, terjadi kendala saat memproses permintaan Anda. Silakan coba kembali beberapa saat lagi.",
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
    <div className="border-t border-slate-200 bg-white p-3 sm:p-5">
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
<div className="mx-auto flex max-w-4xl flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:flex-row sm:items-center">
      
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Ceritakan gejala yang Anda alami..."
          className="min-h-[44px] flex-1 bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
        />

        <button
          onClick={toggleListening}
          className={`flex h-12 w-full items-center justify-center rounded-xl transition sm:h-11 sm:w-11 ${
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
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 font-semibold text-white transition hover:scale-105 disabled:opacity-50 sm:w-auto"
        >
          <Send size={18} />
          {loading ? "Mengirim..." : "Kirim"}
        </button>
      </div>
    </div>
  );
}