import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  AlertTriangle, 
  Cpu, 
  Layers, 
  Calendar, 
  Calculator, 
  FolderGit2, 
  Coins, 
  ShieldCheck, 
  Sparkles, 
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Percent,
  TrendingUp,
  Boxes,
  GraduationCap,
  FileText,
  Play,
  Sliders,
  FileCheck2,
  Clock,
  ArrowRight,
  BookOpen,
  Image as ImageIcon,
  Copy,
  Check,
  ExternalLink,
  Wand2,
  BarChart3,
  Monitor,
  Smartphone,
  Radio,
  Eye
} from 'lucide-react';
import { ProjectDetail } from '../types';
import { ProjectScenarioInteractive } from './ProjectScenarioInteractive';
import { ProjectProposalExporter } from './ProjectProposalExporter';
import { getProjectVisualAssets, generateSvgPlaceholder, VisualMockupScreen } from '../utils/projectVisuals';
import { 
  getProjectHeaderImage, 
  getProjectImageMeta, 
  generateProjectSvgFallback 
} from '../utils/generateProjectImage';

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
  onLaunchSimulator?: (projectId: string) => void;
  onRequestPilotProposal?: (project: ProjectDetail) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onLaunchSimulator,
  onRequestPilotProposal
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'visuals' | 'scenario' | 'architecture' | 'financials' | 'pilot' | 'monorepo' | 'proposal'>('overview');
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);
  const [selectedMockup, setSelectedMockup] = useState<VisualMockupScreen | null>(null);
  const [showPromptDetails, setShowPromptDetails] = useState<boolean>(false);

  if (!project) return null;

  const visualAsset = getProjectVisualAssets(project.id);
  const projectImageMeta = getProjectImageMeta(project.id);
  const headerImageUrl = getProjectHeaderImage(project.id, project.domain, projectImageMeta.category);

  const handleCopyPrompt = (promptText: string, id: string) => {
    navigator.clipboard.writeText(promptText);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2500);
  };

  const getScreenTypeIcon = (type: string) => {
    switch (type) {
      case 'mobile_app':
        return <Smartphone className="w-3.5 h-3.5 text-cyan-600" />;
      case 'hardware_iot':
        return <Radio className="w-3.5 h-3.5 text-amber-600" />;
      case 'analytics':
        return <BarChart3 className="w-3.5 h-3.5 text-purple-600" />;
      default:
        return <Monitor className="w-3.5 h-3.5 text-emerald-600" />;
    }
  };

  const getScreenTypeLabel = (type: string) => {
    switch (type) {
      case 'mobile_app': return 'اپلیکیشن پرسنل';
      case 'hardware_iot': return 'سخت‌افزار و سنسور IoT';
      case 'analytics': return 'داشبورد تحلیلی';
      default: return 'داشبورد وب سازمانی';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-slate-900/60 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-emerald-600 flex items-center justify-center text-white font-black text-lg shadow-sm">
              {project.id}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black text-slate-900">
                  {project.title}
                </h2>
                <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                  موج {project.wave}
                </span>
                {project.isFlagship && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-black bg-amber-100 text-amber-900 border border-amber-300">
                    پایلوت اولویت ۱
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-600 font-medium mt-0.5">{project.subtitle}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center border border-slate-200 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Sub-Tabs */}
        <div className="px-6 py-2.5 bg-slate-100/70 border-b border-slate-200 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
          <button
            onClick={() => setActiveSubTab('overview')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 border ${
              activeSubTab === 'overview'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>صورت مسئله و راهکار</span>
          </button>

          <button
            onClick={() => setActiveSubTab('visuals')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 border ${
              activeSubTab === 'visuals'
                ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs ring-2 ring-emerald-400/30'
                : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border-emerald-300'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5 text-emerald-600" />
            <span>طرح بصری و پروتوتایپ UI</span>
            <span className="px-1.5 py-0.2 rounded text-[10px] font-extrabold bg-emerald-200 text-emerald-900">
              پرامپت AI
            </span>
          </button>

          <button
            onClick={() => setActiveSubTab('scenario')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 border ${
              activeSubTab === 'scenario'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200'
            }`}
          >
            <Sliders className="w-3.5 h-3.5 text-amber-500" />
            <span>سناریوی تعاملی و تست زنده</span>
          </button>

          <button
            onClick={() => setActiveSubTab('architecture')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 border ${
              activeSubTab === 'architecture'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>معماری فنی (ADR) و استک</span>
          </button>

          <button
            onClick={() => setActiveSubTab('financials')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 border ${
              activeSubTab === 'financials'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>توجیه اقتصادی و شاخص‌ها (KPIs)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('pilot')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 border ${
              activeSubTab === 'pilot'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>طرح اجرای پایلوت و اسپرینت‌ها</span>
          </button>

          <button
            onClick={() => setActiveSubTab('monorepo')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 border ${
              activeSubTab === 'monorepo'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200'
            }`}
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>ساختار مخزن کد و API</span>
          </button>

          <button
            onClick={() => setActiveSubTab('proposal')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 border ${
              activeSubTab === 'proposal'
                ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs ring-2 ring-emerald-400/40'
                : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border-emerald-300 font-extrabold'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
            <span>داکیومنت پروپوزال رسمی (RFP)</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-800">
          {/* TAB 1: OVERVIEW */}
          {activeSubTab === 'overview' && (
            <div className="space-y-6">
              {/* Visual Hero Banner with High-Resolution Mockup and Floating ROI Chips */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/30 shadow-xl bg-slate-950 text-white group">
                <div className="h-56 sm:h-64 w-full overflow-hidden relative">
                  <img
                    src={headerImageUrl}
                    alt={projectImageMeta.altTextFa || project.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = generateProjectSvgFallback(
                        1200,
                        500,
                        project.title,
                        projectImageMeta.categoryFa,
                        project.id
                      );
                    }}
                    className="w-full h-full object-cover object-center opacity-45 group-hover:scale-105 transition duration-700 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                  
                  {/* Category Pill and Corporate Sector Badge */}
                  <div className="absolute top-4 right-4 flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-xl text-xs font-black bg-emerald-500 text-slate-950 shadow-md">
                      {projectImageMeta.categoryFa}
                    </span>
                    <span className="px-2.5 py-1 rounded-xl text-[11px] font-mono text-emerald-300 bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md">
                      {projectImageMeta.category}
                    </span>
                  </div>

                  {/* Visual Prototype & Prompt Quick Action */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    {projectImageMeta.photographerCredit && (
                      <span className="hidden sm:inline-block px-2.5 py-1 rounded-xl text-[10px] font-medium bg-slate-900/60 text-slate-300 border border-white/10 backdrop-blur-sm">
                        تصویر: {projectImageMeta.photographerCredit.name} ({projectImageMeta.photographerCredit.source})
                      </span>
                    )}
                    <button
                      onClick={() => setActiveSubTab('visuals')}
                      className="px-3 py-1 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Wand2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>مشاهده پروتوتایپ‌های کامل ({visualAsset.mockupScreens.length} ماژول)</span>
                    </button>
                  </div>

                  {/* Title and Overlay Content */}
                  <div className="absolute bottom-4 right-4 left-4 flex flex-col justify-end">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-1">
                      <Sparkles className="w-4 h-4" />
                      <span>طرح مفهومی سامانه تجاری و معماری سازمانی رفاه</span>
                    </div>
                    <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-1 mt-1 font-medium">
                      {projectImageMeta.altTextFa}
                    </p>
                  </div>
                </div>

                {/* Bottom Visual ROI Potential Metrics Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-slate-800 bg-slate-900/90 border-t border-slate-800 p-3">
                  {visualAsset.roiHighlights.map((hl, idx) => (
                    <div key={idx} className="p-2.5 text-center">
                      <div className="text-[10px] text-slate-400 font-bold">{hl.label}</div>
                      <div className="text-base sm:text-lg font-black text-emerald-400 mt-0.5">{hl.value}</div>
                      <div className="text-[10px] text-slate-500 truncate">{hl.sublabel}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Executive summary banner */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 text-emerald-800 font-black text-sm mb-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>خلاصه مدیریتی برای مدیرعامل و هیئت مدیره رفاه</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {project.executiveSummary}
                </p>
              </div>

              {/* Problem vs Solution Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Problems */}
                <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-2 text-rose-800 font-extrabold text-sm border-b border-rose-200 pb-2.5">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>چالش‌ها و آسیب‌های وضع موجود</span>
                  </div>
                  <ul className="space-y-2">
                    {project.problemStatement.map((prob, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                        <span>{prob}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-sm border-b border-emerald-200 pb-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>راهکار و فناوری پیشنهادی ما</span>
                  </div>
                  <ul className="space-y-2">
                    {project.solutionOverview.map((sol, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Capabilities checklist */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <h3 className="font-extrabold text-sm text-slate-900 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-600" />
                  <span>قابلیت‌های کلیدی سامانه تحویلی به رفاه:</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 font-medium shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Us for this Project */}
              <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5">
                <h3 className="font-extrabold text-sm text-amber-900 mb-2.5">
                  مزیت رقابتی و اطمینان همکاری با شرکت ما در این پروژه:
                </h3>
                <ul className="space-y-2 text-xs text-slate-700 font-medium">
                  {project.strategicPitchWhyUs.map((pitch, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-700 font-black text-sm">✓</span>
                      <span>{pitch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: VISUAL PROTOTYPES & AI IMAGE PROMPTS */}
          {activeSubTab === 'visuals' && (
            <div className="space-y-6">
              {/* Header Box */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 relative overflow-hidden shadow-xl">
                <div className="relative z-10 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-2xl bg-emerald-500 flex items-center justify-center text-slate-950">
                        <Wand2 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-black text-white">پروتوتایپ‌های بصری و پرامپت‌های مهندسی هوش مصنوعی</h3>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                            Enterprise Ready
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">
                          مشخصات طراحی واسط کاربری، تصاویر شبیه‌سازی‌شده تجاری و دستورهای دقیق پرامپت جهت رندر در موتورهای هوش مصنوعی
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleCopyPrompt(visualAsset.heroImagePrompt, 'hero-prompt')}
                      className="px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition flex items-center gap-1.5 cursor-pointer shadow-md"
                    >
                      {copiedPromptId === 'hero-prompt' ? (
                        <>
                          <Check className="w-4 h-4 text-white" />
                          <span>پرامپت کپی شد!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-emerald-200" />
                          <span>کپی پرامپت انگلیسی هیرو (AI Prompt)</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* English Prompt Box with collapsible or direct code block */}
                  <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-bold mb-2">
                      <span className="flex items-center gap-1 text-emerald-400">
                        <Wand2 className="w-3.5 h-3.5" />
                        <span>Prompt Specification (Midjourney / Imagen 3 / DALL-E):</span>
                      </span>
                      <span className="font-mono text-slate-500">Aspect Ratio: {visualAsset.aspectRatio}</span>
                    </div>
                    <p className="text-xs font-mono text-emerald-300 leading-relaxed bg-slate-900 p-3 rounded-xl border border-slate-800/80 select-all" dir="ltr">
                      {visualAsset.heroImagePrompt}
                    </p>
                    <div className="mt-2 text-xs text-slate-300 font-medium">
                      <strong>توضیح فارسی پرامپت:</strong> {visualAsset.heroPromptFa}
                    </div>
                  </div>

                  {/* Style Tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-xs text-slate-400 font-bold">تگ‌های استایل دیزاین:</span>
                    {visualAsset.styleTags.map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-800 text-emerald-300 border border-slate-700">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3 Dedicated Interactive Mockup Cards */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-emerald-600" />
                    <span>ماژول‌ها و ویجت‌های واسط کاربری سامانه ({visualAsset.mockupScreens.length} نما):</span>
                  </h4>
                  <span className="text-xs text-slate-500 font-medium">برای بزرگنمایی روی هر کارت کلیک کنید</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {visualAsset.mockupScreens.map((mock) => (
                    <div
                      key={mock.id}
                      onClick={() => setSelectedMockup(mock)}
                      className="bg-white border border-slate-200 hover:border-emerald-400 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                    >
                      <div>
                        {/* Thumbnail Image */}
                        <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                          <img
                            src={mock.imageUrl}
                            alt={mock.title}
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = generateSvgPlaceholder(
                                600,
                                350,
                                mock.title,
                                mock.subtitle,
                                mock.badge
                              );
                            }}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                          
                          {/* Badge */}
                          <div className="absolute top-2.5 right-2.5">
                            <span className="px-2 py-0.5 rounded-lg text-[10px] font-black bg-emerald-600 text-white shadow-xs">
                              {mock.badge}
                            </span>
                          </div>

                          {/* Screen Type */}
                          <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 bg-slate-900/80 px-2 py-1 rounded-lg backdrop-blur-xs text-[10px] text-slate-200 font-bold border border-slate-700">
                            {getScreenTypeIcon(mock.type)}
                            <span>{getScreenTypeLabel(mock.type)}</span>
                          </div>

                          {/* ROI Pill */}
                          <div className="absolute bottom-2.5 left-2.5">
                            <span className="px-2 py-0.5 rounded-lg text-[10px] font-extrabold bg-amber-400/90 text-slate-950 shadow-xs">
                              {mock.roiTag}
                            </span>
                          </div>
                        </div>

                        {/* Text Details */}
                        <div className="p-4 space-y-2">
                          <h5 className="font-extrabold text-sm text-slate-900 group-hover:text-emerald-700 transition">
                            {mock.title}
                          </h5>
                          <div className="text-[10px] font-mono text-emerald-800 font-bold">
                            {mock.subtitle}
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed font-normal">
                            {mock.description}
                          </p>
                        </div>
                      </div>

                      {/* Card Footer with Copy Prompt Button */}
                      <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopyPrompt(mock.prompt, mock.id);
                          }}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 hover:text-emerald-700 transition"
                        >
                          {copiedPromptId === mock.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-700">کپی شد!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-slate-500" />
                              <span>کپی پرامپت این نما</span>
                            </>
                          )}
                        </button>

                        <span className="text-[11px] text-emerald-700 font-extrabold flex items-center gap-1 group-hover:translate-x-[-3px] transition">
                          <span>مشاهده جزییات</span>
                          <Eye className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Architecture Flow Diagram */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-black text-xs text-slate-900 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-emerald-600" />
                    <span>{visualAsset.architectureDiagramConcept.title}</span>
                  </h4>
                  <span className="text-[11px] text-emerald-700 font-bold">اتصال زنده ماژول‌ها</span>
                </div>
                <p className="text-xs text-slate-600 font-medium">
                  {visualAsset.architectureDiagramConcept.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
                  {visualAsset.architectureDiagramConcept.nodes.map((node, i) => (
                    <div key={i} className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-slate-400 font-bold">{node.type}</div>
                        <div className="text-xs font-bold text-slate-900 mt-0.5">{node.name}</div>
                      </div>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100 animate-pulse" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: INTERACTIVE SCENARIOS */}
          {activeSubTab === 'scenario' && (
            <ProjectScenarioInteractive projectId={project.id} />
          )}

          {/* TAB 4: ARCHITECTURE & ADR */}
          {activeSubTab === 'architecture' && (
            <div className="space-y-6">
              {/* ADR Banner */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-emerald-800 px-3 py-1 rounded-lg bg-emerald-100 border border-emerald-200">
                    {project.architecture.adrTitle}
                  </span>
                  <span className="text-[11px] text-slate-500 font-bold">سند تصمیم‌گیری معماری (ADR)</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed pt-2 font-medium">
                  {project.architecture.adrText}
                </p>
              </div>

              {/* Data Flow Pipeline */}
              <div className="space-y-3">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                  جریان داده و فرآیند پردازش (Data Flow Pipeline):
                </h3>
                <div className="space-y-2">
                  {project.architecture.dataFlow.map((step, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 rounded-xl p-3.5 text-xs text-slate-800 flex items-start gap-3 shadow-xs font-medium">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="mt-0.5">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Layers */}
              <div className="space-y-3">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                  لایه‌های نرم‌افزاری و ماژول‌ها:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  {project.architecture.layers.map((layer, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2.5">
                      <div className="text-xs font-extrabold text-emerald-800">{layer.layer}</div>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-normal">{layer.description}</p>
                      <div className="pt-2 border-t border-slate-200">
                        <div className="text-[10px] text-slate-500 font-bold mb-1">کامپوننت‌ها:</div>
                        <div className="flex flex-wrap gap-1">
                          {layer.components.map((c, i) => (
                            <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-white text-slate-700 border border-slate-200 font-medium">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-500 font-bold mb-1">فناوری‌ها:</div>
                        <div className="flex flex-wrap gap-1">
                          {layer.techStack.map((t, i) => (
                            <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Stack Table */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3.5">
                <h3 className="font-black text-xs text-slate-900">استک پیشنهادی استاندارد سازمانی (Recommended Tech Stack):</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-slate-500 text-[10px] block font-bold">بک‌اند و API:</span>
                    <span className="font-mono text-emerald-800 font-bold">{project.architecture.recommendedStack.backend}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-slate-500 text-[10px] block font-bold">پایگاه داده:</span>
                    <span className="font-mono text-teal-800 font-bold">{project.architecture.recommendedStack.database}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-slate-500 text-[10px] block font-bold">فرانت‌اند و داشبورد:</span>
                    <span className="font-mono text-cyan-800 font-bold">{project.architecture.recommendedStack.frontend}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-slate-500 text-[10px] block font-bold">موتور هوش مصنوعی:</span>
                    <span className="font-mono text-purple-800 font-bold">{project.architecture.recommendedStack.aiMlEngine}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs sm:col-span-2">
                    <span className="text-slate-500 text-[10px] block font-bold">خط‌لوله پردازش داده:</span>
                    <span className="font-mono text-amber-800 font-bold">{project.architecture.recommendedStack.dataPipeline}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 pt-1 font-medium">
                  <strong>دلیل انتخاب استک:</strong> {project.architecture.recommendedStack.reasoning}
                </p>
              </div>
            </div>
          )}

          {/* TAB 5: FINANCIALS & KPIS */}
          {activeSubTab === 'financials' && (
            <div className="space-y-6">
              {/* Financial Metrics Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
                  <div className="text-[11px] text-slate-500 font-bold">نسبت منفعت به هزینه</div>
                  <div className="text-2xl font-black text-emerald-700 mt-1">{project.financials.benefitCostRatio} برابر</div>
                  <div className="text-[10px] text-slate-400">BCR Index</div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
                  <div className="text-[11px] text-slate-500 font-bold">منفعت سالانه برآوردی</div>
                  <div className="text-2xl font-black text-teal-700 mt-1">{project.financials.estimatedAnnualBenefitBillionToman} م.ت</div>
                  <div className="text-[10px] text-slate-400">میلیارد تومان سود خالص</div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
                  <div className="text-[11px] text-slate-500 font-bold">هزینه فاز پایلوت</div>
                  <div className="text-2xl font-black text-slate-800 mt-1">{project.financials.pilotCostMillionToman} م.ت</div>
                  <div className="text-[10px] text-slate-400">میلیون تومان</div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
                  <div className="text-[11px] text-slate-500 font-bold">دوره بازگشت سرمایه</div>
                  <div className="text-2xl font-black text-amber-700 mt-1">{project.financials.paybackMonths} ماه</div>
                  <div className="text-[10px] text-slate-400">Payback Period</div>
                </div>
              </div>

              {/* Exact Formula Breakdown */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3.5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-emerald-600" />
                    <span>فرمول دقیق منفعت مالی سند رفاه هوشمند:</span>
                  </h3>
                  <span className="font-mono text-xs text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-lg border border-emerald-200 font-bold">
                    منفعت = پایه اثرپذیر × نرخ بهبود × ضریب پوشش × ضریب اسناد
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-slate-500 block text-[11px] font-bold">۱. پایه اثرپذیر (Affected Base):</span>
                    <span className="text-slate-900 font-extrabold mt-1 block">{project.financials.formulaBreakdown.affectedBase}</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-slate-500 block text-[11px] font-bold">۲. نرخ بهبود مورد انتظار (Improvement Rate):</span>
                    <span className="text-slate-900 font-extrabold mt-1 block">{project.financials.formulaBreakdown.improvementRate}</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-slate-500 block text-[11px] font-bold">۳. ضریب پوشش شعب و کالاها (Coverage Ratio):</span>
                    <span className="text-slate-900 font-extrabold mt-1 block">{project.financials.formulaBreakdown.coverageRatio}</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-slate-500 block text-[11px] font-bold">۴. ضریب اسناد به هوش مصنوعی (Attribution Ratio):</span>
                    <span className="text-slate-900 font-extrabold mt-1 block">{project.financials.formulaBreakdown.attributionRatio}</span>
                  </div>
                </div>
              </div>

              {/* KPI Indicators Table */}
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <span className="font-black text-xs text-slate-900">فرهنگ شاخص‌های عملکردی (KPI Catalog):</span>
                  <span className="text-[11px] text-slate-500 font-bold">دامنه تخصصی پروژه</span>
                </div>

                <div className="divide-y divide-slate-100">
                  {project.kpis.map((kpi) => (
                    <div key={kpi.code} className="p-4 hover:bg-slate-50/60 transition">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-black px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                            {kpi.code}
                          </span>
                          <span className="font-bold text-xs text-slate-900">{kpi.title}</span>
                          <span className="text-[10px] text-slate-400">({kpi.unit})</span>
                        </div>

                        <div className="flex items-center gap-4 text-xs font-semibold">
                          <span className="text-slate-500">خط مبنای فعلی: <strong className="text-slate-800">{kpi.baseline}</strong></span>
                          <span className="text-emerald-700">تارگت پس از پایلوت: <strong className="text-emerald-800 font-black">{kpi.target}</strong></span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 mt-1.5 font-normal">{kpi.description}</p>
                      {kpi.formula && (
                        <div className="text-[11px] font-mono text-teal-800 font-semibold mt-1">
                          فرمول سنجش: {kpi.formula}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: PILOT PLAN & SPRINTS */}
          {activeSubTab === 'pilot' && (
            <div className="space-y-6">
              {/* Pilot Scope Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2">
                  <div className="text-xs font-black text-emerald-800">جامعه هدف شعب پایلوت:</div>
                  <p className="text-xs text-slate-700 font-medium">{project.pilotPlan.targetBranches}</p>
                  <div className="text-xs font-bold text-slate-500 pt-2">مدت زمان پایلوت:</div>
                  <p className="text-xs text-emerald-700 font-black">{project.pilotPlan.durationWeeks} هفته (۲ ماه تقویمی)</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2">
                  <div className="text-xs font-black text-teal-800">متدولوژی سنجش و گروه کنترل/آزمون:</div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">{project.pilotPlan.controlGroupMethod}</p>
                </div>
              </div>

              {/* Sprints Timeline */}
              <div className="space-y-3">
                <h3 className="font-black text-xs text-slate-900 uppercase tracking-wider">
                  مراحل اجرایی اسپرینت به اسپرینت (Execution Sprints):
                </h3>
                <div className="space-y-3">
                  {project.pilotPlan.sprints.map((sp) => (
                    <div key={sp.sprint} className="bg-white border border-slate-200 rounded-2xl p-4.5 space-y-2.5 shadow-xs">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white font-black text-xs flex items-center justify-center">
                            S{sp.sprint}
                          </span>
                          <span className="font-extrabold text-xs text-slate-900">{sp.title}</span>
                        </div>
                        <span className="text-[11px] font-bold text-slate-500 px-2 py-0.5 rounded-lg bg-slate-100 border border-slate-200">
                          {sp.durationWeeks} هفته
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div>
                          <span className="text-[10px] text-slate-500 font-bold block mb-1">اقدامات و خروجی‌ها (Deliverables):</span>
                          <ul className="space-y-1">
                            {sp.deliverables.map((del, i) => (
                              <li key={i} className="flex items-center gap-1.5 text-slate-700 text-[11px] font-medium">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                <span>{del}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 self-start">
                          <span className="text-[10px] text-amber-800 block font-bold">مایلستون نهایی این اسپرینت:</span>
                          <span className="text-slate-800 text-xs font-semibold mt-0.5 block">{sp.milestone}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Acceptance Criteria */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 space-y-2">
                <h3 className="font-extrabold text-xs text-emerald-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>معیارهای شفاف پذیرش پایلوت توسط مدیرعامل (Acceptance Criteria):</span>
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  {project.pilotPlan.acceptanceCriteria.map((crit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-700 font-black">✓</span>
                      <span>{crit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 7: MONOREPO & API */}
          {activeSubTab === 'monorepo' && (
            <div className="space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2">
                <h3 className="font-black text-xs text-slate-900 flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4 text-emerald-600" />
                  <span>ساختار استاندارد مخزن کد پروژه (Production Monorepo Blueprint):</span>
                </h3>
                <pre className="bg-slate-900 p-4 rounded-xl text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed border border-slate-800" dir="ltr">
                  {project.monorepoStructure.join('\n')}
                </pre>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <h3 className="font-black text-xs text-slate-900">الزامات کیفی و توسعه پایدار (Production Grade Guidelines):</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <span className="font-bold text-slate-900 block mb-1">۱. مستندسازی کامل API:</span>
                    <p className="text-slate-600 text-[11px] font-medium">پوشش ۱۰۰٪ اندپوینت‌ها با استاندارد OpenAPI/Swagger جهت اتصال امن به ERP و دیتابیس رفاه.</p>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <span className="font-bold text-slate-900 block mb-1">۲. تست‌های واحد و اتوماسیون مالی:</span>
                    <p className="text-slate-600 text-[11px] font-medium">تست خودکار منطق محاسبه بازدهی پروموشن، کانیبالیزاسیون و فرمول‌های منفعت بدون هیچ داده هاردکد.</p>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <span className="font-bold text-slate-900 block mb-1">۳. مدیریت محیط‌های ایزوله:</span>
                    <p className="text-slate-600 text-[11px] font-medium">تفکیک کامل متغیرهای کانفیگ (.env)، لاگ‌گیری ساختاریافته (Structured Logging) و پایش سلامت با Prometheus.</p>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <span className="font-bold text-slate-900 block mb-1">۴. امنیت و حفظ محرمانگی:</span>
                    <p className="text-slate-600 text-[11px] font-medium">ایزولاسیون کامل داده‌های مالی و مشتریان رفاه در سرورهای محلی اختصاصی با رمزنگاری TLS/AES.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: OFFICIAL PROPOSAL DOCUMENT (RFP) */}
          {activeSubTab === 'proposal' && (
            <ProjectProposalExporter project={project} />
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600 font-bold">آماده آغاز مراحل فاز پایلوت در رفاه</span>
          </div>

          <div className="flex items-center gap-2">
            {project.id === 'C2' && onLaunchSimulator && (
              <button
                onClick={() => {
                  onClose();
                  onLaunchSimulator(project.id);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-white hover:bg-slate-100 text-teal-800 border border-teal-300 transition cursor-pointer shadow-xs"
              >
                <Play className="w-3.5 h-3.5" />
                <span>اجرای شبیه‌ساز زنده تخفیف C2</span>
              </button>
            )}

            {onRequestPilotProposal && (
              <button
                onClick={() => onRequestPilotProposal(project)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition cursor-pointer"
              >
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>ثبت تفاهم‌نامه پایلوت این پروژه</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 hover:bg-slate-200 border border-slate-200 transition cursor-pointer"
            >
              بستن
            </button>
          </div>
        </div>

        {/* Lightbox / Fullscreen Mockup Detail Modal */}
        {selectedMockup && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
              {/* Header */}
              <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-white">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                    {getScreenTypeIcon(selectedMockup.type)}
                  </div>
                  <div>
                    <h3 className="text-base font-black">{selectedMockup.title}</h3>
                    <p className="text-xs text-slate-400 font-mono">{selectedMockup.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMockup(null)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Large Image View */}
              <div className="p-4 overflow-y-auto space-y-4">
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 max-h-[50vh] flex items-center justify-center">
                  <img
                    src={selectedMockup.imageUrl}
                    alt={selectedMockup.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = generateSvgPlaceholder(
                        800,
                        450,
                        selectedMockup.title,
                        selectedMockup.subtitle,
                        selectedMockup.badge
                      );
                    }}
                    className="w-full h-auto object-cover max-h-[48vh]"
                  />
                  <div className="absolute bottom-3 right-3 bg-emerald-500 text-slate-950 px-3 py-1 rounded-xl text-xs font-black shadow-md">
                    {selectedMockup.roiTag}
                  </div>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400">توضیحات کاربردی ماژول در رفاه:</span>
                    <span className="text-xs text-slate-400">{selectedMockup.badge}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {selectedMockup.description}
                  </p>

                  <div className="pt-2 border-t border-slate-800">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-bold text-slate-400">AI Prompt Specification:</span>
                      <button
                        onClick={() => handleCopyPrompt(selectedMockup.prompt, `modal-${selectedMockup.id}`)}
                        className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
                      >
                        {copiedPromptId === `modal-${selectedMockup.id}` ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>کپی شد</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>کپی پرامپت</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="text-[11px] font-mono text-emerald-300 bg-slate-900 p-2.5 rounded-xl border border-slate-800 overflow-x-auto whitespace-pre-wrap select-all" dir="ltr">
                      {selectedMockup.prompt}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedMockup(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white transition cursor-pointer"
                >
                  بستن پیش‌نمایش
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
