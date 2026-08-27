import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  Coins, 
  CheckCircle2,
  BarChart3,
  Layers,
  ChevronLeft,
  Eye,
  Store,
  Play,
  Award,
  Zap,
  Target,
  FileCheck2
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Cell
} from 'recharts';
import { REFAH_PROJECTS } from '../data/projects';
import { ProjectDetail } from '../types';
import { REFAH_IMAGES } from '../assets/images';

interface ExecutiveCockpitProps {
  onSelectProject: (project: ProjectDetail) => void;
  onNavigateTab: (tab: string) => void;
}

export const ExecutiveCockpit: React.FC<ExecutiveCockpitProps> = ({
  onSelectProject,
  onNavigateTab,
}) => {
  const c2Project = REFAH_PROJECTS.find(p => p.id === 'C2') || REFAH_PROJECTS[0];

  const comparisonData = REFAH_PROJECTS.map(p => ({
    name: `${p.id} - ${p.title.slice(0, 16)}...`,
    fullTitle: p.title,
    id: p.id,
    ratio: p.financials.benefitCostRatio,
    benefit: p.financials.estimatedAnnualBenefitBillionToman,
    payback: p.financials.paybackMonths,
  })).sort((a, b) => b.ratio - a.ratio);

  return (
    <div className="space-y-8 pb-12">
      {/* Executive Hero Banner - Clean Refah White & Emerald */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-900 text-white p-6 sm:p-10 shadow-lg border border-emerald-600">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-emerald-100 backdrop-blur-md border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>پروپوزال رسمی و پلتفرم تعاملی تحول هوش مصنوعی رفاه</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-tight text-white">
              تبدیل داده‌های ۵۰۰+ شعبه رفاه به{' '}
              <span className="text-amber-300">
                سودآوری پایدار و مزیت رقابتی پایدار
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed font-normal max-w-2xl">
              این پلتفرم بر اساس سند راهبردی هوش مصنوعی فروشگاه‌های زنجیره‌ای رفاه، مسیر استقرار ۷ پروژه کلیدی در سه موج را با تمرکز بر پایلوت فوق‌سریع <strong>بهینه‌سازی پروموشن (C2)</strong> و <strong>دانشگاه سازمانی (A3)</strong> با ریسک صفر و مدل پرداخت بر اساس نتیجه (Success-Fee) ارائه می‌دهد.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onSelectProject(c2Project)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-white text-emerald-900 hover:bg-emerald-50 shadow-md transition cursor-pointer"
              >
                <span>مشاهده پروژه پرچم‌دار (C2)</span>
                <ArrowRight className="w-4 h-4 rotate-180 text-emerald-700" />
              </button>

              <button
                onClick={() => onNavigateTab('simulator')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-900/60 hover:bg-emerald-900/80 text-white border border-emerald-400/40 backdrop-blur-md transition cursor-pointer"
              >
                <Play className="w-4 h-4 text-amber-300 fill-amber-300" />
                <span>اجرای تست زنده تخفیفات</span>
              </button>

              <button
                onClick={() => onNavigateTab('academy')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-emerald-100 hover:text-white hover:bg-white/10 transition cursor-pointer"
              >
                <span>دانشگاه هوشمند پرسنل</span>
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* High Level Key KPI Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center">
              <div className="text-amber-300 font-black text-2xl sm:text-3xl">۶٫۸۴x</div>
              <div className="text-xs font-bold text-white mt-1">بالاترین نسبت منفعت به هزینه</div>
              <div className="text-[11px] text-emerald-100 mt-0.5">پایلوت پروموشن هوشمند (C2)</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center">
              <div className="text-white font-black text-2xl sm:text-3xl">۲٫۱ ماه</div>
              <div className="text-xs font-bold text-white mt-1">بازگشت کامل سرمایه</div>
              <div className="text-[11px] text-emerald-100 mt-0.5">Payback در فاز پایلوت</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center">
              <div className="text-amber-300 font-black text-2xl sm:text-3xl">+۱۴۸ میلیارد</div>
              <div className="text-xs font-bold text-white mt-1">منفعت سالانه پیش‌بینی شده</div>
              <div className="text-[11px] text-emerald-100 mt-0.5">تومان در کل سبد پروژه‌ها</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center">
              <div className="text-white font-black text-2xl sm:text-3xl">۸ هفته</div>
              <div className="text-xs font-bold text-white mt-1">مدت زمان فاز پایلوت</div>
              <div className="text-[11px] text-emerald-100 mt-0.5">تست در ۲۰ شعبه منتخب</div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Innovation Gallery - Real Relevant Retail AI Scenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div 
          onClick={() => onSelectProject(c2Project)}
          className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-emerald-500 hover:shadow-md cursor-pointer transition flex flex-col"
        >
          <div className="h-40 overflow-hidden relative bg-slate-100">
            <img 
              src={REFAH_IMAGES.promoAi} 
              alt="Promotion AI Analytics" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
            />
            <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-lg text-[10px] font-bold bg-emerald-600 text-white shadow-sm">
              پایلوت شماره ۱ (C2)
            </span>
          </div>
          <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-sm text-slate-900 group-hover:text-emerald-700 transition">تحلیل کشش تخفیف و پروموشن</h4>
              <p className="text-xs text-slate-500 line-clamp-2 mt-1">جلوگیری از هدررفت بودجه تخفیف و حذف تخفیف‌های زیان‌ده</p>
            </div>
            <div className="flex items-center justify-between text-[11px] text-emerald-600 font-bold pt-2 border-t border-slate-100">
              <span>نسبت منفعت: ۶٫۸۴ برابر</span>
              <span>مشاهده سناریو ←</span>
            </div>
          </div>
        </div>

        <div 
          onClick={() => onNavigateTab('academy')}
          className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-emerald-500 hover:shadow-md cursor-pointer transition flex flex-col"
        >
          <div className="h-40 overflow-hidden relative bg-slate-100">
            <img 
              src={REFAH_IMAGES.academyAi} 
              alt="Smart Academy" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
            />
            <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-lg text-[10px] font-bold bg-teal-600 text-white shadow-sm">
              آموزش ضمن خدمت (A3)
            </span>
          </div>
          <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-sm text-slate-900 group-hover:text-emerald-700 transition">سامانه آموزش ضمن خدمت و LMS/TMS رفاه</h4>
              <p className="text-xs text-slate-500 line-clamp-2 mt-1">۱۰ دوره کاربردی، سرفصل‌ها، ویدیو، اینفوگرافیک، هندبوک PDF و مربی هوش مصنوعی</p>
            </div>
            <div className="flex items-center justify-between text-[11px] text-teal-600 font-bold pt-2 border-t border-slate-100">
              <span>۱۰ دوره تخصصی رفاه</span>
              <span>مشاهده دوره‌ها و شبیه‌ساز ←</span>
            </div>
          </div>
        </div>

        <div 
          onClick={() => onSelectProject(REFAH_PROJECTS.find(p => p.id === 'C3')!)}
          className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-emerald-500 hover:shadow-md cursor-pointer transition flex flex-col"
        >
          <div className="h-40 overflow-hidden relative bg-slate-100">
            <img 
              src={REFAH_IMAGES.visionShelf} 
              alt="Vision Shelf" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
            />
            <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-lg text-[10px] font-bold bg-amber-600 text-white shadow-sm">
              بینایی ماشین (C3)
            </span>
          </div>
          <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-sm text-slate-900 group-hover:text-emerald-700 transition">پایش هوشمند شلف و صف صندوق</h4>
              <p className="text-xs text-slate-500 line-clamp-2 mt-1">شناسایی خالی شدن قفسه‌ها و صف طولانی روی دوربین‌های موجود شعب</p>
            </div>
            <div className="flex items-center justify-between text-[11px] text-amber-600 font-bold pt-2 border-t border-slate-100">
              <span>بدون نیاز به دوربین جدید</span>
              <span>مشاهده جزئیات ←</span>
            </div>
          </div>
        </div>

        <div 
          onClick={() => onSelectProject(REFAH_PROJECTS.find(p => p.id === 'B5')!)}
          className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-emerald-500 hover:shadow-md cursor-pointer transition flex flex-col"
        >
          <div className="h-40 overflow-hidden relative bg-slate-100">
            <img 
              src={REFAH_IMAGES.hypermarket} 
              alt="Hypermarket AI" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
            />
            <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-lg text-[10px] font-bold bg-emerald-700 text-white shadow-sm">
              زنجیره تامین (B5)
            </span>
          </div>
          <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-sm text-slate-900 group-hover:text-emerald-700 transition">کشف ناموجودی پنهان (Ghost Stock)</h4>
              <p className="text-xs text-slate-500 line-clamp-2 mt-1">انبارگردانی چرخه‌ای هوشمند و رفع مغایرت‌های کالا در سیستم</p>
            </div>
            <div className="flex items-center justify-between text-[11px] text-emerald-700 font-bold pt-2 border-t border-slate-100">
              <span>صرفه‌جویی: ۳۲ میلیارد تومان</span>
              <span>مشاهده پروژه ←</span>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Comparison Chart & Value Proposition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Benefit-to-Cost Ratio Chart */}
        <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-emerald-600" />
                <span>مقایسه بازدهی سرمایه‌گذاری (نسبت منفعت به هزینه) پروژه‌ها</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                تومان منفعت ناخالص حاصل‌شده به ازای هر ۱ تومان سرمایه‌گذاری در افق ۱ ساله
              </p>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              فرمول دقیق اثرپذیری داکیومنت
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={comparisonData}
                layout="vertical"
                margin={{ top: 5, right: 20, left: 40, bottom: 5 }}
              >
                <XAxis type="number" stroke="#94a3b8" fontSize={11} domain={[0, 8]} />
                <YAxis type="category" dataKey="id" stroke="#64748b" fontSize={12} width={35} />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-lg text-xs space-y-1.5 text-right font-medium">
                          <p className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-1">
                            {data.id}: {data.fullTitle}
                          </p>
                          <p className="text-emerald-700 font-bold">
                            نسبت منفعت به هزینه: {data.ratio} برابر
                          </p>
                          <p className="text-slate-600">
                            منفعت سالانه تخمینی: {data.benefit} میلیارد تومان
                          </p>
                          <p className="text-slate-600">
                            دوره بازگشت سرمایه: {data.payback} ماه
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="ratio" radius={[0, 8, 8, 0]} barSize={20}>
                  {comparisonData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.id === 'C2' ? '#059669' : entry.id === 'A3' ? '#0d9488' : '#10b981'} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs text-slate-600 border-t border-slate-100">
            <div>
              <span className="text-slate-400 block text-[11px]">پروژه رتبه ۱:</span>
              <span className="font-bold text-emerald-700">C2 پروموشن (۶٫۸۴x)</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">پروژه رتبه ۲:</span>
              <span className="font-bold text-teal-700">A3 دانشگاه (۵٫۱۲x)</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">پروژه رتبه ۳:</span>
              <span className="font-bold text-slate-800">B5 انبارداری (۴٫۷۶x)</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">پروژه رتبه ۴:</span>
              <span className="font-bold text-slate-800">B1 تقاضا (۴٫۲۰x)</span>
            </div>
          </div>
        </div>

        {/* Why Refah Should Partner With Us (Decision Framework) */}
        <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-emerald-700 border-b border-slate-100 pb-3">
              <Award className="w-5 h-5" />
              <h3 className="font-black text-base text-slate-900">چهار اصل کلیدی برای هیئت مدیره رفاه</h3>
            </div>

            <ul className="space-y-3 text-xs text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">۱. پایلوت بدون ریسک و زودبازده (Fast Pilot):</strong>
                  پروژه‌های موج ۱ ظرف ۶ تا ۸ هفته مستقر شده و در کمتر از ۳ ماه هزینه خود را بازمی‌گردانند.
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">۲. عدم نیاز به تعویض سخت‌افزار یا POS:</strong>
                  تمام راهکارها از طریق APIهای امن به دیتابیس‌ها و دوربین‌های موجود شعب رفاه متصل می‌شوند.
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">۳. ارزیابی علمی با متدولوژی Diff-in-Diff:</strong>
                  جداسازی قطعی اثر هوش مصنوعی از سایر عوامل بازار در ۱۰ شعبه آزمون در برابر ۱۰ شعبه کنترل.
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">۴. مدل قراردادی مبتنی بر نتیجه (Success Fee):</strong>
                  تسویه بخش عمده حق‌الزحمه مشروط به تحقق تارگت‌های شاخص‌های COM-09 و SCM-05.
                </div>
              </li>
            </ul>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => onNavigateTab('projects')}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
            >
              <span>مشاهده هر ۷ پروژه در کاتالوگ</span>
              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            </button>
            <span className="text-[11px] text-slate-400 font-medium">سند رسمی ۱۴۰۵-۱۴۰۶</span>
          </div>
        </div>
      </div>

      {/* Roadmap - Three Strategic Waves */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-600" />
              <span>نقشه راه استقرار سه‌موجی پروژه‌های هوش مصنوعی رفاه</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              زمان‌بندی گام‌به‌گام از پایلوت‌های پرچم‌دار تا یکپارچه‌سازی در سطح کل شعب کشور
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Wave 1 */}
          <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-5 space-y-4 relative">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-emerald-600 text-white">
                موج اول: ماه ۱ تا ۴
              </span>
              <span className="text-xs font-bold text-emerald-800">زودبازده و پرمنفعت</span>
            </div>

            <h4 className="font-extrabold text-sm text-slate-900">
              بهینه‌سازی تخفیفات، انبار و دانشگاه
            </h4>

            <p className="text-xs text-slate-600 leading-relaxed">
              استقرار ۴ پروژه کم‌ریسک بدون نیاز به خرید سخت‌افزار با بالاترین بازدهی نقدی برای شرکت رفاه.
            </p>

            <div className="space-y-2 pt-2 border-t border-emerald-200/60">
              {REFAH_PROJECTS.filter(p => p.wave === 1).map((p) => (
                <div 
                  key={p.id}
                  onClick={() => onSelectProject(p)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-emerald-100 hover:border-emerald-400 text-xs font-semibold cursor-pointer transition shadow-2xs"
                >
                  <span className="text-slate-800 font-bold">{p.id}: {p.title}</span>
                  <span className="text-emerald-700 font-bold">{p.financials.benefitCostRatio}x</span>
                </div>
              ))}
            </div>
          </div>

          {/* Wave 2 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4 relative">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-teal-600 text-white">
                موج دوم: ماه ۴ تا ۸
              </span>
              <span className="text-xs font-bold text-teal-800">هوشمندسازی شعب و CRM</span>
            </div>

            <h4 className="font-extrabold text-sm text-slate-900">
              بینایی ماشین و شخصی‌سازی مشتری
            </h4>

            <p className="text-xs text-slate-600 leading-relaxed">
              توسعه هوش مصنوعی بر روی دوربین‌های مداربسته موجود در شعب و شخصی‌سازی پیشنهادهای باشگاه مشتریان.
            </p>

            <div className="space-y-2 pt-2 border-t border-slate-200">
              {REFAH_PROJECTS.filter(p => p.wave === 2).map((p) => (
                <div 
                  key={p.id}
                  onClick={() => onSelectProject(p)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 hover:border-teal-400 text-xs font-semibold cursor-pointer transition shadow-2xs"
                >
                  <span className="text-slate-800 font-bold">{p.id}: {p.title}</span>
                  <span className="text-teal-700 font-bold">{p.financials.benefitCostRatio}x</span>
                </div>
              ))}
            </div>
          </div>

          {/* Wave 3 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4 relative">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-slate-700 text-white">
                موج سوم: ماه ۸ تا ۱۲
              </span>
              <span className="text-xs font-bold text-slate-700">برج مراقبت راهبردی</span>
            </div>

            <h4 className="font-extrabold text-sm text-slate-900">
              مرکز فرماندهی یکپارچه داده مدیرعامل
            </h4>

            <p className="text-xs text-slate-600 leading-relaxed">
              داشبورد تصمیم‌گیری بلادرنگ مدیرعامل با دستیار پرسش و پاسخ هوشمند صوتی و متنی به زبان فارسی.
            </p>

            <div className="space-y-2 pt-2 border-t border-slate-200">
              {REFAH_PROJECTS.filter(p => p.wave === 3).map((p) => (
                <div 
                  key={p.id}
                  onClick={() => onSelectProject(p)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 hover:border-slate-400 text-xs font-semibold cursor-pointer transition shadow-2xs"
                >
                  <span className="text-slate-800 font-bold">{p.id}: {p.title}</span>
                  <span className="text-slate-700 font-bold">{p.financials.benefitCostRatio}x</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
