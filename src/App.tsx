import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Tagrenovering from "./pages/Tagrenovering";
import TagrenoveringKobenhavn from "./pages/tagrenovering/TagrenoveringKobenhavn";
import TagrenoveringAarhus from "./pages/tagrenovering/TagrenoveringAarhus";
import TagrenoveringOdense from "./pages/tagrenovering/TagrenoveringOdense";
import TagrenoveringAalborg from "./pages/tagrenovering/TagrenoveringAalborg";
import TagrenoveringEsbjerg from "./pages/tagrenovering/TagrenoveringEsbjerg";
import TagrenoveringRanders from "./pages/tagrenovering/TagrenoveringRanders";
import TagrenoveringKolding from "./pages/tagrenovering/TagrenoveringKolding";
import Facaderenovering from "./pages/Facaderenovering";
import Vinduer from "./pages/Vinduer";
import NotFound from "./pages/NotFound";
import Privatlivspolitik from "./pages/Privatlivspolitik";
import Cookies from "./pages/Cookies";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoogleTag from "./components/GoogleTag";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <GoogleTag />
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/tagrenovering" element={<Tagrenovering />} />
              <Route path="/tagrenovering-kobenhavn" element={<TagrenoveringKobenhavn />} />
              <Route path="/tagrenovering-aarhus" element={<TagrenoveringAarhus />} />
              <Route path="/tagrenovering-odense" element={<TagrenoveringOdense />} />
              <Route path="/tagrenovering-aalborg" element={<TagrenoveringAalborg />} />
              <Route path="/tagrenovering-esbjerg" element={<TagrenoveringEsbjerg />} />
              <Route path="/tagrenovering-randers" element={<TagrenoveringRanders />} />
              <Route path="/tagrenovering-kolding" element={<TagrenoveringKolding />} />
              <Route path="/facaderenovering" element={<Facaderenovering />} />
              <Route path="/vinduer" element={<Vinduer />} />
              <Route path="/privatlivspolitik" element={<Privatlivspolitik />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
