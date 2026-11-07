import { useState } from "react";
import { Sparkles, X, Check, ShieldCheck, ArrowLeft, Percent } from "lucide-react";

interface NajmCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToQuote: () => void;
}

export function NajmCalculatorModal({
  isOpen,
  onClose,
  onProceedToQuote,
}: NajmCalculatorModalProps) {
  const [claimFreeYears, setClaimFreeYears] = useState(3);
  const [insuranceType, setInsuranceType] = useState<"third-party" | "comprehensive">("comprehensive");
  const [basePrice, setBasePrice] = useState(1200);

  if (!isOpen) return null;

  // Najm discount tiers:
  // 1 year: 10% (up to 15% comprehensive)
  // 2 years: 20% (up to 25% comprehensive)
  // 3+ years: 30% - 50% (50% max)
  const discountPercentages: Record<number, number> = {
    0: 0,
    1: 15,
    2: 25,
    3: 35,
    4: 45,
    5: 50,
  };

  const discountRate = discountPercentages[claimFreeYears] || 0;
  const savings = Math.round((basePrice * discountRate) / 100);
  const finalPrice = Math.max(0, basePrice - savings);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in-up">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-slate-100 text-right">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full w-max mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>حاسبة خصم نجم الرسمية 2026</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-slate-900">
          احسب خصم سجلك الخالي من الحوادث
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          وفقاً لتعليمات هيئة التأمين، يحق لكل سائق يحافظ على سجل قيادة نظيف الحصول على خصم تصاعدي يصل حتى 50%.
        </p>

        {/* Calculator Controls */}
        <div className="my-6 space-y-4">
          
          {/* Years selector */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-2">
              كم سنة مرّت على سجلك التأميني بدون مطالبات حوادث؟
            </label>
            <div className="grid grid-cols-6 gap-1.5">
              {[0, 1, 2, 3, 4, 5].map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => setClaimFreeYears(year)}
                  className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                    claimFreeYears === year
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {year === 0 ? "بدون" : `${year} ${year === 1 ? "سنة" : "سنوات"}`}
                </button>
              ))}
            </div>
          </div>

          {/* Type of insurance */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                setInsuranceType("third-party");
                setBasePrice(650);
              }}
              className={`p-3 text-xs font-bold rounded-xl border transition-all ${
                insuranceType === "third-party"
                  ? "bg-blue-50 text-blue-700 border-blue-600"
                  : "bg-white text-slate-600 border-slate-200"
              }`}
            >
              ضد الغير (متوسط 650 ر.س)
            </button>
            <button
              type="button"
              onClick={() => {
                setInsuranceType("comprehensive");
                setBasePrice(1400);
              }}
              className={`p-3 text-xs font-bold rounded-xl border transition-all ${
                insuranceType === "comprehensive"
                  ? "bg-blue-50 text-blue-700 border-blue-600"
                  : "bg-white text-slate-600 border-slate-200"
              }`}
            >
              تأمين شامل (متوسط 1,400 ر.س)
            </button>
          </div>

          {/* Result Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-100">نسبة الخصم المستحقة:</span>
              <span className="text-2xl font-black">{discountRate}% خصم</span>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/20">
              <div>
                <span className="text-[11px] text-emerald-100 block">المبلغ التقديري الموفّر:</span>
                <span className="text-xl font-bold">{savings} ريال سعودي</span>
              </div>
              <div className="text-left">
                <span className="text-[11px] text-emerald-100 block">السعر التقريبي بعد الخصم:</span>
                <span className="text-2xl font-black">{finalPrice} ر.س</span>
              </div>
            </div>
          </div>

        </div>

        {/* CTA */}
        <button
          onClick={() => {
            onClose();
            onProceedToQuote();
          }}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
        >
          <span>استخدم خصمك وقارن الأسعار الآن</span>
          <ArrowLeft className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
}
