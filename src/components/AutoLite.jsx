import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function AutoLite() {
  return (
    <section id="autolite" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Auto’Lite Universe</h2>
            <p className="mt-3 max-w-2xl text-zinc-300">A sub-brand exploring lifestyle, motion and car visuals. Integrated within this portfolio — one identity, many expressions.</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:ring-2 hover:ring-amber-400/50 hover:shadow-[0_0_22px_rgba(251,191,36,0.45)]">
            View IG/TikTok <ExternalLink size={16} />
          </a>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {/* Cinematic banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 relative h-56 sm:h-72 rounded-2xl overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 via-transparent to-amber-500/10" />
            <img src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1400&auto=format&fit=crop" alt="Cinematic" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute bottom-0 left-0 p-6">
              <div className="inline-flex rounded-full bg-black/60 px-3 py-1 text-xs ring-1 ring-white/10">Cinematic</div>
            </div>
          </motion.div>

          {/* Short video previews (using images as placeholders) */}
          {[1,2,3].map(i => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative h-48 rounded-2xl overflow-hidden border border-white/10"
            >
              <img
                src={`https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop`}
                alt={`Auto’Lite preview ${i}`}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between gap-6 flex-wrap">
          <div>
            <h3 className="text-xl font-medium">Featured Lifestyle Drop</h3>
            <p className="text-zinc-300 mt-1">Teasing future merch and car visuals designed for the motion-first era.</p>
          </div>
          <button className="inline-flex rounded-full bg-white text-black px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:ring-2 hover:ring-amber-400/50 hover:shadow-[0_0_22px_rgba(251,191,36,0.45)]">Notify Me</button>
        </div>
      </div>
    </section>
  );
}
