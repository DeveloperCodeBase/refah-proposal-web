import React from 'react';
import { 
  Building2, 
  Award, 
  ShieldCheck, 
  Cpu, 
  Bot, 
  Layers, 
  Code2, 
  Database, 
  CheckCircle2, 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  ExternalLink,
  Sparkles,
  ArrowLeft,
  Server,
  Workflow,
  Radio,
  FileCheck2
} from 'lucide-react';
import { VISTA_COMPANY_INFO } from '../data/projects';

interface VistaCompanyProfileProps {
  onOpenMoU: () => void;
  onExploreProjects: () => void;
}

export const VistaCompanyProfile: React.FC<VistaCompanyProfileProps> = ({
  onOpenMoU,
  onExploreProjects
}) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Hero Header Banner */}
      <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white p-6 sm:p-10 overflow-hidden shadow-xl border border-emerald-900/40">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />
        
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>پیمانکار و ارائه‌دهنده طرح جامع تحول هوش مصنوعی رفاه</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            {VISTA_COMPANY_INFO.nameFa}
            <span className="block text-lg sm:text-2xl font-medium text-emerald-400 mt-1 font-sans">
              {VISTA_COMPANY_INFO.nameEn}
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {VISTA_COMPANY_INFO.slogan}؛ با ترکیب نگاه محصول‌محور، مهندسی نرم‌افزار، هوش مصنوعی عامل‌گرا (Agentic AI) و تجربه داده، راهکارهایی می‌سازد که برای محیط واقعی و عملیاتی سازمان‌های بزرگی چون فروشگاه‌های زنجیره‌ای رفاه آماده بهره‌برداری هستند.
          </p>

          {/* Quick Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {VISTA_COMPANY_INFO.honors.map((honor, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 flex flex-col justify-between">
                <span className="text-emerald-400 font-extrabold text-xs">{honor.badge}</span>
                <span className="text-[11px] text-slate-200 mt-1 font-medium">{honor.title}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3 pt-4 flex-wrap">
            <button
              onClick={onExploreProjects}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-700/30 transition cursor-pointer"
            >
              <Layers className="w-4 h-4" />
              <span>مشاهده ۱۰ پروژه تحول رفاه</span>
            </button>

            <button
              onClick={onOpenMoU}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition cursor-pointer"
            >
              <FileCheck2 className="w-4 h-4 text-emerald-300" />
              <span>پیش‌نویس تفاهم‌نامه فاز پایلوت (MoU)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Ecosystem: HooshGate & DevCodeBase */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Workflow className="w-5 h-5 text-emerald-600" />
              <span>اکوسیستم یکپارچه ویستا</span>
            </h2>
            <p className="text-xs text-slate-500">
              ترکیب دانش عمیق هوش مصنوعی با بازوی مهندسی محصول برای اجرای بی‌نقص در فروشگاه‌های رفاه
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* HooshGate Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 font-black text-xl">
                HG
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100/70 text-amber-800 border border-amber-200">
                AI Knowledge Layer
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">HooshGate (هوش‌گیت)</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              رسانه و هاب تخصصی هوش مصنوعی که خبر، پژوهش، یادگیری، ابزارها، پروژه‌ها و چهره‌های تخصصی را کنار هم قرار می‌دهد. پشتوانه دانشی قوی برای آموزش مدل‌های اختصاصی و آکادمی رفاه.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
              <span className="text-[11px] bg-slate-100 px-2.5 py-1 rounded-lg text-slate-700 font-medium">پژوهش و متدولوژی AI</span>
              <span className="text-[11px] bg-slate-100 px-2.5 py-1 rounded-lg text-slate-700 font-medium">ابزارهای مدرن LLM & RAG</span>
              <span className="text-[11px] bg-slate-100 px-2.5 py-1 rounded-lg text-slate-700 font-medium">شبکه دانشی خبرگان</span>
            </div>
          </div>

          {/* DevCodeBase Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-black text-xl">
                DCB
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100/70 text-emerald-800 border border-emerald-200">
                Engineering Execution Layer
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">DevCodeBase (دِوکدبیس)</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              لایه توسعه، مهندسی و اجرای محصولات دیجیتال؛ طراحی پلتفرم‌های وب مقیاس‌پذیر، سامانه‌های سازمانی، API، زیرساخت Dockerized، اتوماسیون و یکپارچه‌سازی پایدار AI با ERPهای رفاه.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
              <span className="text-[11px] bg-slate-100 px-2.5 py-1 rounded-lg text-slate-700 font-medium">استقرار کانتینری Docker</span>
              <span className="text-[11px] bg-slate-100 px-2.5 py-1 rounded-lg text-slate-700 font-medium">معماری میکروسرویس مقیاس‌پذیر</span>
              <span className="text-[11px] bg-slate-100 px-2.5 py-1 rounded-lg text-slate-700 font-medium">مهندسی نرم‌افزار Production</span>
            </div>
          </div>
        </div>
      </div>

      {/* 10 Core Services Grid */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-emerald-600" />
          <span>خدمات و توانمندی‌های ۱۰ گانه ویستا</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {VISTA_COMPANY_INFO.services.map((service, idx) => (
            <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-emerald-50/50 hover:border-emerald-200 transition">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-xs font-semibold text-slate-800">{service}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact & Registration Footer Box */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div>
            <h4 className="text-sm font-bold text-emerald-400 mb-2">اطلاعات رسمی شرکت</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              شرکت شبکه هوشمند ابتکار ویستا<br />
              شماره ثبت رسمی: {VISTA_COMPANY_INFO.registrationNumber}<br />
              عضو نظام صنفی رایانه‌ای
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-emerald-400 mb-2">استقرار</h4>
            <p className="text-xs text-slate-300 leading-relaxed flex items-start gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{VISTA_COMPANY_INFO.address}</span>
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-emerald-400 mb-2">ارتباط مستقیم</h4>
            <div className="space-y-1.5 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span dir="ltr">{VISTA_COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>{VISTA_COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-emerald-400 mb-2">دامنه و وب‌سایت</h4>
            <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono text-emerald-300">{VISTA_COMPANY_INFO.domain}</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-2">
              آماده آغاز بی‌درنگ فاز پایلوت در فروشگاه‌های رفاه با مدل تسهیم ریسک و تضمین عملکرد
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};
