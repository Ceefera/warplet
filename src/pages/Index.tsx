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
import WarpletArb from "@/assets/arblets.png";
import WarpletBaby from "@/assets/babywarplet.png";
import WarplETH from "@/assets/warpleth.png";
import WarpletMfers from "@/assets/warpletmfers.png";
import WarpletNoun from "@/assets/warpletnoun.png";
import WarpletCast from "@/assets/wecast.png";
import WarpletMu from "@/assets/warpletmu.png";
import WarpletFc from "@/assets/warpletfc.png";
import WarpletWafu from "@/assets/warpwafu.png";
import WarpletWord from "@/assets/wordlets.png";
import WarpletBlnd from "@/assets/warpblnd.png";


const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("featured");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  const products = {
    featured: [
      {
        title: "Warplet Scenes",
        description: "Onchain cinematic moments for the Warplet Universe",
        developer: "zahrash",
        image: WarpletScenes,
        imageUrl: "https://farcaster.xyz/zahrash",
      },
      {
        title: "Warplet Smash or Dash",
        description: "Battle and dash through the Warplet metaverse",
        developer: "mfbevan.eth",
        image: WarpletSmash,
        imageUrl: "https://farcaster.xyz/mfbevan.eth/0x2e34d378",
      },
      {
        title: "Warplet (Un)official Game",
        description: "Community-created game experience for Warplet fans",
        developer: "mfbevan.eth",
        image: WarpletGame,
        imageUrl: "https://warplets.farverse.games/warplettes/8932df7a-16bb-42c7-961c-9da85a2e7851",
      },
      {
        title: "Warplet Noun",
        description: "Community-created game experience for Warplet fans",
        developer: "markcarey",
        image: WarpletNoun,
        imageUrl: "https://farcaster.xyz/miniapps/Pvs6xfVCnvqn/warplet-nouns",
      },
      {
        title: "Warplet Mfer",
        description: "Community-created game experience for Warplet fans",
        developer: "markcarey",
        image: WarpletMfers,
        imageUrl: "https://warpletmfers.frm.lol/warpletmfers/",
      },
      {
        title: "Baby Warplette",
        description: "Community-created game experience for Warplet fans",
        developer: "markcarey",
        image: WarpletBaby,
        imageUrl: "https://warplets.farverse.games/warplettes/fc97ee36-1fb9-49c0-bdfd-ba130746a76c",
      },
      {
        title: "Warpl(.)eth ENS",
        description: "Community-created game experience for Warplet fans",
        developer: "mvr",
        image: WarplETH,
        imageUrl: "https://farcaster.xyz/mvr/0xd94059ea",
      },
      {
        title: "WeCast Warplets",
        description: "Community-created game experience for Warplet fans",
        developer: "chriscocreated",
        image: WarpletCast,
        imageUrl: "https://farcaster.xyz/miniapps/DLMNg-iBux-P/wecastwarplets-49k-mint",
      },
      {
        title: "Mutant Warplette",
        description: "Community-created game experience for Warplet fans",
        developer: "mfbevan.eth",
        image: WarpletMu,
        imageUrl: "https://farcaster.xyz/miniapps/DLMNg-iBux-P/wecastwarplets-49k-mint",
      },
      {
        title: "waifulet",
        description: "Community-created game experience for Warplet fans",
        developer: "eggman.eth",
        image: WarpletWafu,
        imageUrl: "https://waifu.imgnai.com/s/waifulet/8",
      },
      {
        title: "wordlets",
        description: "Community-created game experience for Warplet fans",
        developer: "0xspencer",
        image: WarpletWord,
        imageUrl: "https://wordlets-frontend-production.up.railway.app/share/QmUVyXvm1HbPwTzYsutwuWr8f9pM2LwjaPFub4FKTjBuTj",
      },
      {
        title: "Blind Box warplets",
        description: "Community-created game experience for Warplet fans",
        developer: "gmonchain.eth",
        image: WarpletBlnd,
        imageUrl: "https://farcaster.xyz/gmonchain.eth",
      },

    ],
    concept: [
      {
        title: "Warplet OG",
        description:
          "Secure multi-sig treasury management with automated yield optimization",
        developer: "sayangel",
        image: WarpletOg,
        imageUrl: "https://farcaster.xyz/sayangel",
      },
      {
        title: "FCBCC",
        description: "Community-created game experience for Warplet fans",
        developer: "warplette",
        image: WarpletFc,
        imageUrl: "https://farcaster.xyz/miniapps/DLMNg-iBux-P/wecastwarplets-49k-mint",
      },
    ],
    derivative: [
      {
        title: "Arblet",
        description:
          "Analytics interface for Vault Protocol with real-time APY tracking",
        developer: "0xanas.eth",
        image: WarpletArb,
        imageUrl: "https://farcaster.xyz/miniapps/IxzbMlpQLNCZ/the-arblets",
      },
    ],
  };

  const builders = [
  { name: "Angel", handle: "sayangel", contributions: 1, profileUrl: "https://farcaster.xyz/sayangel" },
  { name: "Zahrash", handle: "zahrash", contributions: 1, profileUrl: "https://farcaster.xyz/zahrash" },
  { name: "mfbevan", handle: "mfbevan.eth", contributions: 3, profileUrl: "https://farcaster.xyz/mfbevan.eth" },
  { name: "markcarey", handle: "markcarey", contributions: 3, profileUrl: "https://farcaster.xyz/markcarey" },
  { name: "mvr", handle: "mvr", contributions: 3, profileUrl: "https://farcaster.xyz/mvr" },
  { name: "chriscocreated", handle: "chriscocreated", contributions: 3, profileUrl: "https://farcaster.xyz/chriscocreated" },
  { name: "Eggman.eth", handle: "eggman.eth", contributions: 3, profileUrl: "https://farcaster.xyz/eggman.eth" },
  { name: "0xspencer", handle: "0xspencer", contributions: 3, profileUrl: "https://farcaster.xyz/0xspencer" },
  { name: "warplette", handle: "warplette", contributions: 3, profileUrl: "https://farcaster.xyz/warplette" },
  { name: "Gm Onchain", handle: "gmonchain.eth", contributions: 3, profileUrl: "https://farcaster.xyz/gmonchain.eth" },
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
      WELCOME TO THE <span className="text-primary">WARPLET UNIVERSE</span>
    </h1>
    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light italic mb-8">
      "The only things Warplets need are coffee, internet connection, and a safe space to dream with other Warplets.
      Now ask yourself anon, are you a dreamer? If so, you are a Warplet."
    </p>

    <a
      href="https://www.warplets.ai/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold
                 hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(0,191,255,0.4)] hover:shadow-[0_0_25px_rgba(0,191,255,0.6)]"
    >
      Learn More →
    </a>
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
