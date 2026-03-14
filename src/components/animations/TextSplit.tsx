"use client";

import { motion } from "framer-motion";

interface TextSplitProps {
  text: string;
  className?: string;
  delay?: number;
  mode?: "word" | "char";
}

export default function TextSplit({
  text,
  className = "",
  delay = 0,
  mode = "word",
}: TextSplitProps) {
  const units = mode === "word" ? text.split(" ") : text.split("");

  return (
    <span className={className} aria-label={text}>
      {units.map((unit, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.08,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            {unit}
            {mode === "word" && i < units.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
