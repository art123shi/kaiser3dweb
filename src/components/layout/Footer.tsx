import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    // FORCED DARK THEME: bg-slate-950 ensures it stays dark even in Light Mode
    <footer className="bg-slate-950 text-slate-300 border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/assets/logo.png" alt="Kaiser3DWeb" className="h-10 w-10" />
              <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
              Kaiser<span className="text-accent-start">3DWeb</span>
              </Link>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Done-for-you social media, on-site automation and 3D configurators for small businesses.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-bold text-white mb-6">Explore</h4>
            <ul className="space-y-4">
              {/* Added '/' to hrefs to ensure absolute paths (fixes navigation bugs) */}
              <li><Link href="/services" className="hover:text-accent-start transition">Services</Link></li>
              <li><Link href="/work" className="hover:text-accent-start transition">Work</Link></li>
              <li><Link href="/process" className="hover:text-accent-start transition">How it works</Link></li>
              <li><Link href="/#faq" className="hover:text-accent-start transition">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-white mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-slate-400">
              <li>{SITE.location}</li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-accent-start transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.phoneHref} className="hover:text-accent-start transition-colors">
                  {SITE.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Kaiser3DWeb. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}