"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { ImagePlus } from "lucide-react";

interface Props {
  onSelect: (file: File) => void;
}

export default function ImageUpload({
  onSelect,
}: Props) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onSelect(acceptedFiles[0]);
    }
  }, [onSelect]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className={`mb-4 cursor-pointer rounded-2xl border-2 border-dashed p-6 text-center transition ${
        isDragActive
          ? "border-blue-600 bg-blue-50"
          : "border-slate-300 hover:border-blue-500"
      }`}
    >
      <input {...getInputProps()} />

      <ImagePlus
        className="mx-auto mb-3 text-blue-600"
        size={34}
      />

      <p className="font-semibold">
        Upload Foto Luka / Obat / Hasil Lab
      </p>

      <p className="mt-2 text-sm text-slate-500">
        Drag & Drop atau klik di sini
      </p>
    </div>
  );
}