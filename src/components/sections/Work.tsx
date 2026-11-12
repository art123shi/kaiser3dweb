import { Play, ArrowUpRight } from "lucide-react";
import { BBV } from "@/lib/site";

// `as` lets the standalone page use this heading as its h1.
export default function Work({ as: Heading = "h2" }: { as?: "h1" | "h2" }) {
  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Heading className="text-4xl md:text-5xl font-bold mb-6">
            We built it for <span className="text-gradient">our own shop first</span>
          </Heading>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Big Bear Vans builds camper vans in Big Bear, California. It is where we test everything
            before we offer it to anyone else.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Short videos */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold mb-2 text-primary">Short videos from shop footage</h3>
            <p className="text-muted mb-6">
              Cut from phone and camera clips shot around the workshop.
            </p>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {BBV.shorts.map((s) => (
                <a
                  key={s.id}
                  href={`https://www.youtube.com/shorts/${s.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative rounded-2xl overflow-hidden border border-border shadow-lg aspect-[9/16] bg-secondary">
                    <img
                      src={s.img}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="w-12 h-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play size={20} className="ml-0.5" />
                      </span>
                    </div>
                  </div>
                  <span className="block mt-3 text-xs sm:text-sm font-medium text-primary leading-snug group-hover:text-accent-start transition-colors">
                    {s.title}
                  </span>
                </a>
              ))}
            </div>
            <a
              href={BBV.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-6 font-semibold text-accent-start hover:underline"
            >
              See the channel <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Configurator */}
          <div className="lg:col-span-2 glass-card rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-2 text-primary">3D van configurator</h3>
            <p className="text-muted leading-relaxed mb-6">
              Customers pick a van, place the furniture and see the layout in 3D in their browser.
              We designed and built it, and we still run it.
            </p>
            <a
              href={BBV.configurator}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full accent-bg font-semibold shadow-lg"
            >
              Try the configurator <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
