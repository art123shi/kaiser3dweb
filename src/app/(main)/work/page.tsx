import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Work from "@/components/sections/Work";

export const metadata = {
  title: "Work | Kaiser3DWeb",
  description:
    "Short videos and a 3D van configurator we made for Big Bear Vans, the shop where we test everything first.",
};

export default function WorkPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <Work as="h1" />

      <section className="container mx-auto px-6 max-w-3xl text-center">
        <p className="text-muted text-lg leading-relaxed mb-8">
          We would rather show a small amount of real work than a wall of logos.
          More will be added here as client projects go live.
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
