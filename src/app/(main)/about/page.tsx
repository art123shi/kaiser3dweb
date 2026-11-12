import Link from "next/link";
import { ArrowRight, Wrench, Eye, Handshake } from "lucide-react";
import { BBV, SITE } from "@/lib/site";

export const metadata = {
  title: "About | Kaiser3DWeb",
  description:
    "We started by building 3D configurators and now run social media and automation for small businesses, tested first on our own van shop.",
};

const values = [
  {
    icon: Wrench,
    title: "We use it ourselves",
    desc: "Anything we offer has already been running at Big Bear Vans. If it does not hold up in a real workshop, we do not sell it.",
  },
  {
    icon: Eye,
    title: "You can see everything",
    desc: "Your accounts stay yours. You can look at what is scheduled, change it or stop it at any time.",
  },
  {
    icon: Handshake,
    title: "Plain answers",
    desc: "If we are not the right fit, or something will not work for your kind of business, we will say so before you pay for it.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <section className="container mx-auto px-6 max-w-3xl text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-primary">
          A small team that runs the <span className="text-gradient">busywork</span>
        </h1>
        <p className="text-xl text-muted leading-relaxed">
          Based in {SITE.location}. We started out building 3D product configurators.
          Today we also run social media and on-site automation for small businesses.
        </p>
      </section>

      <section className="section-alt py-20">
        <div className="container mx-auto px-6 max-w-3xl space-y-6 text-lg text-muted leading-relaxed">
          <h2 className="text-3xl font-bold text-primary">How we got here</h2>
          <p>
            Our first big project was a 3D configurator for{" "}
            <a href={BBV.site} target="_blank" rel="noopener noreferrer" className="text-accent-start font-semibold hover:underline">
              Big Bear Vans
            </a>
            , a camper van builder in the mountains of Southern California. Working inside that
            shop, we saw the same thing every week: good work leaving the building that nobody
            outside ever saw, because nobody had an evening free to edit video.
          </p>
          <p>
            So we built a way to turn the clips people were already shooting on their phones into
            finished posts. Then we started doing the same for the other jobs a busy shop never
            gets round to. That is the service we now offer to other small businesses.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">How we work</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass-card rounded-3xl p-8">
              <div className="w-12 h-12 rounded-2xl accent-bg flex items-center justify-center mb-6 shadow-lg">
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
              <p className="text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Want to talk it through?</h2>
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
