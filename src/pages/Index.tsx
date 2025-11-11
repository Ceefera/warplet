import { useState } from "react";
import { Plus, Search, Filter } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import StorageCard from "@/components/StorageCard";
import BuilderNode from "@/components/BuilderNode";
import SubmitIdeaModal from "@/components/SubmitIdeaModal";
import AnimatedGrid from "@/components/AnimatedGrid";

// 🖼️ Import images
import WarpletOg from "@/assets/warpletog.png";
import WarpletScenes from "@/assets/warpletscenes.png";
import WarpletSmash from "@/assets/warpletsmash.png";
import WarpletGame from "@/assets/warpletgame.png";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("featured");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  const products = {
    featured: [
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
        description: "Onchain cinematic moments for the Warplet Universe",
        developer: "zahrash",
        image: WarpletScenes,
        imageUrl: "https://example.com/scenes",
      },
      {
        title: "Warplet Smash or Dash",
        description: "Battle and dash through the Warplet metaverse",
        developer: "mfbevan",
        image: WarpletSmash,
        imageUrl: "https://example.com/smash",
      },
      {
        title: "Warplet (Un)official Game",
        description: "Community-created game experience for Warplet fans",
        developer: "mfbevan.eth",
        image: WarpletGame,
        imageUrl: "https://example.com/game",
      },
    ],
    concept: [
      {
        title: "Cross-chain Bridge V2",
        description: "Lightning-fast asset transfers with zero-knowledge proofs",
        developer: "bridgemaster",
        image: WarpletOg,
        imageUrl: "https://example.com/cross-chain",
      },
    ],
    derivative: [
      {
        title: "DeFi Vault Dashboard",
        description:
          "Analytics interface for Vault Protocol with real-time APY tracking",
        developer: "datavis",
        image: WarpletScenes,
        imageUrl: "https://example.com/dashboard",
      },
    ],
  };

  const builders = [
    { name: "Angel", handle: "sayangel", contributions: 12 },
    { name: "Zahrash", handle: "zahrash", contributions: 8 },
    { name: "MF Bevan", handle: "mfbevan", contributions: 15 },
    { name: "DataVis", handle: "datavis", contributions: 7 },
  ];

  // 🧠 Filter logic
  const filteredProducts = products[activeCategory].filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <AnimatedGrid />

      {/* 🏠 Hero Section */}
      <section className="relative px-6 py-20 md:py-32 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tight leading-tight">
            WARPLET <span className="text-primary">UNIVERSE</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
            A secure vault for builders storing the future of Web3
          </p>
        </div>
      </section>

      {/* 🌟 Featured Carousel */}
      {activeCategory === "featured" && (
        <section className="relative px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 tracking-wide">
              FEATURED PRODUCTS
            </h2>

            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000 }}
              spaceBetween={30}
              slidesPerView={1.2}
              centeredSlides
              loop
              pagination={{ clickable: false }}
              className="pb-10"
            >
              {products.featured.map((product, index) => (
                <SwiperSlide key={index}>
                  <div className="scale-95 transition-transform duration-300 hover:scale-100">
                    <StorageCard
                      {...product}
                      variant="featured"
                      className="mx-auto max-w-md"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )}

      {/* 🗂️ Category Filters */}
      <section className="relative px-6 py-10">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
          {[
            { key: "featured", label: "Featured" },
            { key: "concept", label: "Original Concepts" },
            { key: "derivative", label: "Derivatives" },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-6 py-3 rounded-xl border text-sm font-medium transition-all ${
                activeCategory === cat.key
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-background border-border text-muted-foreground hover:bg-primary/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 🔍 Search + Sort */}
      <section className="relative px-6 pb-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-2/3">
            <Search className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-lg px-3 py-2 bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
            >
              <option value="latest">Sort by: Latest</option>
              <option value="popular">Most Popular</option>
              <option value="az">A - Z</option>
            </select>
          </div>
        </div>
      </section>

      {/* 🧱 Filtered Product Grid */}
      <section className="relative px-6 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((p, i) => (
            <StorageCard key={i} {...p} variant={activeCategory as any} />
          ))}
        </div>
      </section>

      {/* 👷 Builders Section */}
      <section className="relative px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-primary via-accent to-secondary" />
            <h2 className="text-3xl font-bold text-foreground tracking-wide">
              BUILDERS ON WARPLET UNIVERSE
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {builders.map((builder, index) => (
              <BuilderNode key={index} {...builder} />
            ))}
          </div>
        </div>
      </section>

      {/* ➕ Floating Action Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-primary rounded-full shadow-[0_0_20px_rgba(0,191,255,0.4)] hover:shadow-[0_0_35px_rgba(0,191,255,0.5)] hover:scale-110 transition-all duration-300 flex items-center justify-center group z-40"
      >
        <Plus className="w-8 h-8 text-primary-foreground group-hover:rotate-90 transition-transform duration-300" />
      </button>

      <SubmitIdeaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Index;
