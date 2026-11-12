import Link from "next/link";
import { Clapperboard, Server, Box, Check, ArrowRight } from "lucide-react";

export const services = [
  {
    id: "social",
    icon: Clapperboard,
    title: "Social media on autopilot",
    tag: "",
    desc: "You send raw footage. We turn it into a steady stream of posts on the accounts you choose.",
    points: [
      "Short videos cut from your clips for Reels, Shorts and TikTok",
      "Captions, titles and descriptions written for you",
      "A posting calendar, scheduled and published",
      "Replies to comments in your voice",
    ],
  },
  {
    id: "box",
    icon: Server,
    title: "The Business Box",
    tag: "Early access",
    desc: "A small computer we install at your shop and look after remotely, so the tools you need on site get set up and kept running without an IT person.",
    points: [
      "Camera recording you can check from your phone",
      "One shared place for files, manuals and training videos",
      "Screens that show today's jobs or numbers",
      "Customer follow-up set up around how you already work",
    ],
  },
  {
    id: "3d",
    icon: Box,
    title: "3D configurators and websites",
    tag: "",
    desc: "Where we started. Let customers build and price your product in the browser before they call you.",
    points: [
      "Interactive 3D product configurators",
      "Works on phones without an app",
      "Connects to Shopify and custom stores",
      "Fast websites built around your product",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What we <span className="text-gradient">do</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Start with social media. Add the rest when you need it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map(({ id, icon: Icon, title, tag, desc, points }) => (
            <div key={id} className="glass-card rounded-3xl p-8 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl accent-bg flex items-center justify-center shadow-lg">
                  <Icon size={22} />
                </div>
                {tag && (
                  <span className="text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full border border-accent-start/30 bg-accent-start/5 text-accent-start">
                    {tag}
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">{title}</h3>
              <p className="text-muted leading-relaxed mb-6">{desc}</p>
              <ul className="space-y-3 mb-8">
                {points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-primary">
                    <Check size={18} className="text-accent-start shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/services#${id}`}
                className="mt-auto inline-flex items-center gap-2 font-semibold text-accent-start hover:gap-3 transition-all"
              >
                More detail <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
