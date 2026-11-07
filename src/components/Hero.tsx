import { useState } from "react";
import {
  Shield,
  ArrowLeft,
  CheckCircle2,
  FileText,
  Lock,
  Sparkles,
  Car,
  ChevronLeft,
  Check,
  AlertCircle,
} from "./Icons";

interface HeroProps {
  onStartQuote: (prefillData?: { idNumber: string; serialNumber: string; type: string }) => void;
  onOpenNajmCalculator: () => void;
}

export function Hero({ onStartQuote, onOpenNajmCalculator }: HeroProps) {
  const [purpose, setPurpose] = useState<"renew" | "transfer" | "customs">("renew");
  const [coverageType, setCoverageType] = useState<"comprehensive" | "third-party" | "third-party-plus">("comprehensive");
  const [idNumber, setIdNumber] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (idNumber.trim().length < 10) {
      setFormError("يرجى إدخال رقم هوية أو إقامة صحيح مكون من 10 أرقام");
      return;
    }
    if (serialNumber.trim().length < 5) {
      setFormError("يرجى إدخال الرقم التسلسلي للمركبة بشكل صحيح");
      return;
    }
    setFormError("");
    onStartQuote({ idNumber, serialNumber, type: purpose });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-slate-50 pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-sky-300/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Right Column: Hero Headline & CTA (in RTL) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-800 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full border border-blue-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>المنصة الأولى والأكثر ثقة في المملكة منذ 2017</span>
            </div>

            {/* Main Grand Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.2] tracking-tight">
              أول منصة لتأمين <br />
              <span className="bg-gradient-to-l from-blue-700 via-blue-600 to-sky-500 bg-clip-text text-transparent">
                السيارات في السعودية
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              جميع وأفضل شركات التأمين... في مكان واحد، لمجموعة واسعة من الخيارات وإصدار فوري لوثائق التأمين بأقل من دقيقتين.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onStartQuote()}
                className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-black text-base sm:text-lg px-8 py-4 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 active:scale-95 transition-all"
              >
                <span>ابدأ الآن</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenNajmCalculator}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base px-6 py-4 rounded-full border border-slate-200 shadow-xs hover:border-slate-300 transition-all"
              >
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>احسب خصم نجم لسيارتك</span>
              </button>
            </div>

            {/* Mojaz Report Callout (from Screenshot 1) */}
            <div className="pt-2">
              <a
                href="#mojaz"
                onClick={(e) => {
                  e.preventDefault();
                  alert("خدمة تقرير موجز: توفر لك السجل التاريخي الكامل للسيارة، عدد الملاك السابقين، وسجل الحوادث قبل إتمام الشراء.");
                }}
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-white hover:bg-slate-50 p-2.5 sm:px-4 rounded-xl border border-slate-200 shadow-xs transition-all group"
              >
                <span className="bg-rose-700 text-white text-xs font-bold px-2 py-0.5 rounded-md">
                  تقرير موجز
                </span>
                <span>هل تود شراء سيارة وترغب في معرفة كل شيء عنها قبل الشراء؟</span>
                <ChevronLeft className="w-4 h-4 text-slate-400 group-hover:-translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/80">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>إصدار إلكتروني فوري</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>ربط فوري بنجم والمرور</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>أفضل سعر مضمون</span>
              </div>
            </div>
          </div>

          {/* Left Column: Interactive Instant Quote Card (from Figma / Real App) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl shadow-slate-200/80 border border-slate-100 relative">
              
              {/* Header inside card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold text-blue-600 block">تسعير مباشر ومجاني</span>
                  <h2 className="text-xl font-black text-slate-900">قارن واشترِ وثيقتك</h2>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                  <Lock className="w-3.5 h-3.5" />
                  <span>بياناتك محمية وموثقة</span>
                </div>
              </div>

              {/* Purpose Tabs: تأمين جديد / تجديد - نقل ملكية - بطاقة جمركية */}
              <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-2xl my-4 text-xs font-bold text-slate-600">
                <button
                  type="button"
                  onClick={() => setPurpose("renew")}
                  className={`py-2 rounded-xl transition-all ${
                    purpose === "renew" ? "bg-white text-blue-600 shadow-xs" : "hover:text-slate-900"
                  }`}
                >
                  تأمين جديد / تجديد
                </button>
                <button
                  type="button"
                  onClick={() => setPurpose("transfer")}
                  className={`py-2 rounded-xl transition-all ${
                    purpose === "transfer" ? "bg-white text-blue-600 shadow-xs" : "hover:text-slate-900"
                  }`}
                >
                  نقل ملكية
                </button>
                <button
                  type="button"
                  onClick={() => setPurpose("customs")}
                  className={`py-2 rounded-xl transition-all ${
                    purpose === "customs" ? "bg-white text-blue-600 shadow-xs" : "hover:text-slate-900"
                  }`}
                >
                  بطاقة جمركية
                </button>
              </div>

              {/* Interactive Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {formError && (
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-rose-50 text-rose-700 text-xs font-bold border border-rose-200">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    رقم الهوية الوطنية / الإقامة
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      maxLength={10}
                      inputMode="numeric"
                      value={idNumber}
                      onChange={(e) => setIdNumber(e.target.value.replace(/\D/g, ""))}
                      placeholder="مثال: 1083948291"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition-all placeholder:text-slate-400"
                      required
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-mono">
                      {idNumber.length}/10
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {purpose === "customs" ? "رقم البطاقة الجمركية" : "الرقم التسلسلي للاستمارة"}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      inputMode="numeric"
                      value={serialNumber}
                      onChange={(e) => setSerialNumber(e.target.value.replace(/\D/g, ""))}
                      placeholder="الرقم المسجل أسفل رخصة السير"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition-all placeholder:text-slate-400"
                      required
                    />
                    <Car className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Coverage Chips */}
                <div>
                  <span className="block text-xs font-bold text-slate-700 mb-1.5">
                    نوع التغطية المفضّل
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "third-party", label: "ضد الغير" },
                      { id: "third-party-plus", label: "ضد الغير بلس" },
                      { id: "comprehensive", label: "شامل (الأفضل)" },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setCoverageType(item.id as any)}
                        className={`py-2 px-1 text-xs font-bold rounded-xl border transition-all flex items-center justify-center gap-1 ${
                          coverageType === item.id
                            ? "bg-blue-50 border-blue-600 text-blue-700 shadow-xs"
                            : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        {coverageType === item.id && <Check className="w-3.5 h-3.5" />}
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Consent checkbox */}
                <label className="flex items-start gap-2 pt-1 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    required
                  />
                  <span>
                    أوافق على الشروط وجلب بيانات وثائقي وسجل المركبة من المصادر الرسمية (نجم / المرور).
                  </span>
                </label>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white py-3.5 rounded-2xl font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all"
                >
                  <span>عرض أسعار شركات التأمين</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </form>

              {/* Instant benefits preview inside box */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  خصم نجم يحسب تلقائياً
                </span>
                <span className="flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-blue-500" />
                  إصدار فوري للـ PDF
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
