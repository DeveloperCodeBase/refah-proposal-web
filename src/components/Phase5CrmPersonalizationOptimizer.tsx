import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Sparkles, 
  Users, 
  Send, 
  Coins, 
  Cpu, 
  TrendingUp, 
  CheckCircle2, 
  AlertTriangle, 
  Smartphone, 
  ShoppingBag, 
  Percent, 
  RotateCcw, 
  Layers, 
  ShieldCheck, 
  Clock, 
  Flame, 
  Check, 
  X,
  CreditCard,
  Gift
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  LineChart, 
  Line, 
  CartesianGrid, 
  PieChart, 
  Pie, 
  Cell,
  AreaChart,
  Area
} from 'recharts';

interface CustomerSegment {
  id: 'family_saver' | 'premium_loyal' | 'single_convenience' | 'churn_risk';
  name: string;
  sharePercent: number;
  avgBasketToman: number;
  purchaseFrequencyMonthly: number;
  churnProbability: number;
  topCategories: string[];
  recommendedBundle: {
    title: string;
    items: string[];
    regularPrice: number;
    bundlePrice: number;
    couponCode: string;
    discountPercent: number;
    expectedLiftToman: number;
  };
}

export const Phase5CrmPersonalizationOptimizer: React.FC = () => {
  const segments: Record<string, CustomerSegment> = {
    family_saver: {
      id: 'family_saver',
      name: 'خانواده‌های ۴+ نفره (حساس به قیمت کالاهای اساسی)',
      sharePercent: 42,
      avgBasketToman: 980000,
      purchaseFrequencyMonthly: 3.2,
      churnProbability: 14,
      topCategories: ['برنج و روغن', 'لبنیات خانوادگی', 'ماکارونی و تن ماهی', 'شوینده تیراژ بالا'],
      recommendedBundle: {
        title: 'بسته طلایی اقلام اساسی ماهانه خانواده',
        items: ['برنج طارم ۱۰ کیلویی', 'روغن مایع ۱٫۵ لیتری بهار (۲ عدد)', 'پنیر فتا ۴۰۰ گرمی', 'پودر لباسشویی ۵۰۰ گرمی (۴ عدد)'],
        regularPrice: 1780000,
        bundlePrice: 1490000,
        couponCode: 'REFAH-FAMILY-16',
        discountPercent: 16,
        expectedLiftToman: 510000
      }
    },
    premium_loyal: {
      id: 'premium_loyal',
      name: 'مشتریان وفادار پرخرج (سبد پریمیوم و ارگانیک)',
      sharePercent: 18,
      avgBasketToman: 2450000,
      purchaseFrequencyMonthly: 5.8,
      churnProbability: 6,
      topCategories: ['گوشت گرم و سالمون', 'قهوه و نسکافه خارجی', 'روغن زیتون فرابکر', 'آجیل و خشکبار'],
      recommendedBundle: {
        title: 'پک پریمیوم طعم سلامتی',
        items: ['روغن زیتون فرابکر اکسیر ۱ لیتری', 'قهوه گلد ۲۰۰ گرمی', 'استیک راسته گوسفندی ۸۰۰ گرمی', 'پنیر بلوچیز کاله'],
        regularPrice: 2850000,
        bundlePrice: 2480000,
        couponCode: 'REFAH-VIP-GOLD',
        discountPercent: 13,
        expectedLiftToman: 1100000
      }
    },
    single_convenience: {
      id: 'single_convenience',
      name: 'جوانان و دانشجویان (خرید آماده مصرف / Ready-to-Eat)',
      sharePercent: 22,
      avgBasketToman: 420000,
      purchaseFrequencyMonthly: 8.4,
      churnProbability: 25,
      topCategories: ['اسنک و تنقلات', 'نوشیدنی انرژی‌زا', 'غذاهای نیمه‌آماده و پیتزا', 'بستنی و دسر'],
      recommendedBundle: {
        title: 'کمبو بست شب آخر هفته جوانان',
        items: ['پیتزا نیمه‌آماده ۴۵۰ گرمی پمینا', 'نوشیدنی هایپ (۲ قوطی)', 'چیپس مزمز بزرگ', 'بستنی مگنوم دابل'],
        regularPrice: 490000,
        bundlePrice: 3950000 / 10, // 395,000
        couponCode: 'REFAH-WEEKEND-YOUTH',
        discountPercent: 19,
        expectedLiftToman: 230000
      }
    },
    churn_risk: {
      id: 'churn_risk',
      name: 'مشتریان غیرفعال در خطر ریزش (> ۴۵ روز عدم خرید)',
      sharePercent: 18,
      avgBasketToman: 650000,
      purchaseFrequencyMonthly: 0.4,
      churnProbability: 82,
      topCategories: ['اقلام پروموشنی گذشته', 'مرغ و گوشت تخفیفی', 'شوینده'],
      recommendedBundle: {
        title: 'پیشنهاد بازگشت اختصاصی رفاه با هدیه نقدی',
        items: ['کوپن ۵۰ هزار تومانی خرید اول + تخفیف ۲۵٪ روی برنج و روغن محبوب شما'],
        regularPrice: 850000,
        bundlePrice: 650000,
        couponCode: 'WELCOME-BACK-REFAH',
        discountPercent: 23,
        expectedLiftToman: 650000
      }
    }
  };

  const [selectedSegmentId, setSelectedSegmentId] = useState<string>('family_saver');
  const [activeTab, setActiveTab] = useState<'segments' | 'sms_simulator' | 'clv_metrics' | 'financials' | 'architecture'>('segments');
  const [isSmsSent, setIsSmsSent] = useState<boolean>(false);
  const [testPhoneNumber, setTestPhoneNumber] = useState<string>('09123456789');

  const currentSegment = segments[selectedSegmentId] || segments.family_saver;

  // Handle Send Smart Offer SMS
  const handleSendSmartSMS = () => {
    setIsSmsSent(true);
    setTimeout(() => setIsSmsSent(false), 5000);
  };

  // CLV & Basket Size Lift Chart
  const liftChartData = [
    { name: 'خانواده اقتصادی', traditionalBasket: 980, personalizedBasket: 1390, liftPercent: 41.8 },
    { name: 'مشتریان VIP', traditionalBasket: 2450, personalizedBasket: 3350, liftPercent: 36.7 },
    { name: 'جوانان مجرد', traditionalBasket: 420, personalizedBasket: 610, liftPercent: 45.2 },
    { name: 'در خطر ریزش (Re-engagement)', traditionalBasket: 150, personalizedBasket: 650, liftPercent: 333.0 },
  ];

  // RFM Pie Data
  const segmentPieData = [
    { name: 'خانواده اقتصادی (۴۲٪)', value: 42, color: '#3b82f6' },
    { name: 'جوانان و تک‌نفره (۲۲٪)', value: 22, color: '#10b981' },
    { name: 'مشتریان VIP (۱۸٪)', value: 18, color: '#f59e0b' },
    { name: 'در خطر ریزش (۱۸٪)', value: 18, color: '#f43f5e' },
  ];

  return (
    <div className="space-y-6">
      
      {/* Top Header Banner for Phase 5 */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-rose-950 text-white rounded-3xl p-6 sm:p-8 border border-rose-500/30 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-rose-500/20 text-rose-300 border border-rose-400/30 flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-rose-400" />
                <span>فاز ۵ سند تحول: شخصی‌سازی سبد خرید و CRM هوشمند باشگاه مشتریان (پروژه C1)</span>
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                Flagship Wave 1 (توسعه درآمد و مارکتینگ)
              </span>
            </div>

            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white">
              موتور شخصی‌سازی سبد خرید و پیشنهادات هدفمند باشگاه مشتریان (Next-Best-Offer)
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              حذف تخفیف‌های کور سراسری و جایگزینی آن با پیشنهادات مبتنی بر رفتار خرید، افزایش ۲۴٪ میانگین ارزش سبد خرید (AOV) و بازگشت ۳۸٪ مشتریان در خطر ریزش.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="grid grid-cols-2 gap-3 shrink-0 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">نسبت منفعت به هزینه:</span>
              <span className="text-xl font-black text-rose-400">۴٫۶۲ برابر</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">سود خالص سالانه:</span>
              <span className="text-xl font-black text-emerald-400">۳۷٫۰ م.ت</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">هزینه پایلوت:</span>
              <span className="text-sm font-bold text-white">۳۴۰ میلیون تومان</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">دوره بازگشت:</span>
              <span className="text-sm font-bold text-rose-300">۲٫۶ ماه</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="bg-white border border-slate-200 rounded-2xl p-2 flex flex-wrap items-center justify-between gap-2 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <button
            onClick={() => setActiveTab('segments')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'segments'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>خوشه‌بندی هوشمند مشتریان و سبد پیشنهادی NBO</span>
          </button>

          <button
            onClick={() => setActiveTab('sms_simulator')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'sms_simulator'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>شبیه‌ساز پیامک و نوتیفیکیشن کوپن داینامیک</span>
          </button>

          <button
            onClick={() => setActiveTab('clv_metrics')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'clv_metrics'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>جهش ارزش سبد خرید (AOV) و حفظ مشتری</span>
          </button>

          <button
            onClick={() => setActiveTab('financials')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'financials'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Coins className="w-3.5 h-3.5" />
            <span>مدل مالی و توجیه ۳۷٫۰ میلیارد تومانی</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'architecture'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>معماری فنی (ADR-004) و مدل Two-Tower</span>
          </button>
        </div>

        <span className="text-[11px] font-bold text-rose-800 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200">
          شاخص ارزیابی: MKT-01
        </span>
      </div>

      {/* TAB 1: CUSTOMER SEGMENTS & NBO RECOMMENDATION */}
      {activeTab === 'segments' && (
        <div className="space-y-6">
          
          {/* Segment Selector Chips */}
          <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-xs space-y-3">
            <h3 className="text-xs font-black text-slate-900 flex items-center gap-2">
              <Users className="w-4 h-4 text-rose-600" />
              <span>انتخاب بخش‌بندی مشتریان باشگاه رفاه (RFM Segments):</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {Object.values(segments).map((seg) => {
                const isSelected = selectedSegmentId === seg.id;
                return (
                  <button
                    key={seg.id}
                    onClick={() => setSelectedSegmentId(seg.id)}
                    className={`p-3.5 rounded-2xl text-right transition cursor-pointer border ${
                      isSelected
                        ? 'bg-rose-50 border-rose-500 ring-2 ring-rose-500/20 text-rose-950 shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black">{seg.name.split('(')[0]}</span>
                      <span className="text-[11px] font-mono font-bold text-rose-700 bg-rose-100/60 px-2 py-0.5 rounded-md">
                        {seg.sharePercent}٪ شعب
                      </span>
                    </div>
                    <div className="mt-2 text-[11px] text-slate-500 font-medium">
                      میانگین سبد: <strong className="text-slate-800 font-mono">{(seg.avgBasketToman / 1000).toLocaleString('fa-IR')} هزار ت</strong>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Segment Details & NBO Bundle Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left: Segment Profile (5 Cols) */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">پروفایل رفتاری سگمنت:</span>
                <span className="text-xs font-mono font-black text-rose-700">{currentSegment.id.toUpperCase()}</span>
              </div>

              <h4 className="text-sm font-black text-slate-900">{currentSegment.name}</h4>

              <div className="space-y-2.5 pt-2">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex justify-between items-center text-xs">
                  <span className="text-slate-600">فرکانس مراجعه ماهانه:</span>
                  <span className="font-bold font-mono text-slate-900">{currentSegment.purchaseFrequencyMonthly} بار در ماه</span>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex justify-between items-center text-xs">
                  <span className="text-slate-600">ریسک ریزش و عدم خرید مجدد:</span>
                  <span className={`font-bold font-mono ${currentSegment.churnProbability > 40 ? 'text-rose-700' : 'text-emerald-700'}`}>
                    {currentSegment.churnProbability}٪
                  </span>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1.5">
                  <span className="text-slate-600 font-bold block">دسته‌بندی‌های با کشش بالا:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentSegment.topCategories.map((cat, i) => (
                      <span key={i} className="bg-white border border-slate-200 px-2 py-0.5 rounded-md text-[11px] font-bold text-slate-700">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Right: AI Recommender Next-Best-Offer Package (7 Cols) */}
            <div className="lg:col-span-7 bg-slate-950 text-white rounded-3xl p-6 border border-slate-800 shadow-xl space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-black text-white">پکیج پیشنهادی هوش مصنوعی (Next-Best-Offer)</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-mono font-bold">
                    کد تخفیف داینامیک: {currentSegment.recommendedBundle.couponCode}
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <h4 className="text-sm font-black text-rose-300">
                    {currentSegment.recommendedBundle.title}
                  </h4>

                  <div className="space-y-1.5">
                    {currentSegment.recommendedBundle.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing Math */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">قیمت بدون تخفیف اقلام:</span>
                  <span className="line-through text-slate-500 font-mono">
                    {currentSegment.recommendedBundle.regularPrice.toLocaleString('fa-IR')} تومان
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm font-black">
                  <span className="text-slate-200">قیمت هوشمند باندل اختصاصی:</span>
                  <span className="text-emerald-400 font-mono text-base">
                    {currentSegment.recommendedBundle.bundlePrice.toLocaleString('fa-IR')} تومان
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-amber-300 font-bold">افزایش ارزش سبد خرید (AOV Lift):</span>
                  <span className="font-mono font-black text-amber-400">
                    +{currentSegment.recommendedBundle.expectedLiftToman.toLocaleString('fa-IR')} تومان
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* TAB 2: SMS / NOTIFICATION SIMULATOR */}
      {activeTab === 'sms_simulator' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Form Trigger (6 Cols) */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
            <div>
              <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-rose-600" />
                <span>شبیه‌ساز ارسال پیامک پروموشن شخصی‌سازی‌شده به مشتری</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                تولید خودکار متن بر اساس علایق سبد خرید و تاریخچه خریدهای قبلی
              </p>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-700 block">شماره موبایل مشتری باشگاه رفاه:</label>
              <input
                type="text"
                value={testPhoneNumber}
                onChange={(e) => setTestPhoneNumber(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 font-mono text-center text-xs focus:outline-hidden focus:border-rose-600"
              />

              <button
                onClick={handleSendSmartSMS}
                className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-black flex items-center justify-center gap-2 transition cursor-pointer shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>ارسال تست پیامک هوشمند به گوشی موبایل</span>
              </button>

              {isSmsSent && (
                <div className="bg-emerald-50 border border-emerald-300 p-3 rounded-xl text-xs font-bold text-emerald-800 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>پیامک اختصاصی با کوپن {currentSegment.recommendedBundle.couponCode} با موفقیت دلیور گردید.</span>
                </div>
              )}
            </div>
          </div>

          {/* Smartphone Mockup (6 Cols) */}
          <div className="lg:col-span-6 bg-slate-950 rounded-3xl p-6 border border-slate-800 shadow-xl flex justify-center items-center">
            <div className="w-72 bg-slate-900 border-4 border-slate-800 rounded-3xl p-4 shadow-2xl space-y-3">
              <div className="w-16 h-1 bg-slate-700 rounded-full mx-auto" />
              
              <div className="text-center">
                <span className="text-[10px] text-slate-400 font-bold block">SMS • REFAH CLUB</span>
                <span className="text-[9px] text-slate-500 font-mono">امروز ۱۰:۳۰ صبح</span>
              </div>

              <div className="bg-rose-950/80 border border-rose-800/80 rounded-2xl p-3.5 space-y-2 text-rose-100 text-[11px] leading-relaxed">
                <p className="font-bold">همراه عزیز رفاه، سلام!</p>
                <p>
                  بسته پیشنهادی ویژه «{currentSegment.recommendedBundle.title}» فقط تا پایان جمعه برای شما با <strong>{currentSegment.recommendedBundle.discountPercent}٪ تخفیف اختصاصی</strong> فعال شد.
                </p>
                <div className="bg-slate-950 p-2 rounded-lg text-center font-mono font-black text-amber-300 text-xs">
                  کد کوپن: {currentSegment.recommendedBundle.couponCode}
                </div>
                <span className="text-[9px] text-slate-400 block text-center">لغو ۱۱</span>
              </div>

              <div className="w-8 h-8 rounded-full border border-slate-700 mx-auto mt-2" />
            </div>
          </div>

        </div>
      )}

      {/* TAB 3: CLV & BASKET LIFT METRICS */}
      {activeTab === 'clv_metrics' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-rose-600" />
                <span>رشد ارزش سبد خرید (AOV Lift) با پیشنهاد هوشمند NBO در مقایسه با تخفیف سنتی</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                مقایسه ریالی میانگین فاکتور به ازای هر سگمنت مشتری (هزار تومان)
              </p>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={liftChartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="traditionalBasket" name="سبد سنتی بدون هوش مصنوعی" fill="#94a3b8" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="personalizedBasket" name="سبد با پیشنهاد اختصاصی رفاه" fill="#e11d48" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: FINANCIALS */}
      {activeTab === 'financials' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Coins className="w-5 h-5 text-rose-600" />
                <span>توجیه اقتصادی و مدل مالی ۳۷٫۰ میلیارد تومانی پروژه C1</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                استخراج بر اساس متدولوژی استاندارد سنجش اثربخشی بازاریابی و CRM رفاه (MKT-01)
              </p>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-3 font-mono text-xs">
              <div className="text-rose-400 font-extrabold text-sm">
                فرمول منفعت مالی: Benefit = Basket Size Lift + Churn Reactivation + Margin Protection
              </div>
              <div className="text-slate-300 leading-relaxed font-sans text-xs">
                سودآوری سالانه = ۲۴٫۰ میلیارد تومان افزایش حجم خرید مشتریان وفادار + ۱۳٫۰ میلیارد تومان فعال‌سازی مجدد مشتریان خاموش و کاهش هرزرفت بودجه تخفیف کور
              </div>
              <div className="text-emerald-300 font-extrabold text-sm pt-2 border-t border-slate-800">
                = ۳۷٫۰ میلیارد تومان سود خالص سالانه در شبکه ۵۰۰ شعبه رفاه
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">هزینه پایلوت (۸ هفته)</span>
                <span className="text-xl font-black text-slate-900 block mt-1">۳۴۰ میلیون تومان</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">۵۰ هزار مشتری هدف</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">سود خالص سالانه</span>
                <span className="text-xl font-black text-rose-700 block mt-1">۳۷٫۰ میلیارد تومان</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">رشد مارجین ناخالص</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">نسبت منفعت به هزینه (BCR)</span>
                <span className="text-xl font-black text-rose-700 block mt-1">۴٫۶۲ برابر</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">نرخ بازدهی قطعی</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">دوره بازگشت سرمایه</span>
                <span className="text-xl font-black text-emerald-700 block mt-1">۲٫۶ ماه</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">کمتر از ۸۰ روز</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: ARCHITECTURE */}
      {activeTab === 'architecture' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
          <div>
            <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-rose-600" />
              <span>تصمیم‌گیری معماری فنی ADR-004: شبکه عصبی دوقلو Two-Tower و موتور پیشنهاددهنده NBO</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              جداسازی برج کاربر (User Tower) و برج کالا (Item Tower) برای پیشنهاددهی فوق‌سریع در کمتر از ۵ میلی‌ثانیه
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-rose-600" />
                <span>۱. برج کاربر (User Tower)</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                تولید وکتور ۶۴ بعدی از تاریخچه تراکنش‌های صندوق، فواصل زمانی خرید، حساسیت قیمتی و دسته‌بندی‌های مرجوعی.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-rose-600" />
                <span>۲. برج کالا (Item Tower)</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                تعبیه ویژگی‌های ۴۰ هزار قلم کالایی کاتالوگ رفاه (مارجین، مکمل بودن با سایر اقلام، کشش تقاضا و برند).
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-rose-600" />
                <span>۳. لایه محافظت از مارجین (Margin Guard)</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                جلوگیری خودکار از پیشنهاد تخفیف روی کالاهایی که مشتری بدون تخفیف هم تمایل قطعی به خرید آن‌ها دارد.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
