import { HeartHandshake, ArrowLeft, Sparkles } from "lucide-react";

export function EhsanBanner() {
  return (
    <section className="py-8 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ehsan Partnership Banner (from Screenshot 2) */}
        <div className="relative rounded-3xl bg-gradient-to-r from-teal-800 via-emerald-800 to-teal-900 text-white p-6 sm:p-10 shadow-xl overflow-hidden border border-emerald-700/50">
          
          {/* Subtle Islamic art / geometric soft background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-5 text-right flex-1">
              {/* Ehsan Emblem / Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 text-emerald-300">
                <HeartHandshake className="w-9 h-9" />
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-emerald-300 bg-white/10 px-2.5 py-0.5 rounded-full">
                    تأميني معك بالإحسان
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white">
                  مع تأميني وثيقتك هي جزء من عطاء يمتد أثره مع إحسان
                </h2>
                <p className="text-emerald-100 text-xs sm:text-sm max-w-xl">
                  جزء من كل وثيقة تصدرها عبر تأميني يوجّه تلقائياً لدعم الحالات الإنسانية والمشاريع التنموية بالتعاون مع المنصة الوطنية للعمل الخيري (إحسان).
                </p>
              </div>
            </div>

            <div>
              <a
                href="https://ehsan.sa"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-emerald-50 text-teal-900 font-bold px-6 py-3 rounded-full text-xs sm:text-sm shadow-md transition-all active:scale-95 whitespace-nowrap"
              >
                <span>اعرف أكثر</span>
                <ArrowLeft className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
