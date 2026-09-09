"use client";

import { Printer } from "lucide-react";

export function PrintResumeButton() {
  return (
    <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800">
      <Printer size={16} /> Print or save PDF
    </button>
  );
}
