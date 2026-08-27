import React, { useState } from 'react';
import { 
  ShieldAlert, 
  AlertTriangle, 
  Sparkles, 
  Coins, 
  Cpu, 
  TrendingDown, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Scale, 
  CreditCard, 
  Zap, 
  FileCheck, 
  Eye, 
  Search,
  Check,
  Building2,
  Flame
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

interface FraudAlertItem {
  id: string;
  posLocation: string;
  cashierCode: string;
  eventType: string;
  riskScore: number;
  anomalyPattern: string;
  lossValueToman: string;
  status: 'ارجاع به حراست' | 'بازرسی فوری بارنامه' | 'هشدار به سرپرست شعبه';
  actionTaken: boolean;
}

export const Phase9LossPreventionOptimizer: React.FC = () => {
  const initialAlerts: FraudAlertItem[] = [
    {
      id: 'AL-109',
      posLocation: 'POS-04 شعبه ونک تهران',
      cashierCode: 'صندوق‌دار کد ۴۴۰۱',
      eventType: 'ابطال ۳ فاکتور متوالی بالای ۱ میلیون تومان پس از خروج مشتری (Sweethearting)',
      riskScore: 96,
      anomalyPattern: 'اسکن بارکد کالا، دریافت وجه نقد از خریدار، ابطال فاکتور و عدم صدور رسید رسمی',
      lossValueToman: '۳٬۲۵۰٬۰۰۰ تومان',
      status: 'ارجاع به حراست',
      actionTaken: false
    },
    {
      id: 'AL-110',
      posLocation: 'باسکول مکانیزه هاب مرکزی کرج',
      cashierCode: 'اپراتور شیفت شب ۱۲',
      eventType: 'مغایرت ۴۵۰ کیلوگرم میان وزن باسکول ورودی و فاکتور تامین‌کننده مرغ گرم',
      riskScore: 91,
      anomalyPattern: 'اختلاف معنادار وزن ناخالص خودرو حمل بار قبل و بعد از تخلیه با بارنامه الکترونیکی',
      lossValueToman: '۳۸٬۲۵۰٬۰۰۰ تومان',
      status: 'بازرسی فوری بارنامه',
      actionTaken: false
    },
    {
      id: 'AL-111',
      posLocation: 'POS-08 شعبه کوثر مشهد',
      cashierCode: 'صندوق‌دار کد ۳۱۰۹',
      eventType: 'تکرار غیرعادی ۵ باره اعمال تخفیف پرسنلی ۲۵٪ روی کالاهای اساسی و روغن',
      riskScore: 78,
      anomalyPattern: 'استفاده مکرر از یک کد پرسنلی یکسان برای مشتریان ناشناس غیرهمکار',
      lossValueToman: '۱٬۴۸۰٬۰۰۰ تومان',
      status: 'هشدار به سرپرست شعبه',
      actionTaken: false
    },
    {
      id: 'AL-112',
      posLocation: 'POS-02 شعبه ستارخان شیراز',
      cashierCode: 'صندوق‌دار کد ۵۱۲۰',
      eventType: 'اسکن کالای گران‌قیمت (روغن زیتون) با بارکد اقلام ارزان (ماکارونی)',
      riskScore: 94,
      anomalyPattern: 'عدم تطابق وزن هوشمند حسگر بارکدخوان با قیمت ثبتی کالا (Barcode Switching)',
      lossValueToman: '۹۲۰٬۰۰۰ تومان',
      status: 'ارجاع به حراست',
      actionTaken: false
    }
  ];

  const [alerts, setAlerts] = useState<FraudAlertItem[]>(initialAlerts);
  const [selectedAlert, setSelectedAlert] = useState<FraudAlertItem>(initialAlerts[0]);
  const [activeTab, setActiveTab] = useState<'anomaly_feed' | 'shrinkage_analytics' | 'financials' | 'architecture'>('anomaly_feed');

  // Shrinkage Reduction Trend
  const shrinkageTrend = [
    { quarter: 'فصل ۱ (سنتی)', shrinkageRate: 2.35, fraudLossMillion: 1420, preventedLossMillion: 180 },
    { quarter: 'فصل ۲ (نصب CEP و آنالیز باسکول)', shrinkageRate: 1.62, fraudLossMillion: 890, preventedLossMillion: 760 },
    { quarter: 'فصل ۳ (پایش همزمان وزن و صندوق)', shrinkageRate: 1.05, fraudLossMillion: 410, preventedLossMillion: 1350 },
    { quarter: 'فصل ۴ (هدف تحول رفاه)', shrinkageRate: 0.65, fraudLossMillion: 180, preventedLossMillion: 1980 },
  ];

  const handleResolveAlert = (id: string) => {
    setAlerts(prev => prev.map(a => a.id === id ? { ...a, actionTaken: true } : a));
    if (selectedAlert.id === id) {
      setSelectedAlert(prev => ({ ...prev, actionTaken: true }));
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header Banner for Phase 9 */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-rose-950 text-white rounded-3xl p-6 sm:p-8 border border-rose-500/30 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-rose-500/20 text-rose-300 border border-rose-400/30 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                <span>فاز ۹ سند تحول: سیستم جامع کاهش ضایعات، پیشگیری از تقلب و مغایرت باسکول (پروژه D2)</span>
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                Flagship Wave 1 (صیانت از دارایی‌ها و سود ناخالص)
              </span>
            </div>

            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white">
              سامانه هوشمند کشف ناهنجاری تراکنش‌های صندوق و مغایرت باسکول‌های پخش
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              پایش بلادرنگ استریم تراکنش‌های POS، کشف تخلفات ابطال فاکتور، تبانی صندوق‌دار، تعویض بارکد کالا، و مقایسه خودکار وزن باسکول انبار با بارنامه رسمی.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="grid grid-cols-2 gap-3 shrink-0 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">نسبت منفعت به هزینه:</span>
              <span className="text-xl font-black text-rose-400">۵٫۳۳ برابر</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">صرفه‌جویی سالانه:</span>
              <span className="text-xl font-black text-emerald-400">۳۴٫۰ م.ت</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">هزینه پایلوت:</span>
              <span className="text-sm font-bold text-white">۲۴۰ میلیون تومان</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">دوره بازگشت:</span>
              <span className="text-sm font-bold text-rose-300">۲٫۳ ماه</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="bg-white border border-slate-200 rounded-2xl p-2 flex flex-wrap items-center justify-between gap-2 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <button
            onClick={() => setActiveTab('anomaly_feed')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'anomaly_feed'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>استریم زنده هشدارهای تقلب POS و باسکول</span>
          </button>

          <button
            onClick={() => setActiveTab('shrinkage_analytics')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'shrinkage_analytics'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <TrendingDown className="w-3.5 h-3.5" />
            <span>روند کاهش نرخ نشتی سود و ضایعات (Shrinkage Rate)</span>
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
            <span>مدل مالی و توجیه ۳۴٫۰ میلیارد تومانی</span>
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
            <span>معماری فنی (ADR-009) و موتور پردازش رخدادهای پیچیده CEP</span>
          </button>
        </div>

        <span className="text-[11px] font-bold text-rose-800 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200">
          شاخص ارزیابی: LP-01
        </span>
      </div>

      {/* TAB 1: LIVE ANOMALY FEED */}
      {activeTab === 'anomaly_feed' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left: Alerts List (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-black text-slate-900 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>هشدارهای بلادرنگ کشف‌شده توسط الگوریتم‌های Isolation Forest:</span>
            </h3>

            <div className="space-y-2">
              {alerts.map(a => {
                const isSelected = selectedAlert.id === a.id;
                return (
                  <button
                    key={a.id}
                    onClick={() => setSelectedAlert(a)}
                    className={`w-full p-4 rounded-2xl text-right transition cursor-pointer border ${
                      isSelected
                        ? 'bg-rose-50 border-rose-500 ring-2 ring-rose-500/20 text-rose-950 shadow-xs'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black">{a.posLocation}</span>
                        {a.actionTaken && (
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">
                            بررسی شد
                          </span>
                        )}
                      </div>
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold ${
                        a.riskScore > 90 ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        ریسک: {a.riskScore}٪
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-600 mt-1 line-clamp-1 font-medium">
                      {a.eventType}
                    </p>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-400">
                      <span>{a.cashierCode}</span>
                      <span className="font-bold text-rose-700">{a.lossValueToman}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Anomaly Dossier & Evidence (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h4 className="text-sm font-black text-slate-900">{selectedAlert.posLocation}</h4>
                <span className="text-xs text-slate-500">{selectedAlert.cashierCode} • شناسه: {selectedAlert.id}</span>
              </div>

              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                selectedAlert.riskScore > 90
                  ? 'bg-rose-50 text-rose-800 border border-rose-200'
                  : 'bg-amber-50 text-amber-800 border border-amber-200'
              }`}>
                {selectedAlert.status}
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-700 block">شرح دقیق رخداد مشکوک:</span>
                <p className="text-slate-900 font-bold leading-relaxed">{selectedAlert.eventType}</p>
              </div>

              <div className="bg-rose-50/70 border border-rose-200 p-3 rounded-xl space-y-1">
                <span className="font-bold text-rose-900 block">الگوی ناهنجاری کشف‌شده با یادگیری ماشین:</span>
                <p className="text-slate-700 leading-relaxed font-medium">{selectedAlert.anomalyPattern}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="text-[11px] text-slate-500 block font-medium">ارزش ریالی تخمینی ریسک:</span>
                  <span className="text-sm font-black text-rose-700 mt-0.5 block">{selectedAlert.lossValueToman}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="text-[11px] text-slate-500 block font-medium">زمان پاسخ‌دهی استاندارد:</span>
                  <span className="text-sm font-bold text-slate-800 mt-0.5 block">کمتر از ۱۵ دقیقه</span>
                </div>
              </div>

              {/* Action Resolution Button */}
              <div className="pt-2">
                {selectedAlert.actionTaken ? (
                  <div className="bg-emerald-50 border border-emerald-300 p-3 rounded-xl text-xs font-bold text-emerald-800 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>اقدام بازرسی ثبت شد: گزارش به حراست و بازرسی مرکزی جهت بررسی دوربین ارسال گردید.</span>
                  </div>
                ) : (
                  <button
                    onClick={() => handleResolveAlert(selectedAlert.id)}
                    className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-black flex items-center justify-center gap-2 transition cursor-pointer shadow-md"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>صدور دستور بازرسی فوری و استعلام تصاویر دوربین مداربسته</span>
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>
      )}

      {/* TAB 2: SHRINKAGE ANALYTICS */}
      {activeTab === 'shrinkage_analytics' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-rose-600" />
                <span>روند نزولی نرخ نشتی و ضایعات زنجیره تامین رفاه (Shrinkage Rate ٪)</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                کاهش ضایعات از ۲٫۳۵٪ فروش کل به کمتر از ۰٫۶۵٪ (منطبق بر بهترین استانداردهای بین‌المللی خرده‌فروشی)
              </p>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={shrinkageTrend}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="quarter" tick={{ fontSize: 11 }} />
                  <YAxis domain={[0, 3]} tick={{ fontSize: 11 }} unit="٪" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="shrinkageRate" stroke="#e11d48" strokeWidth={3} name="نرخ نشتی و ضایعات کل (٪)" />
                </LineChart>
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
                <Coins className="w-5 h-5 text-rose-600" />
                <span>توجیه اقتصادی و مدل مالی ۳۴٫۰ میلیارد تومانی پروژه D2</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                استخراج بر اساس متدولوژی استاندارد صیانت از دارایی‌ها و پیشگیری از ضرر رفاه (LP-01)
              </p>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-3 font-mono text-xs">
              <div className="text-rose-400 font-extrabold text-sm">
                فرمول منفعت مالی: Benefit = POS Sweethearting Prevention + Weighbridge Reconciliation + Barcode Switching Interception
              </div>
              <div className="text-slate-300 leading-relaxed font-sans text-xs">
                صرفه‌جویی سالانه = ۱۹٫۰ میلیارد تومان جلوگیری از تبانی و ابطال جعلی فاکتورهای صندوق + ۱۵٫۰ میلیارد تومان کشف مغایرت‌های تناژ در بارانداز و باسکول هاب‌های توزیع
              </div>
              <div className="text-emerald-300 font-extrabold text-sm pt-2 border-t border-slate-800">
                = ۳۴٫۰ میلیارد تومان صیانت خالص از مارجین و سرمایه در گردش رفاه
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">هزینه پایلوت (۸ هفته)</span>
                <span className="text-xl font-black text-slate-900 block mt-1">۲۴۰ میلیون تومان</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">اتصال استریم ۲۰۰ صندوق</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">صرفه‌جویی سالانه</span>
                <span className="text-xl font-black text-rose-700 block mt-1">۳۴٫۰ میلیارد تومان</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">جلوگیری مستقیم از نشتی</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">نسبت منفعت به هزینه (BCR)</span>
                <span className="text-xl font-black text-rose-700 block mt-1">۵٫۳۳ برابر</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">بازدهی اقتصادی چشمگیر</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">دوره بازگشت سرمایه</span>
                <span className="text-xl font-black text-emerald-700 block mt-1">۲٫۳ ماه</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">حدود ۷۰ روز</span>
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
              <Cpu className="w-5 h-5 text-rose-600" />
              <span>تصمیم‌گیری معماری فنی ADR-009: موتور پردازش رویدادهای پیچیده CEP و یادگیری بدون ناظر</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              ترکیب موتور قوانین Flink CEP با مدل‌های بدون ناظر Isolation Forest برای کشف الگوهای ناشناخته تقلب
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-rose-600" />
                <span>۱. استریم بلادرنگ تراکنش‌ها</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                دریافت لاگ تمام رویدادهای فاکتور (اسکن، حذف ردیف، اعمال تخفیف، ابطال کل) از طریق Kafka Topic امن.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-rose-600" />
                <span>۲. موتور هوشمند CEP Engine</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                تطبیق الگوهای مشکوک زمانی (مانند ابطال در بازه کمتر از ۳۰ ثانیه پس از خروج بار) با پنجره‌های لغزان (Sliding Windows).
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-rose-600" />
                <span>۳. تطبیق خودکار بارنامه باسکول</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                مقایسه خودکار لاگ باسکول با بارنامه و تلرانس مجاز رطوبت (Shrinkage Allowance) و صدور هشدار در مغایرت بالای ۲٪.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
