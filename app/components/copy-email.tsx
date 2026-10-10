"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmail() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (resetTimer.current) clearTimeout(resetTimer.current); }, []);

  async function copyEmail() {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    try {
      await navigator.clipboard.writeText("contact@gasycoder.com");
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    resetTimer.current = setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <div className="copy-email">
      <button type="button" className="copy-button" onClick={copyEmail}>
        {status === "copied" ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        {status === "copied" ? "Copied" : "Copy email address"}
      </button>
      <span className={status === "error" ? "copy-status" : "sr-only"} role="status">
        {status === "copied" ? "Email address copied to clipboard." : status === "error" ? "Could not copy. Use the email link above." : ""}
      </span>
    </div>
  );
}
