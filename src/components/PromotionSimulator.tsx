import React, { useState } from 'react';
import { 
  Percent, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  RotateCcw, 
  ArrowRight, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  HelpCircle,
  Zap,
  BarChart3,
  Scale,
  FileCheck2
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Legend 
} from 'recharts';
import { PROMOTION_SAMPLE_ITEMS } from '../data/projects';

interface PromotionSimulatorProps {
  onRequestPilotProposal?: () => void;
}

export const PromotionSimulator: React.FC<PromotionSimulatorProps> = ({
  onRequestPilotProposal
}) => {
  const [selectedSkuId, setSelectedSkuId] = useState<string>('sku-101');
  const [items, setItems] = useState(PROMOTION_SAMPLE_ITEMS);

  const selectedItem = items.find(it => it.id === selectedSkuId) || items[0];

  // Calculations for current selected item
  const regularPrice = selectedItem.currentPrice;
  const costPrice = selectedItem.costPrice;
  const regularSales = selectedItem.regularWeeklySales;
  const discountPercent = selectedItem.currentDiscountPercent;
  const elasticity = selectedItem.elasticity;

  // Regular baseline revenue & gross profit (No Promo)
  const regularRevenue = regularPrice * regularSales;
  const regularProfit = (regularPrice - costPrice) * regularSales;

  // Promotional scenario
  const discountedPrice = regularPrice * (1 - discountPercent / 100);
  const salesLiftMultiplier = 1 + elasticity * (discountPercent / 100);
  const promoUnitsSold = Math.round(regularSales * salesLiftMultiplier);
  const promoRevenue = discountedPrice * promoUnitsSold;
  const promoProfit = (discountedPrice - costPrice) * promoUnitsSold;

  // Key metrics
  const incrementalUnits = promoUnitsSold - regularSales;
  const incrementalProfit = promoProfit - regularProfit;
  const directPromoCost = (regularPrice * (discountPercent / 100)) * promoUnitsSold;
  
  // COM-09: Promotion ROI = Incremental Margin / Total Promo Cost
  const promoRoi = directPromoCost > 0 ? (incrementalProfit / directPromoCost) : 0;
  
  // COM-10: Loss-making detection
  const isLossMaking = promoProfit < regularProfit || (discountedPrice <= costPrice);

  // Cannibalization cost estimate if risk is medium/high
  const cannibalizationDeduction = selectedItem.cannibalizationRisk === 'high' 
    ? (regularProfit * 0.18) 
    : selectedItem.cannibalizationRisk === 'medium' 
    ? (regularProfit * 0.08) 
    : 0;

  // AI Optimal Discount recommendation based on elasticity and margin
  const marginRatio = (regularPrice - costPrice) / regularPrice;
  const optimalDiscountPercent = Math.max(5, Math.min(30, Math.round(((elasticity * marginRatio - 1) / (2 * elasticity * marginRatio)) * 100 + 10)));

  const handleUpdateItem = (field: string, value: number) => {
    setItems(prev => prev.map(it => {
      if (it.id === selectedSkuId) {
        return { ...it, [field]: value };
      }
      return it;
    }));
  };

  const handleApplyAiRecommendation = () => {
    handleUpdateItem('currentDiscountPercent', optimalDiscountPercent);
  };

  const comparisonChartData = [
    {
      name: 'فروش عادی (بدون تخفیف)',
      سود_ناخالص: Math.round(regularProfit / 1000000),
      درآمد_کل: Math.round(regularRevenue / 1000000),
    },
    {
      name: 'سناریوی فعلی تخفیف',
      سود_ناخالص: Math.round(promoProfit / 1000000),
      درآمد_کل: Math.round(promoRevenue / 1000000),
    }
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Simulator Header */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
                پایلوت فعال پرچم‌دار (C2)
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                شبیه‌ساز زنده بهینه‌سازی پروموشن و کشش قیمتی
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              محاسبه بلادرنگ شاخص‌های COM-09 (بازده تخفیف)، COM-10 (زیان‌ده بودن)، کانیبالیزاسیون و تعیین عمق بهینه تخفیف
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleApplyAiRecommendation}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>اعمال توصیه بهینه هوش مصنوعی ({optimalDiscountPercent}٪)</span>
            </button>

            {onRequestPilotProposal && (
              <button
                onClick={onRequestPilotProposal}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4 text-emerald-600" />
                <span>صدور پیشنهاد پایلوت</span>
              </button>
            )}
          </div>
        </div>

        {/* SKU Selector Tabs */}
        <div className="flex items-center gap-2 mt-5 overflow-x-auto no-scrollbar pb-1">
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() => setSelectedSkuId(it.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer border ${
                selectedSkuId === it.id
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300 font-bold shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200'
              }`}
            >
              <span>{it.title}</span>
              <span className="text-[10px] text-slate-400 mr-1.5">({it.category})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Sliders & Controls */}
        <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 space-y-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <Scale className="w-4 h-4 text-emerald-600" />
              <span>پارامترهای کالا و سناریوی تخفیف:</span>
            </h2>
            <span className="text-[11px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{selectedItem.skuCode}</span>
          </div>

          {/* Discount Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-700 font-bold">درصد تخفیف اعمالی روی کالا:</span>
              <span className="font-black text-emerald-700 text-sm font-mono bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">{discountPercent}٪</span>
            </div>
            <input 
              type="range" 
              min={0} 
              max={40} 
              step={1}
              value={discountPercent}
              onChange={(e) => handleUpdateItem('currentDiscountPercent', Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-medium">
              <span>۰٪ (بدون تخفیف)</span>
              <span className="text-emerald-700 font-bold">توصیه AI: {optimalDiscountPercent}٪</span>
              <span>۴۰٪ (حداکثر تخفیف)</span>
            </div>
          </div>

          {/* Elasticity Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-700 font-bold">ضریب کشش تقاضا (Elasticity - e):</span>
              <span className="font-black text-teal-700 text-sm font-mono bg-teal-50 px-2 py-0.5 rounded border border-teal-200">{elasticity}</span>
            </div>
            <input 
              type="range" 
              min={0.4} 
              max={3.5} 
              step={0.1}
              value={elasticity}
              onChange={(e) => handleUpdateItem('elasticity', Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-medium">
              <span>۰٫۴ (غیرکشش‌پذیر)</span>
              <span>۲٫۰ (بسیار حساس به قیمت)</span>
              <span>۳٫۵ (فوق حساس)</span>
            </div>
          </div>

          {/* Price details grid */}
          <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-[11px] text-slate-500 block">قیمت مصرف‌کننده مبنا:</span>
              <span className="font-bold text-slate-900 mt-1 block">{regularPrice.toLocaleString('fa-IR')} تومان</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-[11px] text-slate-500 block">قیمت تمام‌شده (بهای خرید):</span>
              <span className="font-bold text-slate-900 mt-1 block">{costPrice.toLocaleString('fa-IR')} تومان</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-[11px] text-slate-500 block">قیمت پس از اعمال تخفیف:</span>
              <span className="font-black text-emerald-700 mt-1 block">{discountedPrice.toLocaleString('fa-IR')} تومان</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-[11px] text-slate-500 block">فروش هفتگی مبنا (تعداد):</span>
              <span className="font-bold text-slate-900 mt-1 block">{regularSales.toLocaleString('fa-IR')} عدد</span>
            </div>
          </div>

          {/* Cannibalization Alert Box */}
          {selectedItem.cannibalizationRisk !== 'low' && (
            <div className="bg-amber-50 border border-amber-300 rounded-xl p-3.5 text-xs text-amber-900 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-amber-800">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>هشدار کانیبالیزاسیون (شاخص COM-11):</span>
              </div>
              <p className="text-[11px] text-slate-700 leading-relaxed">
                تخفیف روی این کالا موجب کاهش سود کالاهای هم‌گروه می‌شود: {selectedItem.cannibalizesSku || 'کالاهای مجاور'}.
                میزان زیان تخمینی کانیبالیزاسیون: <strong className="text-amber-800">{(cannibalizationDeduction / 1000000).toFixed(1)} میلیون تومان</strong>
              </p>
            </div>
          )}
        </div>

        {/* Right Column: Live Calculated KPIs & Comparison Chart */}
        <div className="lg:col-span-7 space-y-5">
          {/* KPI Outcome Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {/* COM-09 */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 text-center shadow-xs">
              <div className="text-[11px] text-slate-500 font-bold">شاخص COM-09 (بازده تخفیف)</div>
              <div className={`text-2xl font-black mt-1 ${promoRoi >= 1.5 ? 'text-emerald-700' : promoRoi >= 1.0 ? 'text-teal-700' : 'text-rose-600'}`}>
                {promoRoi > 0 ? promoRoi.toFixed(2) : '۰٫۰۰'}x
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">هدف رفاه: ۱٫۸۵x</div>
            </div>

            {/* COM-10 Status */}
            <div className={`border rounded-2xl p-4 text-center shadow-xs ${
              isLossMaking 
                ? 'bg-rose-50 border-rose-200 text-rose-900' 
                : 'bg-emerald-50 border-emerald-200 text-emerald-900'
            }`}>
              <div className="text-[11px] text-slate-600 font-bold">وضعیت COM-10</div>
              <div className="text-sm font-black mt-1">
                {isLossMaking ? '⚠️ تخفیف زیان‌ده!' : '✅ سودآور و فزاینده'}
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                {isLossMaking ? 'تخریب حاشیه سود' : 'ایجاد ارزش خالص'}
              </div>
            </div>

            {/* Incremental Profit Lift */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 text-center col-span-2 sm:col-span-1 shadow-xs">
              <div className="text-[11px] text-slate-500 font-bold">سود فزاینده خالص</div>
              <div className={`text-lg font-black mt-1 ${incrementalProfit >= 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                {(incrementalProfit / 1000000).toFixed(1)} م.تومان
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                رشد فروش: {Math.round((salesLiftMultiplier - 1) * 100)}٪
              </div>
            </div>
          </div>

          {/* Revenue and Profit Chart */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-900 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-emerald-600" />
                <span>مقایسه درآمد و سود ناخالص هفتگی (میلیون تومان):</span>
              </h3>
              <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">فروش کل: {promoUnitsSold.toLocaleString('fa-IR')} عدد</span>
            </div>

            <div className="h-56 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonChartData} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
                  <XAxis dataKey="name" stroke="#64748b" fontSize={11} tickLine={false} />
                  <YAxis stroke="#64748b" fontSize={11} tickLine={false} unit=" م.ت" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', borderRadius: '8px', fontSize: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    formatter={(value: any) => [`${value} میلیون تومان`, '']}
                  />
                  <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                  <Bar dataKey="درآمد_کل" fill="#0284c7" radius={[4, 4, 0, 0]} name="درآمد ناخالص" />
                  <Bar dataKey="سود_ناخالص" fill={isLossMaking ? '#e11d48' : '#059669'} radius={[4, 4, 0, 0]} name="سود ناخالص" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* AI Decision Recommendation Card */}
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4.5 space-y-2">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span>تحلیل موتور تصمیم‌یار هوش مصنوعی رفاه:</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              {isLossMaking ? (
                <span className="text-rose-800">
                  تخفیف {discountPercent}٪ روی {selectedItem.title} به دلیل کشش نامتقارن، سود ناخالص را کاهش داده است. 
                  پیشنهاد می‌شود عمق تخفیف به <strong className="text-emerald-700 font-bold">{optimalDiscountPercent}٪</strong> کاهش یابد یا از مکانیزم باندلینگ استفاده شود.
                </span>
              ) : (
                <span className="text-emerald-900">
                  تخفیف {discountPercent}٪ دارای اثربخشی مثبت بوده و فروش فزاینده خالصی معادل {(incrementalProfit / 1000000).toFixed(1)} میلیون تومان در هفته برای این کالا ایجاد می‌نماید.
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
