"use client";

import {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
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

  const fileInputRef =
    useRef<HTMLInputElement>(null);

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

    if (!image && text.length === 0) {
      return;
    }

    if (!image && text.length < 5) {
      toast.error(
        "Mohon jelaskan gejala Anda dengan lebih lengkap."
      );
      return;
    }

    if (
      !image &&
      /^[^a-zA-ZÀ-ÿ0-9\s]+$/.test(text)
    ) {
      toast.error(
        "Masukkan gejala yang valid."
      );
      return;
    }

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
      content:
        text || "📷 Mengirim gambar...",
      time: new Date().toLocaleTimeString(
        "id-ID",
        {
          hour: "2-digit",
          minute: "2-digit",
        }
      ),
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

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
          time: new Date().toLocaleTimeString(
            "id-ID",
            {
              hour: "2-digit",
              minute: "2-digit",
            }
          ),
        },
      ]);

      toast.success("🤖 Analisis selesai");

      setInput("");
      setImage(null);
      resetTranscript();

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

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
          time: new Date().toLocaleTimeString(
            "id-ID",
            {
              hour: "2-digit",
              minute: "2-digit",
            }
          ),
        },
      ]);

    } finally {

      setLoading(false);

    }
  }

  return (
    <div className="sticky bottom-0 border-t border-slate-200 bg-white px-3 py-3 sm:px-5">

    <div className="mx-auto max-w-4xl">

      {/* Input file (hidden) */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => {
          const file = e.target.files?.[0];

          if (!file) return;

          setImage(file);

          toast.success("🖼️ Gambar dipilih");
        }}
      />

      {/* Preview file */}
      {image && (
        <div className="mb-3 flex items-center justify-between rounded-xl border border-blue-200 bg-blue-50 px-4 py-2">

          <div className="flex items-center gap-2">

            <ImagePlus
              size={18}
              className="text-blue-600"
            />

            <span className="max-w-[220px] truncate text-sm font-medium text-blue-700 sm:max-w-sm">
              {image.name}
            </span>

          </div>

          <button
            onClick={() => {
              setImage(null);

              if (fileInputRef.current) {
                fileInputRef.current.value = "";
              }
            }}
            className="text-sm font-medium text-red-500 hover:text-red-600"
          >
            Hapus
          </button>

        </div>
      )}

      {/* Chat Box */}
      <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">

        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Ceritakan gejala yang Anda alami..."
          className="h-11 flex-1 bg-transparent px-3 text-slate-900 outline-none placeholder:text-slate-400"
        />

        {/* Upload */}
        <button
          type="button"
          onClick={() =>
            fileInputRef.current?.click()
          }
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 transition hover:bg-slate-200"
        >
          <ImagePlus size={20} />
        </button>

        {/* Voice */}
        <button
          type="button"
          onClick={toggleListening}
          className={`flex h-11 w-11 items-center justify-center rounded-xl transition ${
            listening
              ? "animate-pulse bg-red-500 text-white"
              : "bg-slate-100 hover:bg-slate-200"
          }`}
        >
          <Mic size={20} />
        </button>

        {/* Send */}
        <button
          type="button"
          onClick={sendMessage}
          disabled={loading}
          className="flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 font-semibold text-white transition hover:scale-[1.02] disabled:opacity-50"
        >
          <Send size={18} />
        </button>

      </div>

    </div>

  </div>

);
}