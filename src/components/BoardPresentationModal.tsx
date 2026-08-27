import React, { useState } from 'react';
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  TrendingUp, 
  Percent, 
  GraduationCap, 
  ShieldCheck, 
  Award, 
  CheckCircle2,
  FileCheck2,
  Maximize2,
  Building2,
  Boxes,
  Eye,
  LayoutDashboard,
  ShieldAlert,
  Truck,
  UserCheck,
  Check
} from 'lucide-react';
import { REFAH_PROJECTS, VISTA_COMPANY_INFO } from '../data/projects';

interface BoardPresentationModalProps {
  onClose: () => void;
  onSelectProject?: (proj: any) => void;
  onOpenMoU: () => void;
}

export const BoardPresentationModal: React.FC<BoardPresentationModalProps> = ({
  onClose,
  onSelectProject,
  onOpenMoU
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides = [
    {
      title: 'طرح جامع تحول هوش مصنوعی، داده و پلتفرم آموزش ضمن خدمت رفاه',
      subtitle: 'ارائه راهبردی به مدیرعامل محترم و اعضای هیئت مدیره فروشگاه‌های زنجیره‌ای رفاه',
      badge: 'پیشنهاددهنده: شرکت شبکه هوشمند ابتکار ویستا (Vista)',
      content: (
        <div className="space-y-6 text-center py-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center text-white text-2xl font-black shadow-md">
              رفاه
            </div>
            <span className="text-2xl text-slate-300 font-light">+</span>
            <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-emerald-400 text-xl font-black shadow-md border border-emerald-500/30">
              Vista
            </div>
          </div>
          
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
              گذار ساختاریافته به <span className="text-emerald-700">«رفاه هوشمند و داده‌محور»</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              طراحی و اجرای ۱۰ پروژه تحول‌آفرین توسط <strong>شرکت شبکه هوشمند ابتکار ویستا</strong> (برنده ۲ جایزه ملی AI، پارک علم و فناوری سمنان) برای خلق بیش از <strong>۱۴۸ میلیارد تومان سود ناخالص سالانه</strong> بدون نیاز به خرید سرور جدید یا تغییر در نرم‌افزارهای جاری رفاه.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-xl mx-auto pt-2">
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl">
              <div className="text-xl sm:text-2xl font-black text-emerald-700">۶٫۸۴x</div>
              <div className="text-[11px] text-slate-500 font-bold mt-1">نسبت سود به هزینه (BCR C2)</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl">
              <div className="text-xl sm:text-2xl font-black text-teal-700">۸ هفته</div>
              <div className="text-[11px] text-slate-500 font-bold mt-1">مدت فاز پایلوت عملیاتی</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl">
              <div className="text-xl sm:text-2xl font-black text-amber-700">Success Fee</div>
              <div className="text-[11px] text-slate-500 font-bold mt-1">مدل پرداخت مشروط به بازدهی</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'نقشه راه امواج سه‌گانه و ۱۰ پروژه تفصیلی رفاه',
      subtitle: 'تعادل هوشمند میان دستاورد کوتاه‌مدت (Quick Wins) و زیرساخت پایدار',
      badge: 'معماری و زمان‌بندی',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 py-3">
          <div className="bg-emerald-50/80 border-2 border-emerald-300 rounded-2xl p-4 space-y-3">
            <div className="text-xs font-black text-emerald-900 bg-emerald-100 px-2.5 py-1 rounded-lg inline-block border border-emerald-200">
              موج ۱: بازدهی فوری و زیرساخت (ماه ۱ تا ۶)
            </div>
            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>C2:</strong> بهینه‌سازی پروموشن و حذف تخفیف زیان‌ده</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>B5:</strong> انبارگردانی چرخه‌ای و رفع Ghost Stock</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>B1:</strong> پیش‌بینی تقاضای زنجیره تامین با مدل TFT</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>A3:</strong> پلتفرم آموزش ضمن خدمت و شبیه‌ساز مکالمه پرسنل</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
            <div className="text-xs font-black text-teal-900 bg-teal-100 px-2.5 py-1 rounded-lg inline-block border border-teal-200">
              موج ۲: هوشمندسازی شلف و تجربه (ماه ۶ تا ۱۲)
            </div>
            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span><strong>C1:</strong> موتور شخصی‌سازی سبد خرید و وفاداری CRM</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span><strong>C3:</strong> بینایی ماشین و پایش تصویری شلف خالی و صفوف</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span><strong>A1:</strong> غربالگری رزومه و بهینه‌سازی شیفت‌های فروشگاهی</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
            <div className="text-xs font-black text-slate-900 bg-slate-200 px-2.5 py-1 rounded-lg inline-block">
              موج ۳: پایش یکپارچه و ضدتقلب (ماه ۱۲ به بعد)
            </div>
            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                <span><strong>D1:</strong> برج مراقبت داده و تصمیم‌یار مدیرعامل</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                <span><strong>D2:</strong> سامانه هوشمند کشف تقلب و کسری صندوق</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                <span><strong>SCM-2:</strong> بهینه‌سازی مسیرگان ناوگان توزیع</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: 'توجیه اقتصادی و بازگشت سرمایه (Financial Feasibility)',
      subtitle: 'ارزیابی مدل هزینه-فایده با مفروضات محتاطانه و تاییدیه حسابداری مدیریت',
      badge: 'سودآوری و مالی',
      content: (
        <div className="space-y-4 py-2">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
              <span className="text-[11px] text-emerald-800 font-bold block">سود ناخالص پروژه C2</span>
              <span className="text-lg font-black text-emerald-700 mt-1 block">۵۲ میلیارد ت/سال</span>
            </div>
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
              <span className="text-[11px] text-emerald-800 font-bold block">صرفه‌جویی پروژه B1</span>
              <span className="text-lg font-black text-emerald-700 mt-1 block">۴۱ میلیارد ت/سال</span>
            </div>
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
              <span className="text-[11px] text-emerald-800 font-bold block">کاهش خسارت انبار B5</span>
              <span className="text-lg font-black text-emerald-700 mt-1 block">۳۲ میلیارد ت/سال</span>
            </div>
            <div className="p-3 bg-slate-900 text-white rounded-xl border border-slate-800 text-center">
              <span className="text-[11px] text-emerald-400 font-bold block">مجموع منافع سالانه ۱۰ پروژه</span>
              <span className="text-lg font-black text-emerald-400 mt-1 block">+۱۴۸ میلیارد تومان</span>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-2">
            <div className="font-bold text-slate-900">فرمول اثبات مالی در فاز پایلوت (DiD Framework):</div>
            <p>
              با روش علمی تفاضل در تفاضل (Difference-in-Differences) در ۲۰ شعبه (۱۰ شعبه آزمون مجهز به هوش مصنوعی ویستا و ۱۰ شعبه کنترل سنتی)، هرگونه نوسان تورمی یا فصلی خنثی شده و سودآوری خالص الگوریتم‌ها با عدد و فاکتور شفاف به هیئت مدیره محترم گزارش می‌گردد.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'معرفی شرکت مجری: شبکه هوشمند ابتکار ویستا',
      subtitle: 'اکوسیستم یکپارچه HooshGate و DevCodeBase و سوابق ملی',
      badge: 'اعتبار و صلاحیت پیمانکار',
      content: (
        <div className="space-y-4 py-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-black text-amber-900">HooshGate (هوش‌گیت)</span>
                <span className="text-[10px] bg-amber-200 text-amber-800 px-2 py-0.5 rounded font-bold">AI Knowledge Layer</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                هاب و رسانه تخصصی هوش مصنوعی؛ تامین جدیدترین متدولوژی‌های LLM، یادگیری تقویتی و آموزش مدل‌های زبانی سازمانی رفاه.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-black text-emerald-900">DevCodeBase (دِوکدبیس)</span>
                <span className="text-[10px] bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded font-bold">Engineering Execution Layer</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                بازوی مهندسی نرم‌افزار، توسعه پلتفرم‌های ابری، معماری میکروسرویس مقیاس‌پذیر و یکپارچه‌سازی پایدار با پایگاه داده‌های اوراکل و SQL رفاه.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 text-white flex justify-between items-center flex-wrap gap-3">
            <div>
              <span className="text-xs font-bold text-emerald-400 block">{VISTA_COMPANY_INFO.nameFa}</span>
              <span className="text-[11px] text-slate-300">مستقر در پارک علم و فناوری سمنان | شماره ثبت: ۵۸۳۳۰۲ | عضو نصر</span>
            </div>
            <div className="text-left text-xs font-mono text-emerald-300">
              {VISTA_COMPANY_INFO.phone} | {VISTA_COMPANY_INFO.domain}
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'پیشنهاد مصوبه هیئت مدیره و گام فوری آغاز کار',
      subtitle: 'امضای تفاهم‌نامه فاز پایلوت (MoU) بدون ریسک مالی',
      badge: 'تصمیم‌گیری و اقدام',
      content: (
        <div className="space-y-5 text-center py-4">
          <div className="max-w-xl mx-auto space-y-3">
            <h3 className="text-lg font-black text-slate-900">متن پیشنهادی مصوبه هیئت مدیره محترم:</h3>
            <p className="text-xs sm:text-sm text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200 leading-relaxed">
              «موافقت با اجرای فاز پایلوت ۸ هفته‌ای پروژه‌های C2 و A3 طرح تحول هوش مصنوعی در ۲۰ شعبه منتخب با همکاری شرکت شبکه هوشمند ابتکار ویستا بر پایه مدل تسهیم ریسک و تضمین عملکرد (Success Fee).»
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenMoU}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition cursor-pointer"
            >
              <FileCheck2 className="w-4 h-4" />
              <span>مشاهده و تایید پیش‌نویس تفاهم‌نامه (MoU)</span>
            </button>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <div>
              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                {slides[currentSlide].badge}
              </span>
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900 mt-1">
                {slides[currentSlide].title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 font-bold">
              اسلاید {currentSlide + 1} از {slides.length}
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-xl bg-white hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center border border-slate-200 transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Slide Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 flex flex-col justify-center">
          <div className="text-xs sm:text-sm text-slate-500 mb-2 font-medium">
            {slides[currentSlide].subtitle}
          </div>
          {slides[currentSlide].content}
        </div>

        {/* Footer Navigation Bar */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <button
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            disabled={currentSlide === 0}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
            <span>اسلاید قبلی</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx ? 'w-6 bg-emerald-600' : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              if (currentSlide === slides.length - 1) {
                onClose();
              } else {
                setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1));
              }
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition cursor-pointer shadow-sm"
          >
            <span>{currentSlide === slides.length - 1 ? 'پایان ارائه' : 'اسلاید بعدی'}</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
