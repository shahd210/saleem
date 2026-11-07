import {
  ShieldCheck,
  Phone,
  Mail,
  Eye,
  Heart,
  Download,
  Share2,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Regulatory Card (from Screenshot 4) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-800/80 border border-slate-700/80 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-black text-lg">تأميني لوساطة التأمين الإلكتروني</span>
                <span className="text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2 py-0.5 rounded-full">
                  ترخيص معتمد
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-3xl">
                شركة مرخصة من هيئة التأمين بموجب ترخيص الوساطة التأمينية الإلكترونية رقم (و ت أ/202305/1)، وتزاول أعمالها تحت إشراف ورقابة هيئة التأمين.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-700 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors" aria-label="X Twitter">
                𝕏
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-700 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors" aria-label="Instagram">
                📸
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-700 hover:bg-blue-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors" aria-label="LinkedIn">
                in
              </a>
            </div>

            <button
              onClick={() => alert("أدوات الوصول: تتيح لك تكبير الخط، التباين العالي، وقارئ الشاشة لذوي الإعاقة البصرية.")}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white bg-slate-700/60 px-3 py-2 rounded-xl transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>أدوات الوصول</span>
            </button>
          </div>
        </div>

        {/* 3 Columns Navigation (from Screenshot 4) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Products Column */}
          <div className="col-span-2 sm:col-span-1 space-y-3">
            <h4 className="text-white font-bold text-sm border-b border-slate-800 pb-2">
              المنتجات
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#products" className="hover:text-blue-400 transition-colors">تأمين السيارات</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">تأمين الصحي للمنشآت</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">تأمين ضد الأخطاء الطبية</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">تأمين العمالة المنزلية</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">تأمين السفر</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">تأمين أسطول السيارات</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">تأمين الإقامة المميزة</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">الحماية والادخار</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">نقل البضائع والمستودعات</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm border-b border-slate-800 pb-2">
              الدعم والمساندة
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="tel:8002444455" className="hover:text-blue-400 transition-colors">تواصل معنا (8002444455)</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">الشروط والأحكام</a></li>
              <li><a href="https://ia.gov.sa" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">هيئة التأمين السعودية</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">إلغاء واسترداد الوثيقة</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm border-b border-slate-800 pb-2">
              الموارد
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">مدونة تأميني</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">لوائح هيئة التأمين</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">شركاؤنا من شركات التأمين</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">الوظائف والفرص المهنية</a></li>
            </ul>
          </div>

          {/* App download & Contact */}
          <div className="col-span-2 sm:col-span-1 space-y-4">
            <h4 className="text-white font-bold text-sm border-b border-slate-800 pb-2">
              حمّل تطبيق تأميني الآن
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              وفّر وقتك وتحكّم في كافة وثائق مركباتك وعائلتك من مكان واحد.
            </p>
            <div className="flex flex-col gap-2">
              <a href="#" className="bg-slate-800 hover:bg-slate-700 text-white p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between border border-slate-700">
                <span>App Store</span>
                <Download className="w-3.5 h-3.5 text-blue-400" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-slate-700 text-white p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between border border-slate-700">
                <span>Google Play</span>
                <Download className="w-3.5 h-3.5 text-emerald-400" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-slate-700 text-white p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between border border-slate-700">
                <span>AppGallery</span>
                <Download className="w-3.5 h-3.5 text-rose-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Rasan and Saudi Hands badge */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-300">
              تطوير وتشغيل <span className="text-blue-400 font-black">Rasan</span>
            </span>
            <span className="text-slate-600">|</span>
            <span>
              © تأميني 2026. جميع الحقوق محفوظة لشركة تأميني لوساطة التأمين الإلكتروني شركة شخص واحد.
            </span>
          </div>

          <div className="flex items-center gap-2 bg-emerald-950/60 text-emerald-300 border border-emerald-800/60 px-3.5 py-1.5 rounded-full font-bold">
            <span>تثبت بأيادٍ سعودية</span>
            <span className="text-base">🇸🇦</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
