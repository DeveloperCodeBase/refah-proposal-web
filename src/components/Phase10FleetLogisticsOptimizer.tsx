import React, { useState } from 'react';
import { 
  Truck, 
  MapPin, 
  Navigation, 
  Sparkles, 
  Coins, 
  Cpu, 
  TrendingDown, 
  Clock, 
  Fuel, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Building2,
  Check,
  RotateCw,
  Boxes
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  CartesianGrid, 
  LineChart, 
  Line 
} from 'recharts';

interface FleetRouteItem {
  id: string;
  truckPlate: string;
  driverName: string;
  destinations: string[];
  totalDistanceKm: number;
  traditionalDistanceKm: number;
  fuelSavedLiters: number;
  status: 'در حال بارگیری' | 'در مسیر' | 'تخلیه موفق';
  eta: string;
  timeWindowAdherence: string;
}

export const Phase10FleetLogisticsOptimizer: React.FC = () => {
  const routesData: FleetRouteItem[] = [
    {
      id: 'RT-881',
      truckPlate: 'ایران ۴۴ - ۸۲۱ ج ۱۱ (ایسوزو ۶ تن)',
      driverName: 'محسن مرادی',
      destinations: ['مرکز پخش کرج', 'شعبه آزادی', 'شعبه انقلاب', 'شعبه صادقیه'],
      totalDistanceKm: 42,
      traditionalDistanceKm: 68,
      fuelSavedLiters: 16,
      status: 'در مسیر',
      eta: '۱۴:۴۵ (به‌موقع)',
      timeWindowAdherence: '۹۸٪ انطباق با پنجره زمانی شعبه'
    },
    {
      id: 'RT-882',
      truckPlate: 'ایران ۲۲ - ۳۱۴ ق ۷۷ (کامیونت فوتون یخچال‌دار)',
      driverName: 'رضا صبوری',
      destinations: ['مرکز پخش شورآباد', 'شعبه تجریش', 'شعبه نیاوران', 'شعبه پاسداران'],
      totalDistanceKm: 58,
      traditionalDistanceKm: 94,
      fuelSavedLiters: 22,
      status: 'در مسیر',
      eta: '۱۶:۱۰ (به‌موقع)',
      timeWindowAdherence: '۱۰۰٪ حفظ زنجیره سرد پروتئینی'
    },
    {
      id: 'RT-883',
      truckPlate: 'ایران ۱۱ - ۷۸۹ ل ۳۳ (ایسوزو ۵ تن)',
      driverName: 'مهدی احمدی',
      destinations: ['انبار مرکزی تهرانپارس', 'شعبه پیروزی', 'شعبه تهران‌پارس', 'شعبه رسالت'],
      totalDistanceKm: 34,
      traditionalDistanceKm: 55,
      fuelSavedLiters: 13,
      status: 'تخلیه موفق',
      eta: '۱۳:۲۰ (تکمیل شده)',
      timeWindowAdherence: 'تخلیه در کمتر از ۲۵ دقیقه'
    }
  ];

  const [routes, setRoutes] = useState<FleetRouteItem[]>(routesData);
  const [selectedRoute, setSelectedRoute] = useState<FleetRouteItem>(routesData[0]);
  const [isOptimizedView, setIsOptimizedView] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'routing_sandbox' | 'mileage_analytics' | 'financials' | 'architecture'>('routing_sandbox');

  // Route Efficiency Comparison Data
  const fleetPerformanceData = [
    { hub: 'هاب غرب (کرج)', traditionalKm: 3400, optimizedKm: 2180, fuelSavedLiter: 780 },
    { hub: 'هاب شرق (تهرانپارس)', traditionalKm: 2900, optimizedKm: 1850, fuelSavedLiter: 660 },
    { hub: 'هاب جنوب (شورآباد)', traditionalKm: 4200, optimizedKm: 2750, fuelSavedLiter: 920 },
    { hub: 'هاب اصفهان', traditionalKm: 2100, optimizedKm: 1390, fuelSavedLiter: 450 },
    { hub: 'هاب مشهد مقدس', traditionalKm: 2600, optimizedKm: 1720, fuelSavedLiter: 560 },
  ];

  return (
    <div className="space-y-6">
      
      {/* Top Header Banner for Phase 10 */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 text-white rounded-3xl p-6 sm:p-8 border border-sky-500/30 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-sky-500/20 text-sky-300 border border-sky-400/30 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-sky-400" />
                <span>فاز ۱۰ سند تحول: بهینه‌سازی مسیرگان ناوگان پخش مویرگی و دیسپچ هوشمند (پروژه SCM-2)</span>
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                Flagship Wave 1 (بهره‌وری لجستیک و ناوگان)
              </span>
            </div>

            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white">
              مسیریابی الگوریتمی ناوگان چندمقصدی با قید پنجره زمانی تخلیه شعب (VRPTW)
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              کاهش ۳۸٪ در پیمایش کیلومتری روزانه، بهینه‌سازی مصرف سوخت و استهلاک ۲۰۰+ کامیونت، حفظ کامل زنجیره سرد مواد غذایی و حذف معطلی تخلیه بار در ساعات شلوغی شعب رفاه.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="grid grid-cols-2 gap-3 shrink-0 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">نسبت منفعت به هزینه:</span>
              <span className="text-xl font-black text-sky-400">۴٫۹۰ برابر</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">صرفه‌جویی سالانه:</span>
              <span className="text-xl font-black text-emerald-400">۲۴٫۵ م.ت</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">هزینه پایلوت:</span>
              <span className="text-sm font-bold text-white">۲۱۰ میلیون تومان</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">دوره بازگشت:</span>
              <span className="text-sm font-bold text-sky-300">۲٫۴ ماه</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="bg-white border border-slate-200 rounded-2xl p-2 flex flex-wrap items-center justify-between gap-2 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <button
            onClick={() => setActiveTab('routing_sandbox')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'routing_sandbox'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>شبیه‌ساز زنده مسیریابی و دیسپچ چندمقصدی</span>
          </button>

          <button
            onClick={() => setActiveTab('mileage_analytics')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'mileage_analytics'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <TrendingDown className="w-3.5 h-3.5" />
            <span>کاهش پیمایش کیلومتری و مصرف سوخت هاب‌ها</span>
          </button>

          <button
            onClick={() => setActiveTab('financials')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'financials'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Coins className="w-3.5 h-3.5" />
            <span>مدل مالی و توجیه ۲۴٫۵ میلیارد تومانی</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'architecture'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>معماری فنی (ADR-010) و سالور OR-Tools VRPTW</span>
          </button>
        </div>

        <span className="text-[11px] font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-200">
          شاخص ارزیابی: SCM-02
        </span>
      </div>

      {/* TAB 1: INTERACTIVE ROUTING SANDBOX */}
      {activeTab === 'routing_sandbox' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left: Active Truck Dispatches (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-black text-slate-900 flex items-center gap-2">
                <Truck className="w-4 h-4 text-sky-600" />
                <span>ماموریت‌های فعال ناوگان:</span>
              </h3>

              <button
                onClick={() => setIsOptimizedView(!isOptimizedView)}
                className={`px-3 py-1 rounded-lg text-[10px] font-bold border transition cursor-pointer ${
                  isOptimizedView
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                    : 'bg-slate-100 border-slate-300 text-slate-700'
                }`}
              >
                {isOptimizedView ? '✓ حالت بهینه‌شده با الگوریتم' : 'حالت سنتی بدون بهینه‌سازی'}
              </button>
            </div>

            <div className="space-y-2">
              {routes.map(r => {
                const isSelected = selectedRoute.id === r.id;
                return (
                  <button
                    key={r.id}
                    onClick={() => setSelectedRoute(r)}
                    className={`w-full p-4 rounded-2xl text-right transition cursor-pointer border ${
                      isSelected
                        ? 'bg-sky-50 border-sky-500 ring-2 ring-sky-500/20 text-sky-950 shadow-xs'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black">{r.truckPlate}</span>
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                        r.status === 'در مسیر' ? 'bg-sky-100 text-sky-800' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {r.status}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-600 mt-1.5 font-medium">
                      راننده: {r.driverName} • {r.destinations.length} توقفگاه در مسیر
                    </p>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-400">
                      <span>مسافت: {isOptimizedView ? `${r.totalDistanceKm} کیلومتر` : `${r.traditionalDistanceKm} کیلومتر`}</span>
                      <span className="font-bold text-emerald-700">صرفه‌جویی سوخت: {r.fuelSavedLiters} لیتر</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Route Visualization & Stop Waypoints (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h4 className="text-sm font-black text-slate-900">{selectedRoute.truckPlate}</h4>
                <span className="text-xs text-slate-500">راننده: {selectedRoute.driverName} • شناسه دیسپچ: {selectedRoute.id}</span>
              </div>

              <span className="text-xs font-bold text-sky-800 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                {selectedRoute.eta}
              </span>
            </div>

            {/* Waypoints Sequence Display */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-700 block">ترتیب ایستگاه‌های تحویل بر اساس حداقل زمان ترافیک:</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                {selectedRoute.destinations.map((dest, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-sky-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-[11px] font-bold text-slate-800 truncate">{dest}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison Metrics */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 text-center">
                <span className="text-[10px] text-slate-400 block font-medium">مسافت پیمایش</span>
                <span className="text-sm font-black text-slate-900 mt-1 block">
                  {isOptimizedView ? selectedRoute.totalDistanceKm : selectedRoute.traditionalDistanceKm} کیلومتر
                </span>
              </div>

              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 text-center">
                <span className="text-[10px] text-slate-400 block font-medium">صرفه‌جویی سوخت</span>
                <span className="text-sm font-black text-emerald-700 mt-1 block">
                  {selectedRoute.fuelSavedLiters} لیتر گازوئیل
                </span>
              </div>

              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 text-center">
                <span className="text-[10px] text-slate-400 block font-medium">انطباق پنجره زمانی</span>
                <span className="text-xs font-black text-sky-700 mt-1 block">
                  {selectedRoute.timeWindowAdherence}
                </span>
              </div>
            </div>

            {/* AI Dispatch Advice */}
            <div className="bg-sky-50/80 border border-sky-200 p-4 rounded-2xl flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <span className="font-bold text-sky-950 block">تحلیل موتور لجستیک هوشمند رفاه:</span>
                <p className="text-slate-700 leading-relaxed font-medium">
                  با تنظیم توالی هوشمند تحویل کالا، کامیونت از ورود به محدوده طرح ترافیک در ساعات اوج ۱۶ الی ۱۸ اجتناب کرده و بار پروتئینی دقیقاً ۲۰ دقیقه پیش از آغاز شیفت عصر تحویل داده می‌شود.
                </p>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* TAB 2: MILEAGE & EMISSION ANALYTICS */}
      {activeTab === 'mileage_analytics' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-sky-600" />
                <span>مقایسه پیمایش کیلومتری روزانه ناوگان در ۵ هاب توزیع اصلی رفاه</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                کاهش میانگین ۳۸٪ در کل مسافت طی‌شده توسط کامیونت‌ها و کاهش متناظر در هزینه‌های استهلاک لاستیک و قطعات
              </p>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={fleetPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="hub" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} unit=" کیلومتر" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="traditionalKm" name="پیمایش سنتی (کیلومتر روزانه)" fill="#94a3b8" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="optimizedKm" name="پیمایش بهینه هوشمند رفاه (کیلومتر)" fill="#0284c7" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: FINANCIALS */}
      {activeTab === 'financials' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Coins className="w-5 h-5 text-sky-600" />
                <span>توجیه اقتصادی و مدل مالی ۲۴٫۵ میلیارد تومانی پروژه SCM-2</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                استخراج بر اساس متدولوژی استاندارد سنجش بهره‌وری لجستیک و ناوگان رفاه (SCM-02)
              </p>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-3 font-mono text-xs">
              <div className="text-sky-400 font-extrabold text-sm">
                فرمول منفعت مالی: Benefit = Fuel Savings + Maintenance Depreciation + Rented Fleet Rationalization + On-Time Shelf Stocking
              </div>
              <div className="text-slate-300 leading-relaxed font-sans text-xs">
                صرفه‌جویی سالانه = ۹٫۲ میلیارد تومان کاهش هزینه سوخت و استهلاک لاستیک/روغن + ۱۵٫۳ میلیارد تومان حذف نیاز به اجاره کامیونت‌های استیجاری مازاد و تحویل به‌موقع بار پروتئینی
              </div>
              <div className="text-emerald-300 font-extrabold text-sm pt-2 border-t border-slate-800">
                = ۲۴٫۵ میلیارد تومان صرفه‌جویی و بهبود حاشیه سود خالص لجستیک رفاه
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">هزینه پایلوت (۸ هفته)</span>
                <span className="text-xl font-black text-slate-900 block mt-1">۲۱۰ میلیون تومان</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">تجهیز ۴۰ کامیونت پایلوت</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">صرفه‌جویی سالانه</span>
                <span className="text-xl font-black text-sky-700 block mt-1">۲۴٫۵ میلیارد تومان</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">کاهش هزینه‌های ناوگان</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">نسبت منفعت به هزینه (BCR)</span>
                <span className="text-xl font-black text-sky-700 block mt-1">۴٫۹۰ برابر</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">بازگشت سرمایه پرشتاب</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">دوره بازگشت سرمایه</span>
                <span className="text-xl font-black text-emerald-700 block mt-1">۲٫۴ ماه</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">کمتر از ۷۵ روز</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: ARCHITECTURE */}
      {activeTab === 'architecture' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
          <div>
            <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-sky-600" />
              <span>تصمیم‌گیری معماری فنی ADR-010: پیاده‌سازی سالور OR-Tools و مسیریابی پویا با گراف معابر</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              حل مسئله بهینه‌سازی چندهدفه مقصدهای توزیع با تلفیق نقشه‌های ترافیکی کلان‌شهرها و محدودیت‌های بارگیری
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-sky-600" />
                <span>۱. ماتریس زمان سفر پویا</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                محاسبه فاصله زمانی واقعی بین هاب‌ها و شعب با استفاده از وب‌سرویس‌های نقشه بومی و ترافیک تاریخی ساعات مختلف روز.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span>۲. سالور گوگل OR-Tools VRP</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                تخصیص ظرفیت بهینه محفظه بار (حجم/وزن) با در نظر گرفتن حداکثر ظرفیت بارگیری هر کامیونت و محدودیت پنجره زمانی شعب.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>۳. اپلیکیشن موبایل راننده و ناوگان</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                ارسال ترتیب توقف‌ها، مسیریابی Turn-by-Turn به گوشی راننده و ثبت الکترونیکی امضای تحویل بار (e-POD).
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
