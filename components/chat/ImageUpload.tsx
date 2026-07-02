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
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onSelect(acceptedFiles[0]);
      }
    },
    [onSelect]
  );

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
      className={`mb-3 cursor-pointer rounded-2xl border-2 border-dashed p-4 sm:p-5 text-center transition ${
        isDragActive
          ? "border-blue-600 bg-blue-50"
          : "border-slate-300 hover:border-blue-500"
      }`}
    >
      <input {...getInputProps()} />

      <ImagePlus
        size={28}
        className="mx-auto mb-2 text-blue-600"
      />

      <p className="text-sm font-semibold sm:text-base">
        Upload Foto Luka / Obat / Hasil Lab
      </p>

      <p className="mt-1 text-xs text-slate-500 sm:text-sm">
        Drag & Drop atau klik di sini
      </p>
    </div>
  );
}