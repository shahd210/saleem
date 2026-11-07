import { useState } from "react";
import { Trophy, Flame, ArrowLeft, X, Sparkles, CheckCircle2 } from "lucide-react";

export function FantasyBanner() {
  const [modalOpen, setModalOpen] = useState(false);
  const [predictionMade, setPredictionMade] = useState(false);

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Fantasy Interactive Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white p-8 sm:p-12 overflow-hidden shadow-2xl border border-teal-800/40">
          
          {/* Visual Elements: Soccer Ball / Stadium Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-right">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold px-3.5 py-1.5 rounded-full">
                <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>الموسم الجديد من دوري روشن 2026</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                محّلك توقعات؟ <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-300 via-teal-200 to-white">
                  العب تأميني فانتزي
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
                توقع نتائج المباريات أسبوعياً واجمع النقاط، واربح وثائق تأمين مجانية لسيارتك وجوائز نقدية كبرى مع تأميني فانتزي!
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-3.5 rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 active:scale-95 transition-all flex items-center gap-2 text-sm sm:text-base"
                >
                  <Trophy className="w-5 h-5" />
                  <span>العب وتوقع مجاناً</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2 text-xs text-emerald-200 font-semibold bg-white/5 border border-white/10 px-4 py-2.5 rounded-full">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>مجموع الجوائز يتجاوز 150,000 ر.س</span>
                </div>
              </div>
            </div>

            {/* Saudi Football & Fans Artwork Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-xs bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-center shadow-xl">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 flex items-center justify-center text-slate-900 shadow-lg shadow-amber-400/20 mb-3">
                  <Trophy className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-white text-base">جولة هذا الأسبوع</h3>
                <p className="text-xs text-emerald-200 mt-1">توقع القمة الكبرى بين الهلال والنصر</p>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-around text-xs text-slate-300">
                  <div>
                    <span className="block font-bold text-white text-sm">الهلال</span>
                    <span className="text-[10px] text-slate-400">متصدر</span>
                  </div>
                  <span className="font-bold text-amber-400 bg-white/10 px-2 py-1 rounded-md text-xs">VS</span>
                  <div>
                    <span className="block font-bold text-white text-sm">النصر</span>
                    <span className="text-[10px] text-slate-400">وصيف</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Interactive Fantasy Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in-up">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 relative shadow-2xl border border-slate-100 text-right">
            <button
              onClick={() => {
                setModalOpen(false);
                setPredictionMade(false);
              }}
              className="absolute top-5 left-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full w-max mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>فانتزي تأميني 2026</span>
            </div>

            <h3 className="text-xl font-black text-slate-900">سجّل توقعك واربح!</h3>
            <p className="text-xs text-slate-500 mt-1">
              اختر الفائز في قمة الأسبوع لتحصل على نقاط مضاعفة وفرصة الفوز بوثيقة تأمين مجانية.
            </p>

            {predictionMade ? (
              <div className="my-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                <h4 className="font-bold text-slate-900 text-base">تم تسجيل توقعك بنجاح!</h4>
                <p className="text-xs text-emerald-800 mt-1">
                  ستصلك رسالة SMS بنتيجة التوقع وحالة نقاطك بعد نهاية المباراة مباشرة.
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="mt-4 bg-emerald-600 text-white text-xs font-bold px-6 py-2.5 rounded-full"
                >
                  إغلاق
                </button>
              </div>
            ) : (
              <div className="space-y-4 my-6">
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setPredictionMade(true)}
                    className="p-4 rounded-2xl border-2 border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 text-center transition-all group"
                  >
                    <span className="block font-bold text-slate-800 text-sm group-hover:text-emerald-700">فوز الهلال</span>
                    <span className="text-[10px] text-slate-400">1.85</span>
                  </button>

                  <button
                    onClick={() => setPredictionMade(true)}
                    className="p-4 rounded-2xl border-2 border-slate-200 hover:border-amber-500 hover:bg-amber-50 text-center transition-all group"
                  >
                    <span className="block font-bold text-slate-800 text-sm group-hover:text-amber-700">تعادل</span>
                    <span className="text-[10px] text-slate-400">3.20</span>
                  </button>

                  <button
                    onClick={() => setPredictionMade(true)}
                    className="p-4 rounded-2xl border-2 border-slate-200 hover:border-yellow-500 hover:bg-yellow-50 text-center transition-all group"
                  >
                    <span className="block font-bold text-slate-800 text-sm group-hover:text-yellow-700">فوز النصر</span>
                    <span className="text-[10px] text-slate-400">2.10</span>
                  </button>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-500 text-center">
                  المشاركة مجانية بالكامل لجميع زوار وعملاء تأميني.
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
