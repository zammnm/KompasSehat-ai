import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
});

export async function POST(req: NextRequest) {
  try {
    const {
      message,
      image,
      history = [],
    } = await req.json();

    console.log("HISTORY =", history.length);

    const conversation = history
      .map((msg: any) => {
        if (typeof msg.content === "string") {
          return `${
            msg.role === "user"
              ? "Pengguna"
              : "KompasSehat AI"
          }: ${msg.content}`;
        }

        return `
KompasSehat AI:
Urgensi: ${msg.content.urgency}
Layanan: ${msg.content.recommendedService}
Kemungkinan Kondisi: ${msg.content.possibleCondition}
Saran: ${msg.content.advice}
`;
      })
      .join("\n");

    const prompt = `
Kamu adalah KompasSehat AI, asisten kesehatan berbasis kecerdasan buatan.

Tugasmu:

- Selalu gunakan Bahasa Indonesia yang baik dan mudah dipahami.
- Ingat seluruh riwayat percakapan sebelumnya.
- Gabungkan gejala lama dan gejala terbaru sebelum memberikan analisis.
- Analisis gambar apabila pengguna mengirimkan gambar.
- Jangan pernah memberikan diagnosis medis yang pasti.
- Berikan kemungkinan kondisi berdasarkan gejala yang tersedia.
- Tentukan tingkat urgensi secara objektif.
- Berikan rekomendasi layanan kesehatan yang paling sesuai.
- Apabila kondisi berpotensi darurat, aktifkan emergency = true.
- Apabila kondisi tidak darurat, emergency = false.
- Balas HANYA dalam format JSON.
- Jangan menambahkan markdown, penjelasan, ataupun kalimat lain di luar JSON.

Format JSON yang WAJIB digunakan:

{
  "urgency": "Rendah | Sedang | Tinggi",
  "recommendedService": "",
  "possibleCondition": "",
  "advice": "",
  "hospitalKeyword": "",
  "emergency": false
}

Riwayat Percakapan:

${conversation}

Pesan Terbaru:

${message || "Tidak ada pesan."}
`;

    let response;

    if (image) {
      response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
          {
            role: "user",
            parts: [
              {
                text: prompt,
              },
              {
                inlineData: {
                  mimeType: "image/jpeg",
                  data: image.split(",")[1],
                },
              },
            ],
          },
        ],
      });
    } else {
      response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
    }

    console.log("========== RAW RESPONSE ==========");
    console.log(response.text);
    console.log("==================================");

    const text = response.text ?? "";

    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    console.log("========== CLEANED ==========");
    console.log(cleaned);
    console.log("=============================");

    const json = JSON.parse(cleaned);

    return NextResponse.json({
      success: true,
      reply: json,
    });

  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      {
        success: false,
        reply: {
          urgency: "Rendah",
          recommendedService: "-",
          possibleCondition: "-",
          advice:
            "Terjadi kesalahan saat memproses permintaan. Silakan coba beberapa saat lagi.",
          hospitalKeyword: "Rumah Sakit",
          emergency: false,
        },
      },
      {
        status: 500,
      }
    );
  }
}