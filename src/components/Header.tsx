import React, { useState } from 'react';
import { 
  BarChart3, 
  Layers, 
  GraduationCap, 
  Calculator, 
  Bot, 
  Sparkles, 
  FileCheck2, 
  Store, 
  FlaskConical,
  Award,
  Building2,
  Menu,
  X,
  ChevronLeft,
  ShieldCheck
} from 'lucide-react';
import { VISTA_COMPANY_INFO } from '../data/projects';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPitchMode: () => void;
  onOpenMoU: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenPitchMode,
  onOpenMoU,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainNavItems = [
    { 
      id: 'roadmap', 
      label: 'پلن ۵۰ فاز (فاز ۱ فعال)', 
      icon: ShieldCheck, 
      badge: 'گام‌به‌گام' 
    },
    { 
      id: 'cockpit', 
      label: 'داشبورد ارشد مدیرعامل', 
      icon: BarChart3, 
      badge: 'برج مراقبت' 
    },
    { 
      id: 'projects', 
      label: 'کاتالوگ جامع ۱۰ پروژه', 
      icon: Layers, 
      badge: 'امواج ۱، ۲ و ۳' 
    },
    { 
      id: 'simulator', 
      label: 'آزمایشگاه و تست سناریوها', 
      icon: FlaskConical, 
      badge: 'تست زنده ۱۰ پروژه' 
    },
    { 
      id: 'academy', 
      label: 'پلتفرم آموزش ضمن خدمت (A3)', 
      icon: GraduationCap, 
      badge: '۱۰ دوره + مربی AI' 
    },
    { 
      id: 'calculator', 
      label: 'توجیه اقتصادی و ROI', 
      icon: Calculator, 
      badge: 'سودآوری' 
    },
    { 
      id: 'vista', 
      label: 'درباره ویستا و اکوسیستم', 
      icon: Building2, 
      badge: 'طراح پروپوزال' 
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Branding & Enterprise Actions Bar */}
        <div className="flex items-center justify-between py-3 border-b border-slate-100 gap-3">
          
          {/* Right: Co-Branding Refah & Vista */}
          <div className="flex items-center gap-3">
            {/* Refah 3D Badge */}
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 flex items-center justify-center shadow-md shadow-emerald-700/20 text-white font-black text-lg tracking-tight border border-emerald-500/30 shrink-0">
              رفاه
            </div>
            
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-sm sm:text-base text-slate-900">
                  طرح جامع هوش مصنوعی و تحول داده
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <Store className="w-3 h-3 text-emerald-600" />
                  <span>فروشگاه‌های زنجیره‌ای رفاه</span>
                </span>
              </div>
              <p className="text-[11px] text-slate-500 flex items-center gap-1.5 font-medium mt-0.5">
                <span>ارائه‌شده توسط:</span>
                <button 
                  onClick={() => setActiveTab('vista')}
                  className="text-emerald-700 hover:text-emerald-800 font-extrabold underline decoration-emerald-300 underline-offset-2 transition"
                >
                  {VISTA_COMPANY_INFO.nameFa}
                </button>
                <span className="text-slate-300">|</span>
                <span className="text-emerald-700 font-semibold text-[10px] bg-emerald-50 px-1.5 py-0.5 rounded">
                  پارک علم و فناوری | ثبت ۵۸۳۳۰۲
                </span>
              </p>
            </div>
          </div>

          {/* Left: Action Buttons & Mobile Hamburger */}
          <div className="flex items-center gap-2">
            
            {/* Advisor Bot */}
            <button
              onClick={() => setActiveTab('advisor')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition border cursor-pointer ${
                activeTab === 'advisor'
                  ? 'bg-teal-700 text-white border-teal-700 shadow-xs'
                  : 'bg-teal-50 text-teal-800 hover:bg-teal-100 border-teal-200'
              }`}
            >
              <Bot className="w-3.5 h-3.5 text-teal-600" />
              <span className="hidden md:inline">مشاور هوش مصنوعی</span>
              <span className="md:hidden">دستیار AI</span>
            </button>

            {/* Pitch Mode */}
            <button
              onClick={onOpenPitchMode}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 transition cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span className="hidden lg:inline">ارائه به هیئت مدیره</span>
              <span className="lg:hidden">اسلایدها</span>
            </button>

            {/* MoU Draft */}
            <button
              onClick={onOpenMoU}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs shadow-emerald-600/30 transition cursor-pointer border border-emerald-600"
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">پیش‌نویس تفاهم‌نامه (MoU)</span>
              <span className="sm:hidden">تفاهم‌نامه</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition"
              aria-label="باز کردن منو"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-700" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation Menubar */}
        <nav 
          id="main-navigation" 
          aria-label="بخش‌های اصلی سامانه"
          className="hidden lg:flex items-center justify-between py-2"
        >
          <div className="flex items-center gap-1.5 flex-wrap">
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  id={`nav-btn-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs lg:text-sm font-bold transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-xs shadow-emerald-600/30 scale-[1.01]'
                      : 'text-slate-600 hover:text-emerald-800 hover:bg-emerald-50/70'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition ${
                      isActive 
                        ? 'bg-emerald-700/90 text-white' 
                        : 'bg-slate-100 text-slate-500 border border-slate-200/80'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Credential Pill */}
          <div className="hidden xl:flex items-center gap-2 text-xs text-slate-600 font-semibold bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200/80">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>ویستا: پارک علم و فناوری سمنان | ثبت: ۵۸۳۳۰۲</span>
          </div>
        </nav>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-slate-100 space-y-1.5 bg-white">
            <p className="text-[11px] font-bold text-slate-400 px-2 pb-1">بخش‌های اصلی سامانه:</p>
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition text-right cursor-pointer ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      isActive ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

      </div>
    </header>
  );
};
