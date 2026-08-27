import { ProjectDetail } from '../types';

export interface VisualMockupScreen {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  fallbackGradient: string;
  prompt: string;
  type: 'dashboard' | 'mobile_app' | 'hardware_iot' | 'analytics';
  badge: string;
  roiTag: string;
}

export interface ProjectVisualAsset {
  projectId: string;
  domainName: string;
  categoryEn: string;
  categoryFa: string;
  heroImageUrl: string;
  heroFallbackGradient: string;
  heroImagePrompt: string;
  heroPromptFa: string;
  aspectRatio: '16:9' | '4:3' | '1:1';
  styleTags: string[];
  roiHighlights: {
    label: string;
    value: string;
    sublabel: string;
    color: 'emerald' | 'amber' | 'teal' | 'cyan' | 'purple' | 'rose';
  }[];
  mockupScreens: VisualMockupScreen[];
  architectureDiagramConcept: {
    title: string;
    description: string;
    nodes: { name: string; type: string; status: 'active' | 'synced' | 'optimized' }[];
  };
}

// Data repository containing rich visual mockups and prompt specifications for all 10 projects
const PROJECT_VISUALS_MAP: Record<string, ProjectVisualAsset> = {
  C2: {
    projectId: 'C2',
    domainName: 'بازرگانی و قیمت‌گذاری هوشمند',
    categoryEn: 'Retail Pricing & Elasticity AI',
    categoryFa: 'سامانه تحلیل کشش قیمت و بهینه‌سازی پروموشن',
    heroImageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    heroFallbackGradient: 'from-emerald-900 via-slate-900 to-teal-950',
    heroImagePrompt: 'High-end enterprise retail pricing analytics dashboard displayed on ultra-wide curved monitor. Futuristic UI showing 3D price elasticity curves, promotional incremental margin gauges, cross-SKU cannibalization heatmaps, and sales forecast envelopes in emerald green, gold, and deep navy tones. Modern corporate retail boardroom background, cinematic lighting, 8k resolution, photorealistic.',
    heroPromptFa: 'داشبورد مدرن تحلیل کشش تقاضا و محاسبه بلادرنگ بازدهی پروموشن با پالت رنگی زمردی و نمودارهای سه‌بعدی پیش‌بینی سود فزاینده و کانیبالیزاسیون.',
    aspectRatio: '16:9',
    styleTags: ['Enterprise BI', 'Elasticity Heatmap', 'What-If Simulation', 'Refah POS Stream'],
    roiHighlights: [
      { label: 'نسبت منفعت به هزینه (BCR)', value: '۶٫۸۴ برابر', sublabel: 'بالاترین بازده در سند تحول', color: 'emerald' },
      { label: 'سود سالانه برآوردی', value: '۴۸٫۵ میلیارد تومان', sublabel: 'حذف پروموشن‌های زیان‌ده', color: 'teal' },
      { label: 'دوره بازگشت سرمایه', value: '۲٫۱ ماه', sublabel: 'پوشش سریع هزینه‌ها', color: 'amber' },
      { label: 'هدف بازده هر ۱ تومان تخفیف', value: '۱٫۸۵ تومان', sublabel: 'افزایش ۶۰٪ نسبت به وضع فعلی', color: 'cyan' },
    ],
    mockupScreens: [
      {
        id: 'c2-mock-1',
        title: 'ماتریس کشش قیمتی متقاطع و مارجین بهینه',
        subtitle: 'Cross-Price Elasticity & Margin Matrix',
        description: 'تحلیل همزمان کشش قیمتی ۶۰۰۰ قلم کالا و هشدار کاهش سود ناخواسته در کالاهای مکمل و جایگزین.',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-emerald-800 to-teal-900',
        prompt: 'Enterprise software UI showing a cross-price elasticity matrix for hypermarket items, SKU price sensitivity slider controls, and incremental margin indicators in glowing emerald data grid.',
        type: 'analytics',
        badge: 'تحلیل کشش تقاضا',
        roiTag: 'سودآوری فوری'
      },
      {
        id: 'c2-mock-2',
        title: 'سپر هوشمند ضد کانیبالیزاسیون (Cannibalization Guard)',
        subtitle: 'Cross-Brand Cannibalization Protector',
        description: 'کشف خودکار سناریوهایی که در آن تخفیف روی یک برند باعث آسیب به حاشیه سود برندهای سودآورتر مجاور می‌شود.',
        imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-slate-900 to-emerald-950',
        prompt: 'Dark mode analytics screen showing network graph of product substitution effects, cannibalization warning nodes in amber, and profit preservation recommendations.',
        type: 'dashboard',
        badge: 'ضد همنوع‌خواری کالا',
        roiTag: 'کاهش ۲۲٪ به کمتر از ۵٪'
      },
      {
        id: 'c2-mock-3',
        title: 'شبیه‌ساز سناریوی زنده کمپین‌های فصلی',
        subtitle: 'What-If Campaign Sandbox',
        description: 'تست اثر درصد تخفیف بر تیراژ فروش و درآمد کل قبل از ابلاغ بخشنامه تخفیف به ۵۰۰ شعبه رفاه.',
        imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-teal-900 to-slate-900',
        prompt: 'Interactive promo campaign simulation tool with before-and-after revenue comparison bars, target ROI dial gauge, and automated promotion schedule timeline.',
        type: 'dashboard',
        badge: 'شبیه‌ساز What-If',
        roiTag: 'دقت پیش‌بینی ۹۴٪'
      }
    ],
    architectureDiagramConcept: {
      title: 'خط‌لوله پردازش داده و کشش تقاضا C2',
      description: 'جریان بلادرنگ فاکتورهای POS، نرمال‌سازی ترند فصلی، یادگیری تقویتی کشش و ارسال پیشنهاد قیمت به ERP',
      nodes: [
        { name: 'POS Data Stream (Kafka)', type: 'Ingestion', status: 'active' },
        { name: 'Seasonality De-trender', type: 'ETL Cleanse', status: 'synced' },
        { name: 'Cross-Elasticity ML Model', type: 'AI Inference', status: 'optimized' },
        { name: 'Commercial Web Portal', type: 'UI / Alerting', status: 'active' }
      ]
    }
  },

  B5: {
    projectId: 'B5',
    domainName: 'زنجیره تامین و موجودی شعب',
    categoryEn: 'Smart Cycle Count & Ghost Inventory AI',
    categoryFa: 'انبارگردانی چرخه‌ای و کشف ناموجودی پنهان',
    heroImageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    heroFallbackGradient: 'from-amber-950 via-slate-900 to-emerald-950',
    heroImagePrompt: 'Modern large retail hypermarket stockroom with a store clerk scanning pallet racks with an AI-powered rugged mobile scanner. Overlay UI showing glowing cyan and amber bounding boxes identifying ghost stock discrepancies between physical shelf and ERP database, clean warehouse lighting, photorealistic.',
    heroPromptFa: 'انبار مدرن و مکانیزه فروشگاه زنجیره‌ای رفاه با دستگاه اسکنر هوشمند دستیار انبارداری و کشف خودکار کالاهای گمشده و ناموجودی پنهان در قفسه‌ها.',
    aspectRatio: '16:9',
    styleTags: ['Warehouse Vision', 'Cycle Counting', 'Ghost Stock AI', 'Mobile Handheld UI'],
    roiHighlights: [
      { label: 'نسبت منفعت به هزینه (BCR)', value: '۵٫۱۲ برابر', sublabel: 'صرفه‌جویی مستقیم در انبار', color: 'emerald' },
      { label: 'سود سالانه برآوردی', value: '۳۶٫۴ میلیارد تومان', sublabel: 'کاهش فروش از دست رفته OOS', color: 'teal' },
      { label: 'دوره بازگشت سرمایه', value: '۲٫۸ ماه', sublabel: 'پایلوت در ۱۵ شعبه', color: 'amber' },
      { label: 'کاهش خطای موجودی سیستم', value: 'از ۱۸٪ به زیر ۳٪', sublabel: 'انبارگردانی پیوسته روزانه', color: 'cyan' },
    ],
    mockupScreens: [
      {
        id: 'b5-mock-1',
        title: 'رادار کشف ناموجودی پنهان (Ghost Stock Radar)',
        subtitle: 'AI Zero-Sales Discrepancy Detector',
        description: 'شناسایی کالاهایی که در سیستم موجودی مثبت دارند اما فروش آن‌ها چند روز متوالی صفر بوده است.',
        imageUrl: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-amber-900 to-slate-900',
        prompt: 'Inventory auditing dashboard tracking inventory anomalies, high-risk ghost stock SKUs with alert indicators, and prioritized store audit queue.',
        type: 'dashboard',
        badge: 'رادار ناموجودی پنهان',
        roiTag: 'رفع مغایرت ۸۰٪ کالاها'
      },
      {
        id: 'b5-mock-2',
        title: 'اپلیکیشن انبارگردانی چرخه‌ای پرسنل سالن',
        subtitle: 'Mobile Cycle Count Companion',
        description: 'پیشنهاد روزانه شمارش فقط ۲۰ قلم کالای پرریسک به جای تعطیلی شعبه برای انبارگردانی سالانه.',
        imageUrl: 'https://images.unsplash.com/photo-1580674684081-7617f13d8d59?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-emerald-950 to-slate-900',
        prompt: 'Clean mobile PDA scanner interface displaying prioritized SKU barcode checklist, fast discrepancy tally counter, and audio confirmation cues.',
        type: 'mobile_app',
        badge: 'اپلیکیشن دستیار شمارش',
        roiTag: '۱۰ دقیقه در روز'
      },
      {
        id: 'b5-mock-3',
        title: 'ماتریس طبقه‌بندی ارزش و ریسک کالایی ABC-XYZ',
        subtitle: 'Dynamic ABC-XYZ Stock Classifier',
        description: 'دسته‌بندی هوشمند کالاها بر مبنای سرعت گردش، حاشیه سود و خطای ثبت برای تنظیم دوره بازرسی.',
        imageUrl: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-slate-900 to-teal-950',
        prompt: 'Visual 3D scatter chart of ABC-XYZ inventory matrix, categorizing fast-moving vs irregular SKUs with automated recount thresholds.',
        type: 'analytics',
        badge: 'تحلیل پویای ABC-XYZ',
        roiTag: 'بهینه‌سازی زمان پرسنل'
      }
    ],
    architectureDiagramConcept: {
      title: 'معماری انبارگردانی چرخه‌ای و تطبیق موجودی B5',
      description: 'اتصال داده‌های صدور فاکتور و اسکن‌های بارکد دستی به هسته احتمالاتی محاسبه خطای موجودی',
      nodes: [
        { name: 'ERP Inventory Snapshot', type: 'Data Ingestion', status: 'active' },
        { name: 'POS Sales Rate Monitor', type: 'Event Stream', status: 'synced' },
        { name: 'Bayesian Ghost Stock Detector', type: 'AI Logic', status: 'optimized' },
        { name: 'Mobile Handheld App (PWA)', type: 'Floor Execution', status: 'active' }
      ]
    }
  },

  B1: {
    projectId: 'B1',
    domainName: 'زنجیره تامین و لجستیک مرکزی',
    categoryEn: 'Supply Chain Demand Forecasting AI',
    categoryFa: 'پیش‌بینی تقاضا و بهینه‌سازی نقطه سفارش مجدد',
    heroImageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    heroFallbackGradient: 'from-cyan-950 via-slate-900 to-blue-950',
    heroImagePrompt: 'Futuristic supply chain control room with multiple holographic displays showing multi-tier probabilistic demand forecast envelopes for hypermarkets. LightGBM & Prophet algorithms predicting seasonal demand spikes, automated purchase order trigger alerts, and inventory turnover dashboards, high-tech aesthetic, 8k.',
    heroPromptFa: 'مرکز کنترل لجستیک و تامین رفاه با پیش‌بینی تقاضای مبتنی بر یادگیری ماشین، مدل‌سازی فصلی‌بودن و صدور خودکار سفارش خرید به تامین‌کنندگان.',
    aspectRatio: '16:9',
    styleTags: ['Demand Forecasting', 'Prophet/LightGBM', 'Safety Stock AI', 'Automated PO'],
    roiHighlights: [
      { label: 'نسبت منفعت به هزینه (BCR)', value: '۴٫۷۵ برابر', sublabel: 'کاهش ضایعات و انباشت', color: 'emerald' },
      { label: 'سود سالانه برآوردی', value: '۴۱٫۲ میلیارد تومان', sublabel: 'بهبود گردش موجودی کالا', color: 'teal' },
      { label: 'دوره بازگشت سرمایه', value: '۳٫۲ ماه', sublabel: 'پوشش زنجیره FMCG', color: 'amber' },
      { label: 'کاهش خطای پیش‌بینی تقاضا', value: 'از ۳۵٪ به ۱۲٪ (MAPE)', sublabel: 'افزایش دقت ۳ برابری', color: 'cyan' },
    ],
    mockupScreens: [
      {
        id: 'b1-mock-1',
        title: 'منحنی پیش‌بینی تقاضای چندافقی ۹۰ روزه',
        subtitle: 'Multi-Horizon Demand Prediction Curve',
        description: 'ترکیب فاکتورهای تقویمی، تعطیلات رسمی، آب‌وهوا، پروموشن‌ها و روند تاریخی برای تخمین نیاز شعب.',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-blue-900 to-slate-900',
        prompt: 'Forecasting analytics dashboard with confidence interval bands, seasonal decomposition sub-charts, and lead-time variability metrics.',
        type: 'analytics',
        badge: 'مدل پیش‌بین تقاضا',
        roiTag: 'کاهش خطای MAPE'
      },
      {
        id: 'b1-mock-2',
        title: 'محاسبه‌گر پویای نقطه سفارش مجدد (Dynamic ROP)',
        subtitle: 'Dynamic Reorder Point & Safety Stock',
        description: 'تنظیم خودکار ذخیره احتیاطی بر اساس نوسانات تحویل تامین‌کننده بدون انباشت سرمایه در انبارها.',
        imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-slate-900 to-cyan-950',
        prompt: 'Inventory reorder dashboard highlighting automated purchase order recommendations, supplier lead time reliability gauge, and stockout risk meters.',
        type: 'dashboard',
        badge: 'نقطه سفارش هوشمند',
        roiTag: 'کاهش ۲۵٪ هزینه انبارداری'
      },
      {
        id: 'b1-mock-3',
        title: 'داشبورد هماهنگی سفارشات با تامین‌کنندگان عمده',
        subtitle: 'Supplier Collaboration & Order Dispatch',
        description: 'ارسال خودکار پیش‌نویس سفارش خرید (PO) به پورتال تامین‌کنندگان تاییدشده رفاه جهت تسریع تحویل.',
        imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-cyan-900 to-slate-900',
        prompt: 'B2B supply chain portal showing supplier delivery performance scorecards, automated purchase order queues, and warehouse receiving schedules.',
        type: 'dashboard',
        badge: 'اتوماسیون خرید',
        roiTag: 'تسریع ۹۰٪ فرآیند صدور PO'
      }
    ],
    architectureDiagramConcept: {
      title: 'معماری خط‌لوله پیش‌بینی تقاضا B1',
      description: 'ورود متغیرهای برون‌زا (آب‌وهوا، تقویم و کمپین‌ها)، آموزش مدل‌های ترکیبی و تولید پیشنهادات خرید ERP',
      nodes: [
        { name: 'Historical POS + Exogenous Data', type: 'Data Warehouse', status: 'active' },
        { name: 'Feature Engineering Pipeline', type: 'Data Prep', status: 'synced' },
        { name: 'Ensemble ML (LightGBM + Prophet)', type: 'AI Training', status: 'optimized' },
        { name: 'ERP Purchase Order Gateway', type: 'Integration', status: 'active' }
      ]
    }
  },

  A3: {
    projectId: 'A3',
    domainName: 'منابع انسانی و آموزش ضمن خدمت',
    categoryEn: 'Smart Academy & AI Roleplay Simulator',
    categoryFa: 'پلتفرم آموزش ضمن خدمت و مربی هوش مصنوعی پرسنل',
    heroImageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    heroFallbackGradient: 'from-indigo-950 via-slate-900 to-teal-950',
    heroImagePrompt: 'Modern corporate retail training center with interactive touch displays and smart mobile learning apps. Cashier in Refah uniform wearing a headset engaging with an interactive AI simulated customer dialogue avatar, real-time empathy score metrics, skill badges, and TMS mastery dashboard, photorealistic.',
    heroPromptFa: 'مرکز آموزش ضمن خدمت هوشمند پرسنل رفاه مجهز به شبیه‌ساز مکالمه با مشتری شاکی، ۱۰ دوره استاندارد چندرسانه‌ای و ارزیابی شایستگی شغلی.',
    aspectRatio: '16:9',
    styleTags: ['AI Roleplay', 'LMS/TMS', 'Microlearning', 'Customer Service AI'],
    roiHighlights: [
      { label: 'نسبت منفعت به هزینه (BCR)', value: '۴٫۸۹ برابر', sublabel: 'کاهش خطا و ریزش مشتری', color: 'emerald' },
      { label: 'سود سالانه برآوردی', value: '۱۸٫۲ میلیارد تومان', sublabel: 'رشد بهره‌وری و وفاداری', color: 'teal' },
      { label: 'دوره بازگشت سرمایه', value: '۳٫۰ ماه', sublabel: 'آموزش ۵۰۰ نفر در پایلوت', color: 'amber' },
      { label: 'کاهش زمان آنبوردینگ پرسنل', value: 'از ۳۰ روز به ۷ روز', sublabel: 'میکرولرنینگ تعاملی', color: 'cyan' },
    ],
    mockupScreens: [
      {
        id: 'a3-mock-1',
        title: 'شبیه‌ساز مکالمه صوتی و متنی با مشتری شاکی',
        subtitle: 'AI Customer Roleplay & Empathy Coach',
        description: 'تمرین صندوق‌داران در سناریوهای واقعی اعتراض مشتری به قیمت، خطای صندوق و کالابرگ با مربی هوشمند.',
        imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-indigo-900 to-slate-900',
        prompt: 'Interactive conversational AI roleplay screen showing simulated customer emotional state avatar, real-time empathy feedback meter, and actionable tips for retail cashier.',
        type: 'mobile_app',
        badge: 'شبیه‌ساز سناریوهای صندوق',
        roiTag: 'رشد ۳۵٪ رضایت مشتری'
      },
      {
        id: 'a3-mock-2',
        title: 'پلتفرم میکرولرنینگ و هندبوک‌های چندرسانه‌ای رفاه',
        subtitle: 'Refah 10-Course Microlearning Hub',
        description: '۱۰ دوره کاربردی شامل ویدیوهای ۳ دقیقه‌ای، اینفوگرافیک‌های چیدمان قفسه، فایل‌های PDF و کوییزهای سریع.',
        imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-teal-950 to-slate-900',
        prompt: 'Sleek mobile learning app interface with 10 retail training course cards, video player with interactive milestones, and downloadable PDF handbook guides.',
        type: 'mobile_app',
        badge: '۱۰ دوره تخصصی رفاه',
        roiTag: 'دسترسی ۲۴/۷ روی موبایل'
      },
      {
        id: 'a3-mock-3',
        title: 'ماتریس مهارت و کارنامه شایستگی پرسنل شعب (TMS)',
        subtitle: 'Skill Matrix & Competency Analytics',
        description: 'داشبورد مدیر منابع انسانی برای پایش میزان تسلط پرسنل هر شعبه و صدور گواهینامه‌های استاندارد رفاه.',
        imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-slate-900 to-indigo-950',
        prompt: 'HR competency matrix dashboard with radar skill charts, branch completion rates, and automated employee certification badges.',
        type: 'dashboard',
        badge: 'داشبورد شایستگی TMS',
        roiTag: 'شناسایی نخبگان شعب'
      }
    ],
    architectureDiagramConcept: {
      title: 'معماری پلتفرم آموزش ضمن خدمت A3',
      description: 'پایگاه دانش محتوای دوره‌ها، ماژول ارزیابی هوش مصنوعی مکالمه و صدور خودکار گزارش پیشرفت به HR',
      nodes: [
        { name: 'Course Content & Media CDN', type: 'Storage', status: 'active' },
        { name: 'LLM Roleplay & Empathy Engine', type: 'AI Speech/Text', status: 'optimized' },
        { name: 'TMS Competency DB', type: 'Progress Tracker', status: 'synced' },
        { name: 'Employee Mobile PWA', type: 'Frontend App', status: 'active' }
      ]
    }
  },

  C1: {
    projectId: 'C1',
    domainName: 'بازاریابی و وفادارسازی مشتریان',
    categoryEn: 'CRM Basket Personalization & Recommendation',
    categoryFa: 'موتور توصیه‌گر سبد خرید و شخصی‌سازی CRM',
    heroImageUrl: 'https://images.unsplash.com/photo-1556742049-0a67e55722c0?auto=format&fit=crop&w=1200&q=80',
    heroFallbackGradient: 'from-purple-950 via-slate-900 to-pink-950',
    heroImagePrompt: 'High-end retail customer loyalty dashboard with dynamic customer lifetime value (CLV) graphs, RFM cluster visualizers, automated personalized SMS discount coupon generator, and Next-Best-Offer AI recommendations in sleek violet and gold theme, photorealistic.',
    heroPromptFa: 'سامانه تحلیل سبد خرید باشگاه مشتریان رفاه، بخش‌بندی رفتاری RFM و ارسال پیامک‌های کوپن تخفیف هوشمند متناسب با سلیقه خریدار.',
    aspectRatio: '16:9',
    styleTags: ['Next-Best-Offer', 'RFM Clustering', 'Refah Card CRM', 'Personalized Promos'],
    roiHighlights: [
      { label: 'نسبت منفعت به هزینه (BCR)', value: '۳٫۹۲ برابر', sublabel: 'رشد اندازه سبد خرید', color: 'emerald' },
      { label: 'سود سالانه برآوردی', value: '۳۲٫۸ میلیارد تومان', sublabel: 'افزایش تکرار خرید مشتری', color: 'teal' },
      { label: 'دوره بازگشت سرمایه', value: '۳٫۸ ماه', sublabel: 'باشگاه ۱۰ میلیون نفری', color: 'amber' },
      { label: 'رشد نرخ تبدیل پیامک‌های تبلیغاتی', value: 'از ۱٫۵٪ به ۶٫۸٪', sublabel: 'شخصی‌سازی پیشنهادها', color: 'cyan' },
    ],
    mockupScreens: [
      {
        id: 'c1-mock-1',
        title: 'موتور پیشنهاد کالای تکمیلی بر اساس قوانین تلاقی سبد',
        subtitle: 'Market Basket Association Rule Engine',
        description: 'کشف الگوهای هم‌خریدی مشتریان (مانند پنیر + گردو) و ارائه تخفیف‌های باندل هوشمند هنگام پرداخت.',
        imageUrl: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-purple-900 to-slate-900',
        prompt: 'Market basket analysis UI showing network clusters of frequently co-purchased supermarket items, lift metrics, and cross-sell recommendation cards.',
        type: 'analytics',
        badge: 'تحلیل هم‌خریدی سبد',
        roiTag: 'رشد ۱۲٪ ارزش سبد'
      },
      {
        id: 'c1-mock-2',
        title: 'کمپین‌های خودکار بازگردانی مشتریان خاموش (Churn Win-Back)',
        subtitle: 'Automated Retention & Reactivation Engine',
        description: 'ارسال خودکار آفر اختصاصی به مشتریانی که بیش از ۳۰ روز از آخرین خریدشان در رفاه گذشته است.',
        imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-slate-900 to-purple-950',
        prompt: 'Customer churn prediction dashboard displaying at-risk loyalty segments, automated triggered SMS campaigns, and retention lift graphs.',
        type: 'dashboard',
        badge: 'کمپین بازگشت مشتری',
        roiTag: 'کاهش ۱۸٪ ریزش مشتری'
      },
      {
        id: 'c1-mock-3',
        title: 'پروفایل ۳۶۰ درجه و ارزش طول عمر دارنده رفاه‌کارت',
        subtitle: '360° Customer Profile & CLV Analytics',
        description: 'مشاهده تاریخچه خرید، دسته‌های کالایی محبوب، حساسیت قیمتی و ارزش آتی هر مشتری برای پرسنل CRM.',
        imageUrl: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-pink-950 to-slate-900',
        prompt: 'Customer 360 view dashboard with purchase history timeline, preferred FMCG categories, loyalty tier badge, and predicted lifetime value.',
        type: 'dashboard',
        badge: 'پروفایل ۳۶۰ درجه',
        roiTag: 'شخصی‌سازی آفرها'
      }
    ],
    architectureDiagramConcept: {
      title: 'معماری موتور شخصی‌سازی و CRM پروژه C1',
      description: 'استخراج تاریخچه خرید فاکتورها، محاسبه بردارهای امبدینگ مشتری با یادگیری عمیق و ارسال توصیه‌ها',
      nodes: [
        { name: 'Refah-Card POS Transactions', type: 'Data Stream', status: 'active' },
        { name: 'Customer Feature Store (RFM/CLV)', type: 'Feature DB', status: 'synced' },
        { name: 'Two-Tower Recommendation AI', type: 'Deep Learning', status: 'optimized' },
        { name: 'Omnichannel SMS & App Gateway', type: 'Campaign Delivery', status: 'active' }
      ]
    }
  },

  C3: {
    projectId: 'C3',
    domainName: 'عملیات شعب و فناوری‌های نوین',
    categoryEn: 'Computer Vision Shelf & Queue Analytics',
    categoryFa: 'بینایی ماشین در شعب، پایش قفسه و مدیریت طول صف',
    heroImageUrl: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80',
    heroFallbackGradient: 'from-blue-950 via-slate-900 to-emerald-950',
    heroImagePrompt: 'High-resolution overhead view of hypermarket aisles captured via smart Edge AI cameras with bounding box detection overlays. Real-time planogram compliance scores, red alert bounding boxes over empty shelf gaps, and cashier queue length estimator gauges on side panels, modern CCTV tech room, photorealistic.',
    heroPromptFa: 'پایش تصویری هوشمند قفسه‌های فروشگاه رفاه با دوربین‌های مجهز به هوش مصنوعی لبه (Edge AI)، کشف فوری جاهای خالی کالا و اعلام صف طولانی در صندوق‌ها.',
    aspectRatio: '16:9',
    styleTags: ['Edge AI', 'Planogram Vision', 'Queue Length AI', 'In-Store Cameras'],
    roiHighlights: [
      { label: 'نسبت منفعت به هزینه (BCR)', value: '۳٫۱۸ برابر', sublabel: 'کاهش OOS و ترک صف', color: 'emerald' },
      { label: 'سود سالانه برآوردی', value: '۲۴٫۵ میلیارد تومان', sublabel: 'پرشدگی به موقع قفسه‌ها', color: 'teal' },
      { label: 'دوره بازگشت سرمایه', value: '۴٫۵ ماه', sublabel: 'بدون نیاز به تعویض دوربین‌ها', color: 'amber' },
      { label: 'زمان تشخیص اتمام کالا روی قفسه', value: 'کمتر از ۲ دقیقه', sublabel: 'کاهش از ۴ ساعت فعلی', color: 'cyan' },
    ],
    mockupScreens: [
      {
        id: 'c3-mock-1',
        title: 'پایش هوشمند پرشدگی قفسه و عدم انطباق پلانوگرام',
        subtitle: 'Shelf Gap & Planogram Outlier Detection',
        description: 'کشف جاهای خالی روی قفسه و ارسال پیام خودکار به گوشی پرسنل چیدمان برای شارژ فوری کالا از انبار.',
        imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-blue-900 to-slate-900',
        prompt: 'Computer vision camera stream over supermarket shelves with green boxes around compliant products and red blinking boxes around empty shelf slots with restock alert.',
        type: 'hardware_iot',
        badge: 'پایش تصویری قفسه',
        roiTag: 'کاهش ۹۰٪ کالای ناموجود'
      },
      {
        id: 'c3-mock-2',
        title: 'هشدار هوشمند تراکم و افزایش طول صف صندوق‌ها',
        subtitle: 'Real-Time Checkout Queue Estimator',
        description: 'شمارش نفرات در صف و زمان تخمینی انتظار؛ در صورت عبور صف از ۳ نفر، آلارم بازگشایی صندوق جدید فعال می‌شود.',
        imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-slate-900 to-blue-950',
        prompt: 'Overhead camera view of checkout lanes with bounding boxes over waiting customers, wait-time prediction meters, and automated cashier call notification.',
        type: 'hardware_iot',
        badge: 'مدیریت طول صف',
        roiTag: 'کاهش زمان انتظار مشتری'
      },
      {
        id: 'c3-mock-3',
        title: 'نقشه حرارتی تردد مشتریان در سالن فروش (Store Heatmap)',
        subtitle: 'In-Store Customer Traffic & Dwell Time',
        description: 'شناسایی راهروهای پرتردد و نقاط کور فروشگاه برای بهینه‌سازی چیدمان و مذاکره دریافت ورودی بهتر از تامین‌کنندگان.',
        imageUrl: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-emerald-950 to-slate-900',
        prompt: '2D store floorplan with colorful thermal heatmap overlays showing customer foot-traffic flow, cold zones, and high dwell-time shelf locations.',
        type: 'analytics',
        badge: 'نقشه حرارتی فروشگاه',
        roiTag: 'افزایش درآمد اجاره سرلاین'
      }
    ],
    architectureDiagramConcept: {
      title: 'معماری پردازش تصویر لبه (Edge AI) پروژه C3',
      description: 'اتصال دوربین‌های CCTV موجود با پروتکل RTSP به سرور لبه کم‌هزینه و ارسال هشدارهای سبک به تلگرام/وب پرسنل',
      nodes: [
        { name: 'Existing Store CCTV (RTSP)', type: 'Video Feed', status: 'active' },
        { name: 'Local Edge Inferencing (YOLOv8)', type: 'Edge AI Node', status: 'optimized' },
        { name: 'Shelf Anomaly Event Bus', type: 'MQTT / WebSocket', status: 'synced' },
        { name: 'Floor Staff Alert App', type: 'Mobile Alert', status: 'active' }
      ]
    }
  },

  A1: {
    projectId: 'A1',
    domainName: 'منابع انسانی و برنامه‌ریزی کار',
    categoryEn: 'HR Talent Screening & Smart Shift Scheduling',
    categoryFa: 'غربالگری هوشمند رزومه‌ها و شیفت‌بندی خودکار پرسنل',
    heroImageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    heroFallbackGradient: 'from-teal-950 via-slate-900 to-slate-950',
    heroImagePrompt: 'Clean modern HR analytics interface showing automated resume parsing scores, skill matching radar charts, and a complex constraint-based employee shift scheduling grid optimizing cashier coverage for peak shopping hours, soft ambient lighting, high tech.',
    heroPromptFa: 'سامانه هوشمند منابع انسانی رفاه شامل موتور رتبه‌بندی رزومه‌ها، مصاحبه آنلاین و الگوریتم برنامه‌ریزی خطی شیفت‌های پرسنل شعب متناسب با شلوغی فروشگاه.',
    aspectRatio: '16:9',
    styleTags: ['HR Screening', 'Linear Programming', 'Shift Scheduling', 'Turnover Predictor'],
    roiHighlights: [
      { label: 'نسبت منفعت به هزینه (BCR)', value: '۲٫۸۵ برابر', sublabel: 'کاهش اضافه‌کاری بیهوده', color: 'emerald' },
      { label: 'سود سالانه برآوردی', value: '۱۵٫۶ میلیارد تومان', sublabel: 'صرفه‌جویی در هزینه جذب و حقوق', color: 'teal' },
      { label: 'دوره بازگشت سرمایه', value: '۴٫۸ ماه', sublabel: 'پوشش کل شعب سراسر کشور', color: 'amber' },
      { label: 'کاهش زمان جذب صندوق‌دار', value: 'از ۲۱ روز به ۳ روز', sublabel: 'فیلتر خودکار رزومه‌ها', color: 'cyan' },
    ],
    mockupScreens: [
      {
        id: 'a1-mock-1',
        title: 'موتور انطباق هوشمند رزومه‌ها با الزامات شغلی رفاه',
        subtitle: 'Automated Resume Matcher & Scorecard',
        description: 'استخراج خودکار تجربه، سکونت نزدیک شعبه و ارزیابی شایستگی با الگوریتم‌های پردازش زبان طبیعی (NLP).',
        imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-teal-900 to-slate-900',
        prompt: 'HR recruiter applicant tracking dashboard displaying candidate list with AI suitability scores, key retail skill tags, and distance-to-branch calculator.',
        type: 'dashboard',
        badge: 'رتبه‌بندی خودکار رزومه',
        roiTag: 'غربالگری فوری متقاضیان'
      },
      {
        id: 'a1-mock-2',
        title: 'الگوریتم بهینه‌سازی شیفت‌های کاری شعب (Shift Optimizer)',
        subtitle: 'Constraint-Based Labor Schedule Solver',
        description: 'تنظیم خودکار شیفت‌های کاری بر اساس پیش‌بینی ساعات پیک خرید، قوانین کار، مرخصی‌ها و ترجیحات پرسنل.',
        imageUrl: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-slate-900 to-teal-950',
        prompt: 'Calendar shift management interface with color-coded cashier rosters, peak-hour staffing curve overlay, and automated fairness balance check.',
        type: 'dashboard',
        badge: 'شیفت‌بندی خودکار',
        roiTag: 'کاهش ۴۰٪ اضافه‌کاری تحمیلی'
      },
      {
        id: 'a1-mock-3',
        title: 'پیش‌بینی خطر استعفا و ریزش پرسنل کلیدی (Turnover AI)',
        subtitle: 'Flight Risk & Retention Early Warning',
        description: 'کشف نشانه‌های فرسودگی شغلی و ارائه راهکارهای نگهداشت پیش از خروج پرسنل باسابقه و ماهر از رفاه.',
        imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-emerald-950 to-slate-900',
        prompt: 'HR analytics dashboard showing store retention heatmaps, turnover probability gauges, and suggested employee satisfaction initiatives.',
        type: 'analytics',
        badge: 'پیش‌بینی خروج پرسنل',
        roiTag: 'حفظ نیروهای ماهر'
      }
    ],
    architectureDiagramConcept: {
      title: 'معماری سامانه مدیریت منابع انسانی و شیفت‌بندی A1',
      description: 'ورود رزومه‌های پورتال استخدام، پردازش متن با NLP و حل معادلات برنامه‌ریزی خطی صحیح (MIP) برای شیفت‌ها',
      nodes: [
        { name: 'Applicant Tracking Gateway', type: 'Web Form', status: 'active' },
        { name: 'NLP Resume Parser & Embeddings', type: 'Language Model', status: 'optimized' },
        { name: 'Mixed-Integer Linear Solver (OR-Tools)', type: 'Optimization Engine', status: 'synced' },
        { name: 'Employee Shift Notification App', type: 'Mobile Delivery', status: 'active' }
      ]
    }
  },

  D1: {
    projectId: 'D1',
    domainName: 'مدیریت ارشد و پایش راهبردی',
    categoryEn: 'Executive Control Tower & Anomaly Detection',
    categoryFa: 'برج مراقبت هوشمند مدیرعامل و کشف آنومالی‌های سازمانی',
    heroImageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    heroFallbackGradient: 'from-slate-950 via-slate-900 to-emerald-950',
    heroImagePrompt: 'Corporate executive boardroom with a wall-sized ultra-HD display showing unified nationwide real-time retail performance across 500+ hypermarket branches. Interactive geographic map of Iran, top sales anomalies, gross margin trends, automated CEO summaries, dark luxury aesthetic, cinematic.',
    heroPromptFa: 'داشبورد برج مراقبت ارشد ویژه مدیرعامل و هیئت مدیره رفاه با پایش بلادرنگ ۵۰۰ شعبه سراسر کشور و کشف خودکار انحرافات مالی و عملیاتی.',
    aspectRatio: '16:9',
    styleTags: ['Executive Cockpit', 'Nationwide Map', 'Anomaly Detection', 'C-Suite BI'],
    roiHighlights: [
      { label: 'نسبت منفعت به هزینه (BCR)', value: '۳٫۴۰ برابر', sublabel: 'سرعت تصمیم‌گیری مدیرعامل', color: 'emerald' },
      { label: 'سود سالانه برآوردی', value: '۲۲٫۰ میلیارد تومان', sublabel: 'جلوگیری از انحرافات کلان مالی', color: 'teal' },
      { label: 'دوره بازگشت سرمایه', value: '۴٫۰ ماه', sublabel: 'دید کامل هیئت مدیره', color: 'amber' },
      { label: 'زمان کشف افت ناگهانی فروش شعب', value: 'لحظه‌ای (Real-time)', sublabel: 'جایگزین گزارش‌های هفتگی', color: 'cyan' },
    ],
    mockupScreens: [
      {
        id: 'd1-mock-1',
        title: 'نقشه جغرافیایی سلامت عملکرد ۵۰۰ شعبه در سراسر ایران',
        subtitle: 'Iran Geographic Retail Control Map',
        description: 'مشاهده زنده وضعیت درآمدی، حاشیه سود، تحقق تارگت بودجه و شاخص‌های حیاتی استان به استان.',
        imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-slate-900 to-emerald-900',
        prompt: '3D interactive geographic map of Iran with glowing markers for retail hypermarkets, color-coded health indicators, and drill-down regional KPI widgets.',
        type: 'dashboard',
        badge: 'نقشه کشوری شعب',
        roiTag: 'دید ۳۶۰ درجه مدیرعامل'
      },
      {
        id: 'd1-mock-2',
        title: 'دیده‌بان هوشمند آنومالی و هشدارهای پیش‌دستانه (Outlier Hunter)',
        subtitle: 'Automated Financial & Operational Outlier Alerts',
        description: 'کشف انحرافات آماری در فروش، افت مارجین، تغییر الگوی تراکنش‌ها و هدررفت تخفیف‌ها بدون نیاز به جستجوی دستی.',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-slate-950 to-amber-950',
        prompt: 'Anomaly detection feed with prioritized severity cards, root-cause probability badges, and one-click drill down to store transactions.',
        type: 'dashboard',
        badge: 'کشف آنومالی‌های پنهان',
        roiTag: 'هشدار فوری پیش از خسارت'
      },
      {
        id: 'd1-mock-3',
        title: 'خلاصه خودکار مدیریتی و گزارش‌ساز صوتی/متنی برای جلسات هیئت مدیره',
        subtitle: 'Automated Board Room Briefing & Narrative AI',
        description: 'تولید متن تحلیلی منسجم از وضعیت فروش، تهدیدات بازار و دستاوردهای هفتگی با هوش مصنوعی زاینده.',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-emerald-950 to-slate-900',
        prompt: 'Executive PDF/presentation export screen with AI generated key insights summaries, executive bullet points, and high-impact revenue charts.',
        type: 'analytics',
        badge: 'گزارش‌ساز هیئت مدیره',
        roiTag: 'صرفه‌جویی ۱۰۰ ساعت در ماه'
      }
    ],
    architectureDiagramConcept: {
      title: 'معماری برج مراقبت مدیرعامل D1',
      description: 'یکپارچه‌سازی متادیتا از سامانه‌های مالی، فروش، انبار و CRM در یک مخزن داده فوق‌سریع ClickHouse',
      nodes: [
        { name: 'Unified Data Lake / Warehouse', type: 'Data Core', status: 'active' },
        { name: 'Real-time Streaming Analytics', type: 'ClickHouse OLAP', status: 'optimized' },
        { name: 'Statistical Anomaly Detector', type: 'AI ML Watcher', status: 'synced' },
        { name: 'C-Suite Secure Executive Portal', type: 'Executive UI', status: 'active' }
      ]
    }
  },

  B3: {
    projectId: 'B3',
    domainName: 'حفاظت از دارایی‌ها و پیشگیری از کسری',
    categoryEn: 'Loss Prevention & Shrinkage Analytics',
    categoryFa: 'پیشگیری از کسری کالا، تقلب و حفاظت هوشمند از دارایی‌ها',
    heroImageUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    heroFallbackGradient: 'from-rose-950 via-slate-900 to-amber-950',
    heroImagePrompt: 'High-tech retail security operations center with multi-screen monitoring setup. AI fraud detection flagging suspicious POS void transactions, barcode substitution anomalies, warehouse gate discrepancy logs, and loss prevention risk score heatmaps, photorealistic.',
    heroPromptFa: 'مرکز امنیت و بازرسی هوشمند فروشگاه‌های رفاه با کشف الگوهای فاکتورهای ابطالی مشکوک، تبانی و جلوگیری از کسری کالا (Shrinkage).',
    aspectRatio: '16:9',
    styleTags: ['Loss Prevention', 'POS Void Fraud', 'Shrinkage Analytics', 'Asset Protection'],
    roiHighlights: [
      { label: 'نسبت منفعت به هزینه (BCR)', value: '۳٫۶۵ برابر', sublabel: 'حفاظت مستقیم از سرمایه', color: 'emerald' },
      { label: 'سود سالانه برآوردی', value: '۲۸٫۴ میلیارد تومان', sublabel: 'کاهش کسری کالا و خطای فاکتور', color: 'teal' },
      { label: 'دوره بازگشت سرمایه', value: '۳٫۵ ماه', sublabel: 'سرمایه‌گذاری نرم‌افزاری', color: 'amber' },
      { label: 'کاهش نرخ کسری کالای فروشگاهی', value: 'از ۲٫۴٪ به ۰٫۸٪', sublabel: 'صرفه‌جویی مستقیم در سود', color: 'cyan' },
    ],
    mockupScreens: [
      {
        id: 'b3-mock-1',
        title: 'تحلیلگر الگوهای مشکوک ابطال فاکتور و تبانی در صندوق (Void Fraud)',
        subtitle: 'Suspicious POS Void & Return Analyzer',
        description: 'شناسایی صندوق‌دارانی که فاکتور مشتری را پس از دریافت وجه ابطال کرده یا تخفیفات غیرمجاز اعمال می‌کنند.',
        imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-rose-900 to-slate-900',
        prompt: 'Fraud detection console highlighting cashier transaction anomalies, unusual void item clusters, and flagged video timestamp links.',
        type: 'dashboard',
        badge: 'کشف تقلب صندوق',
        roiTag: 'کاهش ۷۵٪ تخلفات مالی'
      },
      {
        id: 'b3-mock-2',
        title: 'شاخص آسیب‌پذیری و ریسک سرقت کالاهای پرارزش',
        subtitle: 'High-Shrinkage SKU Vulnerability Matrix',
        description: 'رتبه‌بندی کالاهای پرریسک (مانند لوازم آرایشی، کنسروهای خاص، روغن و پروتئین) و راهنمای اقدامات حفاظتی.',
        imageUrl: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-amber-950 to-slate-900',
        prompt: 'Retail risk assessment chart plotting shrinkage cost vs product mobility with actionable theft protection recommendations.',
        type: 'analytics',
        badge: 'ماتریس ریسک کالا',
        roiTag: 'تمرکز بر ۲۰٪ کالای بحرانی'
      },
      {
        id: 'b3-mock-3',
        title: 'سامانه پیگیری بازرسی‌ها و ارزیابی شعب (Audit Tracker)',
        subtitle: 'Closed-Loop Investigation & Audit Console',
        description: 'ارجاع خودکار پرونده‌های کسری شعبه به بازرسان منطقه‌ای و ثبت مستندات کشف تا رفع مغایرت مالی.',
        imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-slate-900 to-rose-950',
        prompt: 'Security incident management workflow board with case statuses, evidentiary logs, and corrective action checklists.',
        type: 'dashboard',
        badge: 'سامانه بازرسی هوشمند',
        roiTag: 'بستن ریشه‌ای منافذ کسری'
      }
    ],
    architectureDiagramConcept: {
      title: 'معماری کشف تقلب و پیشگیری از کسری کالا B3',
      description: 'ترکیب لاگ‌های لاگین، تراکنش‌های بارکد، ابطال فاکتور و مدل‌های یادگیری ماشین نامتعارف (Isolation Forest)',
      nodes: [
        { name: 'POS Audit Logs & Scans', type: 'Event Collector', status: 'active' },
        { name: 'Isolation Forest & Autoencoder AI', type: 'Unsupervised ML', status: 'optimized' },
        { name: 'Risk Scoring Database', type: 'Fraud Store', status: 'synced' },
        { name: 'Loss Prevention Security Console', type: 'Action Hub', status: 'active' }
      ]
    }
  },

  B2: {
    projectId: 'B2',
    domainName: 'لجستیک و ناوگان توزیع مویرگی',
    categoryEn: 'Fleet Logistics & Vehicle Route Optimization',
    categoryFa: 'بهینه‌سازی مسیر ناوگان توزیع، لجستیک و حرکت کامیونت‌ها',
    heroImageUrl: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80',
    heroFallbackGradient: 'from-cyan-950 via-slate-900 to-emerald-950',
    heroImagePrompt: 'Modern logistics dispatch operations center with large dynamic GIS map showing GPS tracked refrigerated delivery trucks. AI optimized multi-stop route paths connecting central distribution hubs to retail branches, telemetry temperature status, and fuel consumption analytics, photorealistic.',
    heroPromptFa: 'مرکز دیسپاچینگ و هدایت ناوگان حمل و نقل رفاه با مسیریابی بهینه چندمقصدی، کاهش مصرف سوخت و پایش دمای محموله‌های پروتئینی و لبنی.',
    aspectRatio: '16:9',
    styleTags: ['Vehicle Routing (VRP)', 'Fleet Telemetry', 'Cold Chain IoT', 'Fuel Optimization'],
    roiHighlights: [
      { label: 'نسبت منفعت به هزینه (BCR)', value: '۴٫۳۲ برابر', sublabel: 'کاهش کیلومتر و استهلاک', color: 'emerald' },
      { label: 'سود سالانه برآوردی', value: '۳۵٫۰ میلیارد تومان', sublabel: 'کاهش سوخت و تحویل به‌موقع', color: 'teal' },
      { label: 'دوره بازگشت سرمایه', value: '۳٫۳ ماه', sublabel: 'ناوگان ۲۰۰+ خودرویی', color: 'amber' },
      { label: 'کاهش کل مسافت پیموده شده', value: '۱۸٫۵٪ صرفه‌جویی', sublabel: 'الگوریتم‌های ژنتیک VRP', color: 'cyan' },
    ],
    mockupScreens: [
      {
        id: 'b2-mock-1',
        title: 'موتور حل مسئله مسیریابی خودرویی چندمقصدی (VRP Solver)',
        subtitle: 'Dynamic Multi-Stop Vehicle Routing',
        description: 'محاسبه بهترین توالی بارگیری و توزیع در شعب با در نظر گرفتن پنجره‌های زمانی تحویل و ظرفیت وزنی/حجمی خودرو.',
        imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-cyan-900 to-slate-900',
        prompt: 'GPS logistics map interface with multi-vehicle colored route lines, optimal stop sequence nodes, and traffic avoidance notifications.',
        type: 'dashboard',
        badge: 'مسیریابی هوشمند VRP',
        roiTag: 'کاهش ۱۸٪ مسافت ناوگان'
      },
      {
        id: 'b2-mock-2',
        title: 'پایش آنلاین زنجیره سرد و تله‌متری دمای محموله‌ها',
        subtitle: 'Cold Chain Telemetry & Spoilage Guard',
        description: 'اتصال به سنسورهای دمای یخچال خودروها و اعلام هشدار فوری در صورت بالا رفتن دما یا باز ماندن درب کانتینر.',
        imageUrl: 'https://images.unsplash.com/photo-1580674684081-7617f13d8d59?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-slate-900 to-cyan-950',
        prompt: 'Refrigerated fleet telemetry dashboard showing live cabin temperature graphs, door sensor open alerts, and perishables spoilage risk indicators.',
        type: 'hardware_iot',
        badge: 'پایش زنجیره سرد',
        roiTag: 'حفظ ۱۰۰٪ کیفیت محصولات'
      },
      {
        id: 'b2-mock-3',
        title: 'بهینه‌ساز سه‌بعدی چیدمان بار و حجم کانتینر (3D Bin Packing)',
        subtitle: '3D Pallet & Truck Cargo Load Optimizer',
        description: 'پیشنهاد چیدمان مهندسی پالت‌ها در کانتینر برای افزایش بهره‌وری فضای بار و عدم صدمه به بسته‌بندی کالاها.',
        imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-emerald-950 to-slate-900',
        prompt: '3D visual container loading diagram with color-coded pallet blocks, axle weight distribution balance check, and space utilization percentage.',
        type: 'analytics',
        badge: 'چیدمان سه‌بعدی کانتینر',
        roiTag: 'افزایش ۲۲٪ ضریب بارگیری'
      }
    ],
    architectureDiagramConcept: {
      title: 'معماری سامانه مدیریت ناوگان و لجستیک B2',
      description: 'ورود سفارشات شعب، حل مسئله بهینه‌سازی ترکیبی با الگوریتم‌های ژنتیک و هدایت رانندگان از طریق اپلیکیشن موبایل',
      nodes: [
        { name: 'Store Replenishment Orders', type: 'Order Hub', status: 'active' },
        { name: 'Heuristic VRP Optimizer Engine', type: 'Optimization Core', status: 'optimized' },
        { name: 'IoT Telemetry & GPS Gateway', type: 'Sensors Stream', status: 'synced' },
        { name: 'Driver Navigation Mobile App', type: 'Mobile GIS', status: 'active' }
      ]
    }
  }
};

/**
 * Helper utility to get rich visual assets, image generation prompts, and UI mockups for any of the 10 projects
 */
export function getProjectVisualAssets(projectId: string): ProjectVisualAsset {
  const asset = PROJECT_VISUALS_MAP[projectId];
  if (asset) {
    return asset;
  }

  // Fallback dynamic generator if a new project is passed
  return {
    projectId,
    domainName: 'پروژه تحول هوش مصنوعی رفاه',
    categoryEn: 'Enterprise AI & Data Transformation',
    categoryFa: 'سامانه هوشمند زنجیره فروشگاهی',
    heroImageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    heroFallbackGradient: 'from-emerald-950 via-slate-900 to-teal-950',
    heroImagePrompt: `Photorealistic enterprise retail dashboard UI for project ${projectId}. Crisp data visualization widgets, high-contrast KPI metric cards, modern retail workflow in emerald and dark navy tones. 8k, highly detailed.`,
    heroPromptFa: `طرح بصری و پروتوتایپ مفهومی سامانه هوشمند رفاه برای پروژه ${projectId} با شاخص‌های عملکردی و بازگشت سرمایه.`,
    aspectRatio: '16:9',
    styleTags: ['Enterprise UI', 'Retail AI', 'ROI Dashboard'],
    roiHighlights: [
      { label: 'نسبت منفعت به هزینه (BCR)', value: '۳٫۵۰+ برابر', sublabel: 'ارزیابی اقتصادی', color: 'emerald' },
      { label: 'سودآوری برآوردی', value: '۲۰+ میلیارد تومان', sublabel: 'سود سالانه خالص', color: 'teal' },
      { label: 'دوره بازگشت سرمایه', value: 'زیر ۴ ماه', sublabel: 'فاز پایلوت سریع', color: 'amber' },
      { label: 'پوشش زنجیره', value: 'شعب سراسر کشور', sublabel: 'مقیاس‌پذیری بالا', color: 'cyan' },
    ],
    mockupScreens: [
      {
        id: `${projectId}-mock-default-1`,
        title: 'داشبورد جامع تصمیم‌یار مدیریتی',
        subtitle: 'Executive Decision Support Dashboard',
        description: 'پایش برخط شاخص‌های کلیدی، تحلیل روندها و کشف فرصت‌های رشد سودآوری.',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-emerald-900 to-slate-900',
        prompt: `Executive dashboard interface for ${projectId} with data charts, KPI dial gauges, and status cards in clean modern theme.`,
        type: 'dashboard',
        badge: 'داشبورد اصلی',
        roiTag: 'ارتقای بهره‌وری'
      },
      {
        id: `${projectId}-mock-default-2`,
        title: 'ماژول پایش بلادرنگ و هشدارها',
        subtitle: 'Real-Time Alert & Anomaly Monitor',
        description: 'ارسال فوری هشدارهای عملیاتی به سرپرستان شعب جهت جلوگیری از هدررفت منابع.',
        imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
        fallbackGradient: 'from-slate-900 to-teal-950',
        prompt: `Real-time monitoring screen with anomaly alerts and operational status feed for retail management.`,
        type: 'analytics',
        badge: 'دیده‌بان هوشمند',
        roiTag: 'پاسخگویی سریع'
      }
    ],
    architectureDiagramConcept: {
      title: `معماری پردازش و جریان داده ${projectId}`,
      description: 'یکپارچه‌سازی پایگاه‌های داده، ماژول هوش مصنوعی و داشبورد رابط کاربری',
      nodes: [
        { name: 'Core ERP / POS Data Source', type: 'Data Ingestion', status: 'active' },
        { name: 'AI Model Processing Engine', type: 'Machine Learning', status: 'optimized' },
        { name: 'Analytics Web Dashboard', type: 'Frontend UI', status: 'active' }
      ]
    }
  };
}

/**
 * Returns dynamic SVG data URL placeholder as an instant zero-latency visual fallback
 */
export function generateSvgPlaceholder(
  width: number,
  height: number,
  title: string,
  category: string,
  badgeText: string,
  primaryColor: string = '#059669',
  accentColor: string = '#0d9488'
): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
      <defs>
        <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0f172a" />
          <stop offset="50%" stop-color="#1e293b" />
          <stop offset="100%" stop-color="#022c22" />
        </linearGradient>
        <linearGradient id="glow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${primaryColor}" stop-opacity="0.8" />
          <stop offset="100%" stop-color="${accentColor}" stop-opacity="0.8" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#bg-grad)" />
      <circle cx="${width * 0.85}" cy="${height * 0.25}" r="${height * 0.4}" fill="${primaryColor}" opacity="0.12" filter="blur(40px)" />
      <circle cx="${width * 0.15}" cy="${height * 0.75}" r="${height * 0.35}" fill="${accentColor}" opacity="0.1" filter="blur(40px)" />
      
      <!-- Grid Lines -->
      <path d="M0 ${height * 0.3} L${width} ${height * 0.3}" stroke="#334155" stroke-width="1" stroke-dasharray="4 4" opacity="0.4" />
      <path d="M0 ${height * 0.7} L${width} ${height * 0.7}" stroke="#334155" stroke-width="1" stroke-dasharray="4 4" opacity="0.4" />
      <path d="${width * 0.3} 0 L${width * 0.3} ${height}" stroke="#334155" stroke-width="1" stroke-dasharray="4 4" opacity="0.4" />
      <path d="${width * 0.7} 0 L${width * 0.7} ${height}" stroke="#334155" stroke-width="1" stroke-dasharray="4 4" opacity="0.4" />
      
      <!-- Card Container -->
      <rect x="${width * 0.05}" y="${height * 0.1}" width="${width * 0.9}" height="${height * 0.8}" rx="16" fill="#1e293b" fill-opacity="0.6" stroke="#475569" stroke-width="1" />
      
      <!-- Badge -->
      <rect x="${width * 0.08}" y="${height * 0.18}" width="140" height="28" rx="8" fill="url(#glow-grad)" />
      <text x="${width * 0.08 + 70}" y="${height * 0.18 + 18}" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">${badgeText}</text>
      
      <!-- Category & Title -->
      <text x="${width * 0.08}" y="${height * 0.38}" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="14" font-weight="500">${category}</text>
      <text x="${width * 0.08}" y="${height * 0.52}" fill="#ffffff" font-family="system-ui, sans-serif" font-size="22" font-weight="bold">${title}</text>
      
      <!-- Mock Chart Bars -->
      <rect x="${width * 0.08}" y="${height * 0.68}" width="${width * 0.2}" height="10" rx="5" fill="${primaryColor}" />
      <rect x="${width * 0.32}" y="${height * 0.68}" width="${width * 0.35}" height="10" rx="5" fill="${accentColor}" />
      <rect x="${width * 0.71}" y="${height * 0.68}" width="${width * 0.18}" height="10" rx="5" fill="#38bdf8" />
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
