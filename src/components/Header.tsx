import { useState } from "react";
import {
  Car,
  HeartPulse,
  CreditCard,
  Stethoscope,
  Home,
  Plane,
  Truck,
  Wallet,
  Menu,
  X,
  Search,
  Globe,
  Headphones,
  User,
  ShieldCheck,
  ChevronDown,
  Sparkles,
} from "lucide-react";

interface HeaderProps {
  onOpenQuoteModal: () => void;
  onOpenNajmCalculator: () => void;
}

export function Header({ onOpenQuoteModal, onOpenNajmCalculator }: HeaderProps) {
  const [showTopBanner, setShowTopBanner] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("cars");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const subNavItems = [
    { id: "cars", label: "السيارات", icon: Car, active: true },
    { id: "health", label: "الصحي", icon: HeartPulse },
    { id: "residency", label: "الإقامة المميزة", icon: CreditCard },
    { id: "medical-malpractice", label: "الأخطاء الطبية", icon: Stethoscope },
    { id: "domestic", label: "العمالة المنزلية", icon: Home },
    { id: "travel", label: "السفر", icon: Plane },
    { id: "fleet", label: "أسطول السيارات", icon: Truck },
    { id: "savings", label: "الحماية والادخار", icon: Wallet },
    { id: "cargo", label: "نقل البضائع", icon: Truck },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
      {/* 1. Top Announcement Banner (Dismissible) */}
      {showTopBanner && (
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white text-xs md:text-sm py-2 px-4 shadow-inner">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <button
              onClick={() => setShowTopBanner(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="إغلاق التنبيه"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 md:gap-3 flex-1 justify-center text-center font-medium">
              <span className="hidden sm:inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" /> جديد
              </span>
              <span>
                <strong>تأميني بلس:</strong> ارتقِ بتجربة قيادتك، إكسسوارات والعناية بالسيارة في مكان واحد.
              </span>
            </div>

            <a
              href="#tameeni-plus"
              className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-3 py-1 rounded-full text-xs transition-all shadow-xs hover:shadow-md transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              جميع العروض
            </a>
          </div>
        </div>
      )}

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo & Category Selector (Right side in RTL) */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <a href="#" className="flex items-center gap-2.5 group">
              {/* Tameeni Logo SVG */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-black text-slate-900 tracking-tight">
                  تأميني
                </span>
                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                  السيارات
                </span>
              </div>
            </a>
          </div>

          {/* Search Box / Dropdown */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="ابحث عن وثيقة، شركة تأمين، أو خدمة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-100 hover:bg-slate-50 focus:bg-white text-sm text-slate-800 rounded-full pr-11 pl-4 py-2.5 border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400"
              />
              <Search className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Quick Actions (Left side in RTL) */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Najm Discount Quick Calc Pill */}
            <button
              onClick={onOpenNajmCalculator}
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-full transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              حاسبة خصم نجم 50%
            </button>

            {/* Language Switch */}
            <button className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors">
              <Globe className="w-4 h-4 text-slate-400" />
              <span>English</span>
            </button>

            {/* Support / Inquiries */}
            <a
              href="tel:8002444455"
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Headphones className="w-4 h-4 text-slate-400" />
              <span>الشكاوى والاستفسارات</span>
            </a>

            {/* Login Button */}
            <button
              onClick={onOpenQuoteModal}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 sm:px-5 py-2.5 rounded-full shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/30 active:scale-95 transition-all"
            >
              <User className="w-4 h-4" />
              <span>الدخول لحسابي</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Products Sub-Navigation Bar with Horizontal Scroll */}
      <div className="border-t border-slate-100 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2.5 scrollbar-none text-slate-600 font-medium text-xs sm:text-sm">
            {subNavItems.map((item) => {
              const IconComp = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-blue-600 text-white font-bold shadow-xs shadow-blue-500/20"
                      : "text-slate-600 hover:text-blue-600 hover:bg-white"
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-5 space-y-4 animate-fade-in-up">
          <div className="flex flex-col gap-2">
            <button
              onClick={onOpenNajmCalculator}
              className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 text-emerald-800 text-sm font-bold"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                حاسبة خصم نجم للقيادة الخالية من الحوادث
              </span>
              <span className="text-xs bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded-full">
                حتى 50%
              </span>
            </button>
            <a
              href="tel:8002444455"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-slate-700 text-sm font-semibold"
            >
              <Headphones className="w-5 h-5 text-blue-600" />
              <span>الشكاوى والاستفسارات (8002444455)</span>
            </a>
            <a
              href="#tameeni-plus"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-slate-700 text-sm font-semibold"
            >
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span>عروض تأميني بلس الحصرية</span>
            </a>
            <a
              href="#compare"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-slate-700 text-sm font-semibold"
            >
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span>مقارنة التأمين الشامل وضد الغير</span>
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-slate-700 text-sm font-semibold"
            >
              <ChevronDown className="w-5 h-5 text-slate-500" />
              <span>الأسئلة الشائعة</span>
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold shadow-md shadow-blue-500/20 text-center"
            >
              ابدأ التسعير الفوري لسيارتك
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
