import { INSURANCE_PARTNERS } from "../data/tameeniData";
import { ShieldCheck } from "./Icons";

export function PartnersMarquee() {
  return (
    <section className="py-8 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            <h3 className="text-xs sm:text-sm font-bold text-slate-700">
              شركاؤنا من كبرى شركات التأمين المعتمدة في المملكة
            </h3>
          </div>
          <span className="text-xs text-slate-600 font-semibold hidden sm:inline">
            أكثر من 20 شركة تحت إشراف هيئة التأمين
          </span>
        </div>
      </div>

      {/* Infinite scrolling ticker */}
      <div className="relative w-full overflow-hidden flex items-center mask-radial">
        <div className="flex items-center gap-6 sm:gap-10 animate-marquee whitespace-nowrap py-2">
          {[...INSURANCE_PARTNERS, ...INSURANCE_PARTNERS].map((partner, index) => (
            <div
              key={`${partner.code}-${index}`}
              className="flex items-center gap-3 bg-slate-50/80 hover:bg-blue-50/60 border border-slate-200/70 hover:border-blue-200 px-4 py-2.5 rounded-2xl transition-all cursor-pointer group shadow-2xs hover:shadow-xs"
            >
              {/* Monogram emblem */}
              <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center font-bold text-xs text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-2xs">
                {partner.name.charAt(0)}
              </div>
              <div className="text-right">
                <span className="block text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                  {partner.name}
                </span>
                <span className="block text-[10px] text-slate-400 group-hover:text-slate-500 font-sans tracking-wide">
                  {partner.englishName}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
