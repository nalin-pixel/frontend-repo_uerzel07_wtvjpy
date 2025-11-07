import { motion } from 'framer-motion';
import { Send, Twitter, Instagram, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight"
        >
          Start a Project
        </motion.h2>
        <p className="mt-3 text-zinc-300 max-w-2xl">Cinematic and minimal — reach out with your vision. I’ll respond with next steps.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <form className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="grid gap-4">
              <input className="w-full rounded-lg bg-black/40 px-4 py-3 text-sm ring-1 ring-white/10 placeholder:text-zinc-500 focus:outline-none focus:ring-amber-400/40" placeholder="Name" />
              <input className="w-full rounded-lg bg-black/40 px-4 py-3 text-sm ring-1 ring-white/10 placeholder:text-zinc-500 focus:outline-none focus:ring-amber-400/40" placeholder="Email" />
              <textarea rows={5} className="w-full rounded-lg bg-black/40 px-4 py-3 text-sm ring-1 ring-white/10 placeholder:text-zinc-500 focus:outline-none focus:ring-amber-400/40" placeholder="Tell me about your project" />
            </div>
            <button type="button" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:ring-2 hover:ring-amber-400/50 hover:shadow-[0_0_26px_rgba(251,191,36,0.45)]">
              <Send size={16} /> Send
            </button>
          </form>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-zinc-300">Connect</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm ring-1 ring-white/20 transition hover:bg-white/15 hover:-translate-y-0.5 hover:ring-2 hover:ring-amber-400/40 hover:shadow-[0_0_22px_rgba(251,191,36,0.35)]"><Twitter size={16} /> X</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm ring-1 ring-white/20 transition hover:bg-white/15 hover:-translate-y-0.5 hover:ring-2 hover:ring-amber-400/40 hover:shadow-[0_0_22px_rgba(251,191,36,0.35)]"><Instagram size={16} /> IG</a>
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm ring-1 ring-white/20 transition hover:bg-white/15 hover:-translate-y-0.5 hover:ring-2 hover:ring-amber-400/40 hover:shadow-[0_0_22px_rgba(251,191,36,0.35)]"><Mail size={16} /> Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
