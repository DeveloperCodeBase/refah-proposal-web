import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  Coins, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  RotateCcw, 
  ArrowRight,
  Layers,
  ChevronLeft,
  Store,
  FileCheck2
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { ProjectDetail } from '../types';

interface RoiCalculatorProps {
  onSelectProject?: (project: ProjectDetail) => void;
  onOpenMoU: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenMoU }) => {
  const [storeCount, setStoreCount] = useState<number>(500);
  const [promoBudgetBillion, setPromoBudgetBillion] = useState<number>(220);
  const [inventoryBaseBillion, setInventoryBaseBillion] = useState<number>(140);
  const [hrBudgetBillion, setHrBudgetBillion] = useState<number>(45);
  const [activeWaves, setActiveWaves] = useState<{ wave1: boolean; wave2: boolean; wave3: boolean }>({
    wave1: true,
    wave2: true,
    wave3: false
  });

  // Calculate annual benefits based on document formulas
  // Wave 1 benefits:
  // C2: promoBudget * 8.5% improvement * 80% coverage * 50% attribution
  const c2Benefit = (promoBudgetBillion * 0.085 * 0.8 * 0.5) * (storeCount / 500);
  // B5 & B1: inventoryBase * 22% waste reduction * 70% coverage * 50% attribution
  const b5b1Benefit = (inventoryBaseBillion * 0.22 * 0.7 * 0.5) * (storeCount / 500);
  // A3: hrBudget * 35% productivity * 80% coverage * 50% attribution
  const a3Benefit = (hrBudgetBillion * 0.35 * 0.8 * 0.5) * (storeCount / 500);

  const wave1TotalBenefit = c2Benefit + b5b1Benefit + a3Benefit;
  const wave1DeployCostBillion = 4.8;

  // Wave 2 benefits:
  const wave2Benefit = (35 * (storeCount / 500));
  const wave2DeployCostBillion = 3.5;

  // Wave 3 benefits:
  const wave3Benefit = (22 * (storeCount / 500));
  const wave3DeployCostBillion = 2.8;

  let totalProjectedBenefit = 0;
  let totalDeploymentCost = 0;

  if (activeWaves.wave1) {
    totalProjectedBenefit += wave1TotalBenefit;
    totalDeploymentCost += wave1DeployCostBillion;
  }
  if (activeWaves.wave2) {
    totalProjectedBenefit += wave2Benefit;
    totalDeploymentCost += wave2DeployCostBillion;
  }
  if (activeWaves.wave3) {
    totalProjectedBenefit += wave3Benefit;
    totalDeploymentCost += wave3DeployCostBillion;
  }

  const bcr = totalDeploymentCost > 0 ? (totalProjectedBenefit / totalDeploymentCost) : 0;
  const paybackMonths = totalProjectedBenefit > 0 ? ((totalDeploymentCost / totalProjectedBenefit) * 12) : 0;

  // 3-Year cumulative cashflow curve
  const cashflowData = [
    { month: 'ماه ۰', هزینه_تجمعی: Math.round(totalDeploymentCost * 0.3), سود_خالص_تجمعی: 0 },
    { month: 'ماه ۳ (پایان پایلوت)', هزینه_تجمعی: Math.round(totalDeploymentCost * 0.6), سود_خالص_تجمعی: Math.round(totalProjectedBenefit * 0.15) },
    { month: 'ماه ۶ (استقرار)', هزینه_تجمعی: Math.round(totalDeploymentCost), سود_خالص_تجمعی: Math.round(totalProjectedBenefit * 0.45) },
    { month: 'ماه ۱۲ (سال اول)', هزینه_تجمعی: Math.round(totalDeploymentCost), سود_خالص_تجمعی: Math.round(totalProjectedBenefit) },
    { month: 'ماه ۲۴ (سال دوم)', هزینه_تجمعی: Math.round(totalDeploymentCost * 1.2), سود_خالص_تجمعی: Math.round(totalProjectedBenefit * 2.2) },
    { month: 'ماه ۳۶ (سال سوم)', هزینه_تجمعی: Math.round(totalDeploymentCost * 1.3), سود_خالص_تجمعی: Math.round(totalProjectedBenefit * 3.6) },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
                مدل‌سازی مالی اختصاصی
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                ماشین‌حساب هوشمند بازگشت سرمایه (ROI) برای فروشگاه‌های رفاه
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              محاسبه اثر مالی اجرای پروژه‌ها متناسب با تعداد شعب، بودجه تخفیفات و حجم موجودی رفاه
            </p>
          </div>

          <button
            onClick={onOpenMoU}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition cursor-pointer"
          >
            <FileCheck2 className="w-4 h-4" />
            <span>مشاهده پیش‌نویس قرارداد پایلوت</span>
          </button>
        </div>
      </div>

      {/* Main Calculator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Input Sliders */}
        <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 space-y-5 shadow-sm">
          <h2 className="text-sm font-black text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Calculator className="w-4 h-4 text-emerald-600" />
            <span>تنظیم متغیرهای عملیاتی و مالی رفاه:</span>
          </h2>

          {/* Store Count Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-700 font-bold">تعداد کل شعب فعال رفاه در کشور:</span>
              <span className="font-black text-emerald-700 text-sm bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">{storeCount} شعبه</span>
            </div>
            <input 
              type="range" 
              min={100} 
              max={800} 
              step={20}
              value={storeCount}
              onChange={(e) => setStoreCount(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-medium">
              <span>۱۰۰ شعبه</span>
              <span className="font-bold text-slate-700">۵۰۰ شعبه (مبنای فعلی)</span>
              <span>۸۰۰ شعبه</span>
            </div>
          </div>

          {/* Promo Budget Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-700 font-bold">بودجه سالانه پروموشن و تخفیفات رفاه:</span>
              <span className="font-black text-teal-700 text-sm bg-teal-50 px-2 py-0.5 rounded border border-teal-200">{promoBudgetBillion} میلیارد تومان</span>
            </div>
            <input 
              type="range" 
              min={50} 
              max={600} 
              step={10}
              value={promoBudgetBillion}
              onChange={(e) => setPromoBudgetBillion(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
            />
          </div>

          {/* Inventory Shrinkage Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-700 font-bold">ارزش تلفات موجودی و ضایعات زنجیره تامین:</span>
              <span className="font-black text-emerald-700 text-sm bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">{inventoryBaseBillion} میلیارد تومان</span>
            </div>
            <input 
              type="range" 
              min={30} 
              max={400} 
              step={10}
              value={inventoryBaseBillion}
              onChange={(e) => setInventoryBaseBillion(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
          </div>

          {/* Wave Selection Toggles */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <span className="text-xs font-black text-slate-900 block">انتخاب امواج تحت پیاده‌سازی:</span>
            <div className="space-y-2">
              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100 transition">
                <span className="text-xs font-bold text-slate-800">موج ۱ (C2 پروموشن، B5 رکورد موجودی، B1 پیش‌بینی، A3 LMS)</span>
                <input 
                  type="checkbox" 
                  checked={activeWaves.wave1} 
                  onChange={(e) => setActiveWaves({ ...activeWaves, wave1: e.target.checked })}
                  className="w-4 h-4 accent-emerald-600"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100 transition">
                <span className="text-xs font-bold text-slate-800">موج ۲ (C1 سبد خرید شخصی، C3 بینایی ماشین دوربین‌ها)</span>
                <input 
                  type="checkbox" 
                  checked={activeWaves.wave2} 
                  onChange={(e) => setActiveWaves({ ...activeWaves, wave2: e.target.checked })}
                  className="w-4 h-4 accent-emerald-600"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100 transition">
                <span className="text-xs font-bold text-slate-800">موج ۳ (D1 مرکز فرماندهی و برج مراقبت داده مدیرعامل)</span>
                <input 
                  type="checkbox" 
                  checked={activeWaves.wave3} 
                  onChange={(e) => setActiveWaves({ ...activeWaves, wave3: e.target.checked })}
                  className="w-4 h-4 accent-emerald-600"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Right: Projected Financial Outcomes */}
        <div className="lg:col-span-7 space-y-5">
          {/* Outcome Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 text-center shadow-xs">
              <div className="text-[11px] text-slate-500 font-bold">سودآوری خالص سالانه برآوردی</div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-700 mt-1">
                {totalProjectedBenefit.toFixed(1)} م.ت
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">میلیارد تومان سود ناخالص فزاینده</div>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 text-center shadow-xs">
              <div className="text-[11px] text-slate-500 font-bold">نسبت منفعت به هزینه کل</div>
              <div className="text-2xl sm:text-3xl font-black text-teal-700 mt-1">
                {bcr.toFixed(2)}x
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">بازدهی کل سبد سرمایه‌گذاری</div>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 text-center col-span-2 sm:col-span-1 shadow-xs">
              <div className="text-[11px] text-slate-500 font-bold">دوره سرآمد سرمایه</div>
              <div className="text-2xl sm:text-3xl font-black text-amber-600 mt-1">
                {paybackMonths.toFixed(1)} ماه
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">بازگشت کامل مخارج</div>
            </div>
          </div>

          {/* 3-Year Cumulative Cashflow Chart */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>نمودار جریان نقدی تجمعی ۳ ساله (میلیارد تومان):</span>
              </h3>
              <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">نقطه سرآمد در ماه ۳</span>
            </div>

            <div className="h-56 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={cashflowData} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
                  <XAxis dataKey="month" stroke="#64748b" fontSize={10} tickLine={false} />
                  <YAxis stroke="#64748b" fontSize={11} tickLine={false} unit=" م.ت" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', borderRadius: '8px', fontSize: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    formatter={(val: any) => [`${val} میلیارد تومان`, '']}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="سود_خالص_تجمعی" 
                    stroke="#059669" 
                    fill="#059669" 
                    fillOpacity={0.15} 
                    name="سود خالص تجمعی"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="هزینه_تجمعی" 
                    stroke="#e11d48" 
                    fill="#e11d48" 
                    fillOpacity={0.1} 
                    name="هزینه پیاده‌سازی"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Executive Value Guarantee */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4.5 space-y-2">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>تضمین عملکردی شرکت ما در قرارداد با رفاه:</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              هزینه فاز پایلوت تنها در صورت دستیابی قطعی به حداقل ۵۰٪ از اهداف مالی پیش‌بینی شده در شعب آزمون تثبیت خواهد شد. این تضمین ریسک تصمیم‌گیری برای هیئت مدیره رفاه را به صفر می‌رساند.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
