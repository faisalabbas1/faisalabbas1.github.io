"use client";

import { useMemo, useState } from "react";
import Section from "@/components/Section";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const canSend = useMemo(() => name && email && message, [name, email, message]);

  return (
    <Section id="contact" title="Contact" subtitle="Have a question or opportunity? Let&apos;s talk.">
      <form
        className="mt-2 grid grid-cols-1 gap-4 max-w-xl"
        onSubmit={(e) => {
          e.preventDefault();
          if (!canSend) return;
          setSent(true);
          setTimeout(() => setSent(false), 2500);
        }}
      >
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Jane Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="jane@example.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea
            className="w-full border rounded px-3 py-2 min-h-32"
            placeholder="Tell me a bit about your project..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={!canSend}
            className="px-4 py-2 rounded bg-foreground text-background text-sm font-medium disabled:opacity-50"
          >
            {sent ? "Sent!" : "Send"}
          </button>
          {sent ? (
            <span className="text-sm text-black/70 dark:text-white/70">Thanks — I&apos;ll get back to you soon.</span>
          ) : null}
        </div>
      </form>
    </Section>
  );
}