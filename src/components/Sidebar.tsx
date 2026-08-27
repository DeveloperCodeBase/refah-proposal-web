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
  ChevronRight,
  ShieldCheck,
  PanelLeftClose,
  PanelLeftOpen
} from 'lucide-react';
import { VISTA_COMPANY_INFO } from '../data/projects';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPitchMode: () => void;
  onOpenMoU: () => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  onOpenPitchMode,
  onOpenMoU,
  isCollapsed,
  setIsCollapsed,
  mobileOpen,
  setMobileOpen,
}) => {
  const mainNavItems = [
    { 
      id: 'cockpit', 
      label: 'داشبورد ارشد مدیرعامل', 
      shortLabel: 'داشبورد',
      icon: BarChart3, 
      badge: 'برج مراقبت',
      badgeColor: 'bg-emerald-100 text-emerald-800'
    },
    { 
      id: 'projects', 
      label: 'کاتالوگ جامع ۱۰ پروژه رفاه', 
      shortLabel: '۱۰ پروژه',
      icon: Layers, 
      badge: 'موج ۱، ۲، ۳',
      badgeColor: 'bg-teal-100 text-teal-800'
    },
    { 
      id: 'simulator', 
      label: 'شبیه‌ساز زنده و سناریوهای What-If', 
      shortLabel: 'شبیه‌ساز',
      icon: FlaskConical, 
      badge: 'تست زنده',
      badgeColor: 'bg-amber-100 text-amber-900'
    },
    { 
      id: 'academy', 
      label: 'پلتفرم آموزش ضمن خدمت (A3)', 
      shortLabel: 'آموزش ضمن خدمت',
      icon: GraduationCap, 
      badge: '۱۰ دوره',
      badgeColor: 'bg-indigo-100 text-indigo-800'
    },
    { 
      id: 'calculator', 
      label: 'توجیه اقتصادی و بازگشت سرمایه (ROI)', 
      shortLabel: 'تحلیل مالی',
      icon: Calculator, 
      badge: '۶٫۸۴x',
      badgeColor: 'bg-emerald-100 text-emerald-800'
    },
    { 
      id: 'advisor', 
      label: 'مشاور هوش مصنوعی هیئت مدیره', 
      shortLabel: 'مشاور AI',
      icon: Bot, 
      badge: 'Gemini',
      badgeColor: 'bg-sky-100 text-sky-800'
    },
    { 
      id: 'vista', 
      label: 'پروفایل شرکت ویستا و متدولوژی', 
      shortLabel: 'درباره ویستا',
      icon: Building2, 
      badge: 'پارک فناوری',
      badgeColor: 'bg-purple-100 text-purple-800'
    },
  ];

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside 
        id="app-sidebar"
        className={`fixed top-0 bottom-0 right-0 z-50 flex flex-col bg-white border-l border-slate-200/90 shadow-xl lg:shadow-xs transition-all duration-300 ease-in-out ${
          /* Mobile Drawer */
          mobileOpen ? 'translate-x-0 w-72 sm:w-80' : 'translate-x-full lg:translate-x-0'
        } ${
          /* Desktop Width (Expanded vs Collapsed) */
          isCollapsed ? 'lg:w-20' : 'lg:w-72'
        }`}
      >
        {/* Sidebar Header: Branding & Refah Logo */}
        <div className="h-16 px-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white">
          <div className="flex items-center gap-3 overflow-hidden">
            {/* Refah 3D Box Logo */}
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 flex items-center justify-center shadow-md shadow-emerald-700/25 text-white font-black text-lg tracking-tight border border-emerald-500/30 shrink-0">
              رفاه
            </div>
            
            {/* Brand Title (Hidden when collapsed on desktop) */}
            {(!isCollapsed || mobileOpen) && (
              <div className="truncate">
                <div className="font-black text-sm text-slate-900 leading-tight truncate">
                  تحول هوش مصنوعی رفاه
                </div>
                <div className="text-[10px] font-bold text-emerald-700 truncate">
                  همکاری استراتژیک با شرکت ویستا
                </div>
              </div>
            )}
          </div>

          {/* Desktop Collapse / Expand Toggle Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
            title={isCollapsed ? 'باز کردن سایدبار' : 'جمع کردن سایدبار'}
          >
            {isCollapsed ? <PanelLeftOpen className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
          </button>

          {/* Mobile Close Button */}
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden p-1.5 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition"
            aria-label="بستن منو"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Buttons: Pitch Deck & Pilot MoU */}
        {(!isCollapsed || mobileOpen) ? (
          <div className="p-3 border-b border-slate-100 bg-slate-50/70 space-y-2 shrink-0">
            <button
              onClick={() => {
                onOpenPitchMode();
                if (mobileOpen) setMobileOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-black bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 shadow-2xs transition cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>ارائه هیئت مدیره (اسلایدها)</span>
            </button>

            <button
              onClick={() => {
                onOpenMoU();
                if (mobileOpen) setMobileOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-black bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs shadow-emerald-600/30 transition cursor-pointer border border-emerald-600"
            >
              <FileCheck2 className="w-4 h-4 shrink-0" />
              <span>پیش‌نویس تفاهم‌نامه (MoU)</span>
            </button>
          </div>
        ) : (
          <div className="p-2 border-b border-slate-100 flex flex-col items-center gap-2 shrink-0">
            <button
              onClick={onOpenPitchMode}
              className="w-10 h-10 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 flex items-center justify-center transition cursor-pointer"
              title="ارائه هیئت مدیره"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
            </button>
            <button
              onClick={onOpenMoU}
              className="w-10 h-10 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs flex items-center justify-center transition cursor-pointer"
              title="پیش‌نویس تفاهم‌نامه (MoU)"
            >
              <FileCheck2 className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Navigation Items (Scrollable List) */}
        <nav 
          id="main-navigation"
          aria-label="بخش‌های اصلی سامانه"
          className="flex-1 overflow-y-auto p-3 space-y-1.5 custom-scrollbar"
        >
          {(!isCollapsed || mobileOpen) && (
            <p className="text-[10px] font-extrabold text-slate-400 px-2.5 py-1 tracking-wider uppercase">
              ماژول‌ها و ابزارهای راهبردی:
            </p>
          )}

          {mainNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                id={`nav-btn-${item.id}`}
                onClick={() => {
                  setActiveTab(item.id);
                  if (mobileOpen) setMobileOpen(false);
                }}
                className={`w-full flex items-center rounded-2xl transition-all duration-150 cursor-pointer select-none ${
                  isCollapsed && !mobileOpen
                    ? 'justify-center p-3'
                    : 'justify-between px-3.5 py-2.5'
                } ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/30 font-black'
                    : 'text-slate-600 hover:bg-emerald-50/80 hover:text-emerald-900 font-bold'
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  {(!isCollapsed || mobileOpen) && (
                    <span className="text-xs sm:text-sm truncate">
                      {item.label}
                    </span>
                  )}
                </div>

                {(!isCollapsed || mobileOpen) && item.badge && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold shrink-0 ${
                    isActive
                      ? 'bg-emerald-700/90 text-white border border-emerald-500/40'
                      : item.badgeColor || 'bg-slate-100 text-slate-600'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer: Vista Company & Support */}
        <div className="p-3 border-t border-slate-100 bg-slate-50/80 shrink-0 text-xs">
          {(!isCollapsed || mobileOpen) ? (
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="font-extrabold text-slate-800 text-[11px] truncate">
                  شرکت شبکه هوشمند ابتکار ویستا
                </span>
              </div>
              <p className="text-[10px] text-slate-500 leading-snug">
                پارک علم و فناوری سمنان | شماره ثبت: ۵۸۳۳۰۲
              </p>
            </div>
          ) : (
            <div className="flex justify-center" title="ویستا: پارک علم و فناوری سمنان">
              <Award className="w-5 h-5 text-amber-500" />
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
