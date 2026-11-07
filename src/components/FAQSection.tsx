import { useState } from "react";
import { FAQ_ITEMS } from "../data/tameeniData";
import { ChevronDown, HelpCircle, Phone, Search, Sparkles } from "lucide-react";

interface FAQSectionProps {
  onOpenNajmCalculator: () => void;
}

export function FAQSection({ onOpenNajmCalculator }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredItems = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Matching Screenshot 4) */}
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>مركز المساعدة السريعة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            الأسئلة الشائعة
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            مرحبًا! ستجد هنا إجابات على أغلب الأسئلة والاستفسارات المتعلقة بتأميني. إذا كنت بحاجة إلى مزيد من المساعدة، يمكنك الاتصال بخدمة العملاء على الرقم{" "}
            <a
              href="tel:8002444455"
              className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1 dir-ltr font-mono"
            >
              8002444455 <Phone className="w-3.5 h-3.5 text-blue-500 inline" />
            </a>
          </p>
        </div>

        {/* Quick Search */}
        <div className="relative mb-8 max-w-lg mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث في الأسئلة الشائعة (مثال: خصم نجم، الرصد الآلي، الإلغاء...)"
            className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-2xl pr-11 pl-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400"
          />
          <Search className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* Accordion List (Matching Screenshot 4 questions) */}
        <div className="space-y-3">
          {filteredItems.map((item, index) => {
            const isOpen = openIndex === index;
            const isNajm = item.question.includes("نجم");

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-slate-50/70 border-blue-200 shadow-2xs"
                    : "bg-white border-slate-200/80 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full p-5 text-right flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <span className="text-sm sm:text-base leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-blue-100 text-blue-700 rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/60 pt-3 animate-fade-in-up">
                    <p>{item.answer}</p>
                    
                    {isNajm && (
                      <div className="mt-3">
                        <button
                          onClick={onOpenNajmCalculator}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full transition-colors"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                          <span>جرّب حاسبة خصم نجم التفاعلية الآن</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* More Questions Link */}
        <div className="text-center mt-8">
          <a
            href="tel:8002444455"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline"
          >
            <span>المزيد من الأسئلة ومركز الاتصال</span>
            <span className="text-slate-400">›</span>
          </a>
        </div>

      </div>
    </section>
  );
}
