import {
  Package,
  Shirt,
  CupSoda,
  Leaf,
  UtensilsCrossed,
  Clapperboard,
  Music,
  Gamepad2,
  ToyBrick,
  Network,
  Users,
  MoreHorizontal,
  Handshake,
} from "lucide-react";
import AnimatedGrid from "@/components/AnimatedGrid";

const categories = [
  { icon: Handshake, label: "Ape Services" },
  { icon: Shirt, label: "Apparel" },
  { icon: Package, label: "Packaged Goods or Food" },
  { icon: CupSoda, label: "Beverage" },
  { icon: Leaf, label: "Cannabis" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Clapperboard, label: "Entertainment" },
  { icon: Music, label: "Music" },
  { icon: Gamepad2, label: "Gaming" },
  { icon: ToyBrick, label: "Toys" },
  { icon: Network, label: "Web3" },
  { icon: Users, label: "Association" },
  { icon: MoreHorizontal, label: "Other" },
];

const Handbook = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* 🌌 same background animation as Index */}
      <AnimatedGrid />

      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
        {/* 🧭 Left-aligned text section */}
        <div className="text-left mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            PUT YOUR WARPLETS <span className="text-primary">TO WORK</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Warplet Legos empowers holder-creators by verifying, supporting, and amplifying their projects that use Warplet, Baby Warplette, and other subsidiary Warplet Products.

            The Warplets CCO license allows a licensee/holder to leverage the Warplet brand and sub-brands for their own commercial products and services.
          </p>
        </div>
        <div className="text-left mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            WHAT'S <span className="text-primary">WARPLET LEGOS?</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Warplet Legos was created by Sayangel on Farcaster to support and amplify holder-made brands, products, and services that feature Warplet CCO and associated IP.

            This program allows holders to use the Warplet IP with their projects, showcase their initiatives in the Warplet Legos directory, and take advantage of opportunities available only to Warplets' holders.
          </p>
        </div>

        {/* 🌟 Centered category grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center text-center
                         hover:bg-primary/10 transition-all shadow-sm hover:shadow-lg hover:scale-[1.03] w-36 sm:w-40 md:w-44"
            >
              <item.icon className="w-10 h-10 text-primary mb-4" />
              <p className="font-semibold text-foreground text-sm md:text-base uppercase tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Handbook;
