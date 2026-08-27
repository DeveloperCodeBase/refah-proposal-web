import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export interface PdfExportOptions {
  fileName?: string;
  documentTitle?: string;
  orientation?: 'portrait' | 'landscape';
  format?: 'a4' | 'a3' | 'letter';
  quality?: number;
  scale?: number;
  marginMm?: number;
  headerText?: string;
  footerText?: string;
}

/**
 * Downloads a high-resolution, multi-page PDF generated from any DOM element.
 * Fully supports RTL Persian typography, custom fonts (Vazirmatn), images, and CSS styling.
 */
export async function downloadPdfFromElement(
  elementOrId: HTMLElement | string,
  options: PdfExportOptions = {}
): Promise<boolean> {
  try {
    const element: HTMLElement | null =
      typeof elementOrId === 'string'
        ? document.getElementById(elementOrId)
        : elementOrId;

    if (!element) {
      console.error(`[pdfExport] Element not found:`, elementOrId);
      return false;
    }

    const {
      fileName = `Refah-Document-${Date.now()}.pdf`,
      orientation = 'portrait',
      format = 'a4',
      scale = 2,
      marginMm = 8,
      footerText = 'فروشگاه‌های زنجیره‌ای رفاه • سامانه تحول دیجیتال و هوش مصنوعی'
    } = options;

    // Temporarily ensure element styles are optimal for capturing
    const originalOverflow = element.style.overflow;
    const originalMaxHeight = element.style.maxHeight;
    element.style.overflow = 'visible';
    element.style.maxHeight = 'none';

    // Capture using html2canvas with high-DPI
    const canvas = await html2canvas(element, {
      scale: scale,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      windowWidth: element.scrollWidth || 1200,
      onclone: (clonedDoc) => {
        // Ensure fonts and RTL are retained in cloned document
        const clonedElement = clonedDoc.getElementById(
          typeof elementOrId === 'string' ? elementOrId : ''
        ) || clonedDoc.body;
        if (clonedElement) {
          clonedElement.style.fontFamily = "'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
          clonedElement.setAttribute('dir', 'rtl');
        }
      }
    });

    // Restore original styles
    element.style.overflow = originalOverflow;
    element.style.maxHeight = originalMaxHeight;

    const imgData = canvas.toDataURL('image/jpeg', 0.95);

    // Initialize jsPDF
    const pdf = new jsPDF({
      orientation: orientation,
      unit: 'mm',
      format: format
    });

    const pdfWidth = orientation === 'portrait' ? 210 : 297;
    const pdfHeight = orientation === 'portrait' ? 297 : 210;
    
    const contentWidth = pdfWidth - (marginMm * 2);
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    // Calculate height of image in PDF mm
    const renderedHeightInPdf = (imgHeight * contentWidth) / imgWidth;
    const pageContentHeight = pdfHeight - (marginMm * 2) - 10; // Reserve 10mm for header/footer

    let currentYPosition = 0;
    let pageNumber = 1;
    const totalPages = Math.ceil(renderedHeightInPdf / pageContentHeight);

    while (currentYPosition < renderedHeightInPdf) {
      if (pageNumber > 1) {
        pdf.addPage();
      }

      // Source rectangle on canvas
      const srcY = (currentYPosition * imgWidth) / contentWidth;
      const srcHeight = (pageContentHeight * imgWidth) / contentWidth;

      // Create a slice canvas for the page
      const pageCanvas = document.createElement('canvas');
      pageCanvas.width = imgWidth;
      pageCanvas.height = Math.min(srcHeight, imgHeight - srcY);

      const ctx = pageCanvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
        ctx.drawImage(
          canvas,
          0,
          srcY,
          imgWidth,
          pageCanvas.height,
          0,
          0,
          imgWidth,
          pageCanvas.height
        );

        const pageImgData = pageCanvas.toDataURL('image/jpeg', 0.95);
        const sliceRenderedHeight = (pageCanvas.height * contentWidth) / imgWidth;

        pdf.addImage(
          pageImgData,
          'JPEG',
          marginMm,
          marginMm,
          contentWidth,
          sliceRenderedHeight
        );

        // Add subtle footer with page number
        pdf.setFontSize(8);
        pdf.setTextColor(140, 150, 160);
        pdf.text(
          `${footerText}  |  صفحه ${pageNumber} از ${totalPages}`,
          pdfWidth / 2,
          pdfHeight - 4,
          { align: 'center' }
        );
      }

      currentYPosition += pageContentHeight;
      pageNumber++;
    }

    // Save the PDF file to user's device
    pdf.save(fileName.endsWith('.pdf') ? fileName : `${fileName}.pdf`);
    return true;
  } catch (error) {
    console.error('[pdfExport] Error generating PDF:', error);
    return false;
  }
}

/**
 * Clean isolated printer that opens a dedicated printing frame.
 * Avoids browser iframe clipping, dark backgrounds, and unwanted UI elements.
 */
export function printElementDirectly(
  elementOrId: HTMLElement | string,
  title = 'سند رسمی رفاه هوشمند'
): boolean {
  try {
    const element: HTMLElement | null =
      typeof elementOrId === 'string'
        ? document.getElementById(elementOrId)
        : elementOrId;

    if (!element) {
      console.warn('[pdfExport] Target element not found, falling back to window.print()');
      window.print();
      return true;
    }

    // Create a temporary hidden iframe for printing
    const existingIframe = document.getElementById('refah-print-frame');
    if (existingIframe) {
      existingIframe.remove();
    }

    const iframe = document.createElement('iframe');
    iframe.id = 'refah-print-frame';
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);

    const iframeDoc = iframe.contentWindow?.document;
    if (!iframeDoc) {
      window.print();
      return true;
    }

    // Collect all stylesheets from host document
    const styleLinks = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'))
      .map(node => node.outerHTML)
      .join('\n');

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="fa" dir="rtl">
        <head>
          <meta charset="UTF-8" />
          <title>${title}</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
          ${styleLinks}
          <style>
            @page {
              size: A4;
              margin: 12mm 10mm 15mm 10mm;
            }
            body {
              background: #ffffff !important;
              color: #0f172a !important;
              font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
              margin: 0;
              padding: 10px;
              direction: rtl;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            * {
              box-sizing: border-box;
            }
            .no-print, button, [role="button"] {
              display: none !important;
            }
            .print-break-inside-avoid {
              break-inside: avoid;
              page-break-inside: avoid;
            }
            .print-page-break {
              page-break-after: always;
              break-after: page;
            }
          </style>
        </head>
        <body class="bg-white text-slate-900">
          <div class="print-container max-w-4xl mx-auto p-4">
            ${element.outerHTML}
          </div>
          <script>
            window.onload = function() {
              setTimeout(function() {
                window.focus();
                window.print();
              }, 350);
            };
          </script>
        </body>
      </html>
    `;

    iframeDoc.open();
    iframeDoc.write(htmlContent);
    iframeDoc.close();

    // Clean up iframe after printing dialog closes
    setTimeout(() => {
      iframe.remove();
    }, 40000);

    return true;
  } catch (err) {
    console.error('[pdfExport] Isolated print error:', err);
    window.print();
    return false;
  }
}

/**
 * Generates and downloads a rich, multi-page Smart Academy Course Handbook PDF
 */
export async function downloadCourseHandbookPdf(
  course: {
    id: string;
    title: string;
    category: string;
    roleTarget: string;
    durationMin?: number;
    durationMinutes?: number;
    description: string;
    simulationTopic: string;
    syllabus: Array<{ section?: string; title?: string; topics?: string[]; time?: string }>;
    pdfInfo?: {
      title: string;
      filename: string;
      pageCount: number;
      fileSize: string;
      chapters: string[];
      sampleExcerpt: string;
    };
    keyTakeaways?: string[];
  }
): Promise<boolean> {
  try {
    const duration = course.durationMin || course.durationMinutes || 25;

    // Create a temporary hidden DOM element formatted like an official handbook
    const handbookElem = document.createElement('div');
    handbookElem.id = `temp-handbook-${course.id}`;
    handbookElem.dir = 'rtl';
    handbookElem.style.position = 'absolute';
    handbookElem.style.left = '-9999px';
    handbookElem.style.top = '0';
    handbookElem.style.width = '800px';
    handbookElem.style.padding = '35px 40px';
    handbookElem.style.background = '#ffffff';
    handbookElem.style.color = '#0f172a';
    handbookElem.style.fontFamily = "'Vazirmatn', -apple-system, sans-serif";

    const syllabusHtml = course.syllabus.map((s, idx) => {
      const sectionTitle = s.section || s.title || `فصل ${idx + 1}`;
      const topicsList = (s.topics || []).map(t => `<li style="margin-bottom: 4px;">${t}</li>`).join('');
      return `
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 10px 14px; margin-bottom: 8px;">
          <div style="font-size: 12px; font-weight: 700; color: #1e293b; margin-bottom: 6px;">
            <span style="background: #ecfdf5; color: #047857; font-weight: 800; font-size: 11px; padding: 2px 8px; border-radius: 6px; margin-left: 8px;">فصل ${idx + 1}</span>
            ${sectionTitle}
          </div>
          ${topicsList ? `<ul style="font-size: 11px; color: #475569; padding-right: 20px; margin: 0;">${topicsList}</ul>` : ''}
        </div>
      `;
    }).join('');

    handbookElem.innerHTML = `
      <div style="border-bottom: 3px solid #059669; padding-bottom: 18px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div style="font-size: 13px; font-weight: 800; color: #059669; margin-bottom: 4px;">آکادمی آموزش ضمن خدمت و توانمندسازی سازمانی</div>
          <h1 style="font-size: 20px; font-weight: 900; color: #0f172a; margin: 0;">${course.pdfInfo?.title || course.title}</h1>
          <div style="font-size: 12px; color: #64748b; margin-top: 4px;">کتابچه راهنما و دستورالعمل رسمی پرسنل فروشگاه‌های زنجیره‌ای رفاه</div>
        </div>
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 8px 14px; text-align: right;">
          <div style="font-size: 11px; font-weight: 700; color: #166534;">دسته‌بندی: ${course.category}</div>
          <div style="font-size: 11px; color: #475569;">مخاطبان: ${course.roleTarget}</div>
          <div style="font-size: 10px; color: #64748b;">مدت دوره: ${duration} دقیقه</div>
        </div>
      </div>

      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 16px; margin-bottom: 20px;">
        <h3 style="font-size: 13px; font-weight: 800; color: #0f172a; margin-top: 0; margin-bottom: 8px;">هدف و شرح دوره:</h3>
        <p style="font-size: 12px; line-height: 1.8; color: #334155; margin: 0;">${course.description}</p>
        <div style="margin-top: 10px; padding-top: 8px; border-top: 1px dashed #cbd5e1; font-size: 11px; color: #047857; font-weight: 700;">
          سناریوی مربی‌گری و شبیه‌سازی: ${course.simulationTopic}
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 13px; font-weight: 800; color: #059669; border-right: 4px solid #059669; padding-right: 8px; margin-bottom: 12px;">
          سرفصل‌های آموزشی و مصوب (Syllabus):
        </h3>
        <div>${syllabusHtml}</div>
      </div>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 13px; font-weight: 800; color: #059669; border-right: 4px solid #059669; padding-right: 8px; margin-bottom: 12px;">
          فهرست فصول کتابچه رسمی راهنما:
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
          ${(course.pdfInfo?.chapters || []).map((ch, idx) => `
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px 12px; font-size: 11px; color: #334155;">
              <strong style="color: #047857;">فصل ${idx + 1}:</strong> ${ch}
            </div>
          `).join('')}
        </div>
      </div>

      <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 14px; padding: 16px; margin-bottom: 24px;">
        <h3 style="font-size: 13px; font-weight: 800; color: #065f46; margin-top: 0; margin-bottom: 8px;">
          بخشی از چک‌لیست و استاندارد اجرایی داخل فروشگاه:
        </h3>
        <p style="font-size: 11px; line-height: 1.8; color: #1e293b; margin: 0; font-style: italic;">
          "${course.pdfInfo?.sampleExcerpt || 'رعایت کلیه موازین مشتری‌مداری، چینش استاندارد شلف‌ها و تسلط بر سامانه‌های نرم‌افزاری رفاه الزامی است.'}"
        </p>
      </div>

      <div style="border-top: 2px solid #e2e8f0; padding-top: 14px; display: flex; justify-content: space-between; align-items: center; font-size: 10px; color: #64748b;">
        <div>معاونت منابع انسانی و توسعه شایستگی • شرکت فروشگاه‌های زنجیره‌ای رفاه</div>
        <div>سند شماره: REF-LMS-${course.id.toUpperCase()} • نسخه ۱.۴</div>
      </div>
    `;

    document.body.appendChild(handbookElem);

    const success = await downloadPdfFromElement(handbookElem, {
      fileName: course.pdfInfo?.filename || `Refah-Handbook-${course.id}.pdf`,
      footerText: `آکادمی آموزش ضمن خدمت رفاه • ${course.title}`
    });

    handbookElem.remove();
    return success;
  } catch (err) {
    console.error('[pdfExport] Error downloading handbook PDF:', err);
    return false;
  }
}

