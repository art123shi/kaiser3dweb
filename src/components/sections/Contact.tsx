import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

// Closing call to action. The form itself lives on /contact.
export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-[2rem] accent-bg px-6 py-16 md:px-16 text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Tell us about your business
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
            A few lines is enough. We will reply with what we would post for you and a fixed monthly price.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors"
            >
              Get started <ArrowRight size={18} />
            </Link>
            <a
              href={SITE.phoneHref}
              className="px-8 py-4 rounded-full border border-white/40 text-white font-medium hover:bg-white/10 transition-colors"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
