import { useState } from "react";
import { PRODUCTS_LIST } from "../data/tameeniData";
import { ArrowLeft, Car, Stethoscope, Home, Plane, CreditCard, Truck, HeartPulse, Sparkles, Building2, User } from "lucide-react";

interface ProductsShowcaseProps {
  onSelectProduct: (productId: string) => void;
}

export function ProductsShowcase({ onSelectProduct }: ProductsShowcaseProps) {
  const [activeAudience, setActiveAudience] = useState<"individuals" | "corporate">("individuals");

  const filteredProducts = PRODUCTS_LIST.filter(
    (item) => item.category === activeAudience
  );

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case "Car":
        return <Car className="w-5 h-5" />;
      case "Stethoscope":
        return <Stethoscope className="w-5 h-5" />;
      case "Home":
        return <Home className="w-5 h-5" />;
      case "Plane":
        return <Plane className="w-5 h-5" />;
      case "CreditCard":
        return <CreditCard className="w-5 h-5" />;
      case "Truck":
        return <Truck className="w-5 h-5" />;
      case "HeartPulse":
        return <HeartPulse className="w-5 h-5" />;
      default:
        return <Car className="w-5 h-5" />;
    }
  };

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-right">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>حلول شاملة لكل الاحتياجات</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
              تأمين سيارات وأكثر!
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              منتجات التأمين المتنوعة للأفراد والمنشآت بأفضل الأسعار وأسهل إجراءات.
            </p>
          </div>

          {/* Segmented Audience Control (Matching Screenshot 2 tabs) */}
          <div className="inline-flex bg-slate-100 p-1.5 rounded-2xl self-start md:self-auto border border-slate-200">
            <button
              onClick={() => setActiveAudience("individuals")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeAudience === "individuals"
                  ? "bg-white text-blue-600 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <User className="w-4 h-4" />
              <span>الأفراد</span>
            </button>
            <button
              onClick={() => setActiveAudience("corporate")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeAudience === "corporate"
                  ? "bg-white text-blue-600 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>للشركات والمنشآت</span>
            </button>
          </div>
        </div>

        {/* Products Grid (Cards from Screenshot 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="group bg-slate-50/70 hover:bg-white rounded-3xl p-5 border border-slate-200/80 hover:border-blue-300 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-right relative overflow-hidden"
            >
              {/* Product Visual */}
              <div className="relative h-32 rounded-2xl overflow-hidden mb-4 bg-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                
                {/* Icon badge */}
                <div className="absolute top-2 right-2 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md text-blue-600 flex items-center justify-center shadow-xs">
                  {getProductIcon(item.iconName)}
                </div>

                {item.popular && (
                  <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                    الأكثر طلباً
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <div className="space-y-1.5 flex-1 mb-4">
                <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {item.tagline}
                </p>
              </div>

              {/* Action Button: ابدأ الآن */}
              <button
                onClick={() => onSelectProduct(item.id)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-white group-hover:bg-blue-600 text-blue-600 group-hover:text-white border border-blue-200 group-hover:border-blue-600 transition-all flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <span>ابدأ الآن</span>
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
