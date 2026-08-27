import React, { useState } from 'react';
import { 
  Boxes, 
  Search, 
  AlertTriangle, 
  CheckCircle2, 
  RotateCcw, 
  Smartphone, 
  QrCode, 
  Layers, 
  ShieldCheck, 
  Coins, 
  Cpu, 
  Sliders, 
  TrendingUp, 
  TrendingDown, 
  Building2, 
  Clock, 
  Check, 
  X, 
  Flame, 
  Sparkles, 
  FileSpreadsheet, 
  ArrowRight,
  Info,
  ChevronRight,
  Zap,
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
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell,
  CartesianGrid,
  AreaChart,
  Area
} from 'recharts';

interface GhostStockSKU {
  id: string;
  name: string;
  category: string;
  systemQty: number;
  actualPhysicalQty: number; // ground truth
  scannedQty?: number; // what clerk inputs
  avgDailySales: number;
  zeroSalesDays: number;
  unitCost: number;
  unitPrice: number;
  poissonRisk: number; // 0 to 100
  shelfLocation: string;
  resolved: boolean;
  resolutionType?: 'out_of_stock_corrected' | 'misplaced_found' | 'shrinkage_written_off';
}

export const Phase2GhostStockOptimizer: React.FC = () => {
  // Initial Refah SKU Dataset with Ghost Stock Discrepancies
  const initialSKUs: GhostStockSKU[] = [
    {
      id: 'OIL-4102',
      name: 'روغن سرخ‌کردنی ۱٫۵ لیتری لادن',
      category: 'روغن و چربی‌ها',
      systemQty: 48,
      actualPhysicalQty: 0,
      avgDailySales: 16.5,
      zeroSalesDays: 4,
      unitCost: 49000,
      unitPrice: 62000,
      poissonRisk: 98,
      shelfLocation: 'راهرو B - ردیف ۳ - طبقه ۲',
      resolved: false
    },
    {
      id: 'TOM-8821',
      name: 'رب گوجه‌فرنگی ۸۰۰ گرمی روژین',
      category: 'کنسرو و خواربار',
      systemQty: 35,
      actualPhysicalQty: 0,
      avgDailySales: 8.2,
      zeroSalesDays: 5,
      unitCost: 32000,
      unitPrice: 44000,
      poissonRisk: 95,
      shelfLocation: 'راهرو C - ردیف ۱ - طبقه ۳',
      resolved: false
    },
    {
      id: 'TUNA-3012',
      name: 'کنسرو تن ماهی فلفلی ۱۸۰ گرمی شیلتون',
      category: 'کنسروجات',
      systemQty: 62,
      actualPhysicalQty: 8,
      avgDailySales: 11.0,
      zeroSalesDays: 3,
      unitCost: 65000,
      unitPrice: 85000,
      poissonRisk: 88,
      shelfLocation: 'راهرو C - ردیف ۲ - طبقه ۱',
      resolved: false
    },
    {
      id: 'DET-1090',
      name: 'مایع لباسشویی ۲٫۵ لیتری اکتیو',
      category: 'شوینده و بهداشتی',
      systemQty: 24,
      actualPhysicalQty: 22,
      avgDailySales: 4.5,
      zeroSalesDays: 1,
      unitCost: 95000,
      unitPrice: 128000,
      poissonRisk: 22,
      shelfLocation: 'راهرو E - ردیف ۴ - طبقه ۱',
      resolved: false
    },
    {
      id: 'CHE-5540',
      name: 'پنیر فتا ۴۰۰ گرمی پگاه',
      category: 'لبنیات و صبحانه',
      systemQty: 54,
      actualPhysicalQty: 0,
      avgDailySales: 14.0,
      zeroSalesDays: 3,
      unitCost: 28000,
      unitPrice: 38000,
      poissonRisk: 96,
      shelfLocation: 'یخچال مرکزی - قفسه ۴',
      resolved: false
    },
    {
      id: 'TEA-7719',
      name: 'چای معطر هندوستان ۵۰۰ گرمی شهرزاد',
      category: 'نوشیدنی گرم',
      systemQty: 40,
      actualPhysicalQty: 39,
      avgDailySales: 3.2,
      zeroSalesDays: 0,
      unitCost: 165000,
      unitPrice: 210000,
      poissonRisk: 14,
      shelfLocation: 'راهرو A - ردیف ۲ - طبقه ۴',
      resolved: false
    },
    {
      id: 'PAS-2291',
      name: 'ماکارونی ۷۰۰ گرمی اسپاگتی زر',
      category: 'ماکارونی و پاستا',
      systemQty: 110,
      actualPhysicalQty: 108,
      avgDailySales: 22.0,
      zeroSalesDays: 0,
      unitCost: 19000,
      unitPrice: 27000,
      poissonRisk: 8,
      shelfLocation: 'راهرو B - ردیف ۱ - طبقه ۲',
      resolved: false
    },
    {
      id: 'TIS-6632',
      name: 'دستمال کاغذی ۳۰۰ برگ دولایه پ Papia',
      category: 'سلولزی و بهداشتی',
      systemQty: 45,
      actualPhysicalQty: 0,
      avgDailySales: 9.5,
      zeroSalesDays: 4,
      unitCost: 31000,
      unitPrice: 42000,
      poissonRisk: 92,
      shelfLocation: 'راهرو F - ردیف ۲ - طبقه ۲',
      resolved: false
    }
  ];

  const [skus, setSkus] = useState<GhostStockSKU[]>(initialSKUs);
  const [selectedSKUId, setSelectedSKUId] = useState<string>(initialSKUs[0].id);
  const [activeTab, setActiveTab] = useState<'pda_scanner' | 'poisson_math' | 'ira_tracker' | 'financials' | 'architecture'>('pda_scanner');
  const [inputCount, setInputCount] = useState<string>('0');
  const [selectedResolution, setSelectedResolution] = useState<'out_of_stock_corrected' | 'misplaced_found' | 'shrinkage_written_off'>('out_of_stock_corrected');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Poisson sensitivity slider parameters
  const [poissonLambda, setPoissonLambda] = useState<number>(12); // Expected daily sales
  const [poissonDays, setPoissonDays] = useState<number>(3); // Consecutive zero days

  // Compute theoretical Poisson Probability: P(X=0 for k days) = exp(-lambda * k)
  const totalExpectedSales = poissonLambda * poissonDays;
  const zeroSalesProbability = Math.exp(-totalExpectedSales);
  const anomalyConfidence = (1 - zeroSalesProbability) * 100;

  const currentSelectedSKU = skus.find(s => s.id === selectedSKUId) || skus[0];

  // Action: Submit Count from PDA
  const handleResolveSKU = () => {
    const parsedCount = parseInt(inputCount, 10);
    if (isNaN(parsedCount) || parsedCount < 0) return;

    setSkus(prev => prev.map(s => {
      if (s.id === selectedSKUId) {
        return {
          ...s,
          scannedQty: parsedCount,
          resolved: true,
          resolutionType: selectedResolution,
          systemQty: parsedCount // System corrected immediately via Kafka Sync!
        };
      }
      return s;
    }));

    setToastMessage(`موجودی کاتالوگ برای ${currentSelectedSKU.name} بلافاصله به ${parsedCount} عدد در سیستم مرکزی اصلاح و سفارش اضطراری ثبت گردید.`);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Quick reset
  const handleResetAll = () => {
    setSkus(initialSKUs);
    setInputCount('0');
  };

  // Metrics
  const resolvedCount = skus.filter(s => s.resolved).length;
  const ghostCount = skus.filter(s => s.poissonRisk > 75).length;
  const resolvedGhostCount = skus.filter(s => s.poissonRisk > 75 && s.resolved).length;

  // Inventory Record Accuracy (IRA) Progression Data
  const iraProgressionData = [
    { week: 'هفته ۰ (وضعیت سنتی)', accuracy: 62.4, target: 90, lostSalesMillion: 280 },
    { week: 'هفته ۲ (شروع شمارش چرخه‌ای)', accuracy: 71.0, target: 90, lostSalesMillion: 210 },
    { week: 'هفته ۴ (پایلوت ۲۰ شعبه)', accuracy: 80.5, target: 90, lostSalesMillion: 140 },
    { week: 'هفته ۶ (تصحیح مستمر پواسون)', accuracy: 87.2, target: 90, lostSalesMillion: 85 },
    { week: 'هفته ۸ (استقرار پایدار)', accuracy: 92.4, target: 90, lostSalesMillion: 45 },
  ];

  // Poisson Curve Data
  const poissonCurveData = [
    { days: '۱ روز', pZero: Math.exp(-poissonLambda * 1) * 100, riskScore: (1 - Math.exp(-poissonLambda * 1)) * 100 },
    { days: '۲ روز', pZero: Math.exp(-poissonLambda * 2) * 100, riskScore: (1 - Math.exp(-poissonLambda * 2)) * 100 },
    { days: '۳ روز', pZero: Math.exp(-poissonLambda * 3) * 100, riskScore: (1 - Math.exp(-poissonLambda * 3)) * 100 },
    { days: '۴ روز', pZero: Math.exp(-poissonLambda * 4) * 100, riskScore: (1 - Math.exp(-poissonLambda * 4)) * 100 },
    { days: '۵ روز', pZero: Math.exp(-poissonLambda * 5) * 100, riskScore: (1 - Math.exp(-poissonLambda * 5)) * 100 },
  ];

  return (
    <div className="space-y-6">
      
      {/* Top Header Banner for Phase 2 */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 border border-indigo-500/30 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 flex items-center gap-1.5">
                <Boxes className="w-3.5 h-3.5 text-indigo-400" />
                <span>فاز ۲ سند تحول: انبارگردانی چرخه‌ای و کشف کالای نامرئی (پروژه B5)</span>
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                Flagship Wave 1 (زنجیره تامین هوشمند)
              </span>
            </div>

            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white">
              سیستم انبارگردانی چرخه‌ای هوشمند و پاکسازی کالای نامرئی (Ghost Stock)
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              رفع مغایرت ۳۰٪ تا ۴۵٪ سیستم با موجودی واقعی قفسه، حذف سرگردانی ۲۴ روزه کالاهای پرفروش در سیستم و ارتقای شاخص صحت موجودی (IRA) از ۶۲٪ به بیش از ۹۲٪ با شمارش روزانه فقط ۱۰ قلم بحرانی.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="grid grid-cols-2 gap-3 shrink-0 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">نسبت منفعت به هزینه:</span>
              <span className="text-xl font-black text-indigo-400">۴٫۷۶ برابر</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">بازگشت فروش سالانه:</span>
              <span className="text-xl font-black text-emerald-400">۳۲٫۰ م.ت</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">هزینه پایلوت:</span>
              <span className="text-sm font-bold text-white">۲۸۰ میلیون تومان</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">دوره بازگشت:</span>
              <span className="text-sm font-bold text-indigo-300">۲٫۸ ماه</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="bg-white border border-slate-200 rounded-2xl p-2 flex flex-wrap items-center justify-between gap-2 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <button
            onClick={() => setActiveTab('pda_scanner')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'pda_scanner'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>شبیه‌ساز تبلت/PDA انباردار و تصحیح فوری قفسه</span>
          </button>

          <button
            onClick={() => setActiveTab('poisson_math')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'poisson_math'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>موتور احتمالاتی پواسون (Poisson Anomaly)</span>
          </button>

          <button
            onClick={() => setActiveTab('ira_tracker')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'ira_tracker'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>شاخص صحت موجودی (IRA) و کاهش فرصت از دست رفته</span>
          </button>

          <button
            onClick={() => setActiveTab('financials')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'financials'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Coins className="w-3.5 h-3.5" />
            <span>مدل مالی و توجیه ۳۲ میلیارد تومانی</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'architecture'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>معماری فنی (ADR-005) و رویدادهای Kafka</span>
          </button>
        </div>

        <span className="text-[11px] font-bold text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200">
          شاخص ارزیابی: SCM-05
        </span>
      </div>

      {/* Toast Alert */}
      {toastMessage && (
        <div className="bg-emerald-600 text-white p-3.5 rounded-2xl text-xs font-bold flex items-center justify-between shadow-lg animate-fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
            <span>{toastMessage}</span>
          </div>
          <button onClick={() => setToastMessage(null)} className="cursor-pointer text-white/80 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* TAB 1: PDA SCANNER & LIVE DISCREPANCY RESOLVER */}
      {activeTab === 'pda_scanner' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left: 10 Prioritized High-Risk SKUs for Daily Cycle Count (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                  <Search className="w-4 h-4 text-indigo-600" />
                  <span>لیست اولویت‌دار هوش مصنوعی برای شمارش روزانه ۱۰ قلم (شعبه هایپر آزادی)</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  کالاهایی که در سیستم موجودی مثبت دارند اما به دلیل عدم فروش غیرعادی مشکوک به ناموجودی فیزیکی هستند
                </p>
              </div>

              <button
                onClick={handleResetAll}
                className="text-[11px] font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-xl transition cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>ریست پایلوت</span>
              </button>
            </div>

            {/* Progress Bar of Daily Count Task */}
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-700">پیشرفت بازرسی امروز: {resolvedCount} از {skus.length} قلم کالایی</span>
                <span className="text-indigo-700">{Math.round((resolvedCount / skus.length) * 100)}٪ تکمیل</span>
              </div>
              <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-indigo-600 h-full transition-all duration-500 rounded-full"
                  style={{ width: `${(resolvedCount / skus.length) * 100}%` }}
                />
              </div>
            </div>

            {/* SKU Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-extrabold">
                    <th className="py-3 px-3">کد کالا</th>
                    <th className="py-3 px-3">نام قلم کالایی</th>
                    <th className="py-3 px-3 text-center">موجودی سیستم</th>
                    <th className="py-3 px-3 text-center">روزهای بدون فروش</th>
                    <th className="py-3 px-3 text-center">ریسک Ghost</th>
                    <th className="py-3 px-3 text-center">وضعیت</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {skus.map((sku) => {
                    const isSelected = sku.id === selectedSKUId;
                    const isHighRisk = sku.poissonRisk > 75;
                    return (
                      <tr 
                        key={sku.id}
                        onClick={() => {
                          setSelectedSKUId(sku.id);
                          setInputCount(sku.resolved ? String(sku.scannedQty) : String(sku.actualPhysicalQty));
                        }}
                        className={`cursor-pointer transition ${
                          isSelected 
                            ? 'bg-indigo-50/90 font-bold text-indigo-950' 
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <td className="py-3 px-3 font-mono text-[11px] text-slate-500">{sku.id}</td>
                        <td className="py-3 px-3">
                          <div className="text-xs font-bold text-slate-900">{sku.name}</div>
                          <div className="text-[10px] text-slate-400">{sku.shelfLocation}</div>
                        </td>
                        <td className="py-3 px-3 text-center font-mono font-bold text-slate-800">
                          {sku.systemQty} عدد
                        </td>
                        <td className="py-3 px-3 text-center font-mono">
                          <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                            sku.zeroSalesDays >= 3 ? 'bg-amber-100 text-amber-900' : 'bg-slate-100 text-slate-700'
                          }`}>
                            {sku.zeroSalesDays} روز
                          </span>
                        </td>
                        <td className="py-3 px-3 text-center">
                          <span className={`px-2 py-0.5 rounded-full text-[11px] font-black ${
                            isHighRisk ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800'
                          }`}>
                            {sku.poissonRisk}٪
                          </span>
                        </td>
                        <td className="py-3 px-3 text-center">
                          {sku.resolved ? (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                              <Check className="w-3 h-3" />
                              <span>اصلاح شد</span>
                            </span>
                          ) : (
                            <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              isHighRisk ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-slate-100 text-slate-600'
                            }`}>
                              {isHighRisk ? 'نیازمند شمارش' : 'عادی'}
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

          </div>

          {/* Right: PDA Mobile Terminal UI (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-950 text-white rounded-3xl p-6 border border-slate-800 shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-indigo-400" />
                <span className="text-xs font-black tracking-wide text-white">ترمینال دستی انباردار رفاه (Refah PDA)</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-mono font-bold">
                ONLINE • KAFKA SYNC
              </span>
            </div>

            {/* Active Task Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">کالای در حال بازرسی:</span>
                <span className="text-[11px] font-mono text-indigo-400 font-bold">{currentSelectedSKU.id}</span>
              </div>

              <div className="text-sm font-black text-white">{currentSelectedSKU.name}</div>

              <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-800/80">
                <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">محل در شلف</span>
                  <span className="font-bold text-slate-200 block text-[11px] mt-0.5">{currentSelectedSKU.shelfLocation}</span>
                </div>
                <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">موجودی ثبتی سیستم</span>
                  <span className="font-bold text-amber-400 block text-xs mt-0.5">{currentSelectedSKU.systemQty} عدد</span>
                </div>
              </div>

              <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-400">میانگین فروش روزانه طبیعی:</span>
                <span className="font-bold text-emerald-400">{currentSelectedSKU.avgDailySales} عدد / روز</span>
              </div>
            </div>

            {/* Input Action Form */}
            <div className="space-y-3 pt-1">
              <label className="text-xs font-bold text-slate-300 block">
                تعداد شمارش‌شده واقعی در شلف و انبار فرعی:
              </label>

              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="0"
                  value={inputCount}
                  onChange={(e) => setInputCount(e.target.value)}
                  className="flex-1 bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-2.5 text-center font-mono text-lg font-black focus:outline-hidden focus:border-indigo-500"
                  placeholder="0"
                />
                <button
                  type="button"
                  onClick={() => setInputCount('0')}
                  className="px-3 py-2.5 bg-rose-950/60 border border-rose-800 text-rose-300 rounded-xl text-xs font-bold hover:bg-rose-900 transition cursor-pointer"
                >
                  صفر (کاملاً ناموجود)
                </button>
              </div>

              {/* Resolution Reason */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-medium text-slate-400 block">علت ریشه‌ای مغایرت:</label>
                <select
                  value={selectedResolution}
                  onChange={(e) => setSelectedResolution(e.target.value as any)}
                  className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-xl p-2.5 text-xs focus:outline-hidden"
                >
                  <option value="out_of_stock_corrected">عدم تطابق فیزیکی (کسری / خطای ورود اطلاعات)</option>
                  <option value="shrinkage_written_off">ضایعات / شکستگی / سرقت ثبت‌نشده (Shrinkage)</option>
                  <option value="misplaced_found">چیدمان اشتباه در انبار / قفسه دیگر پیدا شد</option>
                </select>
              </div>

              <button
                onClick={handleResolveSKU}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 transition cursor-pointer shadow-lg mt-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>ثبت شمارش و اعمال فوری در پایگاه داده مرکزی رفاه</span>
              </button>

              <p className="text-[10px] text-slate-400 text-center leading-relaxed">
                با ثبت این شمارش، پایپ‌لاین رویدادمحور B5 فوراً مغایرت را صفر کرده و در صورت کسری موجودی، سفارش‌گذاری مجدد با پروژه B1 تریگر می‌شود.
              </p>
            </div>

          </div>

        </div>
      )}

      {/* TAB 2: POISSON ANOMALY ENGINE & SENSITIVITY */}
      {activeTab === 'poisson_math' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Zap className="w-5 h-5 text-indigo-600" />
                <span>موتور احتمالاتی پواسون برای تشخیص قطعی کالای نامرئی (Zero-Sales Poisson Anomaly)</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                اگر کالایی با میانگین فروش $\lambda$ برای چند روز پیاپی هیچ فروشی در POS نداشته باشد، احتمال حضور فیزیکی آن در شلف صفر میل می‌کند.
              </p>
            </div>

            {/* Formula Explanation Banner */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-3 font-mono text-xs">
              <div className="text-indigo-400 font-extrabold text-sm">
                فرمول پواسون توزیع فروش صفر: P(Sales = 0 for k days) = e^(-λ × k)
              </div>
              <div className="text-slate-300 font-sans text-xs leading-relaxed">
                هرچه نرخ میانگین فروش کالا ($\lambda$) بالاتر باشد، حتی ۲ روز عدم فروش نشان‌دهنده خطای قطعی سیستم است و کالا در شلف وجود فیزیکی ندارد.
              </div>
              <div className="text-emerald-400 font-bold text-xs pt-2 border-t border-slate-800">
                امتیاز ریسک ناموجودی پنهان (Anomaly Risk Score) = [1 - P(0)] × 100 = {anomalyConfidence.toFixed(2)}٪
              </div>
            </div>

            {/* Interactive Sliders for Math */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-800">
                  <span>میانگین فروش روزانه کالا ($\lambda$):</span>
                  <span className="text-indigo-700 font-mono text-base font-black">{poissonLambda} عدد / روز</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={poissonLambda}
                  onChange={(e) => setPoissonLambda(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-800">
                  <span>تعداد روزهای متوالی بدون حتی یک تراکنش فروش ($k$):</span>
                  <span className="text-indigo-700 font-mono text-base font-black">{poissonDays} روز</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="7"
                  value={poissonDays}
                  onChange={(e) => setPoissonDays(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
              </div>
            </div>

            {/* Chart: Probability decay */}
            <div className="space-y-3">
              <h4 className="text-xs font-black text-slate-900">
                منحنی جهش ریسک ناموجودی پنهان بر حسب روزهای بدون فروش (با نرخ فروش {poissonLambda} عدد در روز)
              </h4>
              <div className="h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={poissonCurveData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="days" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} unit="٪" />
                    <Tooltip />
                    <Area type="monotone" dataKey="riskScore" stroke="#4f46e5" fill="#6366f1" fillOpacity={0.2} name="ریسک کالای نامرئی (Ghost Score)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* TAB 3: IRA TRACKER & ACCURACY ADVANCEMENT */}
      {activeTab === 'ira_tracker' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-indigo-600" />
                <span>روند ارتقای شاخص صحت موجودی (Inventory Record Accuracy - SCM-05)</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                سنجش مستقیم اثر انبارگردانی چرخه‌ای هوشمند بر کاهش فروش از دست رفته در شعب رفاه
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* IRA Chart */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                <h4 className="text-xs font-bold text-slate-800">درصد صحت موجودی سیستم و شلف (IRA ٪)</h4>
                <div className="h-56 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={iraProgressionData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="week" tick={{ fontSize: 10 }} />
                      <YAxis domain={[50, 100]} tick={{ fontSize: 10 }} unit="٪" />
                      <Tooltip />
                      <Line type="monotone" dataKey="accuracy" stroke="#4f46e5" strokeWidth={3} name="صحت واقعی موجودی" />
                      <Line type="monotone" dataKey="target" stroke="#059669" strokeDasharray="3 3" name="هدف استراتژیک (۹۰٪)" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Lost Sales Drop Chart */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                <h4 className="text-xs font-bold text-slate-800">کاهش فروش از دست رفته هفتگی (میلیون تومان)</h4>
                <div className="h-56 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={iraProgressionData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="week" tick={{ fontSize: 10 }} />
                      <YAxis tick={{ fontSize: 10 }} />
                      <Tooltip />
                      <Bar dataKey="lostSalesMillion" fill="#e11d48" radius={[6, 6, 0, 0]} name="فروش از دست رفته" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: FINANCIAL JUSTIFICATION */}
      {activeTab === 'financials' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Coins className="w-5 h-5 text-indigo-600" />
                <span>توجیه اقتصادی و فرمول سودآوری ۳۲٫۰ میلیارد تومانی پروژه B5</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                استخراج بر اساس متدولوژی استاندارد سنجش اثربخشی زنجیره تامین رفاه (SCM-05)
              </p>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-3 font-mono text-xs">
              <div className="text-indigo-400 font-extrabold text-sm">
                فرمول منفعت مالی: Benefit = Lost Sales Recovered + Labor Cost Reduction
              </div>
              <div className="text-slate-300 leading-relaxed font-sans text-xs">
                بازگشت سالانه = ۲۴٫۵ میلیارد تومان جلوگیری از فرصت سوخته خرید مشتریان به دلیل قفسه خالی + ۷٫۵ میلیارد تومان صرفه‌جویی در هزینه انبارگردانی‌های طاقت‌فرسای فصلی
              </div>
              <div className="text-emerald-300 font-extrabold text-sm pt-2 border-t border-slate-800">
                = ۳۲٫۰ میلیارد تومان سودآوری و صرفه‌جویی خالص سالانه در شبکه ۵۰۰ شعبه رفاه
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">هزینه پایلوت (۸ هفته)</span>
                <span className="text-xl font-black text-slate-900 block mt-1">۲۸۰ میلیون تومان</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">۲۰ شعبه منتخب هایپر</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">سود خالص سالانه</span>
                <span className="text-xl font-black text-indigo-700 block mt-1">۳۲٫۰ میلیارد تومان</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">ارتقای مارجین ناخالص</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">نسبت منفعت به هزینه (BCR)</span>
                <span className="text-xl font-black text-indigo-700 block mt-1">۴٫۷۶ برابر</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">نرخ بازدهی قطعی</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">دوره بازگشت سرمایه</span>
                <span className="text-xl font-black text-emerald-700 block mt-1">۲٫۸ ماه</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">کمتر از ۸۵ روز</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: TECHNICAL ARCHITECTURE & KAFKA */}
      {activeTab === 'architecture' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
          <div>
            <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-indigo-600" />
              <span>تصمیم‌گیری معماری فنی ADR-005: معماری رویدادمحور و خط لوله داده Apache Kafka</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              همگام‌سازی بلادرنگ فاکتورهای صندوق POS با صف بررسی ناهنجاری و اپلیکیشن انباردار
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-indigo-600" />
                <span>۱. استخراج رویدادهای فروش POS CDC</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                استفاده از Debezium CDC برای ثبت آنی هر تراکنش خروج کالا از صندوق‌های فروشگاهی ۵۰۰ شعبه بدون افت کارایی پایگاه داده اصلی.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>۲. موتور پواسون و پردازش استریم (Flink)</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                ارزیابی پنجره‌های زمانی بدون فروش برای اقلام Fast-Moving و درج اتوماتیک رکوردهای مشکوک در صف وظایف اپلیکیشن PDA انباردار.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span>۳. همگام‌سازی دوطرفه با سیستم ERP رفاه</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                به‌محض ثبت شمارش توسط پرسنل در تبلت، رکورد موجودی در دیتابیس مرکزی آپدیت شده و مغایرت به صفر تقلیل می‌یابد.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
