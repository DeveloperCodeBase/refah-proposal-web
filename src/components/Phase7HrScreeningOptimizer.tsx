import React, { useState } from 'react';
import { 
  UserCheck, 
  Users, 
  Sparkles, 
  Coins, 
  Cpu, 
  TrendingUp, 
  Calendar, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Briefcase, 
  Layers, 
  ShieldCheck, 
  Check, 
  X, 
  Zap, 
  Smile, 
  Award,
  ChevronLeft
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

interface JobCandidate {
  id: string;
  name: string;
  targetRole: string;
  matchScore: number;
  workExperience: string;
  education: string;
  keySkills: string[];
  aiRecommendation: 'تایید فوری برای مصاحبه' | 'نیازمند بررسی تکمیلی' | 'عدم تطابق با شرایط';
  interviewQuestions: string[];
}

export const Phase7HrScreeningOptimizer: React.FC = () => {
  const candidates: JobCandidate[] = [
    {
      id: 'c1',
      name: 'علی کمالی',
      targetRole: 'صندوق‌دار شیفت عصر (شعبه تجریش)',
      matchScore: 94,
      workExperience: '۳ سال سابقه صندوق‌داری در افق کوروش و تسلط بر کار با پوز و سپیدز',
      education: 'دیپلم ریاضی - کارت پایان خدمت معتبر',
      keySkills: ['سرعت شمارش وجه نقد', 'برخورد گرم با مشتری', 'عدم مغایرت در تسویه‌حساب'],
      aiRecommendation: 'تایید فوری برای مصاحبه',
      interviewQuestions: [
        'در مواجهه با صف طولانی و قطعی لحظه‌ای پوز چه رفتاری خواهید داشت؟',
        'نحوه مدیریت مغایرت فاکتور تخفیفی با مشتری را شرح دهید.'
      ]
    },
    {
      id: 'c2',
      name: 'سارا احمدی',
      targetRole: 'سرپرست سالن و چیدمان (شعبه ونک)',
      matchScore: 89,
      workExperience: '۴ سال سابقه سوپروایزر سالن در هایپراستار ارم و تسلط بر پلانولگرام',
      education: 'کارشناسی مدیریت بازرگانی دانشگاه تهران',
      keySkills: ['مدیریت شیفت پرسنل', 'نظارت بر زنجیره سرد', 'کاهش ضایعات فاسدشدنی'],
      aiRecommendation: 'تایید فوری برای مصاحبه',
      interviewQuestions: [
        'روش شما برای اولویت‌بندی پر کردن شلف‌های خالی در ساعت پیک پنج‌شنبه‌ها چیست؟',
        'چگونه پرسنل سالن را برای اجرای استانداردهای بهداشتی ترغیب می‌کنید؟'
      ]
    },
    {
      id: 'c3',
      name: 'محمد نوری',
      targetRole: 'متصدی انبار و بارانداز (شعبه آزادی)',
      matchScore: 62,
      workExperience: '۱ سال سابقه در کارگاه تولیدی بدون تجربه فروشگاهی یا WMS',
      education: 'دیپلم علوم انسانی',
      keySkills: ['آمادگی جسمانی بالا', 'تعهد کاری'],
      aiRecommendation: 'نیازمند بررسی تکمیلی',
      interviewQuestions: [
        'آشنایی شما با اصول FIFO و تاریخ انقضای کالاهای تندمصرف چقدر است؟'
      ]
    }
  ];

  const [selectedCandidate, setSelectedCandidate] = useState<JobCandidate>(candidates[0]);
  const [activeTab, setActiveTab] = useState<'screening' | 'shift_scheduler' | 'retention_analytics' | 'financials' | 'architecture'>('screening');
  const [interviewScheduled, setInterviewScheduled] = useState<boolean>(false);

  // Shift Optimization Schedule Data
  const shiftScheduleData = [
    { day: 'شنبه', optimalStaff: 14, traditionalStaff: 18, overstaffCostSavedToman: 4200000 },
    { day: 'یکشنبه', optimalStaff: 13, traditionalStaff: 16, overstaffCostSavedToman: 3150000 },
    { day: 'دوشنبه', optimalStaff: 15, traditionalStaff: 17, overstaffCostSavedToman: 2100000 },
    { day: 'سه‌شنبه', optimalStaff: 16, traditionalStaff: 18, overstaffCostSavedToman: 2100000 },
    { day: 'چهارشنبه', optimalStaff: 22, traditionalStaff: 20, overstaffCostSavedToman: -2100000 }, // Understaff covered!
    { day: 'پنج‌شنبه (پیک)', optimalStaff: 28, traditionalStaff: 24, overstaffCostSavedToman: -4200000 },
    { day: 'جمعه (پیک)', optimalStaff: 26, traditionalStaff: 22, overstaffCostSavedToman: -4200000 },
  ];

  // Turnover Reduction Trend
  const turnoverTrend = [
    { quarter: 'فصل ۱ (سنتی)', turnoverRate: 38.5, retentionRate: 61.5, hiringCostMillion: 420 },
    { quarter: 'فصل ۲ (غربالگری با هوش مصنوعی)', turnoverRate: 27.2, retentionRate: 72.8, hiringCostMillion: 280 },
    { quarter: 'فصل ۳ (شیفت‌بندی منعطف هوشمند)', turnoverRate: 19.4, retentionRate: 80.6, hiringCostMillion: 160 },
    { quarter: 'فصل ۴ (تثبیت وفاداری پرسنل)', turnoverRate: 14.1, retentionRate: 85.9, hiringCostMillion: 95 },
  ];

  const handleScheduleInterview = () => {
    setInterviewScheduled(true);
    setTimeout(() => setInterviewScheduled(false), 4500);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header Banner for Phase 7 */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 border border-teal-500/30 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-teal-500/20 text-teal-300 border border-teal-400/30 flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>فاز ۷ سند تحول: هوشمندسازی جذب، غربالگری و شیفت‌بندی کارکنان (پروژه A1)</span>
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                Flagship Wave 1 (مدیریت سرمایه انسانی)
              </span>
            </div>

            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white">
              سامانه هوشمند غربالگری رزومه‌ها و بهینه‌سازی شیفت‌های کاری شعب رفاه
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              تطبیق اتوماتیک شایستگی متقاضیان با فرهنگ سازمانی رفاه، کاهش ۶۳٪ هزینه‌های استخدام مجدد و تدوین الگوریتمی شیفت‌های پرسنل بر اساس پیش‌بینی تقاضای ساعات پیک.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="grid grid-cols-2 gap-3 shrink-0 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">نسبت منفعت به هزینه:</span>
              <span className="text-xl font-black text-teal-400">۵٫۱۲ برابر</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">صرفه‌جویی/بهره‌وری:</span>
              <span className="text-xl font-black text-emerald-400">۲۱٫۸ م.ت</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">هزینه پایلوت:</span>
              <span className="text-sm font-bold text-white">۱۸۰ میلیون تومان</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">دوره بازگشت:</span>
              <span className="text-sm font-bold text-teal-300">۲٫۰ ماه</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="bg-white border border-slate-200 rounded-2xl p-2 flex flex-wrap items-center justify-between gap-2 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <button
            onClick={() => setActiveTab('screening')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'screening'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>غربالگری رزومه‌ها و پرسش‌های مصاحبه هوشمند</span>
          </button>

          <button
            onClick={() => setActiveTab('shift_scheduler')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'shift_scheduler'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>بهینه‌سازی شیفت‌های کاری شعب بر اساس پیک ترافیک</span>
          </button>

          <button
            onClick={() => setActiveTab('retention_analytics')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'retention_analytics'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>شاخص ماندگاری پرسنل و کاهش نرخ خروج (Turnover)</span>
          </button>

          <button
            onClick={() => setActiveTab('financials')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'financials'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Coins className="w-3.5 h-3.5" />
            <span>مدل مالی و توجیه ۲۱٫۸ میلیارد تومانی</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'architecture'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>معماری فنی (ADR-007) و الگوریتم ILP شیفت‌بندی</span>
          </button>
        </div>

        <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200">
          شاخص ارزیابی: HR-01
        </span>
      </div>

      {/* TAB 1: SMART SCREENING & INTERVIEW QUESTIONS */}
      {activeTab === 'screening' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left: Candidates List (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-black text-slate-900 flex items-center gap-2">
              <Users className="w-4 h-4 text-teal-600" />
              <span>متقاضیان غربالگری‌شده توسط هوش مصنوعی:</span>
            </h3>

            <div className="space-y-2">
              {candidates.map(c => {
                const isSelected = selectedCandidate.id === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => {
                      setSelectedCandidate(c);
                      setInterviewScheduled(false);
                    }}
                    className={`w-full p-4 rounded-2xl text-right transition cursor-pointer border ${
                      isSelected
                        ? 'bg-teal-50 border-teal-500 ring-2 ring-teal-500/20 text-teal-950 shadow-xs'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black">{c.name}</span>
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold ${
                        c.matchScore > 85 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        تطابق: {c.matchScore}٪
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1 font-medium">
                      {c.targetRole}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Detailed Dossier & Generated Questions (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h4 className="text-sm font-black text-slate-900">{selectedCandidate.name}</h4>
                <span className="text-xs text-slate-500">{selectedCandidate.targetRole}</span>
              </div>

              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                selectedCandidate.aiRecommendation.includes('تایید')
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-amber-50 text-amber-800 border border-amber-200'
              }`}>
                {selectedCandidate.aiRecommendation}
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-700 block">سوابق کاری و مهارتی:</span>
                <p className="text-slate-600 leading-relaxed font-medium">{selectedCandidate.workExperience}</p>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-700 block">مهارت‌های کلیدی تایید شده:</span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedCandidate.keySkills.map((sk, i) => (
                    <span key={i} className="bg-white border border-slate-200 px-2 py-0.5 rounded-md text-[11px] font-bold text-teal-800">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI Generated Tailored Interview Questions */}
              <div className="bg-teal-50/80 border border-teal-200 rounded-2xl p-4 space-y-2">
                <div className="flex items-center gap-2 font-black text-xs text-teal-900">
                  <Sparkles className="w-4 h-4 text-teal-600" />
                  <span>پرسش‌های اختصاصی مصاحبه استخراج‌شده توسط مدل هوش مصنوعی:</span>
                </div>
                <div className="space-y-2 pt-1">
                  {selectedCandidate.interviewQuestions.map((q, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-800">
                      <span className="w-5 h-5 rounded-full bg-teal-200 text-teal-900 font-bold flex items-center justify-center shrink-0 text-[10px]">
                        {idx + 1}
                      </span>
                      <p className="font-medium">{q}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={handleScheduleInterview}
                  className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-black flex items-center justify-center gap-2 transition cursor-pointer shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>ارسال دعوت‌نامه مصاحبه حضوری و ثبت در سیستم منابع انسانی رفاه</span>
                </button>

                {interviewScheduled && (
                  <div className="mt-2 bg-emerald-50 border border-emerald-300 p-3 rounded-xl text-xs font-bold text-emerald-800 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>پیامک دعوت به مصاحبه با لینک هماهنگی ساعت برای متقاضی ارسال شد.</span>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>
      )}

      {/* TAB 2: SHIFT SCHEDULER & PEAK OPTIMIZATION */}
      {activeTab === 'shift_scheduler' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-teal-600" />
                <span>بهینه‌سازی تخصیص شیفت هفتگی پرسنل شعب بر مبنای پیش‌بینی جریان ترافیک</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                جلوگیری از انباشت پرسنل در روزهای خلوت (شنبه/یکشنبه) و تقویت ظرفیت صندوق‌ها در روزهای پنج‌شنبه و جمعه
              </p>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={shiftScheduleData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="day" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} unit=" نفر" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="traditionalStaff" name="شیفت سنتی و ثابت" fill="#94a3b8" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="optimalStaff" name="شیفت بهینه الگوریتمی رفاه" fill="#0d9488" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: RETENTION & TURNOVER ANALYTICS */}
      {activeTab === 'retention_analytics' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-teal-600" />
                <span>کاهش نرخ خروج کارکنان (Turnover Rate) و حفظ سرمایه انسانی رفاه</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                کاهش فرسودگی شغلی با شیفت‌های شناور و افزایش ماندگاری نیروهای ماهر فروشگاه
              </p>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={turnoverTrend}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="quarter" tick={{ fontSize: 11 }} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} unit="٪" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="retentionRate" stroke="#0d9488" strokeWidth={3} name="نرخ ماندگاری پرسنل (Retention ٪)" />
                  <Line type="monotone" dataKey="turnoverRate" stroke="#e11d48" strokeWidth={2.5} name="نرخ خروج و استعفا (Turnover ٪)" />
                </LineChart>
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
                <Coins className="w-5 h-5 text-teal-600" />
                <span>توجیه اقتصادی و مدل مالی ۲۱٫۸ میلیارد تومانی پروژه A1</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                استخراج بر اساس متدولوژی استاندارد سنجش اثربخشی منابع انسانی رفاه (HR-01)
              </p>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-3 font-mono text-xs">
              <div className="text-teal-400 font-extrabold text-sm">
                فرمول منفعت مالی: Benefit = Overtime Reduction + Hiring Cost Savings + Productivity Gain
              </div>
              <div className="text-slate-300 leading-relaxed font-sans text-xs">
                صرفه‌جویی سالانه = ۱۳٫۵ میلیارد تومان کاهش اضافه‌کاری بیهوده و تنظیم شیفت‌ها + ۸٫۳ میلیارد تومان کاهش هزینه‌های جذب، آگهی و آموزش اولیه نیروهای جایگزین
              </div>
              <div className="text-emerald-300 font-extrabold text-sm pt-2 border-t border-slate-800">
                = ۲۱٫۸ میلیارد تومان ارزش‌افزوده و صرفه‌جویی خالص سالانه در شبکه رفاه
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">هزینه پایلوت (۸ هفته)</span>
                <span className="text-xl font-black text-slate-900 block mt-1">۱۸۰ میلیون تومان</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">۳۰ شعبه منتخب</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">صرفه‌جویی سالانه</span>
                <span className="text-xl font-black text-teal-700 block mt-1">۲۱٫۸ میلیارد تومان</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">کاهش هزینه‌های پرسنلی</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">نسبت منفعت به هزینه (BCR)</span>
                <span className="text-xl font-black text-teal-700 block mt-1">۵٫۱۲ برابر</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">بازگشت سرمایه سریع</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">دوره بازگشت سرمایه</span>
                <span className="text-xl font-black text-emerald-700 block mt-1">۲٫۰ ماه</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">حدود ۶۰ روز</span>
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
              <Cpu className="w-5 h-5 text-teal-600" />
              <span>تصمیم‌گیری معماری فنی ADR-007: حل بهینه‌سازی شیفت با برنامه‌ریزی خطی عدد صحیح (ILP)</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              مدل‌سازی قیود قانون کار، ترجیحات پرسنل، زمان استراحت شیفت‌ها و کمینه‌سازی هزینه حقوق در پایتون / PuLP
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-teal-600" />
                <span>۱. استخراج تقاضای ساعتی</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                تخمین تعداد صندوق‌داران و متصدیان سالن موردنیاز برای هر ساعت از روز بر مبنای پیش‌بینی فروش مدل TFT.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span>۲. حل‌کننده سالور ILP Solver</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                تخصیص اتوماتیک کارکنان به شیفت‌های ۸ ساعته با رعایت حداکثر ۴۴ ساعت کار در هفته و چرخش عادلانه شیفت‌های شب.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>۳. لایه هوش مصنوعی استخراج رزومه (Parser)</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                تبدیل فایل‌های PDF رزومه متقاضیان به ساختار JSON استاندارد و امتیازدهی خودکار مبتنی بر LLM محلی.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
