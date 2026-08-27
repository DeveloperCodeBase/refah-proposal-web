import React, { useState } from 'react';
import { 
  Percent, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  Coins, 
  Boxes, 
  Sliders, 
  RotateCcw, 
  Layers, 
  ShieldCheck, 
  FileText, 
  ShoppingCart, 
  ShoppingBag, 
  ChevronRight, 
  Flame, 
  ArrowRight,
  Info,
  Calendar,
  Building2,
  Check,
  Zap,
  Play,
  Cpu,
  BarChart3
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  AreaChart, 
  Area, 
  LineChart, 
  Line,
  CartesianGrid
} from 'recharts';

interface SKUProfile {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  costPrice: number;
  baseWeeklyQty: number;
  elasticity: number;
  cannibalizationRisk: 'بالا' | 'متوسط' | 'پایین';
  cannibalizedSKUs: { name: string; lossRate: number; marginLoss: number }[];
  haloEffectSKUs: { name: string; gainRate: number; marginGain: number }[];
}

export const Phase1PromotionOptimizer: React.FC = () => {
  // Preset SKUs from Refah Catalog
  const skuProfiles: SKUProfile[] = [
    {
      id: 'OIL-7703',
      name: 'روغن سرخ‌کردنی ۱٫۵ لیتری بهار',
      category: 'روغن و چربی‌های خوراکی',
      basePrice: 62000,
      costPrice: 48000,
      baseWeeklyQty: 12500,
      elasticity: 2.3,
      cannibalizationRisk: 'بالا',
      cannibalizedSKUs: [
        { name: 'روغن مایع ۱٫۵ لیتری لادن', lossRate: 0.32, marginLoss: 18000 },
        { name: 'روغن کنجد ۸۰۰ گرمی اویلا', lossRate: 0.15, marginLoss: 35000 }
      ],
      haloEffectSKUs: [
        { name: 'ماکارونی ۷۰۰ گرمی زر', gainRate: 0.22, marginGain: 6500 },
        { name: 'رب گوجه ۸۰۰ گرمی تبرک', gainRate: 0.18, marginGain: 12000 }
      ]
    },
    {
      id: 'DET-4401',
      name: 'پودر لباسشویی دستی و ماشینی ۵۰۰ گرمی پرسیل',
      category: 'شوینده و بهداشتی',
      basePrice: 38000,
      costPrice: 26000,
      baseWeeklyQty: 18000,
      elasticity: 2.9,
      cannibalizationRisk: 'بالا',
      cannibalizedSKUs: [
        { name: 'مایع لباسشویی اکتیو ۱ لیتری', lossRate: 0.28, marginLoss: 24000 },
        { name: 'پودر ۵۰۰ گرمی تاژ', lossRate: 0.35, marginLoss: 9500 }
      ],
      haloEffectSKUs: [
        { name: 'مایع نرم‌کننده حوله سافتلن', gainRate: 0.30, marginGain: 14000 },
        { name: 'مایع ظرفشویی ۱ لیتری پریل', gainRate: 0.15, marginGain: 8500 }
      ]
    },
    {
      id: 'RICE-1020',
      name: 'برنج طارم محلی فریدونکنار ۱۰ کیلویی',
      category: 'کالای اساسی و خواربار',
      basePrice: 1250000,
      costPrice: 1080000,
      baseWeeklyQty: 3200,
      elasticity: 0.75, // Inelastic
      cannibalizationRisk: 'پایین',
      cannibalizedSKUs: [
        { name: 'برنج هاشمی ۱۰ کیلویی گلستان', lossRate: 0.12, marginLoss: 140000 }
      ],
      haloEffectSKUs: [
        { name: 'روغن زرد حیوانی ۵۰۰ گرمی', gainRate: 0.14, marginGain: 45000 },
        { name: 'زعفران ۱ مثقالی سحرخیز', gainRate: 0.10, marginGain: 80000 }
      ]
    },
    {
      id: 'SNK-3301',
      name: 'چیپس سرکه نمکی مزمز ۱۰۰ گرمی',
      category: 'تنقلات و چیپس',
      basePrice: 28000,
      costPrice: 16000,
      baseWeeklyQty: 24000,
      elasticity: 1.85,
      cannibalizationRisk: 'متوسط',
      cannibalizedSKUs: [
        { name: 'چیپس چیتوز فلفلی ۱۰۰ گرمی', lossRate: 0.22, marginLoss: 11000 },
        { name: 'پفک نمکی لینا', lossRate: 0.14, marginLoss: 6000 }
      ],
      haloEffectSKUs: [
        { name: 'نوشابه ۱٫۵ لیتری کوکاکولا', gainRate: 0.28, marginGain: 7500 },
        { name: 'ماست موسیر ۲۵۰ گرمی کاله', gainRate: 0.20, marginGain: 9000 }
      ]
    }
  ];

  const [selectedSKU, setSelectedSKU] = useState<SKUProfile>(skuProfiles[0]);
  const [discountPercent, setDiscountPercent] = useState<number>(18);
  const [vendorRebatePercent, setVendorRebatePercent] = useState<number>(8); // سهم تامین‌کننده در تخفیف
  const [considerCannibalization, setConsiderCannibalization] = useState<boolean>(true);
  const [considerHaloEffect, setConsiderHaloEffect] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'simulator' | 'matrix' | 'financials' | 'architecture'>('simulator');

  // Mathematical Calculations
  const discountAmount = selectedSKU.basePrice * (discountPercent / 100);
  const promoCustomerPrice = selectedSKU.basePrice - discountAmount;
  
  // Vendor Rebate: تامین کننده بخشی از تخفیف را تقبل می‌کند
  const refahShareOfDiscount = discountAmount * (1 - vendorRebatePercent / 100);
  const actualRefahCost = selectedSKU.costPrice;
  const promoRefahMarginPerUnit = (selectedSKU.basePrice - refahShareOfDiscount) - actualRefahCost;
  const regularRefahMarginPerUnit = selectedSKU.basePrice - actualRefahCost;

  // Expected Volume Lift via Elasticity
  const demandLiftPercent = discountPercent * selectedSKU.elasticity;
  const promoWeeklyQty = Math.round(selectedSKU.baseWeeklyQty * (1 + demandLiftPercent / 100));

  // Profit calculations in Million Toman
  const regularGrossProfitMillion = (selectedSKU.baseWeeklyQty * regularRefahMarginPerUnit) / 1000000;
  const directPromoGrossProfitMillion = (promoWeeklyQty * promoRefahMarginPerUnit) / 1000000;

  // Cannibalization loss calculation
  const totalCannibalizationLossMillion = considerCannibalization 
    ? selectedSKU.cannibalizedSKUs.reduce((acc, curr) => {
        const estimatedUnitsLost = (selectedSKU.baseWeeklyQty * (demandLiftPercent / 100)) * curr.lossRate;
        return acc + ((estimatedUnitsLost * curr.marginLoss) / 1000000);
      }, 0)
    : 0;

  // Halo effect basket profit gain
  const totalHaloEffectGainMillion = considerHaloEffect
    ? selectedSKU.haloEffectSKUs.reduce((acc, curr) => {
        const estimatedExtraUnits = (selectedSKU.baseWeeklyQty * (demandLiftPercent / 100)) * curr.gainRate;
        return acc + ((estimatedExtraUnits * curr.marginGain) / 1000000);
      }, 0)
    : 0;

  const netPromoProfitMillion = directPromoGrossProfitMillion - totalCannibalizationLossMillion + totalHaloEffectGainMillion;
  const profitDifferenceMillion = netPromoProfitMillion - regularGrossProfitMillion;
  const isNetProfitable = profitDifferenceMillion > 0;

  // Presets
  const applyPreset = (presetType: 'ai_optimal' | 'payday_mega' | 'margin_burner' | 'clearance') => {
    switch (presetType) {
      case 'ai_optimal':
        setDiscountPercent(14);
        setVendorRebatePercent(10);
        setConsiderCannibalization(true);
        setConsiderHaloEffect(true);
        break;
      case 'payday_mega':
        setDiscountPercent(22);
        setVendorRebatePercent(15);
        setConsiderCannibalization(true);
        setConsiderHaloEffect(true);
        break;
      case 'margin_burner':
        setDiscountPercent(38);
        setVendorRebatePercent(0);
        setConsiderCannibalization(true);
        setConsiderHaloEffect(false);
        break;
      case 'clearance':
        setDiscountPercent(30);
        setVendorRebatePercent(20);
        setConsiderCannibalization(false);
        setConsiderHaloEffect(true);
        break;
    }
  };

  // 7-Day Simulated Projection Curve
  const projectionData = [
    { day: 'شنبه', regular: regularGrossProfitMillion * 0.12, directPromo: directPromoGrossProfitMillion * 0.12, netAI: netPromoProfitMillion * 0.12 },
    { day: 'یکشنبه', regular: regularGrossProfitMillion * 0.13, directPromo: directPromoGrossProfitMillion * 0.13, netAI: netPromoProfitMillion * 0.13 },
    { day: 'دوشنبه', regular: regularGrossProfitMillion * 0.12, directPromo: directPromoGrossProfitMillion * 0.12, netAI: netPromoProfitMillion * 0.12 },
    { day: 'سه‌شنبه', regular: regularGrossProfitMillion * 0.14, directPromo: directPromoGrossProfitMillion * 0.14, netAI: netPromoProfitMillion * 0.14 },
    { day: 'چهارشنبه', regular: regularGrossProfitMillion * 0.16, directPromo: directPromoGrossProfitMillion * 0.16, netAI: netPromoProfitMillion * 0.16 },
    { day: 'پنجشنبه (پیک)', regular: regularGrossProfitMillion * 0.20, directPromo: directPromoGrossProfitMillion * 0.20, netAI: netPromoProfitMillion * 0.20 },
    { day: 'جمعه', regular: regularGrossProfitMillion * 0.13, directPromo: directPromoGrossProfitMillion * 0.13, netAI: netPromoProfitMillion * 0.13 },
  ];

  return (
    <div className="space-y-6">
      
      {/* Top Header Banner for Phase 1 */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 border border-emerald-500/30 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1.5">
                <Percent className="w-3.5 h-3.5 text-emerald-400" />
                <span>فاز ۱ سند تحول: بهینه‌سازی پروموشن و کشش قیمتی (پروژه C2)</span>
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                Flagship Wave 1 (اولویت ۱ ویژه)
              </span>
            </div>

            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white">
              موتور هوش مصنوعی بهینه‌سازی تخفیفات و تحلیل کشش قیمت رفاه
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              حل بحران ۳۶٪ تخفیف‌های زیان‌ده، جلوگیری از همنوع‌خواری کالاها (Cannibalization) و افزایش خالص سود ناخالص هفتگی با مدل‌سازی کشش متقاطع تقاضا و سهم تامین‌کننده (Supplier Rebate).
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="grid grid-cols-2 gap-3 shrink-0 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">نسبت منفعت به هزینه:</span>
              <span className="text-xl font-black text-emerald-400">۶٫۸۴ برابر</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">سود خالص سالانه:</span>
              <span className="text-xl font-black text-emerald-400">۴۸٫۵ م.ت</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">هزینه پایلوت:</span>
              <span className="text-sm font-bold text-white">۳۵۰ میلیون تومان</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">دوره بازگشت:</span>
              <span className="text-sm font-bold text-emerald-300">۲٫۱ ماه</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="bg-white border border-slate-200 rounded-2xl p-2 flex flex-wrap items-center justify-between gap-2 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'simulator'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>شبیه‌ساز زنده کشش و کانیبالیزاسیون</span>
          </button>

          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'matrix'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Boxes className="w-3.5 h-3.5" />
            <span>ماتریس کشش متقاطع اقلام کاتالوگ</span>
          </button>

          <button
            onClick={() => setActiveTab('financials')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'financials'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Coins className="w-3.5 h-3.5" />
            <span>توجیه اقتصادی و مدل مالی ۴۸٫۵ میلیاردی</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'architecture'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>معماری فنی (ADR) و پایپ‌لاین ML</span>
          </button>
        </div>

        <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
          شاخص ارزیابی: COM-09
        </span>
      </div>

      {/* TAB 1: LIVE SIMULATOR */}
      {activeTab === 'simulator' && (
        <div className="space-y-6">
          
          {/* SKU Selector Bar */}
          <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-slate-900 flex items-center gap-2">
                <ShoppingCart className="w-4 h-4 text-emerald-600" />
                <span>انتخاب کالای تستی از کاتالوگ Master SKU رفاه:</span>
              </span>
              <span className="text-xs text-slate-500 font-medium">
                کشش قیمتی: <strong className="text-emerald-700 font-mono">{selectedSKU.elasticity}</strong>
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {skuProfiles.map((sku) => {
                const isSelected = selectedSKU.id === sku.id;
                return (
                  <button
                    key={sku.id}
                    onClick={() => setSelectedSKU(sku)}
                    className={`p-3 rounded-2xl text-right transition cursor-pointer border ${
                      isSelected
                        ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500/20 text-emerald-950'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="text-xs font-black truncate">{sku.name}</div>
                    <div className="flex items-center justify-between mt-1 text-[11px] text-slate-500">
                      <span>{sku.category}</span>
                      <span className="font-bold text-slate-800 font-mono">{sku.basePrice.toLocaleString('fa-IR')} ت</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Presets Bar */}
          <div className="bg-slate-900 text-white rounded-2xl p-3.5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>سناریوهای پیش‌فرض هوشمند:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => applyPreset('ai_optimal')}
                className="px-3 py-1.5 rounded-xl text-xs font-extrabold bg-emerald-600 hover:bg-emerald-500 text-white transition cursor-pointer shadow-xs"
              >
                تخفیف بهینه هوش مصنوعی (۱۴٪ با سهم تامین‌کننده)
              </button>
              <button
                onClick={() => applyPreset('payday_mega')}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 transition cursor-pointer border border-slate-700"
              >
                جشنواره آخر ماه (۲۲٪)
              </button>
              <button
                onClick={() => applyPreset('margin_burner')}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-950 hover:bg-rose-900 text-rose-200 transition cursor-pointer border border-rose-800"
              >
                تخفیف کور و پرخطر (۳۸٪ زیان‌ده)
              </button>
            </div>
          </div>

          {/* Interactive Simulation Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Controls & Inputs (7 Cols) */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
              
              <div className="space-y-4">
                {/* Slider 1: Discount Depth */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-800">
                    <span>درصد تخفیف مصرف‌کننده (Discount Depth):</span>
                    <span className="text-emerald-700 text-lg font-black">{discountPercent}٪</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="45"
                    step="1"
                    value={discountPercent}
                    onChange={(e) => setDiscountPercent(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>بدون تخفیف (۰٪)</span>
                    <span className="text-emerald-700 font-bold">بازه سودآور پیشنهادی (۱۰٪ الی ۱۶٪)</span>
                    <span className="text-rose-600 font-bold">تخریب مارجین (&gt;۳۰٪)</span>
                  </div>
                </div>

                {/* Slider 2: Vendor Rebate Support */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-800">
                    <span>سهم تقبل تخفیف توسط تامین‌کننده (Supplier Rebate):</span>
                    <span className="text-emerald-700 text-lg font-black">{vendorRebatePercent}٪</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="30"
                    step="1"
                    value={vendorRebatePercent}
                    onChange={(e) => setVendorRebatePercent(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>تخفیف ۱۰۰٪ از جیب رفاه (۰٪)</span>
                    <span>سهم استاندارد قرارداد (۸٪)</span>
                    <span>حمایت حداکثری برند (۳۰٪)</span>
                  </div>
                </div>

                {/* Toggles: Cannibalization & Halo Effect */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div 
                    onClick={() => setConsiderCannibalization(!considerCannibalization)}
                    className={`p-3.5 rounded-2xl border cursor-pointer select-none transition ${
                      considerCannibalization 
                        ? 'bg-rose-50/70 border-rose-300 text-rose-950' 
                        : 'bg-slate-50 border-slate-200 text-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black flex items-center gap-1.5">
                        <Flame className="w-4 h-4 text-rose-600" />
                        <span>محاسبه کانیبالیزاسیون</span>
                      </span>
                      <input type="checkbox" checked={considerCannibalization} readOnly className="accent-rose-600" />
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1 font-medium">
                      کسر زیان ناشی از افت فروش برندهای رقیب با حاشیه سود بالاتر در شلف رفاه
                    </p>
                  </div>

                  <div 
                    onClick={() => setConsiderHaloEffect(!considerHaloEffect)}
                    className={`p-3.5 rounded-2xl border cursor-pointer select-none transition ${
                      considerHaloEffect 
                        ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950' 
                        : 'bg-slate-50 border-slate-200 text-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black flex items-center gap-1.5">
                        <ShoppingBag className="w-4 h-4 text-emerald-600" />
                        <span>محاسبه اثر هاله (Halo Effect)</span>
                      </span>
                      <input type="checkbox" checked={considerHaloEffect} readOnly className="accent-emerald-600" />
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1 font-medium">
                      افزودن سود جانبی حاصل از خرید اقلام مکمل سبد توسط مشتری جذب‌شده
                    </p>
                  </div>
                </div>
              </div>

              {/* Real-time Calculated Unit Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-2xl text-center">
                  <span className="text-[10px] text-slate-500 font-bold block">قیمت مصرف‌کننده</span>
                  <span className="text-sm font-black text-slate-900 block mt-0.5">
                    {promoCustomerPrice.toLocaleString('fa-IR')} ت
                  </span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-2xl text-center">
                  <span className="text-[10px] text-slate-500 font-bold block">تیراژ فروش هفتگی</span>
                  <span className="text-sm font-black text-slate-900 block mt-0.5">
                    {promoWeeklyQty.toLocaleString('fa-IR')} عدد
                  </span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-2xl text-center">
                  <span className="text-[10px] text-slate-500 font-bold block">رشد تیراژ (Lift)</span>
                  <span className="text-sm font-black text-emerald-700 block mt-0.5">
                    +{demandLiftPercent.toFixed(1)}٪
                  </span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-2xl text-center">
                  <span className="text-[10px] text-slate-500 font-bold block">مارجین رفاه بر واحد</span>
                  <span className="text-sm font-black text-slate-900 block mt-0.5">
                    {promoRefahMarginPerUnit.toLocaleString('fa-IR')} ت
                  </span>
                </div>
              </div>

              {/* AI Diagnostic Verdict Banner */}
              <div className={`p-4 rounded-2xl border flex items-start gap-3.5 ${
                isNetProfitable 
                  ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950' 
                  : 'bg-rose-50/90 border-rose-300 text-rose-950'
              }`}>
                {isNetProfitable ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                )}
                <div className="text-xs space-y-1">
                  <div className="font-extrabold text-sm">
                    {isNetProfitable
                      ? `پروموشن پایدار و سودآور: +${profitDifferenceMillion.toFixed(1)} میلیون تومان سود مازاد خالص در هفته`
                      : `هشدار تخریب مارجین: -${Math.abs(profitDifferenceMillion).toFixed(1)} میلیون تومان زیان خالص نسبت به فروش عادی!`
                    }
                  </div>
                  <p className="text-slate-700 text-xs leading-relaxed font-medium">
                    {isNetProfitable
                      ? `رشد تقاضای +${demandLiftPercent.toFixed(0)}٪ به همراه حمایت ${vendorRebatePercent}٪ تامین‌کننده، هزینه‌های تخفیف و کانیبالیزاسیون را کاملاً پوشش داده و مارجین کلی را ارتقا می‌دهد.`
                      : `عمق تخفیف ${discountPercent}٪ فراتر از نقطه بهینه کشش قیمتی است و حتی با رشد تقاضا، سود نهایی رفاه کاهش می‌یابد. توصیه اکید هوش مصنوعی: تخفیف را به زیر ۱۵٪ محدود کنید.`
                    }
                  </p>
                </div>
              </div>

            </div>

            {/* Right Side: Charts & Financial Breakdown (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Gross Profit Comparison Bar Chart */}
              <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black text-slate-900">
                    مقایسه سود ناخالص هفتگی (میلیون تومان)
                  </h4>
                  <span className="text-[10px] font-bold text-slate-500">تحلیل جامع سبد</span>
                </div>

                <div className="h-56 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[
                      { name: 'فروش عادی', profit: regularGrossProfitMillion, color: '#64748b' },
                      { name: 'پروموشن مستقیم', profit: directPromoGrossProfitMillion, color: '#3b82f6' },
                      { name: 'خالص پس از کانیبالیزاسیون', profit: netPromoProfitMillion, color: isNetProfitable ? '#059669' : '#e11d48' }
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                      <YAxis tick={{ fontSize: 10 }} />
                      <Tooltip />
                      <Bar dataKey="profit" fill="#059669" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-slate-50 rounded-2xl p-3 text-xs space-y-2 border border-slate-100">
                  <div className="flex justify-between text-slate-600 font-medium">
                    <span>سود پایه فروش عادی:</span>
                    <strong className="text-slate-900">{regularGrossProfitMillion.toFixed(1)} م.ت</strong>
                  </div>
                  <div className="flex justify-between text-slate-600 font-medium">
                    <span>زیان کانیبالیزاسیون شلف:</span>
                    <strong className="text-rose-600">-{totalCannibalizationLossMillion.toFixed(1)} م.ت</strong>
                  </div>
                  <div className="flex justify-between text-slate-600 font-medium">
                    <span>سود هم‌افزای سبد مکمل (Halo):</span>
                    <strong className="text-emerald-700">+{totalHaloEffectGainMillion.toFixed(1)} م.ت</strong>
                  </div>
                  <div className="pt-1.5 border-t border-slate-200 flex justify-between font-black text-sm">
                    <span>سود خالص هفتگی نهایی:</span>
                    <span className={isNetProfitable ? 'text-emerald-700' : 'text-rose-600'}>
                      {netPromoProfitMillion.toFixed(1)} م.ت
                    </span>
                  </div>
                </div>
              </div>

              {/* Daily Trend Curve */}
              <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-xs space-y-3">
                <h4 className="text-xs font-black text-slate-900">
                  منحنی پیش‌بینی روزانه سود ناخالص ۷ روز هفته
                </h4>
                <div className="h-44 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={projectionData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                      <YAxis tick={{ fontSize: 10 }} />
                      <Tooltip />
                      <Area type="monotone" dataKey="netAI" stroke="#059669" fill="#10b981" fillOpacity={0.15} name="سود با تخفیف بهینه هوش مصنوعی" />
                      <Line type="monotone" dataKey="regular" stroke="#94a3b8" strokeDasharray="3 3" name="سود حالت عادی" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* TAB 2: CROSS-ELASTICITY MATRIX */}
      {activeTab === 'matrix' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
          <div>
            <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <Boxes className="w-5 h-5 text-emerald-600" />
              <span>ماتریس کشش متقاطع تقاضا و اثر همنوع‌خواری (Cross-Price Elasticity Matrix)</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              محاسبه ریاضی نحوه تغییر تقاضای اقلام مجاور بر اثر تغییر قیمت کالای لیدر در ۵۰۰ شعبه رفاه
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-extrabold">
                  <th className="py-3 px-4">کد و نام کالای پروموشن</th>
                  <th className="py-3 px-4">دسته بندی</th>
                  <th className="py-3 px-4">کشش قیمتی خودی (E)</th>
                  <th className="py-3 px-4">کالاهای تحت تاثیر کانیبالیزاسیون</th>
                  <th className="py-3 px-4">اقلام مکمل سبد خرید (Halo Effect)</th>
                  <th className="py-3 px-4">سقف تخفیف مجاز</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {skuProfiles.map((sku) => (
                  <tr key={sku.id} className="hover:bg-slate-50/80 transition">
                    <td className="py-3.5 px-4">
                      <span className="font-extrabold text-slate-900 block">{sku.name}</span>
                      <span className="text-[10px] text-slate-400 font-mono">{sku.id}</span>
                    </td>
                    <td className="py-3.5 px-4">{sku.category}</td>
                    <td className="py-3.5 px-4">
                      <span className="font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-mono">
                        {sku.elasticity}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 space-y-1">
                      {sku.cannibalizedSKUs.map((c, i) => (
                        <div key={i} className="text-[11px] text-rose-700 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                          <span>{c.name} (-{(c.lossRate * 100).toFixed(0)}٪)</span>
                        </div>
                      ))}
                    </td>
                    <td className="py-3.5 px-4 space-y-1">
                      {sku.haloEffectSKUs.map((h, i) => (
                        <div key={i} className="text-[11px] text-emerald-700 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>{h.name} (+{(h.gainRate * 100).toFixed(0)}٪)</span>
                        </div>
                      ))}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2.5 py-1 rounded-xl text-[11px] font-black bg-emerald-100 text-emerald-800">
                        حداکثر ۱۶٪
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: FINANCIALS & FORMULA JUSTIFICATION */}
      {activeTab === 'financials' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Coins className="w-5 h-5 text-emerald-600" />
                <span>فرمول رسمی اثبات سودآوری ۴۸٫۵ میلیارد تومانی پروژه C2</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                استخراج مستقیم بر اساس متدولوژی استاندارد سنجش اثربخشی سند بالادستی رفاه
              </p>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-3 font-mono text-xs">
              <div className="text-emerald-400 font-extrabold text-sm">
                فرمول منفعت خالص: Net Benefit = Base × ImpactRate × Coverage × Attribution
              </div>
              <div className="text-slate-300 leading-relaxed font-sans text-xs">
                خالص سود سالانه = ۲۱۰ میلیارد تومان بودجه تخفیفات تحت تاثیر × ۳۶٪ نرخ پروموشن‌های زیان‌ده × ۶۴٪ نرخ بهبود الگوریتم هوش مصنوعی × ۵۰٪ ضریب انتساب قطعی اسناد
              </div>
              <div className="text-emerald-300 font-extrabold text-sm pt-2 border-t border-slate-800">
                = ۴۸٫۵ میلیارد تومان سودآوری خالص سالانه برای فروشگاه‌های زنجیره‌ای رفاه
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">هزینه اجرای پایلوت (۸ هفته)</span>
                <span className="text-xl font-black text-slate-900 block mt-1">۳۵۰ میلیون تومان</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">شامل ۲۰ شعبه منتخب</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">سود خالص سالانه ۵۰۰ شعبه</span>
                <span className="text-xl font-black text-emerald-700 block mt-1">۴۸٫۵ میلیارد تومان</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">افزایش پایدار مارجین</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">نسبت منفعت به هزینه (BCR)</span>
                <span className="text-xl font-black text-emerald-700 block mt-1">۶٫۸۴ برابر</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">بالاترین نرخ بازدهی پورتفولیو</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">دوره بازگشت سرمایه</span>
                <span className="text-xl font-black text-emerald-700 block mt-1">۲٫۱ ماه</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">کمتر از ۶۵ روز</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: TECHNICAL ADR & ARCHITECTURE */}
      {activeTab === 'architecture' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
          <div>
            <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-emerald-600" />
              <span>تصمیم‌گیری معماری فنی ADR-002: پایپ‌لاین پیش‌بینی کشش با LightGBM و Redis</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              معماری بلادرنگ با تاخیر زیر ۵۰ میلی‌ثانیه برای پاسخ‌گویی به صندوق‌های فروشگاهی رفاه
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-emerald-600" />
                <span>۱. لایه دریافت و استخراج داده POS</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                اتصال مستقیم به رپلیکای پایگاه داده مرکزی رفاه (Oracle/SQL Server) و ثبت لاگ فاکتورها، تخفیفات اعمالی و بارکدها.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>۲. موتور یادگیری ماشین و Feature Store</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                ذخیره ویژگی‌های کشش قیمتی در Redis Cluster و آموزش خودکار مدل‌های LightGBM بر مبنای رفتار خرید مشتریان هر منطقه.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>۳. لایه گارد مارجین و صدور پروموشن</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                اعمال فیلتر محافظت از مارجین برای جلوگیری از تایید هرگونه تخفیف کانیبالیزه‌کننده پیش از ابلاغ به نرم‌افزار صندوق شعب.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
