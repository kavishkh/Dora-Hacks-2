
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WalletProvider } from "@/contexts/WalletContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NFTGallery from "./pages/NFTGallery";
import ChainExplorer from "./pages/ChainExplorer";
import PrivacyPolicy from "./pages/Privacypolicy";
import TermsOfService from "./pages/TermsOfService";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  
  <QueryClientProvider client={queryClient}>
    
    <TooltipProvider>
      <WalletProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/nft-gallery" element={<NFTGallery />} />
            <Route path="/chains" element={<ChainExplorer />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            <Route path ="/privacy" element={<PrivacyPolicy/>} />
            <Route path ="/TermsOfService" element={<TermsOfService/>} />
            <Route path ="/Contact" element={<Contact/>} />
          </Routes>
        </BrowserRouter>
      </WalletProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
