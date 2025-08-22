"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-[75vh] flex items-center">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <motion.p
          className="text-xs uppercase tracking-[0.2em] text-black/60 dark:text-white/60"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome
        </motion.p>
        <motion.h1
          className="mt-2 text-4xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Building modern web experiences with
          <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Next.js, React & TypeScript
          </span>
        </motion.h1>
        <motion.p
          className="mt-5 text-base md:text-lg text-black/70 dark:text-white/70 max-w-2xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          I craft performant, accessible interfaces with a focus on delightful motion
          and thoughtful details.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a href="#projects" className="px-4 py-2 rounded bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity">
            View Projects
          </a>
          <a href="#contact" className="px-4 py-2 rounded border text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}