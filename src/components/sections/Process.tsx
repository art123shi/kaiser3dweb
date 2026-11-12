import { Smartphone, FolderUp, Scissors, Send } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "You film",
    desc: "A job in progress, a finished product, a question you answer ten times a week. Phone video or a voice memo is enough. No script and no editing.",
  },
  {
    icon: FolderUp,
    title: "You drop it in",
    desc: "Add the files to a shared album we set up for you. That is the whole job on your side.",
  },
  {
    icon: Scissors,
    title: "We make the posts",
    desc: "We pick the best moments, cut them to the right shape for each platform, add captions and titles in your style, and write the text.",
  },
  {
    icon: Send,
    title: "You approve, we post",
    desc: "You get a preview. Approve it, ask for a change, or turn approvals off and let the calendar run. We publish it and tell you what worked.",
  },
];

// `as` lets the standalone page use this heading as its h1.
export default function Process({ as: Heading = "h2" }: { as?: "h1" | "h2" }) {
  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Heading className="text-4xl md:text-5xl font-bold mb-6">
            How it <span className="text-gradient">works</span>
          </Heading>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Most owners stop posting because editing eats the evening. We take that part away.
          </p>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <li key={title} className="glass-card rounded-3xl p-8 relative overflow-hidden">
              <span className="absolute -top-4 -right-2 text-8xl font-bold text-accent-start/10 select-none">
                {i + 1}
              </span>
              <div className="w-12 h-12 rounded-2xl accent-bg flex items-center justify-center mb-6 shadow-lg">
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
              <p className="text-muted leading-relaxed">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
