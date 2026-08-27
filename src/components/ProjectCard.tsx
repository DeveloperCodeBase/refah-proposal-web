import React from 'react';
import { motion } from 'motion/react';
import { 
  Percent, 
  Boxes, 
  TrendingUp, 
  GraduationCap, 
  Sparkles, 
  Eye, 
  LayoutDashboard, 
  ChevronLeft, 
  ShieldCheck,
  CheckCircle2,
  Clock,
  Coins,
  Play,
  Image as ImageIcon,
  Wand2
} from 'lucide-react';
import { ProjectDetail } from '../types';
import { getProjectVisualAssets, generateSvgPlaceholder } from '../utils/projectVisuals';
import { 
  getProjectHeaderImage, 
  getProjectImageMeta, 
  generateProjectSvgFallback 
} from '../utils/generateProjectImage';

interface ProjectCardProps {
  project: ProjectDetail;
  onSelect: (project: ProjectDetail) => void;
  onLaunchSimulator?: (project: ProjectDetail) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  onLaunchSimulator
}) => {
  const visualAsset = getProjectVisualAssets(project.id);
  const projectImageMeta = getProjectImageMeta(project.id);
  const cardImageUrl = getProjectHeaderImage(project.id, project.domain, projectImageMeta.category);

  const getIcon = () => {
    switch (project.iconName) {
      case 'Percent': return <Percent className="w-5 h-5 text-emerald-600" />;
      case 'Boxes': return <Boxes className="w-5 h-5 text-teal-600" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-emerald-700" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-teal-700" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-600" />;
      case 'Eye': return <Eye className="w-5 h-5 text-amber-600" />;
      default: return <LayoutDashboard className="w-5 h-5 text-emerald-600" />;
    }
  };

  const getDomainLabel = (d: string) => {
    switch (d) {
      case 'COM': return 'بازرگانی و فروش (COM)';
      case 'SCM': return 'زنجیره تامین و انبار (SCM)';
      case 'HRM': return 'سرمایه انسانی (HRM)';
      case 'ACADEMY': return 'پلتفرم آموزش ضمن خدمت و LMS';
      case 'OPS': return 'عملیات شعب و داده (OPS)';
      default: return d;
    }
  };

  return (
    <motion.div
      layout
      layoutId={`project-card-${project.id}`}
      initial={{ opacity: 0, y: 15, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -15, scale: 0.96 }}
      transition={{ 
        layout: { type: 'spring', stiffness: 350, damping: 28 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 }
      }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
      className={`relative bg-white border rounded-2xl p-5 flex flex-col justify-between transition-shadow duration-200 hover:shadow-lg group overflow-hidden ${
        project.isFlagship 
          ? 'border-emerald-300 ring-1 ring-emerald-500/20 shadow-xs' 
          : 'border-slate-200'
      }`}
    >
      {/* Top badges */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
              {getIcon()}
            </div>
            <div>
              <span className="font-black text-xs sm:text-sm text-emerald-700 tracking-wider">
                کد پروژه: {project.id}
              </span>
              <div className="text-[11px] text-slate-500 font-medium">
                {getDomainLabel(project.domain)}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {project.isFlagship && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
                پایلوت پرچم‌دار
              </span>
            )}
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              project.wave === 1 
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                : project.wave === 2
                ? 'bg-teal-50 text-teal-700 border border-teal-200'
                : 'bg-slate-100 text-slate-600 border border-slate-200'
            }`}>
              موج {project.wave}
            </span>
          </div>
        </div>

        {/* Thumbnail Preview with Fallback */}
        <div 
          onClick={() => onSelect(project)}
          className="relative h-28 w-full rounded-xl overflow-hidden mb-3 bg-slate-900 cursor-pointer group-hover:brightness-95 transition"
        >
          <img
            src={cardImageUrl}
            alt={projectImageMeta.altTextFa || project.title}
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = generateProjectSvgFallback(
                400,
                200,
                project.title,
                projectImageMeta.categoryFa,
                project.id
              );
            }}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-slate-900/80 backdrop-blur-xs px-2 py-0.5 rounded-md border border-slate-700 text-[10px] text-emerald-300 font-bold">
            <Wand2 className="w-3 h-3 text-amber-400" />
            <span>{projectImageMeta.categoryFa}</span>
          </div>

          <div className="absolute top-2 left-2 bg-emerald-600/90 text-white text-[10px] font-black px-1.5 py-0.5 rounded-md shadow-xs">
            {project.financials.benefitCostRatio}x BCR
          </div>
        </div>

        {/* Title and subtitle */}
        <h3 className="font-extrabold text-base text-slate-900 group-hover:text-emerald-700 transition">
          {project.title}
        </h3>
        <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed font-normal">
          {project.subtitle}
        </p>

        {/* Financial Highlights */}
        <div className="grid grid-cols-2 gap-2 my-3 bg-slate-50 rounded-xl p-2.5 border border-slate-100">
          <div>
            <div className="text-[10px] text-slate-500 flex items-center gap-1">
              <Coins className="w-3 h-3 text-amber-500" />
              <span>نسبت بازده (BCR)</span>
            </div>
            <div className="text-sm font-black text-emerald-700 mt-0.5">
              {project.financials.benefitCostRatio} برابر
            </div>
          </div>
          <div>
            <div className="text-[10px] text-slate-500 flex items-center gap-1">
              <Clock className="w-3 h-3 text-teal-600" />
              <span>دوره بازگشت سرمایه</span>
            </div>
            <div className="text-sm font-bold text-slate-800 mt-0.5">
              {project.financials.paybackMonths} ماه
            </div>
          </div>
        </div>

        {/* Core KPIs pill preview */}
        <div className="space-y-1.5 mb-4">
          <div className="text-[11px] font-bold text-slate-700">شاخص‌های کلیدی عملکرد (KPIs):</div>
          <div className="flex flex-wrap gap-1.5">
            {project.kpis.slice(0, 2).map((kpi) => (
              <span 
                key={kpi.code}
                className="text-[10px] px-2 py-0.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 font-medium"
                title={kpi.description}
              >
                <strong>{kpi.code}:</strong> {kpi.baseline} → <span className="text-emerald-700 font-bold">{kpi.target}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <button
          onClick={() => onSelect(project)}
          className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 text-slate-700 transition cursor-pointer border border-slate-200"
        >
          <span>مشاهده پروتوتایپ و معماری</span>
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        {(project.id === 'C2' || project.id === 'A3') && onLaunchSimulator && (
          <button
            onClick={() => onLaunchSimulator(project)}
            className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition cursor-pointer"
            title="اجرای تست زنده"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>تست زنده</span>
          </button>
        )}
      </div>
    </motion.div>
  );
};

