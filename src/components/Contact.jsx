import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thank you! We will get back to you shortly.');
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let’s talk about growth</h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300">Tell us about your goals and we’ll craft a tailored plan for your brand.</p>

            <div className="mt-6 space-y-3 text-sm">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@tslsolutions.in</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Noida, Uttar Pradesh</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-neutral-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="text-sm font-medium">Name</label>
                <input required type="text" className="mt-1 w-full rounded-lg border border-neutral-300/70 bg-white/80 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500" />
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm font-medium">Email</label>
                <input required type="email" className="mt-1 w-full rounded-lg border border-neutral-300/70 bg-white/80 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Company</label>
                <input type="text" className="mt-1 w-full rounded-lg border border-neutral-300/70 bg-white/80 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">What do you need help with?</label>
                <textarea required rows={4} className="mt-1 w-full rounded-lg border border-neutral-300/70 bg-white/80 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500" />
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-3 text-sm font-semibold shadow hover:shadow-lg transition-shadow">Request Proposal</button>
            {status && <p className="mt-3 text-sm text-green-600">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
