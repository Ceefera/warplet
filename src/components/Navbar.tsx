import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "Handbook", to: "/handbook" },
    { label: "News", to: "/news" },
    { label: "FAQ", to: "/faq" },
  ];

  return (
    <nav className="fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center
                      bg-white/20 backdrop-blur-lg shadow-md rounded-b-xl transition-colors">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-black text-primary">
          WARPLET
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="relative text-foreground font-medium hover:text-primary transition-colors"
              activeClassName="text-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-white/10 transition"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-white/20 backdrop-blur-lg px-6 py-4 flex flex-col gap-4 rounded-xl shadow-md">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="text-foreground font-medium py-2 px-4 rounded hover:bg-primary/10 transition"
              activeClassName="bg-primary/20 text-primary"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
