import { cn } from "@/lib/utils";

interface StorageCardProps {
  title: string;
  description: string;
  developer: string;
  image: string; // imported local image
  imageUrl?: string; // optional external link
  variant?: "featured" | "concept" | "derivative";
  className?: string;
}

const StorageCard = ({
  title,
  description,
  developer,
  image,
  imageUrl,
  variant = "featured",
  className,
}: StorageCardProps) => {
  const glowColor = {
    featured: "rgba(0, 191, 255, 0.4)",
    concept: "rgba(0, 255, 255, 0.3)",
    derivative: "rgba(138, 120, 200, 0.3)",
  }[variant];

  // Wrap the entire card in a link if imageUrl exists
  const CardWrapper = imageUrl ? "a" : "div";
  const wrapperProps = imageUrl
    ? {
        href: imageUrl,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <CardWrapper
      {...wrapperProps}
      className={cn(
        "group relative glass-panel rounded-lg p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer",
        "hover:shadow-[0_0_30px_var(--glow-color)]",
        className
      )}
      style={{ "--glow-color": glowColor } as React.CSSProperties}
    >
      {/* Glow background */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

      {/* Product Image */}
      <div className="w-full aspect-video rounded-md mb-4 overflow-hidden border border-primary/20">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-foreground mb-2 tracking-wide">
        {title}
      </h3>

      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>

      <div className="flex items-center gap-2 text-xs">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent" />
        <span className="text-primary hover:text-accent transition-colors cursor-pointer">
          @{developer}
        </span>
      </div>

      {/* Corner accent */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-primary/50 rounded-full group-hover:animate-glow-pulse" />
    </CardWrapper>
  );
};

export default StorageCard;
