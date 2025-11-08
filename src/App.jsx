import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-neutral-600 dark:text-neutral-400">
      <p>© {new Date().getFullYear()} TSL Solutions — All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
