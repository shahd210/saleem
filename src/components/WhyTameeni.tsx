import { WHY_TAMEENI_FEATURES } from "../data/tameeniData";
import {
  Trophy,
  LayoutGrid,
  Eye,
  Sparkles,
  Network,
  ShieldCheck,
} from "./Icons";

export function WhyTameeni() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Trophy":
        return <Trophy className="w-6 h-6 text-amber-500" />;
      case "LayoutGrid":
        return <LayoutGrid className="w-6 h-6 text-blue-500" />;
      case "Eye":
        return <Eye className="w-6 h-6 text-emerald-500" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-purple-500" />;
      case "Network":
        return <Network className="w-6 h-6 text-sky-500" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-indigo-500" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title (from Screenshot 3) */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            لماذا تأميني؟
          </h2>
          <p className="text-slate-500 text-base sm:text-lg font-medium">
            اختر شريك تأمينك بذكاء
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_TAMEENI_FEATURES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-right group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Floating Icon Emblem */}
                <div className="w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-blue-50/70 border border-slate-100 group-hover:border-blue-100 flex items-center justify-center transition-colors shadow-2xs">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                <span>معتمد وموثق</span>
                <span>تأميني 2026</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
