"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
        <form className="mt-6 grid grid-cols-1 gap-4 max-w-xl">
          <input
            className="border rounded px-3 py-2"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border rounded px-3 py-2"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="border rounded px-3 py-2 min-h-32"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="button" className="px-4 py-2 rounded bg-foreground text-background text-sm font-medium">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}