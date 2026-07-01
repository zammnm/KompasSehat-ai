"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import jsPDF from "jspdf";

import { AIResponse, Message } from "@/app/chat/page";

import {
  AlertTriangle,
  HeartPulse,
  LoaderCircle,
  MapPinned,
  ShieldAlert,
  Stethoscope,
  Volume2,
  Download,
} from "lucide-react";

import WelcomeDashboard from "./WelcomeDashboard";

interface Props {
  messages: Message[];
  loading: boolean;
}

export default function ChatWindow({
  messages,
  loading,
}: Props) {
  if (messages.length === 0) {
    return (
      <section className="flex flex-1 bg-slate-50">
        <WelcomeDashboard />
      </section>
    );
  }

  return (
    <section className="flex-1 overflow-y-auto bg-slate-50 p-8">
      <div className="mx-auto max-w-4xl space-y-6">

        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            {typeof message.content === "string" ? (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.35,
                }}
                className={`max-w-[75%] rounded-3xl px-5 py-4 shadow-sm ${
                  message.role === "user"
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
                    : "border border-slate-200 bg-white text-slate-700"
                }`}
              >
                {message.content}
              </motion.div>
            ) : (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.45,
                }}
              >
                <AICard data={message.content} />
              </motion.div>
            )}
          </div>
        ))}

        {loading && <LoadingCard />}

      </div>
    </section>
  );
}

function LoadingCard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-xl animate-pulse rounded-3xl border border-slate-200 bg-white p-7 shadow-lg"
    >
      <div className="flex items-center gap-3">
        <LoaderCircle
          size={24}
          className="animate-spin text-blue-600"
        />

        <h2 className="text-lg font-bold">
          HealthRoute AI sedang menganalisis...
        </h2>
      </div>

      <div className="mt-7 space-y-4">
        <div className="h-4 w-40 rounded bg-slate-200" />
        <div className="h-4 w-full rounded bg-slate-200" />
        <div className="h-4 w-5/6 rounded bg-slate-200" />
        <div className="h-4 w-2/3 rounded bg-slate-200" />
        <div className="h-12 rounded-2xl bg-slate-200" />
      </div>
    </motion.div>
  );
}
function AICard({ data }: { data: AIResponse }) {
  const urgencyColor =
    data.urgency === "High"
      ? "text-red-600 bg-red-50"
      : data.urgency === "Medium"
      ? "text-amber-600 bg-amber-50"
      : "text-emerald-600 bg-emerald-50";

  function speakResult() {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(`
Hasil analisis HealthRoute AI.
Tingkat urgensi ${data.urgency}.
Kemungkinan kondisi ${data.possibleCondition}.
Rekomendasi layanan ${data.recommendedService}.
Saran ${data.advice}.
    `);

    utterance.lang = "id-ID";

    window.speechSynthesis.speak(utterance);
  }

  function downloadPDF() {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("HealthRoute AI", 20, 20);

    doc.setFontSize(15);
    doc.text("Laporan Analisis Kesehatan", 20, 32);

    doc.setFontSize(11);

    doc.text(
      `Tanggal : ${new Date().toLocaleString("id-ID")}`,
      20,
      46
    );

    doc.text(`Urgensi : ${data.urgency}`, 20, 60);

    doc.text(
      `Layanan : ${data.recommendedService}`,
      20,
      74
    );

    doc.text("Kemungkinan Kondisi :", 20, 90);

    const condition = doc.splitTextToSize(
      data.possibleCondition,
      170
    );

    doc.text(condition, 20, 98);

    const adviceY =
      98 + condition.length * 7 + 10;

    doc.text("Saran :", 20, adviceY);

    const advice = doc.splitTextToSize(
      data.advice,
      170
    );

    doc.text(advice, 20, adviceY + 8);

    const emergencyY =
      adviceY + advice.length * 7 + 18;

    doc.text(
      `Darurat : ${
        data.emergency ? "YA" : "TIDAK"
      }`,
      20,
      emergencyY
    );

    doc.save("HealthRoute-Report.pdf");
  }

  useEffect(() => {
    speakResult();

    return () =>
      window.speechSynthesis.cancel();
  }, []);

  return (
    <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-7 shadow-lg">

      <h2 className="text-xl font-bold">
        🤖 Analisis Kesehatan AI
      </h2>

      <div className="mt-7 space-y-6">

        <div className="flex items-center gap-3">
          <AlertTriangle
            size={22}
            className="text-amber-500"
          />

          <div>
            <p className="text-xs uppercase text-slate-400">
              Tingkat Urgensi
            </p>

            <span
              className={`mt-1 inline-flex rounded-full px-3 py-1 text-sm font-semibold ${urgencyColor}`}
            >
              {data.urgency}
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <HeartPulse className="text-blue-600" />

          <div>
            <p className="text-xs uppercase text-slate-400">
              Layanan Kesehatan
            </p>

            <p className="font-semibold">
              {data.recommendedService}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Stethoscope className="text-violet-600" />

          <div>
            <p className="text-xs uppercase text-slate-400">
              Kemungkinan Kondisi
            </p>

            <p>{data.possibleCondition}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <ShieldAlert className="text-green-600" />

          <div>
            <p className="text-xs uppercase text-slate-400">
              Saran
            </p>

            <p>{data.advice}</p>
          </div>
        </div>

        {data.emergency && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
            <p className="font-semibold text-red-700">
              🚨 Kondisi ini memerlukan penanganan segera.
              Segera menuju IGD atau hubungi layanan darurat.
            </p>
          </div>
        )}

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={speakResult}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-100 py-3 font-semibold"
        >
          <Volume2 size={20} />
          Dengarkan Hasil
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() =>
            window.open(
              `https://www.google.com/maps/search/${encodeURIComponent(
                data.recommendedService
              )}`,
              "_blank"
            )
          }
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 py-3 font-semibold text-white"
        >
          <MapPinned size={20} />
          Cari Fasilitas Kesehatan
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={downloadPDF}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-blue-600 py-3 font-semibold text-blue-600 hover:bg-blue-50"
        >
          <Download size={20} />
          Download Laporan PDF
        </motion.button>

      </div>
    </div>
  );
}