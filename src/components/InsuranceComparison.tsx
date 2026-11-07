import { useState } from "react";
import { COMPARISON_PLANS } from "../data/tameeniData";
import { Check, X, Shield, Sparkles, ArrowLeft, HelpCircle } from "./Icons";

interface InsuranceComparisonProps {
  onSelectPlan: (planId: string) => void;
}

export function InsuranceComparison({ onSelectPlan }: InsuranceComparisonProps) {
  const [showFullMatrix, setShowFullMatrix] = useState(false);

  return (
    <section id="compare" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Matching Screenshot 2) */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-bold px-3.5 py-1.5 rounded-full border border-blue-200">
            <Shield className="w-3.5 h-3.5" />
            <span>دليل المقارنة الذكي</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            هل يجب أن أشتري تأميناً شاملاً أم تأمين طرف ثالث لسيارتي؟
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            تحقق من مزايا كل نوع أدناه وقارن بينها لمساعدتك في اتخاذ القرار الأفضل وفقاً لاحتياجاتك ونطاق ميزانيتك.
          </p>
        </div>

        {/* 3 Comparison Cards (From Screenshot 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-10">
          {COMPARISON_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-6 sm:p-8 bg-white transition-all duration-300 flex flex-col justify-between relative border ${
                plan.popular
                  ? "border-blue-600 shadow-2xl shadow-blue-500/15 scale-100 lg:-translate-y-2 ring-2 ring-blue-500/20"
                  : "border-slate-200/90 shadow-md hover:shadow-xl"
              }`}
            >
              {/* Popularity / Feature Ribbon */}
              {plan.popular && (
                <div className="absolute -top-3.5 right-1/2 translate-x-1/2 bg-gradient-to-r from-blue-600 to-sky-500 text-white text-xs font-black px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>الخيار الأكثر أماناً وحماية</span>
                </div>
              )}

              {/* Card Header */}
              <div className="space-y-4 text-right">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${plan.badgeColor}`}>
                    {plan.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">سنة كاملة</span>
                </div>

                <h3 className="text-2xl font-black text-slate-900">
                  {plan.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[56px]">
                  {plan.description}
                </p>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-baseline justify-between">
                  <span className="text-xs text-slate-500 font-medium">الأسعار التقريبية:</span>
                  <span className="text-sm font-black text-slate-900">{plan.priceStarting}</span>
                </div>

                {/* Action CTA Button */}
                <button
                  onClick={() => onSelectPlan(plan.id)}
                  className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 active:scale-95 shadow-md ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/25"
                      : "bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/15"
                  }`}
                >
                  <span>اشترِ الآن</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>

              {/* Checklist Features */}
              <div className="pt-6 mt-6 border-t border-slate-100 space-y-3 text-right">
                <span className="text-xs font-bold text-slate-800 block mb-2">
                  ماذا تشمل هذه التغطية؟
                </span>
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5" />
                      </div>
                    )}
                    <span className={feature.included ? "text-slate-700 font-medium leading-tight" : "text-slate-400 line-through leading-tight"}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Quick Helper Tip */}
        <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm flex items-center gap-3 max-w-2xl mx-auto text-right">
          <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
          <p>
            <strong>نصيحة خبراء تأميني:</strong> إذا كانت سيارتك موديل حديث (آخر 5 سنوات) أو مرهونة لبنك أو تمويل تأجيري، فإن التأمين الشامل هو الخيار الإلزامي والآمن لك. أما إذا كانت سيارتك أقدم، فيمكنك الاكتفاء بـ "ضد الغير" أو "ضد الغير بلس".
          </p>
        </div>

      </div>
    </section>
  );
}
