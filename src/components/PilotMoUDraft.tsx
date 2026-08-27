import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download,
  FileCheck2, 
  Building2, 
  ShieldCheck, 
  Award, 
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Globe,
  Loader2,
  Check
} from 'lucide-react';
import { VISTA_COMPANY_INFO } from '../data/projects';
import { downloadPdfFromElement, printElementDirectly } from '../utils/pdfExport';

interface PilotMoUDraftProps {
  onClose: () => void;
}

export const PilotMoUDraft: React.FC<PilotMoUDraftProps> = ({ onClose }) => {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handlePrint = () => {
    printElementDirectly(
      'pilot-mou-document',
      'تفاهم‌نامه رسمی همکاری فاز پایلوت طرح تحول هوش مصنوعی رفاه'
    );
  };

  const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true);
    const success = await downloadPdfFromElement('pilot-mou-document', {
      fileName: 'Refah-MoU-AI-Pilot-Official-Agreement.pdf',
      documentTitle: 'تفاهم‌نامه رسمی همکاری فاز پایلوت طرح هوش مصنوعی رفاه',
      footerText: 'تفاهم‌نامه رسمی فاز پایلوت • رفاه و شرکت شبکه هوشمند ابتکار ویستا'
    });
    setIsGeneratingPdf(false);
    if (success) {
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-fadeIn printable-modal">
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Action Bar */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 no-print shrink-0">
          <div className="flex items-center gap-2.5">
            <FileCheck2 className="w-5 h-5 text-emerald-600" />
            <h2 className="font-black text-sm sm:text-base text-slate-900">
              پیش‌نویس تفاهم‌نامه رسمی همکاری فاز پایلوت (MoU) — طرح تحول هوش مصنوعی رفاه
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white shadow-sm transition cursor-pointer border border-slate-700"
            >
              <Printer className="w-3.5 h-3.5 text-emerald-400" />
              <span>چاپ سند</span>
            </button>

            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-800 text-white shadow-sm transition cursor-pointer"
            >
              {isGeneratingPdf ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>تولید PDF...</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-200" />
                  <span>PDF دانلود شد</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>دانلود PDF رسمی</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-white hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center border border-slate-200 transition cursor-pointer"
              aria-label="بستن"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Contract Document Body */}
        <div 
          id="pilot-mou-document"
          className="printable-document p-8 sm:p-10 overflow-y-auto space-y-6 text-slate-800 bg-white font-sans leading-relaxed text-xs sm:text-sm print:bg-white print:text-black print:p-8"
        >
          
          {/* Official Letterhead */}
          <div className="print-break-avoid text-center border-b-2 border-slate-200 pb-5 space-y-2">
            <div className="text-xs text-slate-400 font-bold">بسمه تعالی</div>
            <h1 className="text-base sm:text-xl font-black text-slate-900">
              تفاهم‌نامه رسمی همکاری و پیاده‌سازی فاز پایلوت «طرح جامع هوش مصنوعی رفاه»
            </h1>
            <p className="text-xs text-slate-600 font-medium">
              موضوع: اجرای پروژه‌های بهینه‌سازی پروموشن و تخفیف (C2)، انبارگردانی چرخه‌ای و Ghost Stock (B5) و پلتفرم آموزش ضمن خدمت (A3)
            </p>
          </div>

          {/* Article 1: Parties */}
          <div className="print-break-avoid space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <h3 className="font-extrabold text-emerald-800 text-sm">ماده ۱: طرفین تفاهم‌نامه</h3>
            <div className="space-y-2 text-slate-700 text-xs sm:text-sm leading-relaxed">
              <p>
                این تفاهم‌نامه فی‌مابین <strong>شرکت فروشگاه‌های زنجیره‌ای رفاه (سهامی عام)</strong> به نمایندگی مدیرعامل محترم (از این پس «کارفرما / رفاه») از یک طرف، و <strong>شرکت شبکه هوشمند ابتکار ویستا (شماره ثبت رسمی ۵۸۳۳۰۲)</strong> به عنوان توسعه‌دهنده پلتفرم‌های هوش مصنوعی و عضو پارک علم و فناوری استان سمنان و نظام صنفی رایانه‌ای (از این پس «مجری / ویستا») منعقد می‌گردد.
              </p>
            </div>
          </div>

          {/* Article 2: Subject */}
          <div className="print-break-avoid space-y-2">
            <h3 className="font-extrabold text-emerald-800 text-sm">ماده ۲: موضوع و قلمرو فاز پایلوت</h3>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
              استقرار ۸ هفته‌ای پروژه‌های پرچمدار موج ۱ شامل موتور بهینه‌سازی پروموشن (C2) در ۲۰ شعبه منتخب (۱۰ آزمون + ۱۰ کنترل با متدولوژی شبه‌آزمایشی تفاضل در تفاضل)، سامانه انبارگردانی چرخه‌ای و رفع ناموجودی پنهان (B5) در ۱۵ شعبه و راه‌اندازی پلتفرم آموزش ضمن خدمت سازمانی و شبیه‌ساز مربی تعامل صندوق‌داران (A3) برای ۵۰۰ نفر از پرسنل رفاه، بدون نیاز به خرید تجهیزات جدید یا دستکاری سیستم‌های مالی جاری.
            </p>
          </div>

          {/* Article 3: Target KPIs */}
          <div className="print-break-avoid space-y-3">
            <h3 className="font-extrabold text-emerald-800 text-sm">ماده ۳: شاخص‌های تعهد شده عملکردی (KPIs)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-xs text-slate-900 block">شاخص COM-09 (بازده پروموشن):</span>
                <p className="text-xs text-slate-600">ارتقای نسبت سود فزاینده به هزینه تخفیف به حداقل <strong>۱٫۸۵ برابر</strong> در شعب آزمون.</p>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-xs text-slate-900 block">شاخص COM-10 (کاهش تخفیف زیان‌ده):</span>
                <p className="text-xs text-slate-600">حذف حداقل <strong>۴۰٪</strong> از تخفیف‌های دارای کشش منفی و بازدارنده سود.</p>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-xs text-slate-900 block">شاخص SCM-05 (صحت موجودی انبار):</span>
                <p className="text-xs text-slate-600">ارتقای شاخص دقت رکوردهای موجودی سیستم از ۶۲٪ به <strong>بالای ۹۱٪</strong>.</p>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-xs text-slate-900 block">شاخص HRM-03 (کاهش زمان آموزش):</span>
                <p className="text-xs text-slate-600">کاهش زمان آمادگی عملیاتی پرسنل جدید از ۲۸ روز به <strong>کمتر از ۱۰ روز</strong>.</p>
              </div>
            </div>
          </div>

          {/* Article 4: Financial Model & Risk Sharing */}
          <div className="print-break-avoid space-y-2">
            <h3 className="font-extrabold text-emerald-800 text-sm">ماده ۴: ساختار مالی مبتنی بر تسهیم ریسک و تضمین عملکرد (Success Fee)</h3>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
              به منظور اثبات حسن نیت و اطمینان کارفرما از بازدهی مالی، پرداخت حق‌الزحمه فاز پایلوت متناسب با تحقق اهداف شاخص‌های ماده ۳ و تاییدیه رسمی حسابداری مدیریت رفاه خواهد بود. در صورت عدم تحقق حداقل ۵۰٪ از اهداف مالی پیش‌بینی‌شده، رفاه حق خاتمه تفاهم‌نامه بدون پرداخت را دارا می‌باشد.
            </p>
          </div>

          {/* Article 5: Security & Confidentiality */}
          <div className="print-break-avoid space-y-2">
            <h3 className="font-extrabold text-emerald-800 text-sm">ماده ۵: محرمانگی و امنیت داده‌ها (NDA)</h3>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
              کلیه داده‌های فروش، تراکنش‌ها، لاگ‌های پرسنل و مشخصات زنجیره تامین رفاه در سرورهای ایزوله داخل سازمان یا محیط ابری امن رفاه پردازش شده و شرکت شبکه هوشمند ابتکار ویستا ملزم به رعایت بالاترین استانداردهای رمزنگاری و عدم خروج داده‌ها از حریم اختصاصی رفاه می‌باشد.
            </p>
          </div>

          {/* Signatures & Corporate Stamps */}
          <div className="print-break-avoid pt-8 border-t-2 border-slate-200 grid grid-cols-2 gap-8 text-center">
            <div className="space-y-12">
              <div className="font-bold text-xs text-slate-800">
                از طرف شرکت فروشگاه‌های زنجیره‌ای رفاه<br />
                <span className="text-[11px] text-slate-500 font-normal">مدیرعامل و عضو هیئت مدیره</span>
              </div>
              <div className="text-xs text-slate-400">مهر و امضای کارفرما</div>
            </div>

            <div className="space-y-12">
              <div className="font-bold text-xs text-slate-800">
                از طرف شرکت شبکه هوشمند ابتکار ویستا<br />
                <span className="text-[11px] text-slate-500 font-normal">شماره ثبت: ۵۸۳۳۰۲ | پارک علم و فناوری سمنان</span>
              </div>
              <div className="text-xs text-slate-400">مهر و امضای مجری طرح</div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center no-print shrink-0">
          <div className="text-xs text-slate-500 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>تنظیم شده بر اساس الزامات حقوقی و مدل ریسک‌پذیری فناورانه ویستا</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 hover:bg-slate-200 border border-slate-200 transition cursor-pointer"
          >
            بستن سند
          </button>
        </div>

      </div>
    </div>
  );
};

