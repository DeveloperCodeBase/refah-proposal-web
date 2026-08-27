import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Sparkles, 
  Send, 
  Coins, 
  Cpu, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Globe, 
  BarChart3, 
  Sliders, 
  Check, 
  Zap,
  Building2,
  Compass,
  FileSpreadsheet
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  CartesianGrid, 
  BarChart, 
  Bar 
} from 'recharts';

interface ExecutiveQuery {
  id: string;
  question: string;
  category: string;
  responseSummary: string;
  tableData: Array<{ col1: string; col2: string; col3: string; col4: string }>;
  aiActionAdvice: string;
}

export const Phase8ExecutiveTowerOptimizer: React.FC = () => {
  const prebuiltQueries: ExecutiveQuery[] = [
    {
      id: 'q1',
      question: 'کدام ۵ شعبه در هفته گذشته بیشترین افت مارجین و سود ناخالص را داشته‌اند؟',
      category: 'تحلیل سودآوری شعب',
      responseSummary: 'بر اساس بررسی ۳٫۸ میلیون تراکنش تجمیعی، افت سودآوری در ۵ شعبه زیر به دلیل ناهماهنگی در اجرای پروموشن‌ها و ناموجودی اقلام اساسی رخ داده است:',
      tableData: [
        { col1: 'شعبه هایپر آزادی تهران', col2: '-۱۴٫۲٪', col3: 'ناموجودی شلف لبنیات در ساعات پیک عصر', col4: 'شارژ فوری با انبار غرب' },
        { col1: 'شعبه سی‌وسه‌پل اصفهان', col2: '-۱۱٫۸٪', col3: 'اعمال تخفیف زیان‌ده ۳۰٪ بدون هماهنگی', col4: 'اصلاح پروموشن به ۱۶٪' },
        { col1: 'شعبه ستارخان شیراز', col2: '-۹٫۵٪', col3: 'تاخیر ناوگان توزیع گوشت گرم و مرغ', col4: 'تغییر مسیر ناوگان جنوب' },
        { col1: 'شعبه گلشهر کرج', col2: '-۸٫۱٪', col3: 'طولانی شدن صفوف صندوق و انصراف خریداران', col4: 'فعال‌سازی شیفت کمکی' },
        { col1: 'شعبه الماس تبریز', col2: '-۷٫۴٪', col3: 'کاهش تردد باشگاه مشتریان رفاه', col4: 'ارسال پیامک اختصاصی NBO' },
      ],
      aiActionAdvice: 'پیشنهاد اقدام فوری: صدور دستور الکترونیکی توقف تخفیف مازاد شعبه اصفهان و تخصیص سهمیه اضافه بار روغن به هایپر آزادی.'
    },
    {
      id: 'q2',
      question: 'تحلیل همبستگی تخفیف عید غدیر و فروش ناخالص در گروه‌های کالایی چیست؟',
      category: 'اثربخشی جشنواره',
      responseSummary: 'جشنواره اخیر نشان داد کشش قیمتی در کالای مصرفی فاسدپذیر ۲٫۴ برابر بیشتر از شوینده‌ها بوده است:',
      tableData: [
        { col1: 'برنج و روغن خوراکی', col2: '+۳۸٫۰٪ فروش', col3: 'مارجین: +۸٫۴٪', col4: 'حاشیه امن موجودی: ۲٫۱ روز' },
        { col1: 'شوینده و بهداشتی', col2: '+۱۲٫۵٪ فروش', col3: 'مارجین: -۴٫۱٪ (تخفیف مازاد)', col4: 'حاشیه امن: ۱۸٫۵ روز' },
        { col1: 'پروتئینی و مرغ تازه', col2: '+۴۲٫۲٪ فروش', col3: 'مارجین: +۱۱٫۲٪', col4: 'حاشیه امن: ۰٫۸ روز (ریسک کسری)' },
        { col1: 'تنقلات و نوشیدنی', col2: '+۲۴٫۰٪ فروش', col3: 'مارجین: +۱۶٫۸٪', col4: 'حاشیه امن: ۱۲٫۰ روز' },
      ],
      aiActionAdvice: 'پیشنهاد استراتژیک: در جشنواره بعدی تخفیف شوینده به حداکثر ۱۲٪ محدود شود تا حاشیه سود کل سبد ۷٫۲ میلیارد تومان افزایش یابد.'
    },
    {
      id: 'q3',
      question: 'وضعیت سلامت زنجیره تامین و شاخص On-Time Delivery در ۵ هاب انبار مرکزی رفاه چگونه است؟',
      category: 'لجستیک و انبار',
      responseSummary: 'عملکرد هاب‌های توزیع در ۲۴ ساعت گذشته با شاخص تحقق زمان‌بندی (OTD) میانگین ۹۴٫۶٪ ارزیابی شده است:',
      tableData: [
        { col1: 'هاب مرکزی کرج (غرب کشور)', col2: '۹۶٫۸٪ OTD', col3: 'زمان بارگیری: ۳۸ دقیقه', col4: 'وضعیت: سبز و پایدار' },
        { col1: 'هاب جنوب (شیراز)', col2: '۹۱٫۲٪ OTD', col3: 'زمان بارگیری: ۶۴ دقیقه', col4: 'وضعیت: زرد (تاخیر تخلیه)' },
        { col1: 'هاب شرق (مشهد مقدس)', col2: '۹۵٫۴٪ OTD', col3: 'زمان بارگیری: ۴۲ دقیقه', col4: 'وضعیت: سبز و پایدار' },
        { col1: 'هاب شمال (رشت)', col2: '۹۷٫۱٪ OTD', col3: 'زمان بارگیری: ۳۵ دقیقه', col4: 'وضعیت: سبز و پایدار' },
      ],
      aiActionAdvice: 'پیشنهاد لجستیک: اعزام ۲ لیفتراک اضافه از هاب کرج به هاب شیراز جهت صفر کردن تاخیر بارگیری.'
    }
  ];

  const [selectedQuery, setSelectedQuery] = useState<ExecutiveQuery>(prebuiltQueries[0]);
  const [customInput, setCustomInput] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'control_chat' | 'what_if_sandbox' | 'kpi_cockpit' | 'financials' | 'architecture'>('control_chat');

  // What-If Simulation Sandbox State
  const [simPromoDiscount, setSimPromoDiscount] = useState<number>(15);
  const [simLeadTimeDays, setSimLeadTimeDays] = useState<number>(3);
  const [simShelfFillRate, setSimShelfFillRate] = useState<number>(94);

  // Computed Sim Outputs
  const computedRevenueGrowth = ((simPromoDiscount * 1.1) + (simShelfFillRate - 80) * 0.8 - (simLeadTimeDays * 1.5)).toFixed(1);
  const computedNetMarginChange = ((simShelfFillRate - 80) * 0.4 - (simPromoDiscount * 0.6) - (simLeadTimeDays * 0.3)).toFixed(1);
  const computedEstimatedProfitToman = Math.round(34 + (parseFloat(computedRevenueGrowth) * 0.8) + (parseFloat(computedNetMarginChange) * 1.2));

  // Executive KPI Projection Data
  const executiveKpiTrend = [
    { month: 'فروردین', gmvBillion: 1120, netProfitBillion: 34.2, stockoutLossBillion: 18.4 },
    { month: 'اردیبهشت', gmvBillion: 1240, netProfitBillion: 42.8, stockoutLossBillion: 12.1 },
    { month: 'خرداد', gmvBillion: 1390, netProfitBillion: 56.5, stockoutLossBillion: 7.2 },
    { month: 'تیر (هدف تحول)', gmvBillion: 1580, netProfitBillion: 72.0, stockoutLossBillion: 3.5 },
  ];

  const handleCustomQuery = () => {
    if (!customInput.trim()) return;
    setIsProcessing(true);

    setTimeout(() => {
      setSelectedQuery({
        id: 'custom_' + Date.now(),
        question: customInput,
        category: 'پرس‌وجوی اختصاصی مدیرعامل',
        responseSummary: `تحلیل هوش مصنوعی برای «${customInput}»: بر مبنای داده‌های متصل سامانه ERP و POS، شاخص‌ها نشان‌دهنده تحقق ۹۳٪ اهداف در این سرفصل است.`,
        tableData: [
          { col1: 'شاخص تحقق هدف', col2: '۹۳٫۴٪', col3: 'مطلوب و بالاتر از تارگت', col4: 'پایش مستمر' },
          { col1: 'اثر مالی مستقیم', col2: '+۱۴٫۲ م.ت', col3: 'رشد نقدینگی در ۳۰ روز', col4: 'تثبیت جریان' },
        ],
        aiActionAdvice: 'دستور اجرایی پیشنهادی: تثبیت فرآیند در کلیه مناطق ۵ گانه رفاه.'
      });
      setCustomInput('');
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header Banner for Phase 8 */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 border border-indigo-500/30 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 flex items-center gap-1.5">
                <LayoutDashboard className="w-3.5 h-3.5 text-indigo-400" />
                <span>فاز ۸ سند تحول: برج مراقبت داده و مرکز تصمیم‌گیری استراتژیک مدیرعامل (پروژه D1)</span>
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                Flagship Wave 1 (هوشمندی کلان و هدایت سازمان)
              </span>
            </div>

            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white">
              مرکز فرماندهی استراتژیک و هوش تصمیم‌ساز مدیرعامل (Executive Control Tower)
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              اتصال داده‌های یکپارچه ۵۰۰ شعبه و انبارها، پاسخ‌گویی به زبان طبیعی به پیچیده‌ترین پرس‌وجوهای مالی/لجستیکی، و شبیه‌ساز سناریوهای استراتژیک (What-If Analysis).
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="grid grid-cols-2 gap-3 shrink-0 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">نسبت منفعت به هزینه:</span>
              <span className="text-xl font-black text-indigo-400">۵٫۶۰ برابر</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">ارزش خلق‌شده سالانه:</span>
              <span className="text-xl font-black text-emerald-400">۵۸٫۰ م.ت</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">هزینه پایلوت:</span>
              <span className="text-sm font-bold text-white">۴۲۰ میلیون تومان</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">دوره بازگشت:</span>
              <span className="text-sm font-bold text-indigo-300">۲٫۱ ماه</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="bg-white border border-slate-200 rounded-2xl p-2 flex flex-wrap items-center justify-between gap-2 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <button
            onClick={() => setActiveTab('control_chat')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'control_chat'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>گفتگوی تحلیلی با دستیار هوش مصنوعی مدیرعامل (NL to SQL)</span>
          </button>

          <button
            onClick={() => setActiveTab('what_if_sandbox')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'what_if_sandbox'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>شبیه‌ساز اثر تصمیمات استراتژیک (What-If Scenario Sandbox)</span>
          </button>

          <button
            onClick={() => setActiveTab('kpi_cockpit')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'kpi_cockpit'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>داشبورد شاخص‌های حیاتی و اهداف کلان رفاه (KPI Cockpit)</span>
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
            <span>مدل مالی و توجیه ۵۸٫۰ میلیارد تومانی</span>
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
            <span>معماری فنی (ADR-008) و دریاچه داده Iceberg</span>
          </button>
        </div>

        <span className="text-[11px] font-bold text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200">
          شاخص ارزیابی: CEO-01
        </span>
      </div>

      {/* TAB 1: EXECUTIVE AI CHAT / NL-TO-SQL QUERY ARENA */}
      {activeTab === 'control_chat' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left: Prebuilt Scenarios (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-black text-slate-900 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-indigo-600" />
              <span>پرسش‌های مدیریتی پرکاربرد هیئت مدیره:</span>
            </h3>

            <div className="space-y-2">
              {prebuiltQueries.map(q => {
                const isSelected = selectedQuery.id === q.id;
                return (
                  <button
                    key={q.id}
                    onClick={() => setSelectedQuery(q)}
                    className={`w-full p-4 rounded-2xl text-right transition cursor-pointer border ${
                      isSelected
                        ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-500/20 text-indigo-950 shadow-xs'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-indigo-800 bg-indigo-100/60 px-2 py-0.5 rounded-md">
                        {q.category}
                      </span>
                    </div>
                    <p className="text-xs font-black text-slate-800 mt-2 leading-relaxed">
                      {q.question}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Data Lake Engine Badge */}
            <div className="bg-slate-900 text-white rounded-2xl p-4 space-y-2 border border-slate-800 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-indigo-300 font-bold">وضعیت اتصال به Data Lake رفاه</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed font-mono">
                همگام‌سازی لحظه‌ای با ۵۰۰ سرور POS شعب، سامانه لجستیک و انبارها با پلتفرم Apache Iceberg
              </p>
            </div>

          </div>

          {/* Right: AI Answer & Table Deep Dive (8 Cols) */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-5">
            
            {/* Question Header */}
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
              <span className="text-[10px] text-slate-500 font-bold block">پرسش انتخاب‌شده:</span>
              <h4 className="text-sm font-black text-slate-900 mt-1">{selectedQuery.question}</h4>
            </div>

            {/* AI Summary Narrative */}
            <div className="bg-indigo-50/70 border border-indigo-200 rounded-2xl p-4 space-y-2">
              <div className="flex items-center gap-2 font-black text-xs text-indigo-950">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>تحلیل آنی هوش مصنوعی برج مراقبت داده:</span>
              </div>
              <p className="text-xs text-slate-800 leading-relaxed font-medium">
                {selectedQuery.responseSummary}
              </p>
            </div>

            {/* Dynamic Results Table */}
            <div className="overflow-x-auto border border-slate-200 rounded-2xl">
              <table className="w-full text-right text-xs">
                <thead className="bg-slate-100 text-slate-700 font-black border-b border-slate-200">
                  <tr>
                    <th className="p-3">عنوان / شعبه</th>
                    <th className="p-3">شاخص کلیدی</th>
                    <th className="p-3">علت اصلی شناسایی‌شده</th>
                    <th className="p-3">دستور اقدام پیشنهادی</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {selectedQuery.tableData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition">
                      <td className="p-3 font-bold text-slate-900">{row.col1}</td>
                      <td className="p-3 font-mono font-bold text-rose-700">{row.col2}</td>
                      <td className="p-3 text-slate-600">{row.col3}</td>
                      <td className="p-3 font-bold text-emerald-800">{row.col4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Strategic Advice Card */}
            <div className="bg-slate-950 text-white rounded-2xl p-4 flex items-start gap-3 border border-slate-800">
              <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs">
                <span className="font-black text-amber-300 block">توصیه استراتژیک به مدیرعامل:</span>
                <p className="text-slate-300 leading-relaxed font-medium">{selectedQuery.aiActionAdvice}</p>
              </div>
            </div>

            {/* Input for custom queries */}
            <div className="pt-2 flex items-center gap-2">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCustomQuery()}
                placeholder="پرسش آزاد مدیریتی خود را بنویسید (مثلاً: روند فروش روغن در استان‌های شمالی)..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-hidden focus:border-indigo-500"
              />
              <button
                onClick={handleCustomQuery}
                disabled={isProcessing}
                className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isProcessing ? 'در حال تحلیل...' : 'اجرای کوئری'}</span>
              </button>
            </div>

          </div>

        </div>
      )}

      {/* TAB 2: WHAT-IF SCENARIO SIMULATION SANDBOX */}
      {activeTab === 'what_if_sandbox' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Controls (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-5">
            <div>
              <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-indigo-600" />
                <span>تنظیم اهرم‌های تصمیم‌گیری استراتژیک (What-If Levers)</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                تغییر پارامترها و مشاهده بلادرنگ اثرات چندبعدی بر درآمد، مارجین و سود شبکه رفاه
              </p>
            </div>

            {/* Lever 1 */}
            <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-700">میانگین تخفیف پروموشن‌های سراسری:</span>
                <span className="text-indigo-700 font-mono">{simPromoDiscount}٪</span>
              </div>
              <input
                type="range"
                min={5}
                max={35}
                value={simPromoDiscount}
                onChange={(e) => setSimPromoDiscount(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <span className="text-[10px] text-slate-400 block">تخفیف بالاتر = افزایش فروش ناخالص، اما ریسک افت مارجین</span>
            </div>

            {/* Lever 2 */}
            <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-700">نرخ دسترسی به شلف (On-Shelf Availability):</span>
                <span className="text-indigo-700 font-mono">{simShelfFillRate}٪</span>
              </div>
              <input
                type="range"
                min={80}
                max={99}
                value={simShelfFillRate}
                onChange={(e) => setSimShelfFillRate(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <span className="text-[10px] text-slate-400 block">پوشش با مدل بینایی ماشین C3</span>
            </div>

            {/* Lever 3 */}
            <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-700">زمان تحویل انبار به شعب (Lead Time):</span>
                <span className="text-indigo-700 font-mono">{simLeadTimeDays} روز</span>
              </div>
              <input
                type="range"
                min={1}
                max={7}
                value={simLeadTimeDays}
                onChange={(e) => setSimLeadTimeDays(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <span className="text-[10px] text-slate-400 block">لجستیک هوشمند B1 و هاب‌های منطقه‌ای</span>
            </div>
          </div>

          {/* Right Simulation Outputs (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-950 text-white rounded-3xl p-6 border border-slate-800 shadow-xl space-y-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-black text-indigo-300">خروجی پیش‌بینی سناریو با موتور شبیه‌ساز رفاه</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">
                  دقت مدل: ۹۴٫۸٪
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl text-center space-y-1">
                  <span className="text-[11px] text-slate-400 block">رشد پیش‌بینی فروش (GMV)</span>
                  <span className="text-xl font-black font-mono text-indigo-400">+{computedRevenueGrowth}٪</span>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl text-center space-y-1">
                  <span className="text-[11px] text-slate-400 block">تغییر حاشیه سود ناخالص</span>
                  <span className={`text-xl font-black font-mono ${parseFloat(computedNetMarginChange) >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {parseFloat(computedNetMarginChange) >= 0 ? '+' : ''}{computedNetMarginChange}٪
                  </span>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl text-center space-y-1">
                  <span className="text-[11px] text-slate-400 block">سود ناخالص برآوردی</span>
                  <span className="text-xl font-black font-mono text-amber-400">{computedEstimatedProfitToman} م.ت</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 text-xs space-y-2">
              <span className="text-amber-300 font-bold block">تحلیل استراتژیک هوش مصنوعی:</span>
              <p className="text-slate-300 leading-relaxed font-medium">
                در این سناریو، با ارتقای شاخص دسترسی شلف به <strong>{simShelfFillRate}٪</strong> و کنترل تخفیف‌ها روی <strong>{simPromoDiscount}٪</strong>، سود عملیاتی خالص رفاه به <strong>{computedEstimatedProfitToman} میلیارد تومان</strong> ارتقا می‌یابد.
              </p>
            </div>
          </div>

        </div>
      )}

      {/* TAB 3: EXECUTIVE KPI COCKPIT */}
      {activeTab === 'kpi_cockpit' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-indigo-600" />
                <span>روند صعودی سود خالص و کاهش زیان ناشی از کسری شلف در کل شبکه رفاه</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                مقایسه ابعاد مالی بر اساس داده‌های تجمیعی ۵۰۰ شعبه در طول موج اول پیاده‌سازی تحول (میلیارد تومان)
              </p>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={executiveKpiTrend}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} unit=" م.ت" />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="netProfitBillion" name="سود خالص ماهانه (میلیارد تومان)" stroke="#4f46e5" fill="#6366f1" fillOpacity={0.25} />
                  <Area type="monotone" dataKey="stockoutLossBillion" name="زیان ناشی از کسری کالا (میلیارد تومان)" stroke="#e11d48" fill="#f43f5e" fillOpacity={0.15} />
                </AreaChart>
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
                <Coins className="w-5 h-5 text-indigo-600" />
                <span>توجیه اقتصادی و مدل مالی ۵۸٫۰ میلیارد تومانی پروژه D1</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                استخراج بر اساس متدولوژی استاندارد سنجش اثربخشی تصمیم‌گیری استراتژیک رفاه (CEO-01)
              </p>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-3 font-mono text-xs">
              <div className="text-indigo-400 font-extrabold text-sm">
                فرمول منفعت مالی: Benefit = Rapid Anomaly Resolution + Margin Protection + Cross-Functional Alignment
              </div>
              <div className="text-slate-300 leading-relaxed font-sans text-xs">
                ارزش خلق‌شده سالانه = ۳۶٫۰ میلیارد تومان جلوگیری از اتلاف منابع در تخفیف‌های زیان‌ده شعب + ۲۲٫۰ میلیارد تومان تسریع اصلاح گلوگاه‌های لجستیکی و زنجیره تامین
              </div>
              <div className="text-emerald-300 font-extrabold text-sm pt-2 border-t border-slate-800">
                = ۵۸٫۰ میلیارد تومان ارزش و سودآوری خالص سالانه در سطح گروه رفاه
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">هزینه پایلوت (۸ هفته)</span>
                <span className="text-xl font-black text-slate-900 block mt-1">۴۲۰ میلیون تومان</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">یکپارچه‌سازی دیتالیک</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">ارزش خلق‌شده سالانه</span>
                <span className="text-xl font-black text-indigo-700 block mt-1">۵۸٫۰ میلیارد تومان</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">افزایش سود خالص</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">نسبت منفعت به هزینه (BCR)</span>
                <span className="text-xl font-black text-indigo-700 block mt-1">۵٫۶۰ برابر</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">بالاترین نرخ بازدهی</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">دوره بازگشت سرمایه</span>
                <span className="text-xl font-black text-emerald-700 block mt-1">۲٫۱ ماه</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">حدود ۶۵ روز</span>
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
              <Cpu className="w-5 h-5 text-indigo-600" />
              <span>تصمیم‌گیری معماری فنی ADR-008: معماری دریاچه داده Iceberg و موتور NL-to-SQL</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              ترکیب استریمینگ Apache Flink با جدول‌بندی آپاچی آیسبرگ و عامل‌های هوش مصنوعی تحلیلی با امنیت سازمانی
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-indigo-600" />
                <span>۱. لایه ذخیره‌سازی Iceberg</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                جدول‌بندی بهینه با پشتیبانی از Time Travel Queries جهت مقایسه فوری عملکرد شعب در بازه‌های زمانی دلخواه گذشته.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>۲. مترجم متن به کوئری (NL to SQL)</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                تبدیل خودکار سوالات فارسی مدیرعامل به کوئری‌های بهینه Trino/Presto بدون نیاز به تیم BI میانی.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span>۳. امنیت و تفکیک دسترسی سازمانی</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                کنترل دسترسی نقش‌محور (RBAC) با سطوح امنیتی مدیرعامل، معاونت بازرگانی، مدیران مناطق و سرپرستان شعب.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
