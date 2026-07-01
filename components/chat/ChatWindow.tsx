"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import jsPDF from "jspdf";
import { TypeAnimation } from "react-type-animation";

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
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

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
                <p>{message.content}</p>

                <p className="mt-2 text-right text-xs opacity-70">
                  {message.time}
                </p>
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
                <AICard
                  data={message.content}
                  time={message.time}
                />
              </motion.div>
            )}
          </div>
        ))}

        {loading && <LoadingCard />}

        <div ref={bottomRef} />
      </div>
    </section>
  );
}

function LoadingCard() {
  const [step, setStep] = useState(0);

  const steps = [
    "🔍 Menganalisis gejala...",
    "🧠 Menghubungkan riwayat percakapan...",
    "📋 Mengevaluasi tingkat urgensi...",
    "🏥 Menentukan rekomendasi layanan...",
    "✅ Menyusun hasil analisis...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) =>
        prev < steps.length - 1 ? prev + 1 : prev
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-7 shadow-lg"
    >
      <div className="flex items-center gap-3">
        <LoaderCircle
          size={24}
          className="animate-spin text-blue-600"
        />

        <h2 className="text-lg font-bold">
          HealthRoute AI sedang berpikir...
        </h2>
      </div>

      <div className="mt-6 rounded-2xl bg-slate-100 p-4">
        <motion.p
          key={step}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-medium text-slate-700"
        >
          {steps[step]}
        </motion.p>
      </div>

      <div className="mt-6 space-y-4">
        <div className="h-4 w-40 animate-pulse rounded bg-slate-200" />
        <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-slate-200" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-slate-200" />
      </div>
    </motion.div>
  );
}

function AICard({
  data,
  time,
}: {
  data: AIResponse;
  time: string;
}) {
  

  const urgencyColor =
    data.urgency === "High"
      ? "text-red-600 bg-red-50"
      : data.urgency === "Medium"
      ? "text-amber-600 bg-amber-50"
      : "text-emerald-600 bg-emerald-50";

  const riskValue =
    data.urgency === "High"
      ? 100
      : data.urgency === "Medium"
      ? 65
      : 30;

  const [showEmergency, setShowEmergency] =
    useState(false);

  function speakResult() {
    if (!("speechSynthesis" in window))
      return;

    window.speechSynthesis.cancel();

    const utterance =
      new SpeechSynthesisUtterance(`
Hasil analisis HealthRoute AI.
Tingkat urgensi ${data.urgency}.
Kemungkinan kondisi ${data.possibleCondition}.
Rekomendasi layanan ${data.recommendedService}.
Saran ${data.advice}.
`);

    utterance.lang = "id-ID";

    window.speechSynthesis.speak(
      utterance
    );
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

    if (data.emergency) {
      setShowEmergency(true);
    }

    return () =>
      window.speechSynthesis.cancel();
  }, []);

  function closeEmergency() {
    setShowEmergency(false);
  }

  return (
    <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-7 shadow-lg">
    <h2 className="text-xl font-bold">
      🤖 Analisis Kesehatan AI
    </h2>

    <p className="mt-2 text-right text-xs text-slate-400">
      {time}
    </p>

    <div className="mt-7 space-y-6">

      <div>
        <div className="mb-2 flex justify-between text-sm">
          <span>Risk Score</span>
          <span>{riskValue}%</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-200">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${riskValue}%` }}
            transition={{ duration: 1 }}
            className={`h-full rounded-full ${
              data.urgency === "High"
                ? "bg-red-500"
                : data.urgency === "Medium"
                ? "bg-yellow-500"
                : "bg-green-500"
            }`}
          />
        </div>
      </div>

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

          <TypeAnimation
            sequence={[data.possibleCondition]}
            speed={70}
            cursor={false}
            repeat={0}
          />
        </div>
      </div>

      <div className="flex gap-3">
        <ShieldAlert className="text-green-600" />

        <div>
          <p className="text-xs uppercase text-slate-400">
            Saran
          </p>

          <TypeAnimation
            sequence={[data.advice]}
            speed={70}
            cursor={false}
            repeat={0}
          />
        </div>
      </div>

      {data.emergency && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="rounded-2xl border border-red-300 bg-gradient-to-r from-red-500 to-red-600 p-5 text-white shadow-lg"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle size={28} />

            <div>
              <h3 className="text-lg font-bold">
                Keadaan Darurat
              </h3>

              <p className="mt-2 text-sm leading-6">
                Berdasarkan analisis AI,
                kondisi ini memerlukan
                penanganan medis segera.
                Segera menuju IGD atau
                hubungi layanan darurat
                terdekat.
              </p>
            </div>
          </div>
        </motion.div>
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
        onClick={() => {
          if (!navigator.geolocation) {
            alert("Browser tidak mendukung GPS.");
            return;
          }

          navigator.geolocation.getCurrentPosition(
            (position) => {
              const lat = position.coords.latitude;
              const lng = position.coords.longitude;

              window.open(
                `https://www.google.com/maps/search/${encodeURIComponent(
                  data.hospitalKeyword
                )}/@${lat},${lng},15z`,
                "_blank"
              );
            },
            () => {
              window.open(
                `https://www.google.com/maps/search/${encodeURIComponent(
                  data.hospitalKeyword
                )}`,
                "_blank"
              );
            }
          );
        }}
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
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle
              size={20}
              className="mt-1 text-amber-600"
            />

            <div>
              <h3 className="font-semibold text-amber-800">
                Disclaimer Medis
              </h3>

              <p className="mt-1 text-sm leading-6 text-amber-700">
                Hasil analisis ini dibuat oleh AI
                dan bukan merupakan diagnosis
                medis. Gunakan sebagai informasi
                awal saja. Jika gejala memburuk
                atau terjadi keadaan darurat,
                segera kunjungi dokter atau
                rumah sakit terdekat.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}