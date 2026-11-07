import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PartnersMarquee } from "./components/PartnersMarquee";
import { TameeniPlus } from "./components/TameeniPlus";
import { FantasyBanner } from "./components/FantasyBanner";
import { EhsanBanner } from "./components/EhsanBanner";
import { SpecialServices } from "./components/SpecialServices";
import { ProductsShowcase } from "./components/ProductsShowcase";
import { InsuranceComparison } from "./components/InsuranceComparison";
import { WhyTameeni } from "./components/WhyTameeni";
import { MobileAppSection } from "./components/MobileAppSection";
import { TrustStats } from "./components/TrustStats";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { NajmCalculatorModal } from "./components/NajmCalculatorModal";
import { QuoteModal } from "./components/QuoteModal";
import { Headphones, Sparkles, ArrowUp } from "lucide-react";

export function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [najmModalOpen, setNajmModalOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState<
    { idNumber: string; serialNumber: string; type: string } | undefined
  >(undefined);

  const handleStartQuote = (prefillData?: {
    idNumber: string;
    serialNumber: string;
    type: string;
  }) => {
    setQuotePrefill(prefillData);
    setQuoteModalOpen(true);
  };

  const handleSelectProduct = (productId: string) => {
    if (productId === "cars") {
      setQuoteModalOpen(true);
    } else {
      alert(`سيتم توجيهك الآن لخدمة ${productId} في منصة تأميني.`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-800">
      
      {/* 1. Main Header with Top Announcement Bar & Sub-Nav */}
      <Header
        onOpenQuoteModal={() => setQuoteModalOpen(true)}
        onOpenNajmCalculator={() => setNajmModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section with Luxury Car Artwork, Grand Title & Live Quote Form */}
        <Hero
          onStartQuote={handleStartQuote}
          onOpenNajmCalculator={() => setNajmModalOpen(true)}
        />

        {/* 3. Infinite Insurance Partners Marquee (Page 1) */}
        <PartnersMarquee />

        {/* 4. Tameeni Plus Services & Offers (Page 1) */}
        <TameeniPlus />

        {/* 5. Tameeni Fantasy Gamification Banner (Page 1) */}
        <FantasyBanner />

        {/* 6. Ehsan Charity Impact Banner (Page 2) */}
        <EhsanBanner />

        {/* 7. Special Services: Hero Accident Assistance & 1000+ Stores Discounts (Page 2) */}
        <SpecialServices />

        {/* 8. Products Showcase: Individuals & Corporate Tabs (Page 2) */}
        <ProductsShowcase onSelectProduct={handleSelectProduct} />

        {/* 9. Insurance Decision Matrix & Comparison (Page 2) */}
        <InsuranceComparison onSelectPlan={() => setQuoteModalOpen(true)} />

        {/* 10. Why Tameeni 6 Bento Grid Cards (Page 3) */}
        <WhyTameeni />

        {/* 11. Mobile App Section with Smartphone Mockup (Page 3) */}
        <MobileAppSection />

        {/* 12. Trust & Numbers Bar: Qitaf, Google 4.7, Self-Service, Discounts (Page 3) */}
        <TrustStats />

        {/* 13. Searchable FAQ Accordion Section (Page 4) */}
        <FAQSection onOpenNajmCalculator={() => setNajmModalOpen(true)} />
      </main>

      {/* 14. Regulatory Licensed Footer (Page 4) */}
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Floating Najm Discount Trigger */}
        <button
          onClick={() => setNajmModalOpen(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
          title="حاسبة خصم نجم 50%"
        >
          <Sparkles className="w-5 h-5 text-amber-300 animate-spin-slow" />
          <span className="hidden group-hover:inline mr-2 text-xs font-bold whitespace-nowrap">
            احسب خصم نجم 50%
          </span>
        </button>

        {/* Customer Support Floating Button */}
        <a
          href="tel:8002444455"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3.5 rounded-full shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
          title="خدمة العملاء والشكاوى (8002444455)"
        >
          <Headphones className="w-5 h-5" />
          <span className="hidden group-hover:inline mr-2 text-xs font-bold whitespace-nowrap">
            خدمة العملاء 24/7
          </span>
        </a>

        {/* Scroll to top */}
        <button
          onClick={scrollToTop}
          className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 p-3 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
          title="للأعلى"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* Interactive Modals */}
      <NajmCalculatorModal
        isOpen={najmModalOpen}
        onClose={() => setNajmModalOpen(false)}
        onProceedToQuote={() => setQuoteModalOpen(true)}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        prefillData={quotePrefill}
      />
    </div>
  );
}

export default App;
