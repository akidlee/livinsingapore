
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MovingGuide from "./pages/MovingGuide";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/moving-guide" element={<MovingGuide />} />
          {/* Placeholder routes for navigation */}
          <Route path="/neighborhoods" element={<Index />} />
          <Route path="/cost-of-living" element={<Index />} />
          <Route path="/resources" element={<Index />} />
          <Route path="/visa-immigration" element={<Index />} />
          <Route path="/housing" element={<Index />} />
          <Route path="/banking" element={<Index />} />
          <Route path="/healthcare" element={<Index />} />
          <Route path="/transportation" element={<Index />} />
          <Route path="/education" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
