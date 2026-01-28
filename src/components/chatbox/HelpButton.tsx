"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";
import HelpDialog from "./HelpDialog";

export default function HelpButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
        aria-label="Help"
      >
        <MessageCircle />
      </button>

      <HelpDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
