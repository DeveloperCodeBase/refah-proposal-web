/**
 * Utility for generating professional, business-themed image URLs and visual assets
 * for each of the 10 Refah Smart Retail Transformation projects.
 *
 * Categorized by:
 * - Retail & Commercial (COM)
 * - Supply Chain & Logistics (SCM)
 * - Corporate Academy & LMS (ACADEMY)
 * - AI Computer Vision & Store Analytics (AI Analytics / OPS)
 * - Human Capital & Workforce Management (HRM)
 */

export interface ProjectImageMeta {
  projectId: string;
  title: string;
  category: 'Retail' | 'SCM' | 'Academy' | 'AI Analytics' | 'HRM';
  categoryFa: string;
  imageUrl: string;
  fallbackGradient: string;
  accentColor: string;
  altTextFa: string;
  altTextEn: string;
  keywords: string[];
  photographerCredit?: {
    name: string;
    source: string;
  };
}

// Curated high-resolution Unsplash business & enterprise images for all 10 Refah projects
export const PROJECT_IMAGES_MAP: Record<string, ProjectImageMeta> = {
  // 1. C2 - Pricing & Elasticity AI (Retail)
  C2: {
    projectId: 'C2',
    title: 'بهینه‌سازی پروموشن و تحلیل کشش قیمت',
    category: 'Retail',
    categoryFa: 'بازرگانی و قیمت‌گذاری هوشمند',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-emerald-950 via-slate-900 to-teal-950',
    accentColor: '#059669',
    altTextFa: 'داشبورد پیشرفته تحلیل کشش قیمت و بهینه‌سازی پروموشن فروشگاهی رفاه',
    altTextEn: 'Enterprise retail price elasticity and promotion analytics dashboard',
    keywords: ['Retail Pricing', 'Price Elasticity', 'Promotion ROI', 'Data Analytics'],
    photographerCredit: { name: 'Luke Chesser', source: 'Unsplash' }
  },

  // 2. B5 - Cycle Count & Ghost Inventory (SCM)
  B5: {
    projectId: 'B5',
    title: 'انبارگردانی چرخه‌ای و کشف ناموجودی پنهان',
    category: 'SCM',
    categoryFa: 'زنجیره تامین و موجودی انبار',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-amber-950 via-slate-900 to-emerald-950',
    accentColor: '#d97706',
    altTextFa: 'انبار مکانیزه و اسکن هوشمند موجودی قفسه و انبارگردانی چرخه‌ای رفاه',
    altTextEn: 'Automated warehouse stock counting and ghost inventory audit scanner',
    keywords: ['Warehouse Management', 'Inventory Accuracy', 'Cycle Count', 'Ghost Stock'],
    photographerCredit: { name: 'Adrian Sulyok', source: 'Unsplash' }
  },

  // 3. B1 - Warehouse Routing & Pallet Placement (SCM)
  B1: {
    projectId: 'B1',
    title: 'چیدمان بهینه پالت، مسیریابی انبار و لجستیک',
    category: 'SCM',
    categoryFa: 'لجستیک و مسیریابی انبار',
    imageUrl: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-blue-950 via-slate-900 to-emerald-950',
    accentColor: '#2563eb',
    altTextFa: 'مسیریابی بهینه لیفتراک و چیدمان فضایی پالت‌ها در انبارهای مرکزی رفاه',
    altTextEn: 'Smart logistics fulfillment center with optimized pallet layout and routing',
    keywords: ['Logistics', 'Warehouse Routing', 'Pallet Optimization', 'Supply Chain'],
    photographerCredit: { name: 'Chuttersnap', source: 'Unsplash' }
  },

  // 4. A3 - Academy & Smart LMS Platform (Academy)
  A3: {
    projectId: 'A3',
    title: 'پلتفرم آموزش ضمن خدمت و LMS هوشمند پرسنل',
    category: 'Academy',
    categoryFa: 'آکادمی سازمانی و LMS',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-purple-950 via-slate-900 to-emerald-950',
    accentColor: '#7c3aed',
    altTextFa: 'پلتفرم دیجیتال آموزش حین کار، ماتریس شایستگی و توانمندسازی پرسنل شعب رفاه',
    altTextEn: 'Corporate digital training academy, smart LMS and skill competency platform',
    keywords: ['Corporate Training', 'LMS', 'Microlearning', 'Competency Matrix'],
    photographerCredit: { name: 'Mimi Thian', source: 'Unsplash' }
  },

  // 5. C1 - Dynamic Pricing & Competitor Intelligence (Retail)
  C1: {
    projectId: 'C1',
    title: 'قیمت‌گذاری پویا و رصد هوشمند رقبا',
    category: 'Retail',
    categoryFa: 'پایش رقبا و قیمت‌گذاری پویا',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-emerald-950 via-slate-900 to-cyan-950',
    accentColor: '#0891b2',
    altTextFa: 'رصد لحظه‌ای قیمت رقبا و موتور هوشمند تنظیم حاشیه سود مارکت رفاه',
    altTextEn: 'Competitor price scraping intelligence and dynamic margin management UI',
    keywords: ['Dynamic Pricing', 'Competitor Intelligence', 'Margin Guard', 'Retail Strategy'],
    photographerCredit: { name: 'Katt Yukawa', source: 'Unsplash' }
  },

  // 6. C3 - Personalized Loyalty & Customer Cart AI (Retail)
  C3: {
    projectId: 'C3',
    title: 'شخصی‌سازی سبد خرید و وفادارسازی باشگاه مشتریان',
    category: 'Retail',
    categoryFa: 'وفادارسازی و موتور پیشنهاد سبد خرید',
    imageUrl: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-rose-950 via-slate-900 to-emerald-950',
    accentColor: '#e11d48',
    altTextFa: 'باشگاه مشتریان هوشمند رفاه و موتور پیشنهاد شخصی‌سازی‌شده کوپن و تخفیف',
    altTextEn: 'Hypermarket retail customer loyalty club and AI recommendation engine',
    keywords: ['Customer Loyalty', 'Recommendation Engine', 'Personalization', 'Retail CRM'],
    photographerCredit: { name: 'Jazmin Quaynor', source: 'Unsplash' }
  },

  // 7. B2 - Demand Forecasting & Auto-Replenishment (SCM)
  B2: {
    projectId: 'B2',
    title: 'پیش‌بینی تقاضا و سفارش‌گذاری خودکار زنجیره تامین',
    category: 'SCM',
    categoryFa: 'پیش‌بینی تقاضا و سفارش‌گذاری خودکار',
    imageUrl: 'https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-teal-950 via-slate-900 to-slate-950',
    accentColor: '#0d9488',
    altTextFa: 'سامانه پیش‌بینی سری زمانی تقاضا و سفارش‌گذاری خودکار به تامین‌کنندگان رفاه',
    altTextEn: 'Time-series demand forecasting and automated supplier replenishment engine',
    keywords: ['Demand Forecasting', 'Auto Replenishment', 'Safety Stock', 'Time Series ML'],
    photographerCredit: { name: 'Carlos Muza', source: 'Unsplash' }
  },

  // 8. D1 - Smart Energy & Cold Chain IoT (AI Analytics)
  D1: {
    projectId: 'D1',
    title: 'پایش هوشمند انرژی و زنجیره سرمایش شعب',
    category: 'AI Analytics',
    categoryFa: 'اینترنت اشیاء و مدیریت انرژی و تبرید',
    imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-cyan-950 via-slate-900 to-emerald-950',
    accentColor: '#06b6d4',
    altTextFa: 'سیستم هوشمند پایش سنسورهای دما، تبرید و کنترل مصرف برق شعب هایپر رفاه',
    altTextEn: 'Smart hypermarket IoT energy monitoring and cold-chain temperature telemetry',
    keywords: ['Cold Chain IoT', 'Smart Energy', 'HVAC Automation', 'Store Telemetry'],
    photographerCredit: { name: 'NASA', source: 'Unsplash' }
  },

  // 9. A1 - Workforce Shift Scheduling & Labor Optimization (HRM)
  A1: {
    projectId: 'A1',
    title: 'برنامه‌ریزی هوشمند شیفت و چیدمان پرسنل شعب',
    category: 'HRM',
    categoryFa: 'مدیریت و شیفت‌بندی نیروی انسانی',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-indigo-950 via-slate-900 to-emerald-950',
    accentColor: '#4f46e5',
    altTextFa: 'سامانه هوشمند چینش شیفت پرسنل شعب رفاه منطبق با ساعات پیک مشتریان',
    altTextEn: 'Store workforce shift scheduling, labor optimization and peak-hour staffing',
    keywords: ['Workforce Management', 'Shift Optimization', 'Staffing Analytics', 'Labor Productivity'],
    photographerCredit: { name: 'Annie Spratt', source: 'Unsplash' }
  },

  // 10. D3 - Footfall, Heatmap & Queue Computer Vision (AI Analytics)
  D3: {
    projectId: 'D3',
    title: 'پایش هوشمند تردد، تحلیل صف و نقشه حرارتی مشتریان',
    category: 'AI Analytics',
    categoryFa: 'بینایی ماشین و تحلیل رفتار مشتریان',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-emerald-950 via-slate-900 to-purple-950',
    accentColor: '#10b981',
    altTextFa: 'پردازش دوربین‌های مداربسته شعب رفاه جهت نقشه حرارتی شلف‌ها و مدیریت طول صف صندوق',
    altTextEn: 'In-store computer vision footfall tracker, customer heatmap and queue manager',
    keywords: ['Computer Vision', 'Footfall Heatmap', 'Queue Detection', 'Store Analytics'],
    photographerCredit: { name: 'Headway', source: 'Unsplash' }
  }
};

// Generic category fallback image URLs
const CATEGORY_DEFAULT_IMAGES: Record<string, string> = {
  Retail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  COM: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  SCM: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
  Academy: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
  ACADEMY: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
  'AI Analytics': 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
  OPS: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
  HRM: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
  DEFAULT: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
};

/**
 * Returns a high-quality professional header image URL for a given project ID or domain.
 */
export function generateProjectImage(
  projectId: string,
  options?: {
    category?: string;
    domain?: string;
    width?: number;
    height?: number;
  }
): string {
  const meta = PROJECT_IMAGES_MAP[projectId];
  if (meta?.imageUrl) {
    if (options?.width && options?.height) {
      return `${meta.imageUrl}&w=${options.width}&h=${options.height}`;
    }
    return meta.imageUrl;
  }

  // Fallback to category/domain mapping
  const categoryKey = options?.category || options?.domain || 'DEFAULT';
  const categoryImg = CATEGORY_DEFAULT_IMAGES[categoryKey] || CATEGORY_DEFAULT_IMAGES.DEFAULT;

  if (options?.width && options?.height) {
    return `${categoryImg}&w=${options.width}&h=${options.height}`;
  }
  return categoryImg;
}

/**
 * Convenience alias for getting the project header image URL.
 */
export function getProjectHeaderImage(
  projectId: string,
  domain?: string,
  category?: string
): string {
  return generateProjectImage(projectId, { domain, category });
}

/**
 * Returns complete metadata for a project's visual representation.
 */
export function getProjectImageMeta(projectId: string): ProjectImageMeta {
  if (PROJECT_IMAGES_MAP[projectId]) {
    return PROJECT_IMAGES_MAP[projectId];
  }

  // Default fallback meta
  return {
    projectId,
    title: `پروژه تحول دیجیتال ${projectId}`,
    category: 'Retail',
    categoryFa: 'سامانه سازمانی رفاه',
    imageUrl: CATEGORY_DEFAULT_IMAGES.DEFAULT,
    fallbackGradient: 'from-emerald-950 via-slate-900 to-slate-950',
    accentColor: '#059669',
    altTextFa: `طرح بصری سامانه تحول دیجیتال رفاه - پروژه ${projectId}`,
    altTextEn: `Refah Smart Transformation System - Project ${projectId}`,
    keywords: ['Refah Hypermarket', 'Digital Transformation', 'Enterprise AI']
  };
}

/**
 * Generates an SVG Data URI placeholder for zero-network resilience.
 */
export function generateProjectSvgFallback(
  width = 1200,
  height = 500,
  title = 'پروژه رفاه هوشمند',
  category = 'تحول دیجیتال رفاه',
  projectId = 'REFAH'
): string {
  const safeTitle = title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const safeCat = category.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const safeId = projectId.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#022c22"/>
        <stop offset="50%" stop-color="#0f172a"/>
        <stop offset="100%" stop-color="#064e3b"/>
      </linearGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(16, 185, 129, 0.08)" stroke-width="1"/>
      </pattern>
      <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#10b981"/>
        <stop offset="100%" stop-color="#059669"/>
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>
    <rect width="${width}" height="${height}" fill="url(#grid)"/>
    <circle cx="${width * 0.85}" cy="${height * 0.3}" r="180" fill="#10b981" fill-opacity="0.06"/>
    <circle cx="${width * 0.15}" cy="${height * 0.8}" r="120" fill="#06b6d4" fill-opacity="0.05"/>
    <g transform="translate(${width * 0.05}, ${height * 0.22})">
      <rect x="0" y="0" width="130" height="34" rx="10" fill="url(#badgeGrad)" />
      <text x="65" y="22" fill="#022c22" font-size="14" font-weight="900" font-family="sans-serif" text-anchor="middle">پروژه ${safeId}</text>
      <rect x="145" y="0" width="220" height="34" rx="10" fill="rgba(15, 23, 42, 0.8)" stroke="rgba(16, 185, 129, 0.4)" stroke-width="1"/>
      <text x="255" y="22" fill="#a7f3d0" font-size="13" font-weight="700" font-family="sans-serif" text-anchor="middle">${safeCat}</text>
    </g>
    <text x="${width * 0.05}" y="${height * 0.55}" fill="#ffffff" font-size="28" font-weight="900" font-family="sans-serif">${safeTitle}</text>
    <text x="${width * 0.05}" y="${height * 0.68}" fill="#94a3b8" font-size="15" font-weight="500" font-family="sans-serif">سامانه هوشمند و مدرن فروشگاه‌های زنجیره‌ای رفاه</text>
    <line x1="${width * 0.05}" y1="${height * 0.82}" x2="${width * 0.95}" y2="${height * 0.82}" stroke="rgba(148, 163, 184, 0.2)" stroke-width="1"/>
    <text x="${width * 0.05}" y="${height * 0.92}" fill="#10b981" font-size="13" font-weight="bold" font-family="sans-serif">Refah Digital Transformation Initiative • Enterprise Architecture</text>
    <text x="${width * 0.95}" y="${height * 0.92}" fill="#64748b" font-size="12" font-family="sans-serif" text-anchor="end">Production Ready</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
