"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import clsx from "clsx";

const faqs = [
  {
    question: "What do I actually have to do?",
    answer: "Film short clips on your phone while you work and add them to the shared album we set up. If you want to approve posts, that is one tap per post. Everything else is on us.",
  },
  {
    question: "What can I send you?",
    answer: "Phone videos, photos, voice memos and screen recordings. Rough is fine. A shaky 40 second clip of a real job usually does better than a polished advert.",
  },
  {
    question: "Which platforms do you post to?",
    answer: "Instagram, Facebook, YouTube Shorts and TikTok. We start with the ones where your customers already are and add others later.",
  },
  {
    question: "Will you post without asking me?",
    answer: "That is your choice. You can approve every post before it goes out, or let the calendar run and only step in when you want to.",
  },
  {
    question: "Do I have to hand over my passwords?",
    answer: "Where a platform offers partner or manager access, we use that. You stay the owner of your accounts and can remove us whenever you like.",
  },
  {
    question: "Who owns the content?",
    answer: "You do. The footage is yours and so are the finished videos, captions and posts.",
  },
  {
    question: "What does it cost?",
    answer: "It depends on how many accounts you have and how often you want to post. Tell us about your business and we will send you a fixed monthly price.",
  },
  {
    question: "What is the Business Box?",
    answer: "A small computer we install at your premises and manage remotely. It can record your cameras, hold your files and training material, and run the tools your business needs. It is in early access, so ask us if you want to be one of the first.",
  },
  {
    question: "Do you still build 3D configurators?",
    answer: "Yes. That is where we started, and you can try the one we built for Big Bear Vans. If your product is something customers want to customise before they buy, ask us about it.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      
      {/* Background Decor: Subtle Gradient Glow behind the list */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-start/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="accent-text">Questions</span>
          </h2>
          <p className="text-muted text-lg">
            The things owners ask us before they start.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={index} 
                onClick={() => setActiveIndex(isOpen ? null : index)}
                className={clsx(
                  "group cursor-pointer rounded-2xl border transition-all duration-500 overflow-hidden relative",
                  // Glassmorphism & Active State Logic
                  isOpen 
                    ? "bg-card border-accent-start shadow-[0_0_40px_-10px_rgba(var(--accent-start-rgb),0.3)]" 
                    : "bg-card/40 hover:bg-card border-border hover:border-accent-start/30 backdrop-blur-sm"
                )}
              >
                {/* Active Indicator Bar on Left */}
                <div className={clsx(
                    "absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-start to-accent-end transition-opacity duration-300",
                    isOpen ? "opacity-100" : "opacity-0"
                )} />

                {/* Header */}
                <div className="p-6 md:p-8 flex items-center gap-6">
                  {/* Index Number (Editorial Look) */}
                  <span className={clsx(
                    "text-xl font-mono font-bold transition-colors duration-300 hidden md:block",
                    isOpen ? "text-accent-start" : "text-muted/30"
                  )}>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="flex-grow flex items-center justify-between">
                    <h3 className={clsx(
                      "font-bold text-lg md:text-xl transition-colors duration-300", 
                      isOpen ? "text-primary" : "text-muted group-hover:text-primary"
                    )}>
                      {faq.question}
                    </h3>
                    
                    {/* Animated Icon */}
                    <div className={clsx(
                      "w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300",
                      isOpen 
                        ? "bg-accent-start border-accent-start text-white rotate-180" 
                        : "bg-transparent border-border text-muted group-hover:border-accent-start group-hover:text-accent-start"
                    )}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </div>
                </div>

                {/* Body (Animated Height) */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 pl-6 md:pl-20">
                        <p className="text-muted text-lg leading-relaxed border-l-2 border-border pl-6">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}