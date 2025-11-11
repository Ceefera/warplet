const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid lines */}

      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-secondary rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
    </div>
  );
};

export default AnimatedGrid;
