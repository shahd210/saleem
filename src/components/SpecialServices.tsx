import { ShieldCheck, Percent, ArrowLeft, Car, Award, ChevronLeft } from "./Icons";

export function SpecialServices() {
  return (
    <section className="py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Hero Accident & Claim Assistance Service (from Screenshot 2) */}
          <div className="bg-gradient-to-br from-sky-50 via-white to-blue-50/50 rounded-3xl p-6 sm:p-8 border border-sky-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
            {/* Background accent */}
            <div className="absolute top-0 left-0 w-44 h-44 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10 text-right">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold text-blue-600 block mb-1">خدمة هيرو المتكاملة</span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  تبي هيرو معك من التبليغ عن الحادث إلى المطالبة؟
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  فريقنا المتخصص يقف بجانبك فور وقوع أي حادث لا قدر الله؛ نتولى متابعة تقرير نجم، تقدير الأضرار، ومتابعة التعويض مع شركة التأمين خطوة بخطوة حتى استلام سيارتك جاهزة.
                </p>
              </div>
            </div>

            <div className="pt-6 relative z-10 flex items-center justify-between">
              <button
                onClick={() => alert("خدمة هيرو: متاحة مجاناً لجميع حاملي وثائق التأمين الشامل عبر منصة وتطبيق تأميني.")}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md shadow-blue-500/20 active:scale-95 transition-all"
              >
                <span>تعرف على الخدمة</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5 text-xs text-blue-800 font-semibold bg-blue-100/70 px-3 py-1 rounded-full">
                <Car className="w-3.5 h-3.5" />
                <span>دعم ميداني 24/7</span>
              </div>
            </div>
          </div>

          {/* Card 2: 1000+ Store Discounts Service (from Screenshot 2) */}
          <div className="bg-gradient-to-br from-amber-50/70 via-white to-orange-50/40 rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
            {/* Background accent */}
            <div className="absolute top-0 left-0 w-44 h-44 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10 text-right">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-500/20">
                <Percent className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold text-amber-600 block mb-1">مكافآت وخصومات الشركاء</span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  نتجاوز حدود التأمين... ونكملها لك بعروض وخصومات من أكثر من 1000 متجر
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  بمجرد إصدار وثيقتك، تفتح لك أبواب الخصومات الحصرية في كبرى المطاعم، المقاهي، محطات الوقود، مراكز الصيانة، ونوادي اللياقة في كافة مدن المملكة.
                </p>
              </div>
            </div>

            <div className="pt-6 relative z-10 flex items-center justify-between">
              <a
                href="#tameeni-plus"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md active:scale-95 transition-all"
              >
                <span>تصفح العروض</span>
                <ChevronLeft className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold bg-amber-100/70 px-3 py-1 rounded-full">
                <Award className="w-3.5 h-3.5" />
                <span>خصومات حتى 50%</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
