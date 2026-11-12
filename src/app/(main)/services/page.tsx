import Link from "next/link";
import { Check, ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/components/sections/Services";
import { BBV } from "@/lib/site";

export const metadata = {
  title: "Services | Kaiser3DWeb",
  description:
    "Done-for-you social media from your raw footage, an on-site Business Box we manage remotely, and 3D product configurators.",
};

const detail: Record<string, { body: string[]; extra?: { label: string; href: string } }> = {
  social: {
    body: [
      "Most small businesses have plenty to show and no time to show it. The filming is easy. The editing, the captions and remembering to post are what stop people.",
      "So you only film. Drop phone clips or voice memos into a shared album, and we turn them into finished posts on a regular schedule. You can approve each one first or let them go out on their own.",
    ],
    extra: { label: "See short videos we made for Big Bear Vans", href: BBV.youtube },
  },
  box: {
    body: [
      "Some things have to live at your premises: cameras, files too big for email, the screen on the workshop wall. Normally that means hiring an IT person or doing without.",
      "The Business Box is a small, quiet computer that sits on a shelf and plugs into your network. We set it up, keep it updated and fix it remotely. You tell us what you want it to do.",
      "This is in early access. We are taking a small number of pilot installs, so get in touch if you want to be one of them.",
    ],
  },
  "3d": {
    body: [
      "If customers want to choose options before they buy, a configurator lets them do it in the browser, on a phone, without an app. They arrive with a clear idea of what they want and what it costs.",
      "We build the 3D models, the configurator and the website around it, and connect it to your store.",
    ],
    extra: { label: "Try the Big Bear Vans configurator", href: BBV.configurator },
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <section className="container mx-auto px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our <span className="accent-text">services</span>
        </h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Three ways we take work off a small business owner's plate.
        </p>
      </section>

      <section className="container mx-auto px-6 max-w-5xl space-y-8">
        {services.map(({ id, icon: Icon, title, tag, desc, points }) => (
          <article key={id} id={id} className="glass-card rounded-3xl p-8 md:p-12 scroll-mt-28">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl accent-bg flex items-center justify-center shadow-lg">
                <Icon size={22} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">{title}</h2>
              {tag && (
                <span className="text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full border border-accent-start/30 bg-accent-start/5 text-accent-start">
                  {tag}
                </span>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-muted leading-relaxed">
                <p className="text-primary font-medium">{desc}</p>
                {detail[id].body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {detail[id].extra && (
                  <a
                    href={detail[id].extra!.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-accent-start hover:underline"
                  >
                    {detail[id].extra!.label} <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
              <div>
                <h3 className="font-bold text-primary mb-4">What you get</h3>
                <ul className="space-y-3">
                  {points.map((p) => (
                    <li key={p} className="flex gap-3 text-primary">
                      <Check size={18} className="text-accent-start shrink-0 mt-1" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="container mx-auto px-6 mt-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Not sure which one you need?</h2>
        <p className="text-muted mb-8 max-w-xl mx-auto">
          Tell us what takes up your time. We will say plainly whether we can help.
        </p>
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
