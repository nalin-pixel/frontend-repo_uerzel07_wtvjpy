import { motion } from 'framer-motion';
import { BadgeDollarSign, Film, Cpu, Rocket } from 'lucide-react';

const SERVICES = [
  {
    icon: Film,
    title: 'Brand Identity & Motion Design',
    desc: 'Build visuals that speak for your brand with cinematic motion and intent.',
  },
  {
    icon: Cpu,
    title: 'AI-Integrated Design Systems',
    desc: 'Combine creativity and automation for speed across campaigns.',
  },
  {
    icon: Rocket,
    title: 'Web3 Creative Strategy',
    desc: 'Visual storytelling and drops designed for on-chain brands.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Social Visual Kits',
    desc: 'Reels, banners, ad-ready visuals for creators and founders.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Services</h2>
        <p className="mt-3 text-zinc-300 max-w-2xl">Focused on conversion and clarity. Select a service and start a project when ready.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-medium">{title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{desc}</p>
              <button className="mt-4 inline-flex rounded-full bg-white text-black px-4 py-2 text-sm font-medium">Get Quote</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
