import { Smartphone, Bell, Zap, Shield, Star, Download } from "lucide-react";

export function MobileAppSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Right Column: Copy & App Badges (in RTL) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-bold px-3.5 py-1.5 rounded-full border border-blue-200">
              <Smartphone className="w-3.5 h-3.5" />
              <span>تطبيق الهواتف الذكية</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              تأمينك أسهل مع <br />
              <span className="text-blue-600">تطبيق تأميني</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              تجربة استخدام أفضل وإشعارات فورية، إشعاراتنا تتكفل بتنبيهك وتخليك دائماً بأمان. عروضنا الحصرية متوفرة على التطبيق فقط.
            </p>

            {/* Micro Benefits Pills */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-semibold">
                <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Bell className="w-4 h-4" />
                </div>
                <span>تنبيهات تلقائية قبل انتهاء وثيقتك بـ 30 يوماً لتجنب مخالفات الرصد الآلي.</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-semibold">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <span>تجديد بنقرة واحدة وحفظ فوري للوثيقة في المحفظة الإلكترونية (Apple Wallet).</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-semibold">
                <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4" />
                </div>
                <span>عروض وكوبونات حصرية لمستخدمي التطبيق في أكثر من 1,000 علامة تجارية.</span>
              </div>
            </div>

            {/* Store Download Buttons (Matching Screenshot 3) */}
            <div className="pt-4">
              <span className="block text-xs font-bold text-slate-500 mb-3">
                حمّل تطبيقنا الآن:
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {/* App Store */}
                <a
                  href="#appstore"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2.5 shadow-md hover:scale-105 active:scale-95 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <div className="text-right">
                    <span className="block text-[9px] text-slate-400 leading-none">Available on the</span>
                    <span className="text-xs font-bold leading-tight">App Store</span>
                  </div>
                </a>

                {/* Google Play */}
                <a
                  href="#googleplay"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2.5 shadow-md hover:scale-105 active:scale-95 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <div className="text-right">
                    <span className="block text-[9px] text-slate-400 leading-none">GET IT ON</span>
                    <span className="text-xs font-bold leading-tight">Google Play</span>
                  </div>
                </a>

                {/* Huawei AppGallery */}
                <a
                  href="#appgallery"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2.5 shadow-md hover:scale-105 active:scale-95 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <div className="text-right">
                    <span className="block text-[9px] text-slate-400 leading-none">EXPLORE IT ON</span>
                    <span className="text-xs font-bold leading-tight">AppGallery</span>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Left Column: Modern Smartphone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-80 rounded-[40px] bg-slate-900 p-3.5 shadow-2xl ring-1 ring-slate-800 border-4 border-slate-700">
              
              {/* Dynamic Island / Speaker */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 ml-4" />
              </div>

              {/* Screen Content */}
              <div className="relative bg-slate-50 rounded-[32px] overflow-hidden p-4 pt-10 text-right space-y-3 font-sans">
                
                {/* App Header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
                      ت
                    </div>
                    <span className="font-bold text-xs text-slate-800">تأميني</span>
                  </div>
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                    20 عرض متاح
                  </span>
                </div>

                {/* Simulated Car Card inside App */}
                <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1.5">
                  <div className="flex justify-between items-center text-[10px] text-slate-500">
                    <span>تويوتا كامري 2024</span>
                    <span className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                      خصم نجم 50%
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline pt-1">
                    <span className="text-xs font-bold text-slate-800">ملاذ للتأمين</span>
                    <span className="text-sm font-black text-blue-600">620 ر.س</span>
                  </div>
                </div>

                {/* Offer 2 */}
                <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1.5">
                  <div className="flex justify-between items-center text-[10px] text-slate-500">
                    <span>ولاء للتأمين - شامل</span>
                    <span className="text-purple-600 font-bold bg-purple-50 px-1.5 py-0.5 rounded">
                      إصلاح وكالة
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline pt-1">
                    <span className="text-xs font-bold text-slate-800">تغطية كوارث وسيول</span>
                    <span className="text-sm font-black text-blue-600">1,340 ر.س</span>
                  </div>
                </div>

                {/* Push notification banner inside app screen */}
                <div className="bg-gradient-to-r from-blue-600 to-sky-500 text-white p-3 rounded-2xl text-[11px] shadow-sm flex items-center gap-2">
                  <Bell className="w-4 h-4 shrink-0 text-amber-300" />
                  <span>تنبيه: وثيقة سيارتك سارية حتى 2027</span>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[10px] text-slate-400">تقييم التطبيق 4.8 / 5 في المتجر</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
