import { Code, Sparkles, Search, Bot, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Code,
    title: 'Web & App Development',
    desc: 'Modern, fast, and scalable products using proven stacks. From MVPs to enterprise-grade apps.',
  },
  {
    icon: Sparkles,
    title: 'Digital Marketing',
    desc: 'Performance-focused campaigns across social, search, and display to acquire and retain customers.',
  },
  {
    icon: Search,
    title: 'SEO & Content',
    desc: 'Technical SEO, content strategy, and on-page optimization to grow qualified organic traffic.',
  },
  {
    icon: Bot,
    title: 'AI Automation & Chatbots',
    desc: 'Automate workflows and support with custom AI agents and integrated chat experiences.',
  },
  {
    icon: LineChart,
    title: 'Analytics & CRO',
    desc: 'Track, analyze, and optimize user journeys to increase conversion rates and ROI.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What We Do</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            Full-service execution across technology and growth. Select what you need, or let us craft an end-to-end plan.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-2xl border border-neutral-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-violet-600 to-fuchsia-600 text-white grid place-items-center shadow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-fuchsia-400/40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
