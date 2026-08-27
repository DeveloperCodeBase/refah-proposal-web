import React, { useState } from 'react';
import { 
  Camera, 
  Eye, 
  AlertTriangle, 
  CheckCircle2, 
  BellRing, 
  Coins, 
  Cpu, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  RotateCcw, 
  Sparkles, 
  Check, 
  X, 
  Flame, 
  Clock, 
  Users, 
  Zap,
  Maximize2
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  CartesianGrid, 
  BarChart, 
  Bar 
} from 'recharts';

interface CameraZone {
  id: 'shelf_dairy' | 'shelf_oil' | 'checkout_queue';
  title: string;
  cameraName: string;
  fps: number;
  anomalyDetected: boolean;
  anomalyType: string;
  detectedCount: number;
  expectedCount: number;
  fillRatePercent: number;
  urgency: 'high' | 'medium' | 'low';
  actionPrompt: string;
}

export const Phase6VisionShelfOptimizer: React.FC = () => {
  const zones: Record<string, CameraZone> = {
    shelf_dairy: {
      id: 'shelf_dairy',
      title: 'شلف شماره ۱: لبنیات و پنیرهای صبحانه',
      cameraName: 'CAM-04 (راهرو لبنیات - کیفیت 1080p)',
      fps: 25,
      anomalyDetected: true,
      anomalyType: 'کسری شلف و قفسه خالی (Out-of-Shelf)',
      detectedCount: 4,
      expectedCount: 24,
      fillRatePercent: 16.6,
      urgency: 'high',
      actionPrompt: 'دستور شارژ فوری قفسه پنیر فتا از انبار میانی به متصدی سالن ارسال گردید.'
    },
    shelf_oil: {
      id: 'shelf_oil',
      title: 'شلف شماره ۲: روغن و کالای اساسی',
      cameraName: 'CAM-07 (راهرو مرکزی روغن)',
      fps: 25,
      anomalyDetected: true,
      anomalyType: 'مغایرت چیدمان و پلانگرام (Misplacement)',
      detectedCount: 18,
      expectedCount: 20,
      fillRatePercent: 90.0,
      urgency: 'medium',
      actionPrompt: 'کالای نامرتبط (شوینده در قفسه روغن) شناسایی شد. دستور اصلاح چیدمان صادر شد.'
    },
    checkout_queue: {
      id: 'checkout_queue',
      title: 'گیت صندوق‌ها: صف انتظار مشتریان',
      cameraName: 'CAM-01 (دید کلی صندوق‌های ۱ تا ۵)',
      fps: 30,
      anomalyDetected: true,
      anomalyType: 'تراکم صف بیش از حد مجاز (Queue Length > 4)',
      detectedCount: 6,
      expectedCount: 3,
      fillRatePercent: 100.0,
      urgency: 'high',
      actionPrompt: 'هشدار بازگشایی صندوق رزرو شماره ۴ به سرپرست شیفت مخابره گردید.'
    }
  };

  const [selectedZoneId, setSelectedZoneId] = useState<string>('shelf_dairy');
  const [activeTab, setActiveTab] = useState<'live_feed' | 'osa_metrics' | 'queue_analytics' | 'financials' | 'architecture'>('live_feed');
  const [isAlertDispatched, setIsAlertDispatched] = useState<boolean>(false);
  const [boundingBoxesActive, setBoundingBoxesActive] = useState<boolean>(true);

  const currentZone = zones[selectedZoneId] || zones.shelf_dairy;

  const handleDispatchAlert = () => {
    setIsAlertDispatched(true);
    setTimeout(() => setIsAlertDispatched(false), 4500);
  };

  // OSA (On-Shelf Availability) Progression Data
  const osaTrendData = [
    { week: 'هفته ۰ (سنتی)', osa: 81.2, queueWaitMins: 7.8, lostRevenueMillion: 310 },
    { week: 'هفته ۲ (نصب دوربین‌های اج)', osa: 86.5, queueWaitMins: 5.4, lostRevenueMillion: 220 },
    { week: 'هفته ۴ (آلارم زنده ساعت پرسنل)', osa: 91.8, queueWaitMins: 3.8, lostRevenueMillion: 140 },
    { week: 'هفته ۶ (تثبیت هوش مصنوعی)', osa: 96.4, queueWaitMins: 2.2, lostRevenueMillion: 65 },
  ];

  return (
    <div className="space-y-6">
      
      {/* Top Header Banner for Phase 6 */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 text-white rounded-3xl p-6 sm:p-8 border border-sky-500/30 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-sky-500/20 text-sky-300 border border-sky-400/30 flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-sky-400" />
                <span>فاز ۶ سند تحول: بینایی ماشین، شلف هوشمند و مدیریت صف (پروژه C3)</span>
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                Flagship Wave 1 (هوشمندی کف فروشگاه)
              </span>
            </div>

            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white">
              سامانه بینایی ماشین پردازش لبه (Edge AI) برای پایش شلف و کنترل صف
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              استفاده از بستر دوربین‌های مداربسته موجود شعب بدون نیاز به خرید سنسورهای گران‌قیمت، ارتقای شاخص دسترسی شلف (OSA) به بالای ۹۶٪ و کاهش زمان انتظار صف صندوق‌ها به کمتر از ۲٫۵ دقیقه.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="grid grid-cols-2 gap-3 shrink-0 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">نسبت منفعت به هزینه:</span>
              <span className="text-xl font-black text-sky-400">۴٫۲۴ برابر</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">سود خالص سالانه:</span>
              <span className="text-xl font-black text-emerald-400">۳۶٫۵ م.ت</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">هزینه پایلوت:</span>
              <span className="text-sm font-bold text-white">۳۸۰ میلیون تومان</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">دوره بازگشت:</span>
              <span className="text-sm font-bold text-sky-300">۲٫۸ ماه</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="bg-white border border-slate-200 rounded-2xl p-2 flex flex-wrap items-center justify-between gap-2 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <button
            onClick={() => setActiveTab('live_feed')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'live_feed'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>شبیه‌ساز تصویر زنده دوربین و تشخیص اشیاء (YOLO Edge)</span>
          </button>

          <button
            onClick={() => setActiveTab('osa_metrics')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'osa_metrics'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>تحلیل شاخص دسترسی شلف (On-Shelf Availability)</span>
          </button>

          <button
            onClick={() => setActiveTab('queue_analytics')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'queue_analytics'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>تحلیل طول صف و بازگشایی هوشمند صندوق‌ها</span>
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
            <span>مدل مالی و توجیه ۳۶٫۵ میلیارد تومانی</span>
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
            <span>معماری فنی (ADR-006) و سرور پردازش لبه RTSP</span>
          </button>
        </div>

        <span className="text-[11px] font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-200">
          شاخص ارزیابی: STR-02
        </span>
      </div>

      {/* TAB 1: LIVE VISION CAMERA STREAM SIMULATOR */}
      {activeTab === 'live_feed' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left: Zone Selector & Camera Feed (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-950 text-white rounded-3xl p-5 border border-slate-800 shadow-xl space-y-4">
            
            {/* Zone Selector Buttons */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-1.5 overflow-x-auto">
                {Object.values(zones).map(z => (
                  <button
                    key={z.id}
                    onClick={() => {
                      setSelectedZoneId(z.id);
                      setIsAlertDispatched(false);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                      selectedZoneId === z.id
                        ? 'bg-sky-600 text-white'
                        : 'bg-slate-900 hover:bg-slate-800 text-slate-300'
                    }`}
                  >
                    {z.title.split(':')[0]}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setBoundingBoxesActive(!boundingBoxesActive)}
                className="text-[11px] font-bold text-sky-400 flex items-center gap-1 bg-sky-950/80 px-2.5 py-1 rounded-xl border border-sky-800 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{boundingBoxesActive ? 'مخفی‌سازی جعبه‌های تشخیص' : 'نمایش Bounding Boxes'}</span>
              </button>
            </div>

            {/* Simulated Live Camera Screen with Overlay Boxes */}
            <div className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between p-4 select-none">
              
              {/* Header Info */}
              <div className="flex justify-between items-center z-10">
                <div className="flex items-center gap-2 bg-slate-950/80 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-slate-800 text-[10px] font-mono">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                  <span className="text-white font-bold">{currentZone.cameraName}</span>
                </div>

                <span className="bg-slate-950/80 px-2 py-0.5 rounded text-[10px] font-mono text-emerald-400">
                  {currentZone.fps} FPS • TensorRT INT8
                </span>
              </div>

              {/* Bounding Box Visual Overlays */}
              {boundingBoxesActive && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-6">
                  {selectedZoneId === 'shelf_dairy' && (
                    <div className="w-full h-full border-2 border-dashed border-rose-500 bg-rose-500/10 rounded-2xl flex items-center justify-center relative">
                      <div className="absolute top-3 right-3 bg-rose-600 text-white font-bold text-[11px] px-2.5 py-0.5 rounded-md shadow-md">
                        [YOLO-v8] کسری شدید: ۴ از ۲۴ بسته موجود (تکمیل ۱۶٪)
                      </div>
                      <div className="text-center space-y-1">
                        <AlertTriangle className="w-8 h-8 text-rose-500 mx-auto animate-bounce" />
                        <span className="text-xs font-black text-rose-300 block">هشدار خالی شدن قفسه پنیر فتا</span>
                      </div>
                    </div>
                  )}

                  {selectedZoneId === 'shelf_oil' && (
                    <div className="w-full h-full border-2 border-amber-500 bg-amber-500/10 rounded-2xl flex items-center justify-center relative">
                      <div className="absolute top-3 right-3 bg-amber-600 text-white font-bold text-[11px] px-2.5 py-0.5 rounded-md shadow-md">
                        [YOLO-v8] کالای نابجا: مایع شوینده در قفسه روغن خوراکی
                      </div>
                      <div className="text-center space-y-1">
                        <Sparkles className="w-8 h-8 text-amber-400 mx-auto" />
                        <span className="text-xs font-black text-amber-200 block">عدم تطابق با نقشه پلانگرام استاندارد</span>
                      </div>
                    </div>
                  )}

                  {selectedZoneId === 'checkout_queue' && (
                    <div className="w-full h-full border-2 border-rose-500 bg-rose-500/10 rounded-2xl flex items-center justify-center relative">
                      <div className="absolute top-3 right-3 bg-rose-600 text-white font-bold text-[11px] px-2.5 py-0.5 rounded-md shadow-md">
                        [YOLO-v8] شمارش صف: ۶ مشتری در انتظار (بیش از ظرفیت مجاز ۳ نفر)
                      </div>
                      <div className="text-center space-y-1">
                        <Users className="w-8 h-8 text-rose-400 mx-auto animate-pulse" />
                        <span className="text-xs font-black text-rose-200 block">آلارم بازگشایی صندوق شماره ۴</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Camera Footer Overlay */}
              <div className="flex justify-between items-center z-10 text-[10px] font-mono text-slate-400 bg-slate-950/70 p-2 rounded-xl">
                <span>مدل: Refah-YOLOv8-Retail-v2.1</span>
                <span>تاخیر استنتاج: ۱۲ میلی‌ثانیه</span>
              </div>

            </div>

          </div>

          {/* Right: Operational Alert Center & Staff Dispatch (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-black text-slate-900 flex items-center gap-2">
                <BellRing className="w-4 h-4 text-sky-600" />
                <span>مرکز دیسپچ و هشدارهای عملیاتی سالن</span>
              </h3>
              <span className="px-2 py-0.5 bg-rose-100 text-rose-800 text-[10px] font-bold rounded-md">
                سطح فوریت: آنی
              </span>
            </div>

            <div className="space-y-3">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-2">
                <span className="text-[11px] text-slate-500 font-bold block">موقعیت ناهنجاری:</span>
                <span className="text-xs font-black text-slate-900 block">{currentZone.title}</span>
                <div className="pt-2 border-t border-slate-200 flex justify-between text-xs">
                  <span className="text-slate-600">نوع خطا:</span>
                  <strong className="text-rose-700">{currentZone.anomalyType}</strong>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleDispatchAlert}
                className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-black flex items-center justify-center gap-2 transition cursor-pointer shadow-md"
              >
                <Zap className="w-4 h-4" />
                <span>ارسال نوتیفیکیشن اقدام فوری به ساعت هوشمند پرسنل</span>
              </button>

              {isAlertDispatched && (
                <div className="bg-emerald-50 border border-emerald-300 p-3.5 rounded-2xl text-xs font-bold text-emerald-900 flex items-start gap-2 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-black">دستور اقدام دیسپچ شد!</span>
                    <span className="font-normal text-slate-600 text-[11px] mt-0.5 block">{currentZone.actionPrompt}</span>
                  </div>
                </div>
              )}

              <div className="bg-slate-900 text-white rounded-2xl p-4 space-y-2 text-xs">
                <span className="font-bold text-sky-300 block">شاخص‌های بلادرنگ این زون:</span>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">موجودی حاضر در شلف</span>
                    <span className="font-bold text-slate-200 font-mono text-sm">{currentZone.detectedCount} عدد</span>
                  </div>
                  <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">درصد پر بودن شلف</span>
                    <span className="font-bold text-amber-400 font-mono text-sm">{currentZone.fillRatePercent}٪</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* TAB 2: OSA METRICS */}
      {activeTab === 'osa_metrics' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-sky-600" />
                <span>روند ارتقای شاخص دسترسی شلف (On-Shelf Availability - STR-02)</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                سنجش درصد ساعاتی از روز که اقلام کاتالوگ رفاه به طور کامل و مرتب در قفسه در دسترس مشتریان قرار دارند
              </p>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={osaTrendData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="week" tick={{ fontSize: 11 }} />
                  <YAxis domain={[75, 100]} tick={{ fontSize: 11 }} unit="٪" />
                  <Tooltip />
                  <Line type="monotone" dataKey="osa" stroke="#0284c7" strokeWidth={3.5} name="دسترسی شلف (OSA ٪)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: QUEUE ANALYTICS */}
      {activeTab === 'queue_analytics' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-sky-600" />
                <span>کاهش زمان انتظار مشتریان در صف صندوق‌ها (Queue Wait Time)</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                با الگوریتم بینایی ماشین، به محض رسیدن طول صف به ۴ نفر، صندوق رزرو ظرف کمتر از ۹۰ ثانیه فعال می‌شود.
              </p>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={osaTrendData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="week" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} unit=" دقیقه" />
                  <Tooltip />
                  <Bar dataKey="queueWaitMins" name="میانگین زمان صف (دقیقه)" fill="#0ea5e9" radius={[6, 6, 0, 0]} />
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
                <Coins className="w-5 h-5 text-sky-600" />
                <span>توجیه اقتصادی و مدل مالی ۳۶٫۵ میلیارد تومانی پروژه C3</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                استخراج بر اساس متدولوژی استاندارد سنجش اثربخشی عملیات فروشگاهی رفاه (STR-02)
              </p>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-3 font-mono text-xs">
              <div className="text-sky-400 font-extrabold text-sm">
                فرمول منفعت مالی: Benefit = Lost Sales Prevented + Queue Abandonment Reduction
              </div>
              <div className="text-slate-300 leading-relaxed font-sans text-xs">
                سودآوری سالانه = ۲۴٫۵ میلیارد تومان جلوگیری از خرید سوخته به دلیل خالی بودن شلف + ۱۲٫۰ میلیارد تومان جلوگیری از انصراف مشتریان از خرید به دلیل صف‌های طولانی
              </div>
              <div className="text-emerald-300 font-extrabold text-sm pt-2 border-t border-slate-800">
                = ۳۶٫۵ میلیارد تومان سود خالص سالانه در شبکه ۵۰۰ شعبه رفاه
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">هزینه پایلوت (۸ هفته)</span>
                <span className="text-xl font-black text-slate-900 block mt-1">۳۸۰ میلیون تومان</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">۲۰ شعبه منتخب</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">سود خالص سالانه</span>
                <span className="text-xl font-black text-sky-700 block mt-1">۳۶٫۵ میلیارد تومان</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">ارتقای فروش ناخالص</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">نسبت منفعت به هزینه (BCR)</span>
                <span className="text-xl font-black text-sky-700 block mt-1">۴٫۲۴ برابر</span>
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

      {/* TAB 5: ARCHITECTURE */}
      {activeTab === 'architecture' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
          <div>
            <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-sky-600" />
              <span>تصمیم‌گیری معماری فنی ADR-006: پردازش لبه Edge AI بدون تعویض دوربین‌های CCTV</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              دریافت استریم‌های RTSP از NVRهای موجود در هر شعبه و استنتاج لوکال با مینی‌سرورهای NVIDIA Jetson / TensorRT
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-sky-600" />
                <span>۱. استریم RTSP و فریم‌گیری تطبیقی</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                استخراج فریم با نرخ ۲ فریم بر ثانیه برای شلف و ۵ فریم بر ثانیه برای صف جهت جلوگیری از مصرف بیهوده توان پردازشی سرور اج.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span>۲. مدل استنتاج YOLOv8-TensorRT</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                اجرای شبکه با دقت INT8 و کوانتیزاسیون سخت‌افزاری که زمان استنتاج را به زیر ۱۵ میلی‌ثانیه برای هر فریم می‌رساند.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>۳. حفظ کامل حریم خصوصی و امنیت</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                چهره افراد در سرور اج محو (Blur) شده و هیچ تصویری خارج از شبکه داخلی شعبه ارسال نمی‌گردد؛ تنها فراداده‌های متنی ناهنجاری به سرور مرکزی ارسال می‌شوند.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
