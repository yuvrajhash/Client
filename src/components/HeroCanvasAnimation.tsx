'use client';

import { useRef, useEffect, useState } from 'react';
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useVelocity,
} from 'framer-motion';

const TOTAL_FRAMES = 121; // frame_000 to frame_120
const FRAME_PATH = '/Frames';

/** Generate the actual frame filename with zero-padded index */
function getFrameFilename(index: number): string {
    const padded = String(index).padStart(3, '0');
    return `${FRAME_PATH}/frame_${padded}_delay-0.041s.webp`;
}

export default function HeroCanvasAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);

    // ── Scroll progress tracking ──
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    // ── Smooth spring for buttery scroll ──
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // ── Anti-gravity effect from scroll velocity ──
    const scrollVelocity = useVelocity(scrollYProgress);
    const yOffset = useTransform(
        scrollVelocity,
        [-1, 0, 1],
        [15, 0, -15] // Floats up when scrolling down
    );

    // ── Map scroll → frame index (bi-directional) ──
    const frameIndex = useTransform(
        smoothProgress,
        [0, 1],
        [0, TOTAL_FRAMES - 1]
    );

    // ── Preload all frames ──
    useEffect(() => {
        let loadedCount = 0;
        const loadImages = async () => {
            const imagePromises = Array.from(
                { length: TOTAL_FRAMES },
                (_, i) =>
                    new Promise<HTMLImageElement>((resolve, reject) => {
                        const img = new Image();
                        img.src = getFrameFilename(i);
                        img.onload = () => {
                            loadedCount++;
                            setLoadProgress((loadedCount / TOTAL_FRAMES) * 100);
                            resolve(img);
                        };
                        img.onerror = reject;
                    })
            );
            const loadedImages = await Promise.all(imagePromises);
            setImages(loadedImages);
            setImagesLoaded(true);
        };
        loadImages();
    }, []);

    // ── Canvas rendering ──
    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const renderFrame = () => {
            const currentFrame = Math.round(frameIndex.get());
            const img =
                images[Math.max(0, Math.min(currentFrame, TOTAL_FRAMES - 1))];
            if (img) {
                // Responsive canvas sizing
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                // Calculate cover-fit scaling (Math.max instead of Math.min)
                // On mobile, we want to ensure the image covers the height but might crop width
                // to maintain aspect ratio without letterboxing
                const scale = Math.max(
                    canvas.width / img.width,
                    canvas.height / img.height
                );
                
                const x = (canvas.width - img.width * scale) / 2;
                const y = (canvas.height - img.height * scale) / 2;

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(
                    img,
                    x,
                    y,
                    img.width * scale,
                    img.height * scale
                );
            }
        };

        const unsubscribe = frameIndex.on('change', renderFrame);
        renderFrame(); // Initial render

        const handleResize = () => renderFrame();
        window.addEventListener('resize', handleResize);

        return () => {
            unsubscribe();
            window.removeEventListener('resize', handleResize);
        };
    }, [imagesLoaded, images, frameIndex]);

    // ── Text overlay opacity transforms ──
    const t1 = useTransform(
        smoothProgress,
        [0, 0.18, 0.22],
        [1, 1, 0]
    );
    const t2 = useTransform(
        smoothProgress,
        [0.28, 0.33, 0.48, 0.52],
        [0, 1, 1, 0]
    );
    const t3 = useTransform(
        smoothProgress,
        [0.56, 0.61, 0.76, 0.8],
        [0, 1, 1, 0]
    );
    const t4 = useTransform(
        smoothProgress,
        [0.84, 0.89, 0.98, 1],
        [0, 1, 1, 0]
    );
    const scrollIndicatorOp = useTransform(
        smoothProgress,
        [0, 0.08],
        [1, 0]
    );

    // ━━━━ MAIN RETURN ━━━━
    return (
        <>
            {/* ── LOADING STATE ── */}
            {!imagesLoaded && (
                <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
                    <div className="w-72 h-1 bg-mineralia-teal/10 rounded-full overflow-hidden mb-4">
                        <motion.div
                            className="h-full bg-gradient-to-r from-mineralia-teal to-mineralia-emerald"
                            initial={{ width: '0%' }}
                            animate={{ width: `${loadProgress}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                    <p className="text-gray-500 text-sm tracking-widest uppercase">
                        Loading experience… {Math.round(loadProgress)}%
                    </p>
                </div>
            )}

            <div ref={containerRef} className="relative h-[500vh]">
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    {/* Canvas with anti-gravity offset */}
                    <motion.div style={{ y: yOffset }} className="w-full h-full">
                        <canvas ref={canvasRef} className="w-full h-full object-cover" />
                    </motion.div>

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 pointer-events-none z-10" />

                    {/* ── Text Overlays ── */}
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20">
                        {/* OVERLAY 1 — Main headline (center) */}
                        <motion.div
                            style={{ opacity: t1 }}
                            className="text-center px-4 max-w-4xl w-full"
                        >
                            <p className="text-[10px] md:text-sm uppercase tracking-[0.2em] text-mineralia-teal font-semibold mb-2 md:mb-4">
                                Global critical mineral supply leader
                            </p>
                            <h1 className="font-serif text-4xl sm:text-5xl md:text-8xl lg:text-9xl tracking-tight text-mineralia-cream mb-4 md:mb-5 leading-[1.1] md:leading-[0.95]">
                                Discover Critical Minerals
                            </h1>
                            <p className="text-base md:text-xl text-mineralia-cream/70 max-w-xl mx-auto mb-6 md:mb-8">
                                Precision-grade industrial minerals sourced from 40+ countries,
                                backed by 25+ years of supply chain excellence.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pointer-events-auto items-center">
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-3.5 bg-mineralia-teal text-white rounded-full text-sm md:text-base font-semibold hover:bg-mineralia-teal-hover transition-colors cursor-pointer"
                                >
                                    Explore minerals
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-3.5 border border-mineralia-cream/20 text-mineralia-cream rounded-full text-sm md:text-base font-medium hover:border-mineralia-teal/50 transition-colors cursor-pointer"
                                >
                                    Request supply
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* OVERLAY 2 — Sourcing (left) */}
                        <motion.div
                            style={{ opacity: t2 }}
                            className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-16 text-center md:text-left"
                        >
                            <div className="max-w-xl bg-black/40 backdrop-blur-md md:bg-transparent md:backdrop-blur-none p-8 md:p-0 rounded-3xl md:rounded-none border border-white/10 md:border-none mx-4 md:mx-0">
                                <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-mineralia-teal font-semibold mb-2 md:mb-3">
                                    Ethical extraction
                                </p>
                                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-mineralia-cream mb-3 md:mb-4 leading-[1.1] md:leading-[1.05]">
                                    Sourced from
                                    <br />
                                    40+ countries
                                </h2>
                                <p className="text-base md:text-lg text-mineralia-cream/60">
                                    From premium deposits across six continents, delivering the
                                    chemistry that drives global manufacturing.
                                </p>
                            </div>
                        </motion.div>

                        {/* OVERLAY 3 — Quality (right) */}
                        <motion.div
                            style={{ opacity: t3 }}
                            className="absolute inset-0 flex items-center justify-center md:justify-end px-6 md:px-16 text-center md:text-right"
                        >
                            <div className="max-w-xl bg-black/40 backdrop-blur-md md:bg-transparent md:backdrop-blur-none p-8 md:p-0 rounded-3xl md:rounded-none border border-white/10 md:border-none mx-4 md:mx-0">
                                <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-mineralia-amber font-semibold mb-2 md:mb-3">
                                    ISO 9001 certified
                                </p>
                                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-mineralia-cream mb-3 md:mb-4 leading-[1.1] md:leading-[1.05]">
                                    Precision
                                    <br />
                                    processed
                                </h2>
                                <p className="text-base md:text-lg text-mineralia-cream/60">
                                    Rigorous lot-by-lot testing ensures exact physical and chemical
                                    specifications every time.
                                </p>
                            </div>
                        </motion.div>

                        {/* OVERLAY 4 — Final CTA (center) */}
                        <motion.div
                            style={{ opacity: t4 }}
                            className="text-center px-4 md:px-6 w-full"
                        >
                            <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-mineralia-cream mb-6 md:mb-8 leading-[1.1] md:leading-[1.0] drop-shadow-2xl">
                                16 premium minerals.
                                <br />
                                One trusted partner.
                            </h2>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-10 md:px-14 py-3 md:py-4 bg-gradient-to-r from-mineralia-teal to-mineralia-emerald text-white rounded-full text-base md:text-lg font-bold shadow-[0_0_30px_rgba(16,185,129,0.5)] border-2 border-white/20 hover:border-white transition-all pointer-events-auto cursor-pointer"
                            >
                                Get a quote
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* ── Scroll Indicator ── */}
                    <motion.div
                        style={{ opacity: scrollIndicatorOp }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    >
                        <p className="text-mineralia-cream/30 text-[11px] tracking-[0.2em] uppercase">
                            Scroll
                        </p>
                        <div className="w-6 h-10 border border-mineralia-cream/20 rounded-full flex items-start justify-center pt-1.5">
                            <div className="w-0.5 h-2.5 bg-mineralia-cream/40 rounded-full animate-scroll-dot" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
