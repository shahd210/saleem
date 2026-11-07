import { useState } from "react";
import {
  X,
  CheckCircle2,
  Car,
  Shield,
  CreditCard,
  Sparkles,
  ArrowLeft,
  ChevronRight,
  Lock,
  Download,
  AlertCircle,
} from "./Icons";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillData?: {
    idNumber: string;
    serialNumber: string;
    type: string;
  };
}

interface QuoteOffer {
  id: string;
  companyName: string;
  englishName: string;
  logoLetter: string;
  type: "comprehensive" | "third-party";
  typeName: string;
  price: number;
  originalPrice: number;
  deductible: number;
  agencyRepair: boolean;
  roadsideAssistance: boolean;
  replacementCar: boolean;
  popular?: boolean;
}

export function QuoteModal({ isOpen, onClose, prefillData }: QuoteModalProps) {
  const [step, setStep] = useState<"offers" | "payment" | "success">("offers");
  const [filterType, setFilterType] = useState<"all" | "comprehensive" | "third-party">("all");
  const [selectedOffer, setSelectedOffer] = useState<QuoteOffer | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<"mada" | "applepay" | "tamara" | "tabby">("applepay");
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const mockOffers: QuoteOffer[] = [
    {
      id: "offer-1",
      companyName: "ملاذ للتأمين",
      englishName: "Malath",
      logoLetter: "م",
      type: "third-party",
      typeName: "ضد الغير (إلزامي)",
      price: 540,
      originalPrice: 1080,
      deductible: 0,
      agencyRepair: false,
      roadsideAssistance: true,
      replacementCar: false,
      popular: true,
    },
    {
      id: "offer-2",
      companyName: "ولاء للتأمين",
      englishName: "Walaa",
      logoLetter: "و",
      type: "comprehensive",
      typeName: "شامل - إصلاح ورش معتمدة",
      price: 1120,
      originalPrice: 2240,
      deductible: 1000,
      agencyRepair: false,
      roadsideAssistance: true,
      replacementCar: true,
      popular: true,
    },
    {
      id: "offer-3",
      companyName: "التعاونية للتأمين",
      englishName: "Tawuniya",
      logoLetter: "ع",
      type: "comprehensive",
      typeName: "شامل ذهبي - إصلاح وكالة",
      price: 1480,
      originalPrice: 2960,
      deductible: 500,
      agencyRepair: true,
      roadsideAssistance: true,
      replacementCar: true,
    },
    {
      id: "offer-4",
      companyName: "أسيج للتأمين",
      englishName: "ACIG",
      logoLetter: "أ",
      type: "third-party",
      typeName: "ضد الغير الأساسي",
      price: 495,
      originalPrice: 990,
      deductible: 0,
      agencyRepair: false,
      roadsideAssistance: false,
      replacementCar: false,
    },
  ];

  const filteredOffers = mockOffers.filter((offer) => {
    if (filterType === "all") return true;
    return offer.type === filterType;
  });

  const handleSelectOffer = (offer: QuoteOffer) => {
    setSelectedOffer(offer);
    setStep("payment");
  };

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep("success");
    }, 1200);
  };

  const handleReset = () => {
    setStep("offers");
    setSelectedOffer(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto animate-fade-in-up">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl border border-slate-100 text-right my-8 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 left-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* STEP 1: OFFERS COMPARISON */}
        {step === "offers" && (
          <div className="space-y-6">
            
            {/* Vehicle Info Bar found via Najm / Absher */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-sm">
                    تويوتا كامري GLX 2024 (لوحة: أ ب ج 1234)
                  </h4>
                  <p className="text-xs text-slate-600">
                    رقم الهوية: {prefillData?.idNumber || "1083948291"} | الرقم التسلسلي: {prefillData?.serialNumber || "94829102"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>خصم نجم 50% مطبق تلقائياً</span>
              </div>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  عروض شركات التأمين المتاحة (4 شركات جاهزة)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  جميع الأسعار شاملة ضريبة القيمة المضافة ومطابقة لأسعار الشركات الرسمية
                </p>
              </div>

              <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-bold text-slate-600">
                <button
                  onClick={() => setFilterType("all")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${filterType === "all" ? "bg-white text-blue-600 shadow-xs" : ""}`}
                >
                  الكل
                </button>
                <button
                  onClick={() => setFilterType("comprehensive")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${filterType === "comprehensive" ? "bg-white text-blue-600 shadow-xs" : ""}`}
                >
                  شامل
                </button>
                <button
                  onClick={() => setFilterType("third-party")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${filterType === "third-party" ? "bg-white text-blue-600 shadow-xs" : ""}`}
                >
                  ضد الغير
                </button>
              </div>
            </div>

            {/* Offers List */}
            <div className="space-y-4">
              {filteredOffers.map((offer) => (
                <div
                  key={offer.id}
                  className="p-5 rounded-2xl border border-slate-200 hover:border-blue-500 bg-white hover:bg-blue-50/20 shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-5 group"
                >
                  {/* Company Info & Coverage */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-black text-lg flex items-center justify-center shrink-0 shadow-xs">
                      {offer.logoLetter}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-black text-slate-900 text-base">{offer.companyName}</h4>
                        {offer.popular && (
                          <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                            الأعلى اختياراً
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-bold text-blue-700">{offer.typeName}</p>
                      
                      <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-slate-500">
                        <span>نسبة التحمل: <strong>{offer.deductible} ر.س</strong></span>
                        <span>•</span>
                        <span>{offer.agencyRepair ? "إصلاح وكالة" : "إصلاح ورش"}</span>
                        <span>•</span>
                        <span>{offer.roadsideAssistance ? "مساعدة على الطريق مجاناً" : "بدون مساعدة"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between md:flex-col md:items-end gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <div className="text-right md:text-left">
                      <span className="text-xs text-slate-400 line-through block">
                        {offer.originalPrice} ريال
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-blue-600">
                          {offer.price}
                        </span>
                        <span className="text-xs font-bold text-slate-700">ريال / سنة</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleSelectOffer(offer)}
                      className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-md shadow-blue-500/20 transition-all flex items-center gap-2"
                    >
                      <span>اختر واشترِ</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* STEP 2: PAYMENT & CONFIRMATION */}
        {step === "payment" && selectedOffer && (
          <div className="space-y-6">
            <button
              onClick={() => setStep("offers")}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800"
            >
              <ChevronRight className="w-4 h-4" />
              <span>العودة لقائمة العروض</span>
            </button>

            <div>
              <h3 className="text-2xl font-black text-slate-900">إتمام الشراء والدفع الآمن</h3>
              <p className="text-xs text-slate-500 mt-1">
                تُصدر الوثيقة فوراً وتُربط تلقائياً بنظام المرور السعودي ونجم.
              </p>
            </div>

            {/* Selected Summary Card */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 block">الشركة والوثيقة المختارة:</span>
                <span className="font-black text-slate-900 text-base">{selectedOffer.companyName} - {selectedOffer.typeName}</span>
              </div>
              <div className="text-left">
                <span className="text-xs text-slate-500 block">المبلغ الإجمالي شامل الضريبة:</span>
                <span className="text-2xl font-black text-blue-600">{selectedOffer.price} ر.س</span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700">
                اختر وسيلة الدفع المفضلة:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: "applepay", name: "Apple Pay 🍎" },
                  { id: "mada", name: "بطاقة مدى 💳" },
                  { id: "tamara", name: "تمارا (تقسيط)" },
                  { id: "tabby", name: "تابي (4 دفعات)" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPaymentMethod(item.id as any)}
                    className={`p-3 rounded-2xl border text-xs font-bold transition-all ${
                      paymentMethod === item.id
                        ? "bg-blue-50 border-blue-600 text-blue-700 shadow-xs"
                        : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Security Guarantee */}
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
              <Lock className="w-4 h-4 shrink-0 text-emerald-600" />
              <span>
                عملية دفع مشفرة 256-bit آمنة بنسبة 100% ومعتمدة من البنك المركزي السعودي (ساما).
              </span>
            </div>

            <button
              onClick={handlePay}
              disabled={isProcessing}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 text-base active:scale-95"
            >
              {isProcessing ? (
                <span>جاري معالجة الدفع وإصدار الوثيقة...</span>
              ) : (
                <>
                  <span>تأكيد الدفع ({selectedOffer.price} ر.س) وإصدار الوثيقة</span>
                  <ArrowLeft className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}

        {/* STEP 3: SUCCESS & POLICY ISSUANCE */}
        {step === "success" && selectedOffer && (
          <div className="text-center py-6 space-y-6">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                مبروك! تم إصدار وثيقتك بنجاح 🎉
              </h3>
              <p className="text-sm text-slate-600">
                تم ربط الوثيقة بنجاح بنظام المرور السعودي ونجم، واستمارة مركبتك مؤمّنة رسمياً الآن.
              </p>
            </div>

            {/* Policy Reference Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-right space-y-2 text-xs">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">رقم الوثيقة المرجعي:</span>
                <span className="font-mono font-bold text-slate-900">TM-2026-9482910</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">شركة التأمين:</span>
                <span className="font-bold text-slate-900">{selectedOffer.companyName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">حالة الربط مع المرور:</span>
                <span className="font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> تم التحديث في أبشر
                </span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-500">فترة الصلاحية:</span>
                <span className="font-bold text-slate-900">سنة كاملة (حتى نوفمبر 2027)</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => alert("تم تحميل ملف وثيقة التأمين الرسمية (PDF) على جهازك.")}
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl flex items-center justify-center gap-2 shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>تحميل وثيقة التأمين (PDF)</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-colors"
              >
                العودة للرئيسية
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
