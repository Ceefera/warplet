import AnimatedGrid from "@/components/AnimatedGrid";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <AnimatedGrid />

      <div className="relative flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-5xl md:text-6xl font-black text-foreground mb-4">
          FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl">
          Answers to common questions will live here soon — we’re crafting a better
          handbook experience.
        </p>

        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-10 py-6 shadow-lg">
          <p className="text-2xl md:text-3xl font-semibold text-primary uppercase tracking-wider">
            Coming Soon 💭
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
