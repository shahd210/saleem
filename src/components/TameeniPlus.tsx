import { useState } from "react";
import { TAMEENI_PLUS_OFFERS, TameeniPlusItem } from "../data/tameeniData";
import { Sparkles, ArrowLeft, Tag, Shield, Check, ShoppingBag, X } from "lucide-react";

export function TameeniPlus() {
  const [selectedOffer, setSelectedOffer] = useState<TameeniPlusItem | null>(null);
  const [redeemed, setRedeemed] = useState(false);

  const handleClaim = (offer: TameeniPlusItem) => {
    setSelectedOffer(offer);
    setRedeemed(false);
  };

  return (
    <section id="tameeni-plus" className="py-16 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Purple Banner Header (Matching Screenshot 1) */}
        <div className="relative rounded-3xl bg-gradient-to-r from-purple-800 via-indigo-700 to-purple-900 text-white p-6 sm:p-10 shadow-xl shadow-purple-950/15 overflow-hidden mb-10">
          {/* Subtle glow / particles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-pink-500/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>برنامج المزايا الحصرية</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                نقدّم لكم تأميني بلس
              </h2>
              <p className="text-purple-100 text-sm sm:text-base max-w-2xl">
                وجهتك الشاملة لخدمات السيارات المميزة والإكسسوارات بخصومات حصرية تصل حتى 73% لعملاء تأميني.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedOffer(TAMEENI_PLUS_OFFERS[0])}
                className="bg-white hover:bg-purple-50 text-purple-900 font-bold px-6 py-3 rounded-full text-sm shadow-lg transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                جميع العروض
              </button>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid (Matching Screenshot 1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TAMEENI_PLUS_OFFERS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              {/* Product Image & Badges */}
              <div className="relative h-48 bg-slate-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* Brand pill */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-800 text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                  {item.brand}
                </div>

                {/* Free delivery or warranty badge */}
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                  {item.badge}
                </div>

                {/* Discount Percentage Badge (from Screenshot: 73% خصم, etc.) */}
                <div className="absolute bottom-3 right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-black px-3 py-1 rounded-lg shadow-md flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" />
                  <span>{item.discountPercent}% خصم</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-purple-700 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  {item.monthlyNote && (
                    <span className="inline-block mt-2 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                      {item.monthlyNote}
                    </span>
                  )}
                </div>

                {/* Price & CTA */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="flex items-baseline justify-between mb-3">
                    <div>
                      <span className="text-[11px] text-slate-400 block">الأسعار تبدأ من</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-black text-slate-900">
                          {item.discountedPrice.toLocaleString()}
                        </span>
                        <span className="text-xs font-bold text-slate-600">ريال</span>
                        <span className="text-xs text-slate-400 line-through mr-1 font-normal">
                          {item.originalPrice.toLocaleString()} ريال
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleClaim(item)}
                    className="w-full bg-slate-100 hover:bg-purple-600 hover:text-white text-slate-800 font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 group-hover:bg-purple-600 group-hover:text-white"
                  >
                    <span>عرض المزيد وتفعيل الخصم</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Offer Detail / Redeem Modal */}
      {selectedOffer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in-up">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-slate-100">
            <button
              onClick={() => setSelectedOffer(null)}
              className="absolute top-5 left-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full w-max mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>عرض حصري من تأميني بلس</span>
            </div>

            <h3 className="text-xl font-black text-slate-900">{selectedOffer.title}</h3>
            <p className="text-sm text-slate-500 mt-1">المزوّد المعتمد: {selectedOffer.brand}</p>

            <div className="my-5 rounded-2xl overflow-hidden h-44 bg-slate-100">
              <img
                src={selectedOffer.image}
                alt={selectedOffer.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              {selectedOffer.description}
            </p>

            <div className="my-5 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 block">السعر بعد خصم {selectedOffer.discountPercent}%</span>
                <span className="text-2xl font-black text-purple-700">{selectedOffer.discountedPrice} ر.س</span>
                <span className="text-xs text-slate-400 line-through mr-2">بدل {selectedOffer.originalPrice} ر.س</span>
              </div>
              <span className="text-xs font-bold bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full">
                {selectedOffer.badge}
              </span>
            </div>

            {redeemed ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl flex items-center gap-3">
                <Check className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm">تم تفعيل كود الخصم بنجاح!</h4>
                  <p className="text-xs text-emerald-700 mt-0.5">
                    استخدم الكود <strong className="font-mono text-slate-900 bg-white px-2 py-0.5 rounded">TAMEENI2026</strong> عند زيارة الفرع أو المتجر.
                  </p>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setRedeemed(true)}
                className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>احصل على كود العرض الآن</span>
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
