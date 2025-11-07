import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECTS = [
  { id: 1, title: 'Neon Brand Pulse', tag: 'Graphics Design', tools: 'After Effects, Photoshop', color: 'from-amber-500 to-pink-500' },
  { id: 2, title: 'AI Motion Frames', tag: 'AI Visuals', tools: 'Runway, Photoshop', color: 'from-cyan-400 to-violet-500' },
  { id: 3, title: 'On-Chain Story Drop', tag: 'Web3 Projects', tools: 'ETH + IPFS + Blender', color: 'from-emerald-400 to-teal-600' },
  { id: 4, title: 'Kinetic Logo Pack', tag: 'Graphics Design', tools: 'Illustrator, After Effects', color: 'from-indigo-400 to-sky-500' },
  { id: 5, title: 'Generative Stills', tag: 'AI Visuals', tools: 'Midjourney, Lightroom', color: 'from-rose-400 to-orange-500' },
];

const TABS = ['All', 'Graphics Design', 'AI Visuals', 'Web3 Projects'];

export default function Work() {
  const [tab, setTab] = useState('All');
  const filtered = useMemo(
    () => (tab === 'All' ? PROJECTS : PROJECTS.filter(p => p.tag === tab)),
    [tab]
  );

  return (
    <section id="work" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-8 flex items-center justify-between gap-6 flex-wrap">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selected Work</h2>
          <div className="flex flex-wrap gap-2">
            {TABS.map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-full px-4 py-2 text-sm transition ring-1 ring-white/15 ${tab === t ? 'bg-white text-black' : 'bg-white/5 text-white hover:bg-white/10 hover:-translate-y-0.5 hover:ring-2 hover:ring-amber-400/40 hover:shadow-[0_0_22px_rgba(251,191,36,0.35)]'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map(p => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div className={`h-40 bg-gradient-to-br ${p.color}`} />
                <div className="p-5">
                  <div className="text-sm text-amber-300">{p.tag}</div>
                  <h3 className="mt-1 text-lg font-medium">{p.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400">Tools: {p.tools}</p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/60 flex items-center justify-center">
                  <button className="rounded-full bg-white text-black px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:ring-2 hover:ring-amber-400/50 hover:shadow-[0_0_24px_rgba(251,191,36,0.45)]">View Story</button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
