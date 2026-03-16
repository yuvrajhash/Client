'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

interface StatProps {
    end: number;
    suffix?: string;
    label: string;
    delay?: number;
}

function AnimatedStat({
    end,
    suffix = '',
    label,
    delay = 0,
}: StatProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: '-50px',
    });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const timer = setTimeout(() => {
            const duration = 2000;
            const start = performance.now();
            const animate = (now: number) => {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                // Cubic ease-out
                const eased = 1 - Math.pow(1 - progress, 3);
                setCount(Math.round(eased * end));
                if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
        }, delay);
        return () => clearTimeout(timer);
    }, [isInView, end, delay]);

    return (
        <div ref={ref} className="text-center px-4">
            <div className="font-serif text-4xl md:text-5xl text-mineralia-cream">
                {count}
                {suffix}
            </div>
            <div className="text-xs text-mineralia-muted mt-1.5 uppercase tracking-[0.05em] font-medium">
                {label}
            </div>
        </div>
    );
}

export default function StatsCounter() {
    return (
        <section className="bg-gradient-to-b from-mineralia-navy to-mineralia-dark border-t border-mineralia-teal/10 py-12 md:py-16">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                <AnimatedStat end={16} suffix="+" label="Mineral products" />
                <AnimatedStat
                    end={40}
                    suffix="+"
                    label="Countries served"
                    delay={200}
                />
                <AnimatedStat end={9001} label="ISO certified" delay={400} />
                <AnimatedStat
                    end={25}
                    suffix="+"
                    label="Years heritage"
                    delay={600}
                />
            </div>
        </section>
    );
}
