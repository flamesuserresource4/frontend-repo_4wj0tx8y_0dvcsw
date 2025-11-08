import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/80 via-white/30 to-white/90 dark:from-neutral-950/80 dark:via-neutral-950/20 dark:to-neutral-950/95" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-200 shadow-sm">
            Full-stack IT & Growth Partner • Noida
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            TSL Solutions — Build, Automate, and Scale Your Digital Presence
          </h1>
          <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
            We design high-converting websites, engineer robust web apps, and run data-driven marketing that turns clicks into customers. From AI automations to SEO and chatbots, we handle the tech so you can focus on growth.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-3 text-sm font-semibold shadow hover:shadow-lg transition-shadow">
              Get a Free Strategy Call
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-neutral-300/60 dark:border-white/20 bg-white/70 dark:bg-white/5 backdrop-blur px-6 py-3 text-sm font-semibold hover:bg-white transition-colors">
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
