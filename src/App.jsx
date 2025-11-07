import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import AutoLite from './components/AutoLite';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Work />
      <AutoLite />
      <Services />
      <section id="reel" className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Motion Reel</h2>
          <p className="mt-3 text-zinc-300">A short cut from selected motion moments. Replace with your video embed later.</p>
          <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5" />
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
