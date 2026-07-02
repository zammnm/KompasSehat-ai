"use client";

import { Bell, Settings } from "lucide-react";

export default function ChatHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8">

      <div className="flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg">
          ❤️
        </div>

        <div>
          <h1 className="text-lg font-bold">
          KompasSehat AI AI
          </h1>

          <p className="text-xs text-slate-500">
            Smart Healthcare Assistant
          </p>
        </div>

      </div>

      <div className="flex items-center gap-3">

        <button className="rounded-xl border p-2 hover:bg-slate-100">
          <Bell size={18} />
        </button>

        <button className="rounded-xl border p-2 hover:bg-slate-100">
          <Settings size={18} />
        </button>

        <div className="flex items-center gap-3 rounded-xl border px-3 py-2">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 font-bold text-white">
            G
          </div>

          <div>
            <p className="text-sm font-semibold">
              Guest
            </p>

            <p className="text-xs text-slate-500">
              AI Healthcare
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}