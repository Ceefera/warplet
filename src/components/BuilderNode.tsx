interface BuilderNodeProps {
  name: string;
  handle: string;
  contributions: number;
}

const BuilderNode = ({ name, handle, contributions }: BuilderNodeProps) => {
  return (
    <div className="group relative glass-panel rounded-lg p-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,191,255,0.3)] hover:scale-105">
      {/* Avatar */}
      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-background/80" />
        <span className="relative text-xl font-bold text-primary">
          {name.charAt(0)}
        </span>
      </div>

      {/* Info */}
      <div className="text-center">
        <h4 className="text-sm font-semibold text-foreground mb-1">
          {name}
        </h4>
        <p className="text-xs text-primary/80 mb-2">
          @{handle}
        </p>
        
        {/* Contributions badge */}
        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 border border-primary/30">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs text-muted-foreground">
            {contributions} stored
          </span>
        </div>
      </div>

      {/* Hover effect lines */}
      <div className="absolute inset-0 rounded-lg border border-primary/0 group-hover:border-primary/50 transition-all duration-300" />
    </div>
  );
};

export default BuilderNode;
