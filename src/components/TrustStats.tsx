import { Star, Gift, Printer, Percent, Award, ShieldCheck } from "lucide-react";

export function TrustStats() {
  return (
    <section className="py-14 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-blue-600 bg-blue-100/60 px-3.5 py-1 rounded-full mb-2 inline-block">
            ثقة لا تُضاهى
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            الأعلى تقييماً كمنصة تأمين في السعودية
          </h2>
        </div>

        {/* 4 Trust Columns (from Screenshot 3) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Qitaf by stc */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs text-center flex flex-col items-center justify-between hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <span className="font-black text-slate-900 text-lg">qitaf</span>
                <span className="text-xs text-purple-600 font-bold">by stc</span>
              </div>
              <h3 className="font-bold text-slate-800 text-sm">اكسب واستبدل مع قطاف</h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                اجمع نقاط قطاف مع كل عملية شراء لوثيقة التأمين واستبدلها بمكافآت قيّمة.
              </p>
            </div>
            <span className="text-[10px] text-slate-400 mt-4 block">تطبق الشروط والأحكام</span>
          </div>

          {/* Card 2: Google 4.7 Rating */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs text-center flex flex-col items-center justify-between hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Star className="w-6 h-6 fill-amber-400" />
            </div>
            <div>
              <div className="flex items-baseline justify-center gap-1.5 mb-1">
                <span className="text-2xl font-black text-slate-900">4.7</span>
                <span className="text-xs font-bold text-slate-400">/ 5</span>
              </div>
              <h3 className="font-bold text-slate-800 text-sm">المنصة الأعلى تقييماً</h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                بناءً على أكثر من <strong>+200,000</strong> مراجعة حقيقية وموثقة من عملائنا في جوجل والمتجر.
              </p>
            </div>
            <div className="flex items-center gap-1 mt-4 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
          </div>

          {/* Card 3: Self Service */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs text-center flex flex-col items-center justify-between hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Printer className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-600 block mb-1">خدمة ذاتية فورية</span>
              <h3 className="font-bold text-slate-800 text-sm">طباعة واستعلام 24/7</h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                طباعة الوثيقة فوراً، التحقق من سريان التأمين، والاستعلام عن حالة نجم والمرور بضغطة زر.
              </p>
            </div>
            <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md mt-4">
              إلكترونية بالكامل
            </span>
          </div>

          {/* Card 4: 1000+ Discounts */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs text-center flex flex-col items-center justify-between hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Percent className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-black text-slate-900 block mb-1">+1,000</span>
              <h3 className="font-bold text-slate-800 text-sm">خصومات وعروض خاصة</h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                عروض حصرية لعملاء تأميني في كافة القطاعات من صيانة، غسيل، مطاعم ومراكز ترفيهية.
              </p>
            </div>
            <span className="text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-md mt-4">
              متاحة لجميع المشتركين
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
