import React, { useState } from 'react';
import { 
  Percent, 
  Boxes, 
  TrendingUp, 
  GraduationCap, 
  Sparkles, 
  Eye, 
  LayoutDashboard,
  ShieldAlert,
  Truck,
  UserCheck,
  Play,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Flame,
  ArrowRight,
  TrendingDown,
  Clock,
  Coins,
  Send,
  Camera,
  Layers,
  Sliders,
  Award,
  Zap,
  ShoppingBag,
  MapPin,
  FileSpreadsheet,
  FileCheck2,
  Users,
  Search,
  Filter,
  Check,
  ChevronRight
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  AreaChart, 
  Area 
} from 'recharts';
import { REFAH_IMAGES } from '../assets/images';
import { Phase1PromotionOptimizer } from './Phase1PromotionOptimizer';
import { Phase2GhostStockOptimizer } from './Phase2GhostStockOptimizer';
import { Phase3DemandForecastOptimizer } from './Phase3DemandForecastOptimizer';
import { Phase4AcademySimulator } from './Phase4AcademySimulator';
import { Phase5CrmPersonalizationOptimizer } from './Phase5CrmPersonalizationOptimizer';
import { Phase6VisionShelfOptimizer } from './Phase6VisionShelfOptimizer';
import { Phase7HrScreeningOptimizer } from './Phase7HrScreeningOptimizer';
import { Phase8ExecutiveTowerOptimizer } from './Phase8ExecutiveTowerOptimizer';
import { Phase9LossPreventionOptimizer } from './Phase9LossPreventionOptimizer';
import { Phase10FleetLogisticsOptimizer } from './Phase10FleetLogisticsOptimizer';

interface ProjectScenarioInteractiveProps {
  projectId: string;
  onSelectProject?: (id: string) => void;
}

export const ProjectScenarioInteractive: React.FC<ProjectScenarioInteractiveProps> = ({ 
  projectId: initialProjectId,
  onSelectProject
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(initialProjectId || 'C2');

  // Update if prop changes
  React.useEffect(() => {
    if (initialProjectId) {
      setSelectedProjectId(initialProjectId);
    }
  }, [initialProjectId]);

  const handleProjectChange = (id: string) => {
    setSelectedProjectId(id);
    if (onSelectProject) {
      onSelectProject(id);
    }
  };

  const projectsList = [
    { id: 'C2', name: 'C2 - بهینه‌سازی پروموشن و تخفیف', domain: 'بازرگانی', wave: 1, icon: Percent },
    { id: 'B5', name: 'B5 - انبارگردانی چرخه‌ای و Ghost Stock', domain: 'زنجیره تامین', wave: 1, icon: Boxes },
    { id: 'B1', name: 'B1 - پیش‌بینی تقاضای زنجیره تامین', domain: 'زنجیره تامین', wave: 1, icon: TrendingUp },
    { id: 'A3', name: 'A3 - پلتفرم آموزش ضمن خدمت و مربی پرسنل', domain: 'منابع انسانی', wave: 1, icon: GraduationCap },
    { id: 'C1', name: 'C1 - موتور شخصی‌سازی سبد خرید CRM', domain: 'بازرگانی', wave: 2, icon: Sparkles },
    { id: 'C3', name: 'C3 - بینایی ماشین و پایش قفسه/صف', domain: 'عملیات شعب', wave: 2, icon: Eye },
    { id: 'A1', name: 'A1 - غربالگری رزومه و شیفت‌بندی HR', domain: 'منابع انسانی', wave: 2, icon: UserCheck },
    { id: 'D1', name: 'D1 - برج مراقبت داده مدیرعامل', domain: 'مدیریت ارشد', wave: 3, icon: LayoutDashboard },
    { id: 'D2', name: 'D2 - پایش و پیشگیری از تقلب و خسارت', domain: 'حراست و مالی', wave: 3, icon: ShieldAlert },
    { id: 'SCM-2', name: 'SCM-2 - بهینه‌سازی ناوگان پخش', domain: 'لجستیک', wave: 3, icon: Truck },
  ];

  return (
    <div className="space-y-6">
      
      {/* Top Banner & Project Selector */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span>محیط تست عملیاتی و شبیه‌سازی زنده هوش مصنوعی</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
              آزمایشگاه سناریوهای تعاملی رفاه هوشمند
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              تست بلادرنگ الگوریتم‌ها و خروجی‌های هوش مصنوعی برای تک‌تک ۱۰ پروژه سند تحول
            </p>
          </div>

          <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-2xl border border-slate-200">
            <span className="font-bold text-slate-800">پروژه فعال در شبیه‌ساز:</span>
            <span className="text-emerald-700 font-extrabold mr-1">
              {projectsList.find(p => p.id === selectedProjectId)?.name}
            </span>
          </div>
        </div>

        {/* Project Selection Tabs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-4">
          {projectsList.map((p) => {
            const Icon = p.icon;
            const isSelected = selectedProjectId === p.id;
            return (
              <button
                key={p.id}
                onClick={() => handleProjectChange(p.id)}
                className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-bold transition text-right cursor-pointer border ${
                  isSelected
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-emerald-600'}`} />
                <span className="truncate">{p.id}</span>
                <span className={`text-[10px] mr-auto px-1.5 py-0.5 rounded font-mono ${
                  isSelected ? 'bg-emerald-700 text-emerald-100' : 'bg-slate-200 text-slate-600'
                }`}>
                  موج {p.wave}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. SCENARIO C2: Promotion & Price Elasticity (Phase 1 Deep Dive) */}
      {/* ========================================================================= */}
      {selectedProjectId === 'C2' && (
        <Phase1PromotionOptimizer />
      )}

      {/* ========================================================================= */}
      {/* 2. SCENARIO B5: Cycle Counting & Ghost Stock (Phase 2 Deep Dive) */}
      {/* ========================================================================= */}
      {selectedProjectId === 'B5' && (
        <Phase2GhostStockOptimizer />
      )}

      {/* ========================================================================= */}
      {/* 3. SCENARIO B1: Supply Chain Demand Forecast (Phase 3 Deep Dive) */}
      {/* ========================================================================= */}
      {selectedProjectId === 'B1' && (
        <Phase3DemandForecastOptimizer />
      )}

      {/* ========================================================================= */}
      {/* 4. SCENARIO A3: Smart Academy & Roleplay AI (Phase 4 Deep Dive) */}
      {/* ========================================================================= */}
      {selectedProjectId === 'A3' && (
        <Phase4AcademySimulator />
      )}

      {/* ========================================================================= */}
      {/* 5. SCENARIO C1: Personalized Smart Basket & CRM (Phase 5 Deep Dive) */}
      {/* ========================================================================= */}
      {selectedProjectId === 'C1' && (
        <Phase5CrmPersonalizationOptimizer />
      )}

      {/* ========================================================================= */}
      {/* 6. SCENARIO C3: Computer Vision & Shelf Out-of-Stock (Phase 6 Deep Dive) */}
      {/* ========================================================================= */}
      {selectedProjectId === 'C3' && (
        <Phase6VisionShelfOptimizer />
      )}

      {/* ========================================================================= */}
      {/* 7. SCENARIO A1: Smart HR Recruitment & Shift AI (Phase 7 Deep Dive) */}
      {/* ========================================================================= */}
      {selectedProjectId === 'A1' && (
        <Phase7HrScreeningOptimizer />
      )}

      {/* ========================================================================= */}
      {/* 8. SCENARIO D1: CEO Executive Control Tower (Phase 8 Deep Dive) */}
      {/* ========================================================================= */}
      {selectedProjectId === 'D1' && (
        <Phase8ExecutiveTowerOptimizer />
      )}

      {/* ========================================================================= */}
      {/* 9. SCENARIO D2: Fraud Loss Prevention (Phase 9 Deep Dive) */}
      {/* ========================================================================= */}
      {selectedProjectId === 'D2' && (
        <Phase9LossPreventionOptimizer />
      )}

      {/* ========================================================================= */}
      {/* 10. SCENARIO SCM-2: Fleet Route & Dispatch AI (Phase 10 Deep Dive) */}
      {/* ========================================================================= */}
      {selectedProjectId === 'SCM-2' && (
        <Phase10FleetLogisticsOptimizer />
      )}

    </div>
  );
};
