"use client";

import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type SectionProps = PropsWithChildren<{
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
}>;

export default function Section({ id, title, subtitle, className, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={clsx("py-24", className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
          {subtitle ? (
            <p className="mt-2 text-black/60 dark:text-white/60 max-w-2xl">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </motion.section>
  );
}