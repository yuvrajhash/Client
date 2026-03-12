"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StatCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export default function StatCounter({ end, suffix = "", prefix = "", label, duration = 2 }: StatCounterProps) {
  const counterRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;

    const obj = { val: 0 };
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      }
    });

    tl.to(obj, {
      val: end,
      duration: duration,
      ease: "power2.out",
      onUpdate: () => setValue(Math.floor(obj.val)),
    });

    return () => {
      tl.kill();
    };
  }, [end, duration]);

  return (
    <div ref={counterRef} className="flex flex-col items-center justify-center text-center">
      <div className="font-serif text-4xl md:text-5xl font-bold text-accent-terra mb-2">
        {prefix}{value}{suffix}
      </div>
      <div className="font-sans text-sm md:text-base font-medium text-slate-400 uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}
