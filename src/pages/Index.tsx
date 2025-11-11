import { useState } from "react";
import { Plus } from "lucide-react";
import StorageCard from "@/components/StorageCard";
import BuilderNode from "@/components/BuilderNode";
import SubmitIdeaModal from "@/components/SubmitIdeaModal";
import AnimatedGrid from "@/components/AnimatedGrid";

// 🖼️ Import images from assets folder
import WarpletOg from "@/assets/warpletog.png";
import WarpletScenes from "@/assets/warpletscenes.png";
import WarpletSmash from "@/assets/warpletsmash.png";
import WarpletGame from "@/assets/warpletgame.png";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 🌟 Featured Products
  const featuredProducts = [
    {
      title: "Warplet OG",
      description:
        "Secure multi-sig treasury management with automated yield optimization",
      developer: "sayangel",
      image: WarpletOg,
      imageUrl: "https://farcaster.xyz/warpletsai/0xfa3c1f94",
    },
    {
      title: "Warplet Scenes",
      description:
        "Secure multi-sig treasury management with automated yield optimization",
      developer: "Zahrash",
      image: WarpletScenes,
      imageUrl: "https://example.com/defi-vault",
    },
    {
      title: "Warplet Smash or Dash",
      description:
        "Secure multi-sig treasury management with automated yield optimization",
      developer: "mfbevan",
      image: WarpletSmash,
      imageUrl: "https://example.com/defi-vault",
    },
    {
      title: "Warplet (Un)official Game",
      description:
        "Secure multi-sig treasury management with automated yield optimization",
      developer: "mfbevan.eth",
      image: WarpletGame,
      imageUrl: "https://example.com/defi-vault",
    },
  ];

  // 💡 Original Concepts
  const originalConcepts = [
    {
      title: "Cross-chain Bridge V2",
      description:
        "Lightning-fast asset transfers with zero-knowledge proofs",
      developer: "bridgemaster",
      image: WarpletOg,
      imageUrl: "https://example.com/cross-chain",
    },

  ];

  // 🔁 Derivatives
  const derivatives = [
    {
      title: "DeFi Vault Dashboard",
      description:
        "Analytics interface for Vault Protocol with real-time APY tracking",
      developer: "datavis",
      image: WarpletOg,
      imageUrl: "https://example.com/vault-dashboard",
    },

  ];

  // 👷 Builders
  const builders = [
    { name: "Angel", handle: "sayangel", contributions: 12 },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <AnimatedGrid />

      {/* 🏠 Hero Section */}
      <section className="relative px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <div
              className="w-2 h-2 bg-accent rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="w-2 h-2 bg-secondary rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tight leading-tight">
            WARPLET <span className="text-primary">UNIVERSE</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
            A secure vault for builders storing the future of Web3
          </p>
        </div>
      </section>

      {/* 🌟 Featured Products */}
      <section className="relative px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent" />
            <h2 className="text-3xl font-bold text-foreground tracking-wide">
              FEATURED PRODUCTS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <StorageCard key={index} {...product} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* 💡 Original Concepts */}
      <section className="relative px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-accent to-transparent" />
            <h2 className="text-3xl font-bold text-foreground tracking-wide">
              ORIGINAL CONCEPTS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {originalConcepts.map((concept, index) => (
              <StorageCard key={index} {...concept} variant="concept" />
            ))}
          </div>
        </div>
      </section>

      {/* 🔁 Derivatives */}
      <section className="relative px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-secondary to-transparent" />
            <h2 className="text-3xl font-bold text-foreground tracking-wide">
              DERIVATIVES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {derivatives.map((derivative, index) => (
              <div key={index} className="relative">
                {/* Connection line to parent */}
                {index > 0 && (
                  <div className="absolute -left-3 top-1/2 w-6 h-px bg-gradient-to-r from-secondary/50 to-transparent" />
                )}
                <StorageCard {...derivative} variant="derivative" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 👷 Builders */}
      <section className="relative px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-primary via-accent to-secondary" />
            <h2 className="text-3xl font-bold text-foreground tracking-wide">
              BUILDERS ON WARPLET UNIVERSE
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {builders.map((builder, index) => (
              <BuilderNode key={index} {...builder} />
            ))}
          </div>
        </div>
      </section>

      {/* ➕ Floating Action Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-primary rounded-full shadow-[0_0_30px_rgba(0,191,255,0.6)] hover:shadow-[0_0_50px_rgba(0,191,255,0.8)] hover:scale-110 transition-all duration-300 flex items-center justify-center group z-40"
      >
        <Plus className="w-8 h-8 text-primary-foreground group-hover:rotate-90 transition-transform duration-300" />
      </button>

      {/* 💭 Submit Modal */}
      <SubmitIdeaModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Index;
