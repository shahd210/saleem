export interface TameeniPlusItem {
  id: string;
  brand: string;
  title: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercent: number;
  badge: string;
  badgeColor?: string;
  image: string;
  monthlyNote?: string;
}

export interface ProductItem {
  id: string;
  title: string;
  category: "individuals" | "corporate";
  tagline: string;
  iconName: string;
  status: "متاح الآن" | "قريباً";
  image: string;
  popular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const TAMEENI_PLUS_OFFERS: TameeniPlusItem[] = [
  {
    id: "medal",
    brand: "تأميني",
    title: "ميدالية تأميني الفاخرة",
    description: "لأنك عميل مميز عندنا، حبينا نقول لك شكراً على طريقتنا بتصميم أنيق ومواد عالية الجودة.",
    originalPrice: 70,
    discountedPrice: 19,
    discountPercent: 73,
    badge: "توصيل مجاني 🚚",
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "sungard",
    brand: "صن جارد",
    title: "باقة التظليل والعزل الحراري والحماية",
    description: "عازل حراري نانوي سيراميك لجميع الزجاج ما عدا الزجاج الأمامي + طبقة شمعية + بخاخ حماية للفرش الداخلي.",
    originalPrice: 900,
    discountedPrice: 299,
    discountPercent: 67,
    badge: "ضمان مدى الحياة 🛡️",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "fitnesstime",
    brand: "وقت اللياقة",
    title: "اشتراك 4 أشهر في وقت اللياقة",
    description: "استمتع بأحدث التجهيزات والمسابح والمدربين المعتمدين في جميع فروع وقت اللياقة بالمملكة.",
    originalPrice: 2800,
    discountedPrice: 1249,
    discountPercent: 55,
    badge: "تقسيط عبر تمارا 💳",
    monthlyNote: "يبدأ من 214.83 ريال/بالشهر مع تمارا",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "swvl",
    brand: "سويفل",
    title: "10 غسلات سيارات (خارجي وداخلي) - في مكانك",
    description: "غسيل بخار متنقل وتعقيم داخلي متكامل يصلك أينما كنت عند بيتك أو عملك بصلاحية 6 أشهر.",
    originalPrice: 598,
    discountedPrice: 279,
    discountPercent: 53,
    badge: "خدمة عند باب بيتك 🫧",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=500&auto=format&fit=crop&q=80",
  },
];

export const INSURANCE_PARTNERS = [
  { name: "ملاذ للتأمين", englishName: "Malath", code: "malath" },
  { name: "التأمين العربية", englishName: "Arabia Insurance", code: "arabia" },
  { name: "ولاء للتأمين", englishName: "Walaa", code: "walaa" },
  { name: "الدرع العربي", englishName: "Arabian Shield", code: "shield" },
  { name: "أسيج للتأمين", englishName: "ACIG", code: "acig" },
  { name: "سلامة للتأمين", englishName: "Salama", code: "salama" },
  { name: "المتكاملة", englishName: "Mutakamela", code: "mutakamela" },
  { name: "الخليجية العامة", englishName: "Gulf General", code: "ggc" },
  { name: "الاتحاد للتأمين", englishName: "Al Etihad", code: "etihad" },
  { name: "التعاونية", englishName: "Tawuniya", code: "tawuniya" },
  { name: "تكافل الراجحي", englishName: "Al Rajhi Takaful", code: "rajhi" },
  { name: "ميدغلف", englishName: "Medgulf", code: "medgulf" },
];

export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: "cars",
    title: "تأمين السيارات",
    category: "individuals",
    tagline: "مقارنة فورية بين أكثر من 20 شركة وإصدار الوثيقة بلحظات.",
    iconName: "Car",
    status: "متاح الآن",
    popular: true,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "medical-malpractice",
    title: "الأخطاء الطبية",
    category: "individuals",
    tagline: "حماية مهنية شاملة معتمدة للممارسين والأطباء في المملكة.",
    iconName: "Stethoscope",
    status: "متاح الآن",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "domestic-workers",
    title: "العمالة المنزلية",
    category: "individuals",
    tagline: "تغطية تأمينية تضمن حقوق صاحب العمل والعامل المنزلي.",
    iconName: "Home",
    status: "متاح الآن",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "travel",
    title: "تأمين السفر",
    category: "individuals",
    tagline: "سافر مطمئناً بتغطيات دولية تلبي متطلبات تأشيرة الشنغن وغيرها.",
    iconName: "Plane",
    status: "متاح الآن",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "premium-residency",
    title: "الإقامة المميزة",
    category: "individuals",
    tagline: "حلول تأمينية متوافقة مع متطلبات مركز الإقامة المميزة.",
    iconName: "CreditCard",
    status: "متاح الآن",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80",
  },
  // Corporate products
  {
    id: "fleet",
    title: "أسطول السيارات للشركات",
    category: "corporate",
    tagline: "إدارة وتأمين شامل لمركبات الشركة وعربات التوزيع بأسعار تنافسية.",
    iconName: "Truck",
    status: "متاح الآن",
    popular: true,
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "corporate-health",
    title: "التأمين الطبي للمنشآت",
    category: "corporate",
    tagline: "شبكة طبية واسعة لتغطية منسوبي وموظفي الشركات والمؤسسات.",
    iconName: "HeartPulse",
    status: "متاح الآن",
    popular: true,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "cargo",
    title: "نقل البضائع والمستودعات",
    category: "corporate",
    tagline: "تغطية أخطار النقل البري والبحري والجوي للبضائع والممتلكات.",
    iconName: "Container",
    status: "متاح الآن",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&auto=format&fit=crop&q=80",
  },
];

export const COMPARISON_PLANS = [
  {
    id: "third-party",
    name: "ضد الغير (الطرف الثالث)",
    badge: "التغطية الأساسية",
    badgeColor: "bg-slate-100 text-slate-700 border-slate-300",
    description: "التغطية الأساسية المطلوبة نظاماً لتجنب المخالفات المرورية وحماية مسؤوليتك المالية أمام الآخرين.",
    priceStarting: "يبدأ من 450 ر.س / سنوياً",
    popular: false,
    highlightColor: "border-slate-200",
    buttonVariant: "secondary",
    features: [
      { text: "المسؤولية المدنية والمالية تجاه الغير (أضرار ممتلكات الآخرين حتى 10 ملايين ريال)", included: true },
      { text: "إلزامي قانوناً في المملكة العربية السعودية لجميع المركبات", included: true },
      { text: "تغطية ديات والإصابات الجسدية للطرف الثالث", included: true },
      { text: "إصلاح أضرار سيارتك الشخصية عند تسببك بالحادث", included: false },
      { text: "تغطية الكوارث الطبيعية (سيول، برد، عواصف)", included: false },
      { text: "السرقة والحريق الكلي أو الجزئي للمركبة", included: false },
      { text: "سيارة بديلة أثناء فترة الإصلاح", included: false },
      { text: "خدمة المساعدة على الطريق مجاناً 24/7", included: false },
    ],
  },
  {
    id: "comprehensive",
    name: "التأمين الشامل",
    badge: "أفضل تغطية ★ الأكثر طلباً",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300 font-bold",
    description: "توفر هذه التغطية أقصى درجات الأمان وحماية سيارتك في حال وقوع الحوادث حيث تغطي تكاليف الإصلاح أو الاستبدال بغض النظر عن من كان السبب في الحادث.",
    priceStarting: "يبدأ من 1,150 ر.س / سنوياً",
    popular: true,
    highlightColor: "border-blue-600 ring-4 ring-blue-500/10 shadow-xl",
    buttonVariant: "primary",
    features: [
      { text: "المسؤولية تجاه الغير وممتلكاتهم حتى 10 ملايين ريال", included: true },
      { text: "إصلاح سيارتك في الوكالة أو الورش المعتمدة", included: true },
      { text: "تغطية أضرار الكوارث الطبيعية والسيول والبرد", included: true },
      { text: "الحماية ضد سرقة المركبة أو الحريق", included: true },
      { text: "عدم تحمل نسبة استهلاك قطع الغيار الجديدة", included: true },
      { text: "إمكانية تقسيط الوثيقة عبر تابي وتمارا بدون فوائد", included: true },
      { text: "تعويض الحوادث الشخصية للسائق والركاب", included: true },
      { text: "خدمة المساعدة على الطريق (سحب، تبديل بطارية، بنشر)", included: true },
      { text: "سيارة بديلة مجانية خلال فترة الإصلاح", included: true },
    ],
  },
  {
    id: "third-party-plus",
    name: "ضد الغير بلس",
    badge: "التغطية المخصصة",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-300 font-medium",
    description: "توفر تغطية التأمين ضد الغير الأساسية مضافاً إليها مزايا وتغطيات إضافية مختارة لحماية مركبتك بتكلفة اقتصادية مدروسة.",
    priceStarting: "يبدأ من 720 ر.س / سنوياً",
    popular: false,
    highlightColor: "border-purple-200",
    buttonVariant: "secondary",
    features: [
      { text: "المسؤولية القانونية تجاه الغير والأطراف الأخرى", included: true },
      { text: "تغطية إصلاح سيارة مالك الوثيقة بحدود مادية محددة", included: true },
      { text: "تغطيات إضافية ضد الزجاج الأمامي والحريق", included: true },
      { text: "خدمة المساعدة على الطريق وسحب السيارة في الطوارئ", included: true },
      { text: "إصلاح بالوكالة لجميع أنواع الحوادث", included: false },
      { text: "سيارة بديلة مجانية لمدة تزيد عن 14 يوماً", included: false },
      { text: "تغطية كاملة للكوارث بدون نسبة تحمل", included: false },
    ],
  },
];

export const WHY_TAMEENI_FEATURES = [
  {
    id: "first-in-saudi",
    title: "الأولى في المملكة",
    description: "كمنصة رائدة وأول وسيط إلكتروني معتمد من هيئة التأمين، نخدم ملايين السائقين والمؤسسات.",
    icon: "Trophy",
  },
  {
    id: "one-stop-shop",
    title: "وجهة واحدة للتأمين",
    description: "نقدم لك خيارات متعددة من كبرى شركات التأمين وعملية مقارنة وشراء سلسة وسريعة تلبي احتياجاتك.",
    icon: "LayoutGrid",
  },
  {
    id: "transparency",
    title: "الشفافية والوضوح",
    description: "نأخذ الوضوح والبساطة على محمل الجد، ولهذا نضمن استخدام مصطلحات مباشرة بدون أي رسوم خفية.",
    icon: "Eye",
  },
  {
    id: "technical-expertise",
    title: "الخبرة التقنية والاستشارية",
    description: "كفاءة تعتمد عليها، ربط مباشر مع أنظمة المرور ونجم، وإجابة فورية لجميع استفساراتك على مدار الساعة.",
    icon: "Sparkles",
  },
  {
    id: "widest-network",
    title: "النطاق الأوسع لعروض التأمين",
    description: "نوفر لك شبكة واسعة من خيارات شركات التأمين المعتمدة لضمان أفضل تغطية بالسعر الأنسب.",
    icon: "Network",
  },
  {
    id: "unified-pricing",
    title: "تسعير موحّد ومضمون",
    description: "نضمن لك أسعاراً مطابقة لأسعار شركات التأمين الرسمية، إن لم تكن أقل من خلال عروضنا الحصرية لعملائنا.",
    icon: "ShieldCheck",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "التأمين ضروري لتجديد الاستمارة؟",
    answer: "نعم، يعتبر وجود وثيقة تأمين سارية ومربوطة بنظام المرور السعودي شرطاً أساسياً وإلزامياً لتجديد رخصة السير (الاستمارة) عبر منصة أبشر، حيث يتم التحديث الفوري لحالة التأمين خلال دقائق من إتمام الشراء عبر تأميني.",
    category: "مرور",
  },
  {
    question: "كيف أعرف خصم نجم حقي؟",
    answer: "يُحسب خصم نجم (سجل القيادة الخالي من الحوادث) تلقائياً عند إدخال رقم الهوية والرقم التسلسلي للمركبة في تأميني، ويبدأ الخصم من 10% لسنة واحدة بدون مطالبات ويصل حتى 50% لـ 3 سنوات فأكثر بدون حوادث.",
    category: "نجم والخصومات",
  },
  {
    question: "وش نظام الرصد الآلي الجديد 2026؟",
    answer: "يقوم نظام الرصد الآلي المعتمد من الإدارة العامة للمرور برصد المركبات التي لا تحمل تأميناً سارياً عبر الكاميرات الذكية المنتشرة في كافة طرق المملكة كل 15 يوماً، وتبلغ قيمة مخالفة عدم وجود تأمين بين 100 إلى 150 ريال لكل رصد.",
    category: "أنظمة المرور",
  },
  {
    question: "أقدر ألغي التأمين وأرجع فلوسي؟",
    answer: "نعم، يحق لحامل الوثيقة إلغاء تأمين المركبة واسترداد المبلغ المتبقي تناسبياً وفقاً لتعليمات هيئة التأمين في 3 حالات رئيسية: 1) إسقاط سجل المركبة (التشليح)، 2) انتقال ملكية المركبة لمشترٍ آخر، 3) وجود وثيقة تأمين بديلة تغطي نفس الفترة.",
    category: "الإلغاء والاسترداد",
  },
  {
    question: "هل هيئة التأمين توحد الأسعار؟",
    answer: "لا توحد هيئة التأمين الأسعار؛ بل تضع أطراً تنظيمية ومعايير اكتوارية صارمة، بينما تتنافس شركات التأمين في تقديم الأسعار بناءً على تقييم المخاطر (عمر السائق، نوع المركبة، سجل الحوادث، والمدينة)، وهو ما يجعل المقارنة في تأميني خيارك الأمثل للعثور على أوفر سعر.",
    category: "الأسعار والتنظيم",
  },
  {
    question: "كم مدة صلاحية وثيقة التأمين؟",
    answer: "مدة سريان وثيقة تأمين المركبات النموذجية في المملكة العربية السعودية هي سنة ميلادية كاملة (365 يوماً) تبدأ من تاريخ ووقت بدء التغطية المحدد في الوثيقة.",
    category: "الوثيقة",
  },
];
