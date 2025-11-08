import { useState } from 'react';
import { Menu, X, Rocket, MapPin, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/60 dark:bg-neutral-900/60 border-b border-white/20 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-500 grid place-items-center shadow-md">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="font-bold tracking-tight">TSL Solutions</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 -mt-0.5 flex items-center gap-1">
              <MapPin className="h-3 w-3" /> Noida, India
            </p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-2 text-sm font-semibold shadow hover:shadow-lg transition-shadow">
            <Phone className="h-4 w-4" /> Book a Call
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/20 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 backdrop-blur">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-neutral-800 dark:text-neutral-100 font-medium">
                {item.label}
              </a>
            ))}
            <a href="mailto:hello@tslsolutions.in" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-2 text-sm font-semibold w-max">
              <Mail className="h-4 w-4" /> hello@tslsolutions.in
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
