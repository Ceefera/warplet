import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Handbook from "./pages/Handbook";
import News from "./pages/News";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

// Components
import Navbar from "@/components/Navbar";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Navbar stays on top for all pages */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/handbook" element={<Handbook />} />
          <Route path="/news" element={<News />} />
          <Route path="/faq" element={<FAQ />} />
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
