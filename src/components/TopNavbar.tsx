import React from 'react';
import { 
  Menu, 
  Store, 
  Bot, 
  Sparkles, 
  FileCheck2, 
  Building2,
  Award,
  Layers,
  ChevronLeft
} from 'lucide-react';
import { VISTA_COMPANY_INFO } from '../data/projects';

interface TopNavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPitchMode: () => void;
  onOpenMoU: () => void;
  onToggleMobileMenu: () => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenPitchMode,
  onOpenMoU,
  onToggleMobileMenu,
}) => {
  const getTabTitle = () => {
    switch (activeTab) {
      case 'cockpit':
        return 'داشبورد ارشد مدیرعامل و هیئت مدیره';
      case 'projects':
        return 'کاتالوگ جامع ۱۰ پروژه استراتژیک رفاه';
      case 'simulator':
        return 'شبیه‌ساز زنده، پیش‌بینی و سناریوهای What-If';
      case 'academy':
        return 'پلتفرم آموزش ضمن خدمت و میکرولرنینگ (پروژه A3)';
      case 'calculator':
        return 'توجیه اقتصادی و مدل مالی بازگشت سرمایه (ROI)';
      case 'advisor':
        return 'مشاور هوش مصنوعی و راهبردی هیئت مدیره';
      case 'vista':
        return 'شناسنامه و پروفایل فنی شرکت شبکه هوشمند ابتکار ویستا';
      default:
        return 'پلتفرم جامع پیشنهادات پروژه‌های هوشمند رفاه';
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs h-16 flex items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Right Area: Mobile Menu Button & Breadcrumb */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onToggleMobileMenu}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition cursor-pointer shrink-0"
            aria-label="باز کردن منوی ناوبری"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold truncate">
              <span>فروشگاه‌های زنجیره‌ای رفاه</span>
              <ChevronLeft className="w-3 h-3 text-slate-300 shrink-0" />
              <span className="text-emerald-700 font-bold">طرح تحول هوش مصنوعی</span>
            </div>
            <h1 className="text-sm sm:text-base font-black text-slate-900 truncate">
              {getTabTitle()}
            </h1>
          </div>
        </div>

        {/* Left Area: Quick Global Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Quick Advisor Trigger */}
          <button
            onClick={() => setActiveTab('advisor')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition border cursor-pointer ${
              activeTab === 'advisor'
                ? 'bg-teal-700 text-white border-teal-700 shadow-2xs'
                : 'bg-teal-50 text-teal-800 hover:bg-teal-100 border-teal-200'
            }`}
          >
            <Bot className="w-3.5 h-3.5 text-teal-600" />
            <span className="hidden sm:inline">مشاور AI</span>
          </button>

          {/* Quick Pitch Mode */}
          <button
            onClick={onOpenPitchMode}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 transition cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>اسلایدها</span>
          </button>

          {/* Quick MoU Draft */}
          <button
            onClick={onOpenMoU}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-black bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs shadow-emerald-600/30 transition cursor-pointer border border-emerald-600"
          >
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>تفاهم‌نامه پایلوت</span>
          </button>
        </div>

      </div>
    </header>
  );
};
