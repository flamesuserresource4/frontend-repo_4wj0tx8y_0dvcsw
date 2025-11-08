import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Discover & Plan',
    points: [
      'Audit your current presence and goals',
      'Define KPIs, timelines, and scope',
      'Craft a roadmap that aligns to growth',
    ],
  },
  {
    title: 'Design & Build',
    points: [
      'UX-first design with rapid iterations',
      'Build modern, scalable architecture',
      'Integrate analytics and automation',
    ],
  },
  {
    title: 'Launch & Scale',
    points: [
      'Deploy with CI/CD and QA checks',
      'Run acquisition and retention playbooks',
      'Optimize continuously for ROI',
    ],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Process</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">A clear, iterative approach that keeps you involved at every step.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-neutral-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <ul className="mt-4 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-violet-600" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
