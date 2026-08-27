import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Printer, 
  CheckCircle2, 
  Building2, 
  Calendar, 
  Coins, 
  ShieldCheck, 
  Sparkles, 
  Copy, 
  Check, 
  Layers, 
  Cpu, 
  FolderGit2, 
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  Loader2
} from 'lucide-react';
import { ProjectDetail } from '../types';
import { VISTA_COMPANY_INFO } from '../data/projects';
import { downloadPdfFromElement, printElementDirectly } from '../utils/pdfExport';

interface ProjectProposalExporterProps {
  project: ProjectDetail;
  onClose?: () => void;
}

export const ProjectProposalExporter: React.FC<ProjectProposalExporterProps> = ({
  project,
  onClose
}) => {
  const [copied, setCopied] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handlePrint = () => {
    printElementDirectly(
      'official-proposal-document',
      `پروپوزال رسمی پروژه ${project.id} - ${project.title}`
    );
  };

  const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true);
    const success = await downloadPdfFromElement('official-proposal-document', {
      fileName: `Refah-Proposal-${project.id}-${project.title.replace(/\s+/g, '-')}.pdf`,
      documentTitle: `پروپوزال رسمی پروژه ${project.id} رفاه`,
      footerText: `طرح تحول هوش مصنوعی و دیجیتال رفاه • پروژه ${project.id} (${project.title})`
    });
    setIsGeneratingPdf(false);
    if (success) {
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }
  };

  const handleCopyText = () => {
    const text = `
پروپوزال رسمی و طرح اجرایی استقرار سامانه: ${project.title}
کد پروژه: ${project.id} | موج استقرار: موج ${project.wave}
مجری طرح: شرکت ${VISTA_COMPANY_INFO.nameFa} (${VISTA_COMPANY_INFO.brandShort})
کارفرما: شرکت فروشگاه‌های زنجیره‌ای رفاه

۱. خلاصه سیاستی و اجرایی:
${project.executiveSummary}

۲. چالش‌ها و آسیب‌های وضع موجود:
${project.problemStatement.map((p, i) => `${i + 1}. ${p}`).join('\n')}

۳. راهکار و فناوری پیشنهادی:
${project.solutionOverview.map((s, i) => `${i + 1}. ${s}`).join('\n')}

۴. توجیه اقتصادی و سودآوری:
- نسبت منفعت به هزینه: ${project.financials.benefitCostRatio} برابر
- منفعت خالص سالانه: ${project.financials.estimatedAnnualBenefitBillionToman} میلیارد تومان
- هزینه اجرای پایلوت: ${project.financials.pilotCostMillionToman} میلیون تومان
- دوره بازگشت سرمایه: ${project.financials.paybackMonths} ماه

۵. معماری فنی (ADR):
${project.architecture.adrTitle}
${project.architecture.adrText}

۶. طرح اجرای پایلوت:
- محدوده شعب: ${project.pilotPlan.targetBranches}
- متدولوژی: ${project.pilotPlan.controlGroupMethod}
- مدت زمان: ${project.pilotPlan.durationWeeks} هفته

شرکت ${VISTA_COMPANY_INFO.nameFa} | شماره ثبت: ${VISTA_COMPANY_INFO.registrationNumber}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Action Bar */}
      <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-lg no-print">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 font-black">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                فرمت سند استاندارد RFP / Proposal
              </span>
              <span className="text-xs text-slate-400">کد: PROP-REFAH-{project.id}</span>
            </div>
            <h3 className="text-sm sm:text-base font-black text-white mt-0.5">
              داکیومنت پروپوزال رسمی و طرح اجرایی: {project.title}
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleCopyText}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5 border border-slate-700 transition cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'کپی شد' : 'کپی متن پروپوزال'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white flex items-center gap-1.5 border border-slate-600 transition cursor-pointer shadow-sm"
          >
            <Printer className="w-3.5 h-3.5 text-emerald-400" />
            <span>چاپ سند رسمی</span>
          </button>

          <button
            onClick={handleDownloadPdf}
            disabled={isGeneratingPdf}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 text-white flex items-center gap-1.5 shadow-md shadow-emerald-900/40 transition cursor-pointer"
          >
            {isGeneratingPdf ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
                <span>در حال تولید PDF...</span>
              </>
            ) : downloadSuccess ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-300" />
                <span>PDF دانلود شد</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>دانلود فایل PDF</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Official Proposal Document Body (Printable Paper Style) */}
      <div 
        id="official-proposal-document" 
        className="printable-document bg-white border border-slate-300 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 text-slate-800 font-['Vazirmatn',sans-serif] print:border-none print:shadow-none print:p-0"
      >
        
        {/* Document Official Header */}
        <div className="print-break-avoid border-b-2 border-slate-900 pb-6 flex flex-wrap items-center justify-between gap-6">
          <div>
            <div className="text-xs font-extrabold text-emerald-700 tracking-wider mb-1">
              پیشنهاد فنی، مالی و راهکار تحول دیجیتال رفاه
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-950">
              طرح اجرایی و پروپوزال پروژه {project.id}: {project.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
              {project.subtitle}
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 text-xs space-y-1 text-slate-600 min-w-[200px]">
            <div><strong className="text-slate-900">مجری طرح:</strong> {VISTA_COMPANY_INFO.nameFa}</div>
            <div><strong className="text-slate-900">کارفرما:</strong> شرکت فروشگاه‌های زنجیره‌ای رفاه</div>
            <div><strong className="text-slate-900">شماره ثبت مجری:</strong> {VISTA_COMPANY_INFO.registrationNumber}</div>
            <div><strong className="text-slate-900">موج سند رفاه:</strong> موج {project.wave} (اولویت {project.isFlagship ? '۱ ویژه' : 'استاندارد'})</div>
          </div>
        </div>

        {/* 1. Executive Summary */}
        <section className="print-break-avoid space-y-3">
          <div className="flex items-center gap-2 text-emerald-800 font-black text-sm border-r-4 border-emerald-600 pr-2.5">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>۱. خلاصه مدیریتی و ارزش‌آفرینی برای هیئت مدیره رفاه</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            {project.executiveSummary}
          </div>
        </section>

        {/* 2. Problem Statement & Solution */}
        <section className="print-break-avoid space-y-4">
          <div className="flex items-center gap-2 text-emerald-800 font-black text-sm border-r-4 border-emerald-600 pr-2.5">
            <Layers className="w-4 h-4 text-emerald-600" />
            <span>۲. آسیب‌شناسی وضع موجود و معماری راهکار پیشنهادی</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-4 space-y-2.5">
              <div className="text-xs font-black text-rose-900 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                <span>چالش‌های وضع موجود در شعب رفاه:</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                {project.problemStatement.map((prob, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 space-y-2.5">
              <div className="text-xs font-black text-emerald-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>شرح راهکار و فناوری مهندسی‌شده ویستا:</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                {project.solutionOverview.map((sol, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Financial Justification & Economic Formulas */}
        <section className="print-break-avoid space-y-4">
          <div className="flex items-center gap-2 text-emerald-800 font-black text-sm border-r-4 border-emerald-600 pr-2.5">
            <Coins className="w-4 h-4 text-emerald-600" />
            <span>۳. توجیه اقتصادی، مدل مالی و فرمول رسمی محاسبه سود و زیان</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-center">
              <span className="text-[11px] text-slate-500 font-bold block">نسبت منفعت به هزینه (BCR)</span>
              <span className="text-xl font-black text-emerald-700 block mt-1">{project.financials.benefitCostRatio} برابر</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-center">
              <span className="text-[11px] text-slate-500 font-bold block">سودآوری خالص سالانه</span>
              <span className="text-xl font-black text-emerald-700 block mt-1">{project.financials.estimatedAnnualBenefitBillionToman} م.ت</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-center">
              <span className="text-[11px] text-slate-500 font-bold block">هزینه اجرای فاز پایلوت</span>
              <span className="text-xl font-black text-slate-900 block mt-1">{project.financials.pilotCostMillionToman} م.ت</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-center">
              <span className="text-[11px] text-slate-500 font-bold block">دوره بازگشت سرمایه</span>
              <span className="text-xl font-black text-emerald-700 block mt-1">{project.financials.paybackMonths} ماه</span>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs space-y-2">
            <div className="font-extrabold text-slate-900">فرمول اثبات منفعت مالی سند بالادستی رفاه:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 font-medium">
              <div>• پایه تحت تاثیر: {project.financials.formulaBreakdown.affectedBase}</div>
              <div>• نرخ بهبود عملیاتی: {project.financials.formulaBreakdown.improvementRate}</div>
              <div>• ضریب پوشش شعب: {project.financials.formulaBreakdown.coverageRatio}</div>
              <div>• ضریب اسناد قطعی: {project.financials.formulaBreakdown.attributionRatio}</div>
            </div>
          </div>
        </section>

        {/* 4. Architecture & Technical Decision Record (ADR) */}
        <section className="print-break-avoid space-y-4">
          <div className="flex items-center gap-2 text-emerald-800 font-black text-sm border-r-4 border-emerald-600 pr-2.5">
            <Cpu className="w-4 h-4 text-emerald-600" />
            <span>۴. تصمیم‌گیری معماری فنی (ADR) و استک نرم‌افزاری</span>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
            <div className="text-xs font-black text-slate-900">{project.architecture.adrTitle}</div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">{project.architecture.adrText}</p>

            <div className="pt-3 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                <span className="text-[10px] text-slate-500 font-bold block">بک‌اند و سرویس:</span>
                <span className="font-bold text-slate-900">{project.architecture.recommendedStack.backend}</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                <span className="text-[10px] text-slate-500 font-bold block">پایگاه داده:</span>
                <span className="font-bold text-slate-900">{project.architecture.recommendedStack.database}</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                <span className="text-[10px] text-slate-500 font-bold block">موتور هوش مصنوعی:</span>
                <span className="font-bold text-slate-900">{project.architecture.recommendedStack.aiMlEngine}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pilot Sprints Roadmap & Acceptance */}
        <section className="print-break-avoid space-y-4">
          <div className="flex items-center gap-2 text-emerald-800 font-black text-sm border-r-4 border-emerald-600 pr-2.5">
            <Calendar className="w-4 h-4 text-emerald-600" />
            <span>۵. زمان‌بندی اجرای پایلوت ({project.pilotPlan.durationWeeks} هفته) و معیارهای پذیرش</span>
          </div>

          <div className="space-y-2.5">
            {project.pilotPlan.sprints.map((sp, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div>
                  <div className="font-black text-slate-900">{sp.title}</div>
                  <div className="text-slate-600 text-[11px] mt-0.5">
                    تحویل‌شدنی‌ها: {sp.deliverables.join(' • ')}
                  </div>
                </div>
                <div className="bg-white px-3 py-1.5 rounded-xl border border-slate-200 font-bold text-emerald-800 shrink-0">
                  مایلستون: {sp.milestone}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 space-y-1.5 text-xs">
            <div className="font-black text-emerald-950">معیارهای قطعی پذیرش پایلوت توسط مدیرعامل رفاه:</div>
            <ul className="space-y-1 text-slate-700 font-medium">
              {project.pilotPlan.acceptanceCriteria.map((ac, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{ac}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Official Signatures Block */}
        <div className="print-break-avoid pt-8 border-t-2 border-slate-900 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-4 text-center">
            <div className="font-extrabold text-slate-900">از طرف شرکت شبکه هوشمند ابتکار ویستا</div>
            <div className="text-[11px] text-slate-500 font-medium">
              تیم فنی و مهندسی سیستم‌های هوشمند | شماره ثبت ۵۸۳۳۰۲
            </div>
            <div className="h-14 flex items-center justify-center text-slate-400 italic text-[11px] border border-dashed border-slate-300 rounded-xl">
              [محل امضا و مهر رسمی شرکت ویستا]
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-4 text-center">
            <div className="font-extrabold text-slate-900">از طرف شرکت فروشگاه‌های زنجیره‌ای رفاه</div>
            <div className="text-[11px] text-slate-500 font-medium">
              معاونت بازرگانی / فناوری اطلاعات و هیئت مدیره
            </div>
            <div className="h-14 flex items-center justify-center text-slate-400 italic text-[11px] border border-dashed border-slate-300 rounded-xl">
              [محل تایید و امضای مدیرعامل رفاه]
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

