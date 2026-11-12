"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowDown, Film, Mic, CheckCircle2, Clock } from "lucide-react";

const uploads = [
  { icon: Film, name: "IMG_4821.MOV", meta: "0:47" },
  { icon: Mic, name: "Voice memo 12.m4a", meta: "1:05" },
  { icon: Film, name: "IMG_4830.MOV", meta: "2:13" },
];

const posts = [
  { day: "Mon", time: "11:53 AM", kind: "Reel", text: "How we fit a bed in under a day", ok: true },
  { day: "Wed", time: "6:08 PM", kind: "Short", text: "Three things customers ask first", ok: true },
  { day: "Fri", time: "12:11 PM", kind: "Post", text: "This week's finished job", ok: false },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-start/20 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-start/30 bg-accent-start/5 text-accent-start text-xs font-bold tracking-wide uppercase mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-start opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-start"></span>
            </span>
            For small businesses
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-6 text-primary"
          >
            Send us your clips. <br />
            <span className="text-gradient">We run your social media.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted mb-8 leading-relaxed max-w-lg"
          >
            Film on your phone, drop the files in a shared album and get back to work.
            We edit, caption, schedule and post. You approve each post with one tap, or let it run.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/contact" className="group relative px-8 py-4 rounded-full font-semibold overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent-start to-accent-end opacity-100 group-hover:opacity-90 transition-opacity" />
              <span className="relative text-white flex items-center gap-2">
                Get started <ArrowRight size={18} />
              </span>
            </Link>

            <Link href="/process" className="px-8 py-4 rounded-full border border-border hover:bg-secondary transition-colors font-medium text-primary">
              See how it works
            </Link>
          </motion.div>
        </div>

        {/* Illustration: what you send in, what goes out */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full"
          aria-hidden="true"
        >
          <div className="relative bg-gradient-to-tr from-accent-start/10 to-transparent rounded-[2rem] border border-border p-5 sm:p-8 shadow-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-muted mb-3">You send</p>
            <div className="space-y-2">
              {uploads.map(({ icon: Icon, name, meta }) => (
                <div key={name} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border">
                  <Icon size={18} className="text-accent-start shrink-0" />
                  <span className="text-sm font-medium text-primary truncate">{name}</span>
                  <span className="ml-auto text-xs text-muted">{meta}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center my-4">
              <div className="w-10 h-10 rounded-full accent-bg flex items-center justify-center shadow-lg">
                <ArrowDown size={18} />
              </div>
            </div>

            <p className="text-xs font-bold uppercase tracking-widest text-muted mb-3">We post</p>
            <div className="space-y-2">
              {posts.map((p) => (
                <div key={p.day} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border">
                  <div className="w-12 shrink-0 text-center">
                    <div className="text-sm font-bold text-primary">{p.day}</div>
                    <div className="text-[10px] text-muted whitespace-nowrap">{p.time}</div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-wide text-accent-start">{p.kind}</div>
                    <div className="text-sm font-medium text-primary truncate">{p.text}</div>
                  </div>
                  <span
                    className={`ml-auto shrink-0 inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-full ${
                      p.ok ? "bg-green-500/10 text-green-600" : "bg-amber-500/10 text-amber-600"
                    }`}
                  >
                    {p.ok ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                    {p.ok ? "Approved" : "Your OK"}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-muted mt-4 text-center">Example of a week</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
