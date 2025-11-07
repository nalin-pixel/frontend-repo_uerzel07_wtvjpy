import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative bg-black text-white">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-semibold tracking-tight"
          >
            About
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-zinc-300 leading-relaxed"
          >
            7 years building visuals that merge design, AI, and Web3. Focused on motion-led
            brand systems and interactive experiences that feel alive.
          </motion.p>

          {/* Timeline card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
          >
            <div className="flex items-center gap-2 text-amber-300">
              <Sparkles size={18} />
              <span className="font-medium">Journey</span>
            </div>
            <div className="mt-4 grid gap-4 text-sm text-zinc-300">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <p><strong className="text-white">2017–2019:</strong> Early design and visual experiments.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <p><strong className="text-white">2020–2022:</strong> Motion graphics + brand identity systems.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <p><strong className="text-white">2023–Now:</strong> AI visuals, Web3 creative strategy, Auto’Lite.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-square w-full overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-cyan-500/20 to-purple-500/20" />
          <div className="absolute inset-0 border border-white/10 rounded-2xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-24 w-24 rounded-full bg-amber-400/20 ring-2 ring-amber-400/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
