import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Process from "@/components/sections/Process";

export const metadata = {
  title: "How it works | Kaiser3DWeb",
  description:
    "You film on your phone and drop the files in a shared album. We edit, caption, schedule and post.",
};

const dayOne = [
  "A shared album or folder for your clips (we set it up with you)",
  "Which accounts you want us to run",
  "The basics of your business and your logo",
  "Two or three accounts whose style you like",
  "Whether you want to approve each post before it goes out",
];

const rhythm = [
  {
    title: "Every week",
    desc: "You add clips whenever something worth showing happens. If the album goes quiet, we send a short note with ideas for what to film.",
  },
  {
    title: "Before each post",
    desc: "If you chose approvals, you get a preview and can say yes, ask for a change or skip it.",
  },
  {
    title: "Every month",
    desc: "We tell you which posts did well and what we will do more of.",
  },
];

export default function ProcessPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <Process as="h1" />

      <section className="section-alt py-20">
        <div className="container mx-auto px-6 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">What we need on day one</h2>
            <ul className="space-y-4">
              {dayOne.map((item) => (
                <li key={item} className="flex gap-3 text-primary">
                  <Check size={20} className="text-accent-start shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">After that</h2>
            <div className="space-y-6">
              {rhythm.map((r) => (
                <div key={r.title}>
                  <h3 className="font-bold text-primary mb-1">{r.title}</h3>
                  <p className="text-muted leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 mt-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to hand it over?</h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full accent-bg font-semibold shadow-lg"
        >
          Get started <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
