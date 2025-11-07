import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Rocket, Briefcase, Film, Radio } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const [entered, setEntered] = useState(false);

  const playEnterChime = () => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(520, ctx.currentTime);
      g.gain.setValueAtTime(0.0001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + 0.06);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
      o.connect(g).connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + 0.55);
    } catch (_) {}
  };

  const handleEnter = () => {
    playEnterChime();
    setEntered(true);
  };

  return (
    <section id="home" className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 flex flex-col items-start">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300 ring-1 ring-emerald-500/30">
            <Radio size={16} className="animate-pulse" /> Active on X
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-amber-300 ring-1 ring-amber-500/30">
            Auto’Lite Updates
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight"
        >
          AZITECH KEV
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-lg text-zinc-300"
        >
          7 years crafting visuals that merge design, AI, and Web3.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-medium transition hover:-translate-y-0.5 hover:ring-2 hover:ring-amber-400/50 hover:shadow-[0_0_28px_rgba(251,191,36,0.45)]">
            <Briefcase size={18} /> View Portfolio
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-amber-500/90 text-black px-5 py-3 font-medium transition hover:-translate-y-0.5 hover:ring-2 hover:ring-amber-300/60 hover:shadow-[0_0_28px_rgba(251,191,36,0.55)]">
            <Rocket size={18} /> Hire Me
          </a>
          <a href="#reel" className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-5 py-3 font-medium ring-1 ring-white/20 transition hover:bg-white/15 hover:-translate-y-0.5 hover:ring-2 hover:ring-amber-400/40 hover:shadow-[0_0_24px_rgba(251,191,36,0.35)]">
            <Film size={18} /> Watch Motion Reel
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {!entered && (
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="mx-auto mb-8 h-24 w-24 rounded-full bg-amber-500/20 ring-2 ring-amber-400/40 flex items-center justify-center">
                <Play className="text-amber-300" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Enter the Studio</h2>
              <p className="mt-2 text-zinc-400">Cinematic intro. Click to begin.</p>
              <button
                onClick={handleEnter}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 font-medium transition hover:-translate-y-0.5 hover:ring-2 hover:ring-amber-400/50 hover:shadow-[0_0_28px_rgba(251,191,36,0.45)]"
              >
                Enter Experience
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
