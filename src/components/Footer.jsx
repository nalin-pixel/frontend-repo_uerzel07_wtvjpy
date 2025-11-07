import { ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <footer className="relative bg-black text-white">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-10 flex items-center justify-between gap-6">
        <p className="text-sm text-zinc-400">© 2025 AZITECH KEV | Built by Azitech | Powered by AI</p>
        <button onClick={scrollTop} aria-label="Back to top" className="inline-flex items-center gap-2 rounded-full bg-amber-500 text-black px-3 py-2 text-sm font-medium shadow hover:bg-amber-400">
          <ChevronUp size={16} /> Top
        </button>
      </div>
      {/* looping neon line */}
      <div className="h-0.5 w-full overflow-hidden">
        <div className="h-full w-[200%] bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-[slide_3s_linear_infinite]" />
      </div>
      <style>
        {`@keyframes slide { 0%{transform:translateX(-50%)} 100%{transform:translateX(0)} }`}
      </style>
    </footer>
  );
}
