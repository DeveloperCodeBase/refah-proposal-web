import { ProjectDetail } from '../types';

export const REFAH_PROJECTS: ProjectDetail[] = [
  // ==========================================
  // موج ۱: بازدهی فوری و سودآوری نقدی (Wave 1)
  // ==========================================
  {
    id: 'C2',
    title: 'بهینه‌سازی پروموشن، تخفیف هوشمند و تحلیل کشش قیمت',
    subtitle: 'سامانه تحلیل اثربخشی، کشش قیمتی متقاطع و پیشگیری از تخفیف‌های زیان‌ده',
    domain: 'COM',
    wave: 1,
    isFlagship: true,
    iconName: 'Percent',
    executiveSummary: 'دارای بالاترین نسبت منفعت به هزینه در سند رفاه هوشمند (۶٫۸۴ برابر). این سامانه بدون نیاز به سرمایه‌گذاری سخت‌افزاری، بودجه‌های کلان تخفیفات رفاه را هدفمند کرده و تخفیف‌های زیان‌ده و کانیبالیزاسیون (همنوع‌خواری کالاها) را با الگوریتم‌های پیشرفته آماری حذف می‌کند.',
    problemStatement: [
      'عدم شفافیت در بازده واقعی تخفیف‌ها و پروموشن‌های دوره‌ای و فصلی در ۵۰۰+ شعبه رفاه',
      'وجود بیش از ۳۰٪ تا ۴۰٪ پروموشن‌های زیان‌ده که صرفاً حاشیه سود را سوزانده و فروش فزاینده (Incremental Lift) واقعی ایجاد نمی‌کنند',
      'پدیده کانیبالیزاسیون (Cannibalization): تخفیف روی یک برند باعث افت شدید فروش کالای سودآورتر کناری می‌شود',
      'اتکا به حدس و تجربه سنتی به جای مدل‌های علمی کشش متقاطع قیمت (Cross-Price Elasticity)'
    ],
    solutionOverview: [
      'موتور هوش مصنوعی محاسبه کشش تقاضا به ازای هر دسته کالایی و هر گروه شعبه',
      'داشبورد تصمیم‌یار هوشمند مدیر بازرگانی با پیشنهاد عمق بهینه تخفیف و زمان‌بندی دقیق',
      'ماژول اختصاصی شناسایی و هشدار اثر همنوع‌خواری (Cannibalization Guard)',
      'سنجش علمی اثربخشی با روش گروه آزمون و کنترل شبه‌آزمایشی (Diff-in-Diff) در شعب منتخب'
    ],
    capabilities: [
      'محاسبه بازده هر واحد هزینه پروموشن (COM-09)',
      'شناسایی و تفکیک پروموشن‌های زیان‌ده (COM-10)',
      'پایش کانیبالیزاسیون و افت ناخواسته سود رده‌های همگن (COM-11)',
      'شبیه‌ساز اثر تخفیف قبل از اجرای کمپین در شعب',
      'تولید خودکار سناریوهای تخفیف هوشمند هماهنگ با تامین‌کنندگان (Trade Promotions)'
    ],
    financials: {
      benefitCostRatio: 6.84,
      estimatedAnnualBenefitBillionToman: 48.5,
      pilotCostMillionToman: 480,
      paybackMonths: 2.1,
      formulaBreakdown: {
        affectedBase: 'بودجه کل پروموشن‌ها و تخفیفات سالانه (مبنای ۲۰۰+ میلیارد تومان)',
        improvementRate: 'بهبود خالص ۸٫۵٪ در بازدهی تخفیفات و حذف تخفیف‌های منفی',
        coverageRatio: 'پوشش ۸۰٪ دسته‌های کالایی تندمصرف (FMCG)',
        attributionRatio: 'ضریب اسناد ۵۰٪ (تفکیک دقیق اثر AI از نوسانات عمومی بازار)'
      }
    },
    kpis: [
      {
        code: 'COM-09',
        title: 'بازده هر واحد هزینه پروموشن (Promotion ROI)',
        unit: 'نسبت (تومان سود به ازای ۱ تومان تخفیف)',
        baseline: '۱٫۱۵',
        target: '۱٫۸۵',
        description: 'سود ناخالص فزاینده کسب‌شده تقسیم بر کل هزینه مستقیم تخفیف داده‌شده.',
        formula: '(Incremental Margin) / (Total Promo Cost)'
      },
      {
        code: 'COM-10',
        title: 'سهم پروموشن‌های زیان‌ده',
        unit: 'درصد (%)',
        baseline: '۳۶٪',
        target: 'کمتر از ۸٪',
        description: 'درصد کمپین‌ها یا تخفیفاتی که سود فزاینده آن‌ها منفی بوده و فقط مارجین را نابود کرده‌اند.'
      },
      {
        code: 'COM-11',
        title: 'نرخ کانیبالیزاسیون ناخواسته',
        unit: 'درصد (%)',
        baseline: '۲۲٪',
        target: 'کمتر از ۵٪',
        description: 'میزان کاهش سود کالاهای هم‌گروه بدون تخفیف بر اثر پروموشن کالای مجاور.'
      },
      {
        code: 'COM-12',
        title: 'رشد فروش فزاینده خالص (Incremental Lift)',
        unit: 'درصد (%)',
        baseline: '۴٫۲٪',
        target: '۱۲٫۸٪',
        description: 'رشد واقعی حجم فروش پس از حذف اثر فصلی و روند طبیعی بازار.'
      }
    ],
    architecture: {
      adrTitle: 'ADR-C2: معماری موتور بهینه‌سازی پروموشن و خط‌لوله داده بلادرنگ',
      adrText: 'جهت محاسبه سریع کشش تقاضا و عدم اختلال در تراکنش‌های روزمره صندوق‌های فروش (POS)، خط‌لوله داده به صورت Event-driven با Apache Kafka و ذخیره‌سازی تحلیلی ستونی (ClickHouse / PostgreSQL) طراحی شده است. مدل‌های رگرسیون تداخلی و یادگیری تقویتی در محیط امن رفاه ایزوله می‌شوند.',
      dataFlow: [
        '۱. دریافت تراکنش‌های سبد خرید و لاگ تغییرات قیمت از دیتابیس مرکزی ERP/POS رفاه',
        '۲. نرمال‌سازی داده‌ها، شناسایی ترند و فصلی‌بودن (Seasonality & Baseline Cleansing)',
        '۳. تخمین ماتریس کشش قیمتی متقاطع با الگوریتم‌های یادگیری ماشین (Elasticity Estimator)',
        '۴. بهینه‌سازی غیرخطی چندهدفه برای حداکثرسازی سود کل سبد (Multi-objective Optimization)',
        '۵. ارسال پیشنهادات اصلاحی و هشدارها به داشبورد وب مدیر بازرگانی'
      ],
      layers: [
        {
          layer: 'لایه دریافت و استخراج داده (Ingestion & ETL)',
          components: ['POS Data Adapter', 'Promotion Calendar Ingestion', 'Competitor Price Tracker'],
          techStack: ['Python', 'Apache Kafka', 'Airflow'],
          description: 'جمع‌آوری روزانه و بلادرنگ فاکتورهای فروش و پروموشن‌ها'
        },
        {
          layer: 'هسته هوش مصنوعی و مدل‌سازی کشش (ML Elasticity Engine)',
          components: ['Elasticity Estimator', 'Cannibalization Matrix', 'Diff-in-Diff Evaluator'],
          techStack: ['Python', 'Scikit-Learn', 'LightGBM', 'PyTorch'],
          description: 'تخمین کشش متقاطع و محاسبه سناریوهای سودآوری'
        },
        {
          layer: 'لایه سرویس و رابط کاربری (API & Dashboard)',
          components: ['Promotion Simulator UI', 'Alert Dispatcher', 'Reporting Gateway'],
          techStack: ['FastAPI', 'React 19', 'Tailwind CSS', 'Recharts'],
          description: 'رابط کاربری تعاملی برای شبیه‌سازی و تصویب پروموشن‌ها'
        }
      ],
      recommendedStack: {
        backend: 'FastAPI / Python (Microservices)',
        database: 'ClickHouse (برای لاگ میلیاردی تراکنش‌ها) + PostgreSQL (تنظیمات کمپین)',
        frontend: 'React 19 + Tailwind CSS + Recharts',
        aiMlEngine: 'LightGBM / PyTorch / Mixed-Integer Linear Programming (MILP)',
        dataPipeline: 'Kafka + Airflow',
        reasoning: 'پاسخ‌دهی در کسری از ثانیه به شبیه‌سازی کشش کالاها بدون فشار روی دیتابیس اصلی رفاه'
      }
    },
    pilotPlan: {
      targetBranches: '۲۰ شعبه منتخب هایپر و سوپر (۱۰ شعبه آزمون + ۱۰ شعبه کنترل با ویژگی‌های همگن)',
      controlGroupMethod: 'متدولوژی شبه‌آزمایشی تفاضل در تفاضل (Difference-in-Differences) جهت اثبات قطعی ارزش افزوده AI',
      durationWeeks: 8,
      sprints: [
        {
          sprint: 1,
          title: 'اسپرینت ۱: اتصال داده‌های POS و پاکسازی تاریخچه فروش ۲ سال گذشته',
          durationWeeks: 2,
          deliverables: ['اتصال امن به دیتابیس فروش رفاه', 'پایپ‌لاین ETL آماده', 'تطبیق رده‌های کالایی'],
          milestone: 'داده‌های تمیز شده در پایگاه تحلیلی مستقر شد'
        },
        {
          sprint: 2,
          title: 'اسپرینت ۲: آموزش مدل کشش قیمت و توسعه شبیه‌ساز تحت وب',
          durationWeeks: 2,
          deliverables: ['مدل کشش کالیبره‌شده برای ۲۰۰ کالای پروموشنی', 'نسخه اولیه پنل مدیر بازرگانی'],
          milestone: 'شبیه‌ساز تحلیلی در اختیار تیم بازرگانی رفاه قرار گرفت'
        },
        {
          sprint: 3,
          title: 'اسپرینت ۳: اجرای آزمایشی کمپین بهینه‌شده در ۱۰ شعبه آزمون',
          durationWeeks: 2,
          deliverables: ['اعمال تخفیفات بازنگری‌شده', 'پایش روزانه فروش و مارجین', 'هشدار کانیبالیزاسیون'],
          milestone: 'اولین کمپین هوشمند در شعب پایلوت فعال شد'
        },
        {
          sprint: 4,
          title: 'اسپرینت ۴: استخراج گزارش تفاضل در تفاضل و محاسبه سود خالص',
          durationWeeks: 2,
          deliverables: ['گزارش نهایی شاخص COM-09', 'تاییدیه تیم حسابداری مدیریت رفاه'],
          milestone: 'اثبات افزایش سود ناخالص و ارائه به هیئت مدیره'
        }
      ],
      acceptanceCriteria: [
        'افزایش نسبت COM-09 به بالای ۱٫۵۰ در شعب آزمون در مقایسه با شعب کنترل',
        'کاهش حداقل ۳۰ درصدی پروموشن‌های زیان‌ده (COM-10)',
        'تطابق کامل گزارش‌های سامانه با اسناد حسابداری رفاه'
      ]
    },
    monorepoStructure: [
      'refah-c2-promotion-engine/',
      '├── services/',
      '│   ├── elasticity-api/        # سرویس تخمین کشش و شبیه‌ساز',
      '│   ├── cannibalization-guard/ # ماژول پایش همنوع‌خواری کالاها',
      '│   └── diff-in-diff-reporter/ # موتور ارزیابی شعب کنترل و آزمون',
      '├── pipelines/',
      '│   └── etl-pos-ingestion/     # خط‌لوله دریافت لاگ تراکنش‌های صندوق',
      '└── frontend/',
      '    └── manager-cockpit/       # داشبورد تحت وب مدیران بازرگانی رفاه'
    ],
    strategicPitchWhyUs: [
      'طراحی اختصاصی توسط شرکت شبکه هوشمند ابتکار ویستا برنده جوایز ملی هوش مصنوعی ایران',
      'عدم وابستگی به نرم‌افزارهای خارجی و تضمین کامل محرمانگی داده‌های فروش رفاه',
      'امکان استقرار بر بستر سرورهای داخلی رفاه با مدل قرارداد تضمین عملکرد (Success-fee)'
    ]
  },

  {
    id: 'B5',
    title: 'انبارگردانی چرخه‌ای، پاکسازی رکورد موجودی و کشف ناموجودی پنهان',
    subtitle: 'سامانه تشخیص هوشمند مغایرت شلف و سیستم و شناسایی کالاهای نامرئی (Ghost Stock)',
    domain: 'SCM',
    wave: 1,
    isFlagship: false,
    iconName: 'Boxes',
    executiveSummary: 'کاهش خطاهای سیتماتیک موجودی کالا در شعب و انبارهای رفاه. پدیده کالای نامرئی (Ghost Stock) زمانی رخ می‌دهد که سیستم کالا را موجود نشان می‌دهد اما در قفسه نیست و مشتری دست خالی برمی‌گردد. این سامانه با تحلیل رفتار فروش و ناهنجاری‌ها، اولویت شمارش را هوشمند می‌کند.',
    problemStatement: [
      'مغایرت ۳۰٪ تا ۴۵٪ میان موجودی ثبت‌شده در نرم‌افزار انبار و موجودی فیزیکی واقعی در شلف‌ها',
      'توقف فروش کالاهای پرفروش به دلیل قرار نگرفتن در قفسه با وجود ثبت موجودی در سیستم',
      'هزینه‌های گزاف انبارگردانی‌های سراسری و تعطیلی دوره‌ای شعب',
      'سرقت، شکستگی و ضایعات ثبت‌نشده که سیستم از آن‌ها بی‌خبر است'
    ],
    solutionOverview: [
      'الگوریتم تشخیص ناهنجاری (Anomaly Detection) در الگوی فروش بر مبنای توزیع پواسون',
      'سامانه انبارگردانی چرخه‌ای هدایت‌شده (Directed Cycle Counting) مبتنی بر ریسک کالاها',
      'اپلیکیشن موبایل پرسنل انبار برای اسکن سریع و شمارش روزانه ۱۰ قلم پرریسک',
      'به‌روزرسانی لحظه‌ای ضریب صحت موجودی (Inventory Record Accuracy - IRA)'
    ],
    capabilities: [
      'شناسایی فوری کالاهای دارای فروش صفر با موجودی ثبت‌شده بالا (Ghost Stock Alert)',
      'بهبود نرخ دقت موجودی کالاها (SCM-05) از ۶۲٪ به بالای ۹۱٪',
      'اولویت‌بندی خودکار اقلام برای بازرسی پرسنل شعب بر اساس ارزش ریالی و احتمال مغایرت',
      'کاهش زمان کسری قفسه و بازگشت فروش از دست رفته'
    ],
    financials: {
      benefitCostRatio: 4.76,
      estimatedAnnualBenefitBillionToman: 32.0,
      pilotCostMillionToman: 380,
      paybackMonths: 2.8,
      formulaBreakdown: {
        affectedBase: 'فروش از دست رفته سالانه ناشی از ناموجودی پنهان قفسه (۵۰+ میلیارد تومان)',
        improvementRate: 'کاهش ۶۵٪ در مدت زمان سرگردانی کالای نامرئی در سیستم',
        coverageRatio: 'پوشش کلیه کالاهای پرگردش (Fast Moving FMCG)',
        attributionRatio: 'ضریب اسناد ۵۰٪'
      }
    },
    kpis: [
      {
        code: 'SCM-05',
        title: 'دقت رکوردهای موجودی سیستم (Inventory Record Accuracy - IRA)',
        unit: 'درصد (%)',
        baseline: '۶۲٪',
        target: '۹۱٪+',
        description: 'درصد انطباق کامل موجودی شمارش‌شده فیزیکی با موجودی پایگاه داده رفاه.'
      },
      {
        code: 'SCM-06',
        title: 'میانگین زمان کشف کالای نامرئی (Ghost Stock Discovery Time)',
        unit: 'روز',
        baseline: '۲۴ روز',
        target: 'کمتر از ۲ روز',
        description: 'مدت زمانی که طول می‌کشد تا سیستم بفهمد کالایی که در سیستم ثبت است در قفسه وجود ندارد.'
      },
      {
        code: 'SCM-07',
        title: 'هزینه انبارگردانی به ازای هر شعبه',
        unit: 'درصد کاهش (%)',
        baseline: 'مبنای ۱۰۰٪',
        target: 'کاهش ۴۵٪',
        description: 'صرفه‌جویی در نفرساعت و عدم نیاز به تعطیلی فروشگاه با روش شمارش چرخه‌ای هوشمند.'
      }
    ],
    architecture: {
      adrTitle: 'ADR-B5: پردازش برخط لاگ فروش و مدل یادگیری بیزین ناهنجاری',
      adrText: 'استفاده از مدل‌های بیزین پویا برای محاسبه احتمال ناموجود بودن فیزیکی کالا با هر تراکنشی که در ساعات پرتردد ثبت نمی‌شود. این ماژول بدون بار اضافه روی POS، لاگ‌ها را در پایان هر ساعت تحلیل می‌کند.',
      dataFlow: [
        '۱. استخراج لاگ فروش هر SKU به تفکیک ساعت و شعبه',
        '۲. مقایسه فروش با امید ریاضی تقاضا بر مبنای تاریخچه مشابه',
        '۳. محاسبه امتیاز ناهنجاری (Anomaly Score 0-100)',
        '۴. ارسال ماموریت شمارش سریع به موبایل سرپرست انبار شعبه',
        '۵. ثبت تاییدیه یا اصلاح خودکار موجودی در ERP'
      ],
      layers: [
        {
          layer: 'موتور تشخیص ناهنجاری (Anomaly Detection)',
          components: ['Zero-Sales Detector', 'Poisson Likelihood Scorer', 'Shrinkage Risk Estimator'],
          techStack: ['Python', 'FastAPI', 'SciPy', 'PostgreSQL'],
          description: 'محاسبه احتمال مغایرت و ناموجودی پنهان'
        },
        {
          layer: 'اپلیکیشن تبلت/موبایل پرسنل انبار',
          components: ['PWA Mobile Scanner', 'Barcode Validator', 'Discrepancy Resolver'],
          techStack: ['React PWA', 'Tailwind', 'ZXing Scanner'],
          description: 'رابط کاربری سریع برای شمارش ۵ دقیقه‌ای روزانه'
        }
      ],
      recommendedStack: {
        backend: 'FastAPI / Python',
        database: 'PostgreSQL + Redis (برای کش سریع موجودی)',
        frontend: 'React PWA (نصب آسان روی هر گوشی پرسنل)',
        aiMlEngine: 'Bayesian Changepoint Detection + Random Forest Classifier',
        dataPipeline: 'Celery + Redis Broker',
        reasoning: 'سبک، کم‌حجم و قابل اجرا بر روی گوشی‌های شخصی یا بارکدخوان‌های دستی موجود در شعب'
      }
    },
    pilotPlan: {
      targetBranches: '۱۵ شعبه پرتردد در ۲ منطقه جغرافیایی',
      controlGroupMethod: 'شمارش متناوب و مقایسه نرخ فروش کالاهای مشکوک با شعب بدون دستیار B5',
      durationWeeks: 6,
      sprints: [
        {
          sprint: 1,
          title: 'اسپرینت ۱: اتصال سرویس ناهنجاری به لاگ صندوق‌های شعب پایلوت',
          durationWeeks: 2,
          deliverables: ['مدل آماری کالیبره‌شده', 'تعریف آستانه هشدار'],
          milestone: 'سیستم اولین هشدارهای ناموجودی پنهان را تولید کرد'
        },
        {
          sprint: 2,
          title: 'اسپرینت ۲: تحویل وب‌اپلیکیشن شمارش چرخه‌ای به انبارداران',
          durationWeeks: 2,
          deliverables: ['اپلیکیشن موبایل', 'آموزش پرسنل ۱۵ شعبه'],
          milestone: 'شمارش روزانه ۱۰ قلم پرریسک در شعب آغاز شد'
        },
        {
          sprint: 3,
          title: 'اسپرینت ۳: سنجش رشد دقت IRA و بازگشت فروش اقلام نامرئی',
          durationWeeks: 2,
          deliverables: ['گزارش تحلیلی کاهش کسری قفسه'],
          milestone: 'ارائه گزارش موفقیت پایلوت به معاونت زنجیره تامین رفاه'
        }
      ],
      acceptanceCriteria: ['ارتقای دقت موجودی کالاها به بیش از ۸۸٪ و کشف بیش از ۸۰٪ ناموجودی‌های پنهان در کمتر از ۴۸ ساعت']
    },
    monorepoStructure: [
      'refah-b5-ghost-stock/',
      '├── backend/               # سرویس تحلیل ناهنجاری و صدور دستور شمارش',
      '├── mobile-pwa/            # اپلیکیشن موبایل شمارش چرخه‌ای پرسنل',
      '└── dashboard/             # پنل نظارتی مدیر لجستیک و انبارها'
    ],
    strategicPitchWhyUs: ['معماری داده‌محور اختصاصی شبکه هوشمند ابتکار ویستا با تمرکز بر حل بحران کسری قفسه هایپرمارکت‌ها']
  },

  {
    id: 'B1',
    title: 'سامانه پیش‌بینی تقاضا و سفارش‌گذاری خودکار زنجیره تامین',
    subtitle: 'موتور یادگیری عمیق پیش‌بینی تقاضای شعب، مدیریت موجودی اطمینان و بهینه‌سازی سفارشات تامین‌کنندگان',
    domain: 'SCM',
    wave: 1,
    isFlagship: false,
    iconName: 'TrendingUp',
    executiveSummary: 'کاهش خواب سرمایه در انبارها و جلوگیری از ناموجودی اقلام پرفروش با پیش‌بینی دقیق روزانه تقاضا به تفکیک هر شعبه بر اساس متغیرهای تقویمی، فصلی، آب و هوا و پروموشن‌ها.',
    problemStatement: [
      'انباشت بیش از حد کالاهای کندگردش و خواب سرمایه سنگین در انبارهای مرکزی و شعب',
      'کمبود و کسری کالاهای تندمصرف در روزهای پیک آخر هفته و ایام خاص (نوروز، ماه رمضان)',
      'خطای بالای ۴۰ درصدی مدل‌های سنتی میانگین متحرک (Moving Average) در برآورد تقاضا'
    ],
    solutionOverview: [
      'موتور یادگیری عمیق زمانی (Temporal Fusion Transformers & LightGBM)',
      'تزریق متغیرهای بیرونی: مناسبت‌های تقویمی، حقوق بازنشستگان، وضعیت جوی و فاصله تا شعب رقیب',
      'تولید خودکار سفارش خرید بهینه (Auto-Replenishment Orders) برای تامین‌کنندگان'
    ],
    capabilities: [
      'کاهش خطای پیش‌بینی تقاضا (WAPE) تا ۳۵٪',
      'محاسبه خودکار نقطه سفارش مجدد و ذخیره اطمینان پویا (Dynamic Safety Stock)',
      'اتصال مستقیم به سامانه تدارکات و صدور پیش‌فاکتورهای خرید'
    ],
    financials: {
      benefitCostRatio: 4.2,
      estimatedAnnualBenefitBillionToman: 41.0,
      pilotCostMillionToman: 450,
      paybackMonths: 3.0,
      formulaBreakdown: {
        affectedBase: 'هزینه کل موجودی انبارها و کسری‌های تامین (۱۰۰+ میلیارد تومان)',
        improvementRate: 'کاهش ۲۰٪ در موجودی مازاد و افزایش ۱۵٪ در پوشش تقاضای واقعی',
        coverageRatio: 'پوشش کلیه کالاهای اساسی و تندمصرف رفاه',
        attributionRatio: 'ضریب اسناد ۵۰٪'
      }
    },
    kpis: [
      {
        code: 'SCM-01',
        title: 'خطای وزنی میانگین پیش‌بینی تقاضا (WAPE)',
        unit: 'درصد (%)',
        baseline: '۳۸٪',
        target: 'کمتر از ۱۴٪',
        description: 'میزان خطای قدرمطلق وزنی پیش‌بینی تقاضا در مقایسه با فروش واقعی.'
      },
      {
        code: 'SCM-02',
        title: 'نرخ تکمیل تقاضا (Order Fill Rate)',
        unit: 'درصد (%)',
        baseline: '۸۱٪',
        target: '۹۵٪+',
        description: 'درصد اقلام درخواستی شعب که به موقع توسط زنجیره تامین تامین شده‌اند.'
      }
    ],
    architecture: {
      adrTitle: 'ADR-B1: خط‌لوله پیش‌بینی سلسله‌مراتبی و استنتاج دسته‌ای شبانه',
      adrText: 'پیش‌بینی سلسله‌مراتبی از سطح ملی، استانی، شعبه و SKU با ترکیب روش‌های یادگیری تقویتی و تطبیق Bottom-up جهت اطمینان از سازگاری ارقام مالی.',
      dataFlow: ['تراکنش‌های تاریخی POS', 'متغیرهای تقویم و هواشناسی', 'موتور TFT/LightGBM', 'پیش‌نویس سفارش تدارکات'],
      layers: [
        {
          layer: 'موتور یادگیری ماشین سری‌های زمانی',
          components: ['Feature Engineering Pipeline', 'LightGBM / TFT Forecaster', 'Hierarchical Reconciler'],
          techStack: ['Python', 'Dask', 'PyTorch Forecasting', 'PostgreSQL'],
          description: 'مدل‌سازی سری‌های زمانی فروش با ده‌ها فیچر تقویمی و پروموشنی'
        }
      ],
      recommendedStack: {
        backend: 'Python / FastAPI + Celery',
        database: 'TimescaleDB / PostgreSQL',
        frontend: 'React Analytics Dashboard',
        aiMlEngine: 'LightGBM + Temporal Fusion Transformers (TFT)',
        dataPipeline: 'Airflow + dbt',
        reasoning: 'دقت فوق‌العاده بالا در داده‌های حجیم خرده‌فروشی با قابلیت توضیح‌پذیری'
      }
    },
    pilotPlan: {
      targetBranches: '۳۰ شعبه در یک استان معین (مثلاً خراسان رضوی یا اصفهان)',
      controlGroupMethod: 'مقایسه کسری کالا و خواب موجودی با ۳۰ شعبه موازی کنترل',
      durationWeeks: 8,
      sprints: [
        {
          sprint: 1,
          title: 'اسپرینت ۱: تجمیع تاریخچه ۳ ساله فروش و ساخت فیچرهای تقویمی',
          durationWeeks: 3,
          deliverables: ['خط‌لوله مهندسی داده'],
          milestone: 'آموزش مدل اولیه'
        },
        {
          sprint: 2,
          title: 'اسپرینت ۲: راه‌اندازی سفارش‌گذاری خودکار آزمایشی برای اقلام لبنی و روغنی',
          durationWeeks: 3,
          deliverables: ['پنل سفارشات پیشنهادی'],
          milestone: 'شروع سفارش‌گذاری مبتنی بر AI'
        },
        {
          sprint: 3,
          title: 'اسپرینت ۳: سنجش کاهش خواب انبار و حذف کسری در ساعات شلوغی',
          durationWeeks: 2,
          deliverables: ['گزارش بهبود شاخص WAPE'],
          milestone: 'تاییدیه معاونت بازرگانی رفاه'
        }
      ],
      acceptanceCriteria: ['کاهش حداقل ۵۰ درصدی خطای WAPE در دسته‌های آزمون']
    },
    monorepoStructure: ['refah-b1-demand-forecasting/', '├── ml-training/', '└── replenishment-service/'],
    strategicPitchWhyUs: ['الگوریتم‌های بومی مهندسی‌شده توسط شبکه هوشمند ابتکار ویستا منطبق بر عادات خرید جامعه ایرانی']
  },

  {
    id: 'A3',
    title: 'پلتفرم آموزش ضمن خدمت سازمانی رفاه، کلاس‌های آنلاین، وبینار و سامانه LMS/TMS با مربی هوش مصنوعی',
    subtitle: 'پلتفرم جامع آموزش پرسنل، میکرولرنینگ روزانه، شبیه‌ساز مکالمه با مشتری شاکی و وبینار مدیران',
    domain: 'ACADEMY',
    wave: 1,
    isFlagship: true,
    iconName: 'GraduationCap',
    executiveSummary: 'ارتقای مهارت بیش از ۸۰۰۰ نفر از پرسنل فروشگاهی، صندوق‌داران و مدیران شعب رفاه با پلتفرم آموزش ضمن خدمت. این سامانه با ترکیب میکرولرنینگ ۳ دقیقه‌ای، شبیه‌ساز صوتی-متنی مربی هوش مصنوعی برای تمرین تعامل با مشتری و وبینارهای آنلاین سراسری، زمان آموزش پرسنل را از ۲۸ روز به کمتر از ۱۰ روز می‌رساند.',
    problemStatement: [
      'هزینه‌های سرسام‌آور آموزش حضوری و اعزام مدرس به ۵۰۰+ شعبه در سراسر کشور',
      'نرخ بالای جابجایی (Turnover) پرسنل فروشگاهی و زمان‌بر بودن آموزش نیروهای جدید',
      'بروز اشتباهات مکرر در برخورد با مشتریان شاکی در صندوق و آسیب به اعتبار برند رفاه',
      'نبود یک بستر پایدار و بدون قطعی برای جلسات آنلاین و وبینارهای سراسری مدیران مناطق'
    ],
    solutionOverview: [
      'پلتفرم آموزش ضمن خدمت رفاه بر بستر وب و اپلیکیشن موبایل با کپسول‌های میکرولرنینگ تعاملی',
      'مربی هوش مصنوعی شبیه‌ساز تعاملات فروشگاهی (AI Roleplay & Voice Coach)',
      'سامانه جامع مدیریت آموزش و شایستگی‌ها (LMS / TMS) با گواهینامه دیجیتال',
      'بستر وبینار و کلاس‌های آنلاین سراسری با قابلیت استخراج خودکار مصوبات جلسه'
    ],
    capabilities: [
      'تمرین تعاملی سناریوهای سخت (اعتراض به قیمت، کالای تاریخ‌گذشته، خرابی کارتخوان)',
      'کاهش زمان آمادگی عملیاتی پرسنل جدید (HRM-03) از ۲۸ روز به ۹ روز',
      'ارزیابی آنی لحن، رفتار، انطباق با منشور اخلاقی رفاه و نمره‌دهی هوشمند',
      'کلاس‌های آنلاین با حضور همزمان صدها مدیر شعبه بدون نیاز به نرم‌افزارهای خارجی'
    ],
    financials: {
      benefitCostRatio: 4.8,
      estimatedAnnualBenefitBillionToman: 24.5,
      pilotCostMillionToman: 390,
      paybackMonths: 2.9,
      formulaBreakdown: {
        affectedBase: 'هزینه‌های سالانه آموزش، جذب مجدد نیرو و خطاهای اجرایی صندوق (۳۰+ میلیارد تومان)',
        improvementRate: 'کاهش ۶۵٪ در هزینه‌های لجستیک آموزش و کاهش ۴۰٪ در اشتباهات پرسنل',
        coverageRatio: 'پوشش ۸۰۰۰ نفر از پرسنل و مدیران شعب رفاه',
        attributionRatio: 'ضریب اسناد ۵۰٪'
      }
    },
    kpis: [
      {
        code: 'HRM-03',
        title: 'زمان آمادگی عملیاتی پرسنل تازه استخدام (Time-to-Productivity)',
        unit: 'روز',
        baseline: '۲۸ روز',
        target: '۹ روز',
        description: 'مدت زمانی که یک صندوق‌دار یا متصدی جدید به سطح تسلط استاندارد رفاه می‌رسد.'
      },
      {
        code: 'HRM-04',
        title: 'نرخ رضایت خریداران از رفتار صندوق‌داران (CSAT)',
        unit: 'درصد (%)',
        baseline: '۶۸٪',
        target: '۸۹٪+',
        description: 'امتیاز رضایت مشتریان از نحوه تکریم، سرعت و پاسخگویی پرسنل صندوق.'
      },
      {
        code: 'HRM-05',
        title: 'سرانه ساعت آموزش فعال پرسنل در ماه',
        unit: 'دقیقه در ماه',
        baseline: '۱۵ دقیقه',
        target: '۱۲۰ دقیقه (میکرولرنینگ مستمر)',
        description: 'میزان یادگیری مفید بدون خستگی با کپسول‌های ۳ دقیقه‌ای روزانه.'
      }
    ],
    architecture: {
      adrTitle: 'ADR-A3: پلتفرم یکپارچه میکرولرنینگ، شبیه‌ساز مکالمه مبتنی بر LLM و استریم وبینار',
      adrText: 'استفاده از مدل‌های زبانی فارسی با پشتیبانی از گفتار به متن (STT) و متن به گفتار (TTS) جهت ایجاد مربی صوتی-متنی هوشمند برای تمرین نقش‌آفرینی پرسنل. کلاس‌های آنلاین با معماری WebRTC پایدار طراحی شده‌اند.',
      dataFlow: [
        '۱. انتخاب سناریوی آموزشی توسط صندوق‌دار در اپلیکیشن (مثلاً مشتری شاکی از فاکتور)',
        '۲. ایجاد مکالمه شبیه‌سازی‌شده توسط مدل زبانی هوش مصنوعی با صدای طبیعی',
        '۳. پاسخ صوتی یا متنی پرسنل و تحلیل بلادرنگ توسط مربی AI',
        '۴. صدور کارنامه شایستگی و ثبت خودکار در پروفایل سازمانی TMS پرسنل رفاه'
      ],
      layers: [
        {
          layer: 'پلتفرم LMS/TMS هسته',
          components: ['Course Engine', 'Quiz Engine', 'Competency Tracker', 'Certificate Generator'],
          techStack: ['Node.js', 'NestJS', 'PostgreSQL', 'Redis'],
          description: 'مدیریت استاندارد SCORM، محتوای آموزشی و سوابق مهارتی'
        },
        {
          layer: 'موتور مربی هوشمند تعاملی (AI Roleplay & Voice Coach)',
          components: ['Persian LLM Dialogue Agent', 'Scenario Evaluator', 'Speech-to-Text / TTS'],
          techStack: ['Local LLM / Gemini API', 'WebRTC', 'Vector Database'],
          description: 'تمرین سناریوهای چالش‌برانگیز فروش با بازخورد آنی'
        },
        {
          layer: 'زیرساخت جلسات آنلاین و وبینار سازمانی',
          components: ['Live Virtual Classroom', 'Whiteboard', 'Smart AI Minutes Summary'],
          techStack: ['WebRTC', 'LiveKit / Jitsi Core', 'React Frontend'],
          description: 'جلسات بدون قطعی مدیران شعب و وبینارهای سراسری'
        }
      ],
      recommendedStack: {
        backend: 'NestJS / TypeScript + Python AI Worker',
        database: 'PostgreSQL + Milvus (برای پایگاه دانش و اسناد سازمانی رفاه)',
        frontend: 'React 19 + Tailwind CSS + PWA Mobile Support',
        aiMlEngine: 'Gemini 2.5 Flash / Custom Retail Dialogue Models',
        dataPipeline: 'Redis Streams + MinIO (ذخیره‌سازی ویدیوها و مدیا)',
        reasoning: 'بهترین تجربه کاربری روی گوشی پرسنل با کمترین مصرف اینترنت و پاسخ‌دهی بلادرنگ'
      }
    },
    pilotPlan: {
      targetBranches: '۵۰ شعبه در ۳ منطقه مختلف (۵۰۰ نفر از پرسنل صندوق و مدیران شعب)',
      controlGroupMethod: 'سنجش عملکرد فروش و خطاهای صندوق در شعب مجهز به آکادمی هوشمند در برابر شعب با آموزش سنتی',
      durationWeeks: 6,
      sprints: [
        {
          sprint: 1,
          title: 'اسپرینت ۱: بارگذاری محتوای مهارتی پایه و آماده‌سازی اپلیکیشن PWA',
          durationWeeks: 2,
          deliverables: ['۱۰ کپسول میکرولرنینگ صندوق‌داری و چیدمان', 'ورود اطلاعات پرسنل پایلوت'],
          milestone: 'اپلیکیشن در دسترس ۵۰۰ پرسنل قرار گرفت'
        },
        {
          sprint: 2,
          title: 'اسپرینت ۲: فعال‌سازی مربی هوش مصنوعی و شبیه‌ساز مشتری',
          durationWeeks: 2,
          deliverables: ['ماژول تمرین مکالمه هوشمند با خریدار شاکی', 'سیستم امتیازدهی روزانه'],
          milestone: 'تمرین‌های هوش مصنوعی توسط پرسنل آغاز شد'
        },
        {
          sprint: 3,
          title: 'اسپرینت ۳: ارزیابی ارتقای عملکرد و گزارش مدیریتی به مدیرعامل',
          durationWeeks: 2,
          deliverables: ['تحلیل کاهش خطاهای صندوق و رشد رضایت مشتریان'],
          milestone: 'ارائه کارنامه تحول منابع انسانی رفاه'
        }
      ],
      acceptanceCriteria: ['مشارکت بالای ۸۰٪ پرسنل پایلوت و کاهش حداقل ۵۰٪ در زمان آموزش نیروهای تازه وارد']
    },
    monorepoStructure: [
      'refah-smart-academy/',
      '├── lms-core/              # سرور مدیریت دوره‌ها و ارزیابی‌ها',
      '├── ai-tutor-service/      # سرویس هوش مصنوعی شبیه‌سازی مکالمات',
      '├── meeting-platform/      # ماژول جلسات و وبینارهای آنلاین',
      '└── pwa-client/            # اپلیکیشن پرسنل و پنل مدیران'
    ],
    strategicPitchWhyUs: ['تجربه پیاده‌سازی سامانه‌های پیشرفته آموزش سازمانی و پلتفرم دانشی HooshGate توسط تیم ویستا']
  },

  // =========================================================================
  // موج ۲: هوشمندسازی شعب، باشگاه مشتریان و سرمایه انسانی (Wave 2)
  // =========================================================================
  {
    id: 'C1',
    title: 'موتور شخصی‌سازی، تحلیل سبد خرید و وفاداری هوشمند باشگاه مشتریان (CRM AI)',
    subtitle: 'خوشه‌بندی هوشمند مشتریان، کشف قواعد همبستگی کالاها و پیشنهاد اختصاصی پیامکی/اپلیکیشنی',
    domain: 'COM',
    wave: 2,
    isFlagship: false,
    iconName: 'Sparkles',
    executiveSummary: 'افزایش اندازه سبد خرید (Basket Size) و وفاداری خریداران با ارسال پیشنهادات تخفیفی هدفمند مبتنی بر سوابق خرید واقعی هر مشتری باشگاه رفاه.',
    problemStatement: [
      'ارسال پیامک‌های تبلیغاتی یکسان و انبوه به تمام اعضای باشگاه بدون توجه به ترجیحات فردی',
      'نرخ تبدیل بسیار پایین کمپین‌های پیامکی عمومی و تحمیل هزینه بیهوده به شرکت رفاه',
      'عدم بهره‌برداری از الگوهای خرید مکمل اقلام در سبد مشتریان'
    ],
    solutionOverview: [
      'خوشه‌بندی رفتار خرید مشتریان بر اساس مدل RFM و یادگیری ماشین',
      'موتور تحلیل قواعد وابستگی سبد (Market Basket Analysis - Apriori/FP-Growth)',
      'سامانه ارسال خودکار تخفیفات شخصی‌سازی شده در زمان‌های طلایی خرید هر فرد'
    ],
    capabilities: [
      'افزایش میانگین مبلغ سبد خرید تا ۱۵٪',
      'شناسایی و فعال‌سازی مجدد مشتریان در معرض ریزش (Churn Prevention)',
      'پیشنهاد خودکار اقلام مکمل هنگام ثبت کارت باشگاه در صندوق'
    ],
    financials: {
      benefitCostRatio: 3.8,
      estimatedAnnualBenefitBillionToman: 36.0,
      pilotCostMillionToman: 400,
      paybackMonths: 3.5,
      formulaBreakdown: {
        affectedBase: 'درآمد حاصل از اعضای باشگاه مشتریان رفاه (چند صد میلیارد تومان)',
        improvementRate: 'افزایش ۶٪ در ارزش طول عمر مشتری (LTV) و ۲ برابر شدن نرخ کلیک پیامک‌ها',
        coverageRatio: 'پوشش کل اعضای دارای سابقه خرید در باشگاه رفاه',
        attributionRatio: 'ضریب اسناد ۵۰٪'
      }
    },
    kpis: [
      {
        code: 'COM-01',
        title: 'رشد میانگین ارزش سبد خرید اعضای وفادار',
        unit: 'درصد (%)',
        baseline: '۰٪',
        target: '+۱۴٫۲٪',
        description: 'افزایش فروش اقلام مکمل متصل به ترجیحات مشتری.'
      },
      {
        code: 'COM-02',
        title: 'نرخ بازگشت مشتریان در خطر ریزش (Win-back Rate)',
        unit: 'درصد (%)',
        baseline: '۸٪',
        target: '۲۶٪',
        description: 'موفقیت تخفیف‌های هدفمند در بازگرداندن مشتریانی که ۶۰ روز خرید نکرده‌اند.'
      }
    ],
    architecture: {
      adrTitle: 'ADR-C1: موتور یادگیری تقویتی و خوشه‌بندی سبد مشتریان',
      adrText: 'محاسبه پروفایل خریدار به صورت Batch هفتگی و تولید توصیه‌های لحظه‌ای از طریق میکروسرویس سریع با اتصال به سیستم پیامک و اپ باشگاه مشتریان رفاه.',
      dataFlow: ['تغذیه تراکنش‌های باشگاه', 'خوشه‌بندی و پروفایل‌سازی', 'تولید کمپین‌های خودکار'],
      layers: [
        {
          layer: 'موتور تحلیل داده‌های مشتری',
          components: ['RFM Calculator', 'Basket Association Engine'],
          techStack: ['Spark / Python', 'PostgreSQL'],
          description: 'پردازش میلیون‌ها تراکنش باشگاه مشتریان'
        }
      ],
      recommendedStack: {
        backend: 'FastAPI + Python',
        database: 'PostgreSQL + Redis',
        frontend: 'React Dashboard',
        aiMlEngine: 'Collaborative Filtering + XGBoost',
        dataPipeline: 'Celery / Airflow',
        reasoning: 'دسترسی سریع به پروفایل میلیون‌ها مشتری'
      }
    },
    pilotPlan: {
      targetBranches: '۱۰۰ هزار مشتری عضو باشگاه در شعب منتخب تهران و اصفهان',
      controlGroupMethod: 'ارسال پیامک عمومی برای گروه کنترل در برابر پیامک شخصی‌سازی‌شده برای گروه آزمون با اندازه‌گیری دقیق نرخ خرید',
      durationWeeks: 6,
      sprints: [
        {
          sprint: 1,
          title: 'اسپرینت ۱: پروفایل‌سازی و استخراج الگوهای خرید',
          durationWeeks: 2,
          deliverables: ['خوشه‌بندی مشتریان پایلوت'],
          milestone: 'پروفایل‌ها آماده شد'
        },
        {
          sprint: 2,
          title: 'اسپرینت ۲: اجرای کمپین‌های پیامکی هوشمند A/B Testing',
          durationWeeks: 4,
          deliverables: ['گزارش تحلیلی نرخ بازگشت و سود خالص فزاینده'],
          milestone: 'اثبات ۲٫۵ برابری بازدهی پیامک‌های هوشمند'
        }
      ],
      acceptanceCriteria: ['افزایش حداقل ۱۰ درصدی در نرخ مراجعه مجدد مشتریان پایلوت']
    },
    monorepoStructure: ['refah-crm-ai/', '├── recommendation-engine/', '└── campaign-dispatcher/'],
    strategicPitchWhyUs: ['استفاده از هوش مصنوعی بومی شبکه هوشمند ابتکار ویستا برای حداکثرسازی ارزش باشگاه مشتریان رفاه']
  },

  {
    id: 'C3',
    title: 'بینایی ماشین و مانیتورینگ هوشمند شعب، صفوف و قفسه‌ها (CV Store)',
    subtitle: 'پایش ویدیویی لحظه‌ای قفسه‌ها، هیت‌مپ تردد، تشخیص صف طولانی صندوق و کاهش کسری کالا با دوربین‌های موجود',
    domain: 'OPS',
    wave: 2,
    isFlagship: false,
    iconName: 'Eye',
    executiveSummary: 'بهره‌برداری از دوربین‌های مداربسته موجود در شعب رفاه بدون نیاز به تعویض سخت‌افزار، برای تشخیص خودکار ناموجودی قفسه، ازدحام در صف صندوق و بهینه‌سازی مسیر حرکت خریداران.',
    problemStatement: [
      'خالی ماندن قفسه‌های پرفروش در ساعات شلوغی با وجود موجود بودن کالا در انبار پشتیبان شعبه',
      'ایجاد صف‌های طولانی صندوق و نارضایتی خریداران بدون آگاهی سریع مدیریت شعبه',
      'کسری و مفقودی کالاها به دلیل خطاهای چیدمان در شلف‌ها'
    ],
    solutionOverview: [
      'پردازش تصاویر دوربین‌های موجود با هوش مصنوعی بینایی ماشین (Edge Computer Vision)',
      'تشخیص آنی نقاط خالی روی قفسه (Planogram Compliance & Shelf Out-of-Stock)',
      'سیستم هشدار هوشمند باز کردن صندوق جدید در زمان شلوغی'
    ],
    capabilities: [
      'هشدار پیامکی به کارگر چیدمان در کمتر از ۵ دقیقه پس از خالی شدن شلف',
      'بهینه‌سازی توزیع صندوق‌داران و کاهش زمان انتظار مشتریان تا ۴۰٪',
      'پایش نقشه‌های حرارتی (Heatmaps) تردد خریداران در هایپرمارکت'
    ],
    financials: {
      benefitCostRatio: 3.4,
      estimatedAnnualBenefitBillionToman: 28.5,
      pilotCostMillionToman: 490,
      paybackMonths: 3.8,
      formulaBreakdown: {
        affectedBase: 'فروش از دست رفته ناشی از خالی بودن قفسه و انصراف از خرید در صف (۸۰+ میلیارد)',
        improvementRate: 'کاهش ۶۰٪ در مدت زمان خالی ماندن قفسه‌های حساس',
        coverageRatio: 'هایپرهای منتخب با بیشترین متراژ و تردد',
        attributionRatio: 'ضریب اسناد ۵۰٪'
      }
    },
    kpis: [
      {
        code: 'OPS-01',
        title: 'میانگین زمان واکنش به قفسه خالی (Shelf Out-of-Stock Duration)',
        unit: 'دقیقه',
        baseline: '۲۴۰ دقیقه (۴ ساعت)',
        target: '۱۵ دقیقه',
        description: 'کاهش زمان خالی ماندن قفسه از طریق ارسال هشدار تصویری هوشمند.'
      },
      {
        code: 'OPS-02',
        title: 'میانگین طول صف صندوق‌ها در ساعات پیک',
        unit: 'نفر',
        baseline: '۷٫۴ نفر',
        target: '۳٫۱ نفر',
        description: 'تخصیص پویا و فراخوانی صندوق‌داران کمکی با تشخیص بینایی ماشین.'
      }
    ],
    architecture: {
      adrTitle: 'ADR-C3: خط‌لوله پردازش تصویر Edge و استنتاج مرکزی',
      adrText: 'تغذیه استریم RTSP دوربین‌های شعب به پردازنده مینی‌سرور محلی شعبه با فریم‌ریت بهینه‌شده برای حفظ ترافیک شبکه.',
      dataFlow: ['RTSP Stream', 'YOLO Object Detection', 'Shelf Region Tracker', 'Alert Dispatcher'],
      layers: [
        {
          layer: 'استنتاج تصویر و پایش شلف',
          components: ['Edge RTSP Grabber', 'YOLO Detection Engine', 'Queue Length Estimator'],
          techStack: ['Python', 'OpenCV', 'YOLO', 'TorchServe'],
          description: 'شناسایی قفسه‌ها و شمارش افراد'
        }
      ],
      recommendedStack: {
        backend: 'FastAPI / Python + WebSockets',
        database: 'PostgreSQL + InfluxDB (سری زمانی صف و شلف)',
        frontend: 'React Video Monitoring Dashboard',
        aiMlEngine: 'YOLOv11 + Custom Shelf Segmentation',
        dataPipeline: 'RabbitMQ',
        reasoning: 'کمترین مصرف پهنای باند و بیشترین سازگاری با دوربین‌های فعلی شعب رفاه'
      }
    },
    pilotPlan: {
      targetBranches: '۵ هایپرمارکت اصلی رفاه در تهران',
      controlGroupMethod: 'مقایسه زمان رسیدگی به قفسه و فروش دسته‌های پرفروش در برابر دوره مشابه سال قبل',
      durationWeeks: 8,
      sprints: [
        {
          sprint: 1,
          title: 'اسپرینت ۱: اتصال به دوربین‌های سالن و برچسب‌گذاری نواحی قفسه‌ها',
          durationWeeks: 3,
          deliverables: ['نقشه دیجیتال شلف‌های شعبه پایلوت'],
          milestone: 'سیستم بینایی تصویر پایدار شد'
        },
        {
          sprint: 2,
          title: 'اسپرینت ۲: فعال‌سازی هشدارهای صف و قفسه خالی',
          durationWeeks: 3,
          deliverables: ['داشبورد مانیتورینگ زنده و سیستم نوتیفیکیشن'],
          milestone: 'ارسال هشدارهای عملیاتی به مدیران فروشگاه'
        },
        {
          sprint: 3,
          title: 'اسپرینت ۳: ارزیابی خروجی‌های بهره‌وری و کاهش انصراف از خرید',
          durationWeeks: 2,
          deliverables: ['گزارش بهبود رضایت و فروش'],
          milestone: 'ارائه دستاوردها به هیئت مدیره'
        }
      ],
      acceptanceCriteria: ['کاهش بیش از ۷۰٪ در مدت زمان ناموجودی شلف‌های تحت پوشش پایلوت']
    },
    monorepoStructure: ['refah-vision-ai/', '├── edge-worker/', '└── cloud-dashboard/'],
    strategicPitchWhyUs: ['پیاده‌سازی روی دوربین‌های موجود رفاه بدون نیاز به ۱ ریال هزینه خرید دوربین یا حسگر جدید']
  },

  {
    id: 'A1',
    title: 'سامانه هوشمند جذب، غربالگری رزومه، ارزیابی شایستگی و شیفت‌بندی پرسنل شعب (Smart HR AI)',
    subtitle: 'موتور هوش مصنوعی ارزیابی متقاضیان استخدام، انطباق رزومه با نیاز شعب و زمان‌بندی بهینه شیفت‌های پرسنل',
    domain: 'HRM',
    wave: 2,
    isFlagship: false,
    iconName: 'UserCheck',
    executiveSummary: 'کاهش هزینه‌های جذب و گزینش سالانه صدها نیروی فروشگاهی و صندوق‌دار در رفاه، ارزیابی خودکار ویدیو و رزومه‌ها بر اساس مدل شایستگی و شیفت‌بندی هوشمند متناسب با پیش‌بینی ساعات پیک خرید هایپرمارکت‌ها.',
    problemStatement: [
      'انباشت هزاران رزومه کاغذی یا متفرقه و فرآیند کند و پرهزینه غربالگری توسط تیم‌های منابع انسانی مناطق',
      'تطابق پایین مهارت‌های نیروهای پذیرفته‌شده با نیاز واقعی صندوق و انبار',
      'شیفت‌بندی نامناسب پرسنل: شلوغی بیش از حد پرسنل در ساعات خلوت و کمبود نیرو در ساعات شلوغی آخر هفته'
    ],
    solutionOverview: [
      'موتور NLP فارسی برای استخراج مشخصات و امتیازدهی خودکار به رزومه‌های استخدامی',
      'ماژول مصاحبه ویدیویی خودکار با تحلیل هوشمند پاسخ‌ها و انطباق با پروفایل شایستگی رفاه',
      'الگوریتم بهینه‌سازی شیفت‌بندی پرسنل (Workforce Shift Optimizer) متصل به پیش‌بینی تقاضای فروشگاه'
    ],
    capabilities: [
      'کاهش زمان استخدام (Time-to-Hire) از ۴۵ روز به کمتر از ۷ روز',
      'تخصیص بهینه پرسنل در ساعات اوج فروش بدون نیاز به اضافه‌کاری‌های غیرضروری',
      'تشخیص خودکار شایستگی‌های کلیدی: دقت، روابط عمومی و پایداری شغلی'
    ],
    financials: {
      benefitCostRatio: 3.6,
      estimatedAnnualBenefitBillionToman: 19.5,
      pilotCostMillionToman: 350,
      paybackMonths: 3.2,
      formulaBreakdown: {
        affectedBase: 'هزینه‌های فرآیند جذب، غربالگری، اضافه‌کاری‌های شیفت و غیبت پرسنل (۲۵+ میلیارد)',
        improvementRate: 'کاهش ۶۰٪ در زمان غربالگری و بهبود ۱۵٪ در بهره‌وری ساعات کاری شعب',
        coverageRatio: 'پوشش کل شعب و مراکز توزیع رفاه',
        attributionRatio: 'ضریب اسناد ۵۰٪'
      }
    },
    kpis: [
      {
        code: 'HRM-01',
        title: 'زمان فرآیند استخدام و غربالگری پرسنل فروشگاهی (Time-to-Hire)',
        unit: 'روز',
        baseline: '۴۲ روز',
        target: '۶ روز',
        description: 'مدت زمان ثبت تقاضا تا گزینش نهایی با دستیار هوشمند.'
      },
      {
        code: 'HRM-02',
        title: 'نرخ انطباق شیفت‌های کاری با منحنی تردد مشتریان',
        unit: 'درصد (%)',
        baseline: '۵۴٪',
        target: '۸۸٪+',
        description: 'کاهش کمبود نیرو در ساعات پیک و مازاد نیرو در ساعات خلوت.'
      }
    ],
    architecture: {
      adrTitle: 'ADR-A1: موتور NLP تحلیل رزومه و مدل بهینه‌سازی خطی شیفت‌بندی',
      adrText: 'ترکیب مدل‌های زبانی فارسی برای پارس رزومه‌ها با الگوریتم‌های بهینه‌سازی خطی صحیح مختلط (MILP) برای برنامه‌ریزی هفتگی شیفت پرسنل شعب بر مبنای قوانین اداره کار و نیاز فروشگاه.',
      dataFlow: ['دریافت رزومه‌ها از پرتال استخدامی', 'امتیازدهی و غربالگری NLP', 'ارسال لیست برتر به مدیر شعبه', 'برنامه‌ریزی خودکار شیفت‌ها'],
      layers: [
        {
          layer: 'لایه پردازش رزومه و مصاحبه هوشمند',
          components: ['Resume Parser', 'Competency Scorer', 'Shift Scheduler'],
          techStack: ['Python', 'FastAPI', 'OR-Tools', 'PostgreSQL'],
          description: 'غربالگری خودکار و بهینه‌سازی برنامه کاری'
        }
      ],
      recommendedStack: {
        backend: 'FastAPI + Python',
        database: 'PostgreSQL',
        frontend: 'React HR Portal',
        aiMlEngine: 'Persian NLP + Google OR-Tools',
        dataPipeline: 'Celery',
        reasoning: 'انعطاف‌پذیری در پیاده‌سازی قوانین پیچیده شیفت‌بندی اداره کار و نیازهای متغیر هایپرمارکت‌ها'
      }
    },
    pilotPlan: {
      targetBranches: 'کلیه شعب استان تهران (جذب ۵۰۰ نیروی جدید و شیفت‌بندی ۲۰ هایپرمارکت)',
      controlGroupMethod: 'مقایسه زمان جذب و رضایت مدیران شعب با روش سنتی',
      durationWeeks: 6,
      sprints: [
        {
          sprint: 1,
          title: 'اسپرینت ۱: اتصال فرم‌های استخدامی و کالیبراسیون موتور شایستگی',
          durationWeeks: 2,
          deliverables: ['پنل غربالگری هوشمند'],
          milestone: 'غربالگری خودکار فعال شد'
        },
        {
          sprint: 2,
          title: 'اسپرینت ۲: راه‌اندازی ماژول شیفت‌بندی هوشمند هایپرمارکت‌ها',
          durationWeeks: 2,
          deliverables: ['برنامه شیفت هفتگی خودکار'],
          milestone: 'استقرار در شعب پایلوت'
        },
        {
          sprint: 3,
          title: 'اسپرینت ۳: ارزیابی بهره‌وری نیروی انسانی و گزارش خروجی',
          durationWeeks: 2,
          deliverables: ['گزارش کاهش اضافه‌کاری و تسریع جذب'],
          milestone: 'ارائه به معاونت منابع انسانی رفاه'
        }
      ],
      acceptanceCriteria: ['کاهش حداقل ۷۵ درصدی زمان غربالگری رزومه‌ها و افزایش رضایت مدیران شعب به بالای ۸۵٪']
    },
    monorepoStructure: ['refah-smart-hr/', '├── resume-screening/', '└── shift-optimizer/'],
    strategicPitchWhyUs: ['پلتفرم منابع انسانی توسعه‌یافته بر پایه استانداردهای بومی و مهندسی محصول DevCodeBase']
  },

  // =========================================================================
  // موج ۳: فرماندهی استراتژیک، ضدتقلب و لجستیک کلان (Wave 3)
  // =========================================================================
  {
    id: 'D1',
    title: 'مرکز فرماندهی راهبردی و برج مراقبت داده مدیرعامل (Executive AI Tower)',
    subtitle: 'داشبورد بلادرنگ تصمیم‌گیری استراتژیک، شبیه‌ساز مالی سود و زیان شعب و دستیار تحلیلی مدیرعامل',
    domain: 'OPS',
    wave: 3,
    isFlagship: false,
    iconName: 'LayoutDashboard',
    executiveSummary: 'پلتفرم جامع تجمیع داده‌های تمام ۵۰۰+ شعبه و زنجیره تامین رفاه در قالب یک داشبورد استراتژیک مدرن با هوش مصنوعی مولد، تحلیل سناریوهای What-If و ارائه هشدارهای زودهنگام ریسک برای مدیرعامل و هیئت مدیره.',
    problemStatement: [
      'گزارش‌های سنتی تاخیری و کاغذی که هفته‌ها بعد از وقوع رخدادها به دست مدیرعامل می‌رسد',
      'جزیره‌ای بودن اطلاعات بخش‌های بازرگانی، مالی، منابع انسانی و لجستیک',
      'عدم امکان پاسخ سریع به سوالات تحلیلی پیچیده مدیرعامل بدون نیاز به استعلام‌های چندروزه'
    ],
    solutionOverview: [
      'داشبورد لحظه‌ای سلامت عملکرد فروشگاه‌های رفاه با شاخص‌های ترکیبی هوشمند',
      'دستیار هوش مصنوعی راهبردی (AI Executive Advisor) جهت پرسش و پاسخ متنی/صوتی به زبان طبیعی',
      'موتور شبیه‌سازی مالی اثر تصمیمات کلان (مثلاً تغییر حاشیه سود کل یا جشنواره‌های ملی)'
    ],
    capabilities: [
      'پایش لحظه‌ای سودآوری، کسری‌ها و بهره‌وری هر استان و هر شعبه در نقشه جغرافیایی ایران',
      'پرسش آزاد مدیرعامل به زبان فارسی: «کدام ۵ شعبه در هفته گذشته بیشترین افت سود را داشته‌اند و چرا؟»',
      'تولید خودکار گزارش‌های تحلیلی مدیریتی برای جلسات هیئت مدیره در کمتر از ۱۰ ثانیه'
    ],
    financials: {
      benefitCostRatio: 3.1,
      estimatedAnnualBenefitBillionToman: 22.0,
      pilotCostMillionToman: 450,
      paybackMonths: 4.0,
      formulaBreakdown: {
        affectedBase: 'بهینه‌سازی تصمیم‌گیری‌های کلان و جلوگیری از تصمیمات استراتژیک اشتباه',
        improvementRate: 'تسریع ۱۰ برابری در کشف افت عملکرد شعب و اصلاح فرآیندها',
        coverageRatio: 'پوشش کلیه سطوح مدیریتی ستاد و مناطق رفاه',
        attributionRatio: 'ضریب اسناد ۵۰٪'
      }
    },
    kpis: [
      {
        code: 'EXEC-01',
        title: 'سرعت دسترسی مدیرعامل به تحلیل جامع علل رخدادها',
        unit: 'زمان',
        baseline: '۳ تا ۷ روز کاری',
        target: 'زیر ۵ ثانیه',
        description: 'پاسخ هوش مصنوعی به پرسش‌های تحلیلی از ترکیب داده‌های POS، تامین و پرسنل.'
      },
      {
        code: 'EXEC-02',
        title: 'نرخ کشف زودهنگام شعب دچار افت عملکرد قبل از بحرانی شدن',
        unit: 'درصد (%)',
        baseline: '۱۸٪',
        target: '۹۰٪+',
        description: 'سیستم هشدار پیشگیرانه هوش مصنوعی بر پایه تحلیل نوسانات شاخص‌ها.'
      }
    ],
    architecture: {
      adrTitle: 'ADR-D1: پلتفرم هوش داده یکپارچه و مدل زبانی تحلیل مدیریتی (Text-to-SQL & BI)',
      adrText: 'ترکیب موتورهای پرس‌وجوی ستونی با مدل‌های زبانی بزرگ (LLM) جهت تبدیل سوالات طبیعی فارسی مدیرعامل به کوئری‌های بهینه تحلیلی با امنیت کامل داده‌ها.',
      dataFlow: ['Data Lake/Warehouse', 'Semantic Layer', 'Text-to-SQL LLM Agent', 'Interactive Executive UI'],
      layers: [
        {
          layer: 'لایه معنایی و هوش مصنوعی استنتاجی',
          components: ['Natural Language Query Engine', 'Risk Early-Warning Analyzer', 'Board Report Generator'],
          techStack: ['Gemini 2.5 Pro / Flash', 'DuckDB / ClickHouse', 'FastAPI'],
          description: 'تبدیل زبان طبیعی فارسی به گزارش‌های عددی و نمودارهای دقیق'
        }
      ],
      recommendedStack: {
        backend: 'FastAPI + Node.js Gateway',
        database: 'ClickHouse + PostgreSQL',
        frontend: 'React 19 + Tailwind + Recharts + Leaflet Map',
        aiMlEngine: 'Gemini Generative AI + Semantic SQL Agent',
        dataPipeline: 'Airflow + dbt',
        reasoning: 'پاسخ‌دهی آنی به پیچیده‌ترین گزارش‌های کلان سازمانی'
      }
    },
    pilotPlan: {
      targetBranches: 'ستاد مرکزی و ۵۰ شعبه منتخب ۳ منطقه کشوری رفاه',
      controlGroupMethod: 'ارزیابی سرعت و دقت تصمیم‌گیری در جلسات هیئت مدیره',
      durationWeeks: 6,
      sprints: [
        {
          sprint: 1,
          title: 'اسپرینت ۱: اتصال لایه معنایی داده‌ها و شاخص‌های کلیدی',
          durationWeeks: 2,
          deliverables: ['نقشه شاخص‌های مالی، لجستیک و منابع انسانی'],
          milestone: 'داده‌های یکپارچه آماده تحلیل شد'
        },
        {
          sprint: 2,
          title: 'اسپرینت ۲: فعال‌سازی دستیار هوش مصنوعی و داشبورد نقشه شعب',
          durationWeeks: 2,
          deliverables: ['دستیار پرسش و پاسخ هوشمند فارسی برای مدیرعامل'],
          milestone: 'نسخه اولیه برج مراقبت در اختیار مدیرعامل قرار گرفت'
        },
        {
          sprint: 3,
          title: 'اسپرینت ۳: کالیبراسیون سناریوهای پیش‌بینی بحران و گزارش‌گیری خودکار',
          durationWeeks: 2,
          deliverables: ['تولید گزارش‌های هفتگی خودکار برای هیئت مدیره'],
          milestone: 'استقرار کامل نسخه اجرایی'
        }
      ],
      acceptanceCriteria: ['پاسخگویی دقیق دستیار هوشمند به بیش از ۹۰٪ سوالات رایج هیئت مدیره با استناد به داده‌های قطعی']
    },
    monorepoStructure: ['refah-control-tower/', '├── executive-dashboard/', '└── semantic-ai-agent/'],
    strategicPitchWhyUs: ['ارائه قدرت تحلیل بی‌سابقه به مدیریت ارشد رفاه توسط متخصصان شبکه هوشمند ابتکار ویستا']
  },

  {
    id: 'D2',
    title: 'سامانه هوشمند پایش و پیشگیری از تقلب و مغایرت در صندوق، انبار و اسناد (Fraud Loss Prevention)',
    subtitle: 'کشف الگوهای مشکوک ابطال فاکتور، تبانی در تخفیف، دستکاری بارنامه و کسری غیرعادی کالاها با الگوریتم‌های یادگیری ماشین',
    domain: 'OPS',
    wave: 3,
    isFlagship: false,
    iconName: 'ShieldAlert',
    executiveSummary: 'جلوگیری از هدررفت سالانه میلیاردها تومان ناشی از تقلب‌های صندوق، تبانی در تخفیفات، صدور فاکتورهای صوری و مغایرت‌های تحویل بارنامه در مراکز توزیع رفاه با پایش بلادرنگ الگوهای مشکوک.',
    problemStatement: [
      'وقوع الگوهای مشکوک تکرارشونده در صندوق‌ها (مانند ابطال‌های مشکوک فاکتور بعد از خروج مشتری)',
      'تبانی در اعمال تخفیفات پرسنلی یا دستکاری کدهای بارکد کالاهای گران‌قیمت',
      'تاخیر طولانی در کشف کسری‌های عمدی انبار تا زمان رسیدن انبارگردانی بعدی'
    ],
    solutionOverview: [
      'موتور یادگیری بدون ناظر (Unsupervised Anomaly Detection & Graph Analytics)',
      'پایش بلادرنگ کلیه تراکنش‌های صندوق و مقایسه با الگوهای پایه رفتاری صندوق‌داران',
      'تطبیق خودکار وزن باسکول، بارنامه و کالاهای ورودی به مراکز پخش با هوش مصنوعی'
    ],
    capabilities: [
      'تشخیص الگوهای تقلب با دقت بالای ۹۲٪ و کمترین میزان آلارم کاذب (False Positives)',
      'امتیازدهی به ریسک صندوق‌داران و کارشناسان انبار بر پایه ماتریس تخلفات',
      'کاهش حداقل ۳۰ درصدی در زیان ناشی از کسری‌های غیرموجه (Shrinkage Loss)'
    ],
    financials: {
      benefitCostRatio: 3.9,
      estimatedAnnualBenefitBillionToman: 26.0,
      pilotCostMillionToman: 390,
      paybackMonths: 3.1,
      formulaBreakdown: {
        affectedBase: 'میزان کل خسارت و کسری‌های ثبت‌شده ناشی از تقلب و خطا در زنجیره رفاه (۴۰+ میلیارد)',
        improvementRate: 'کاهش ۵۰٪ در تقلب‌های صندوق و اصلاح فوری فرآیندهای مالی',
        coverageRatio: 'پوشش کل شعب و مراکز پخش رفاه',
        attributionRatio: 'ضریب اسناد ۵۰٪'
      }
    },
    kpis: [
      {
        code: 'FRAUD-01',
        title: 'درصد کاهش خسارت ناشی از تقلب‌های صندوق و انبار (Shrinkage Reduction)',
        unit: 'درصد (%)',
        baseline: 'مبنای ۱۰۰٪',
        target: 'کاهش ۳۵٪',
        description: 'صرفه‌جویی خالص ناشی از کشف زودهنگام الگوهای دستکاری فاکتور و سرقت.'
      },
      {
        code: 'FRAUD-02',
        title: 'نرخ دقت کشف تقلب‌های واقعی (Precision)',
        unit: 'درصد (%)',
        baseline: '۳۲٪',
        target: '۸۸٪+',
        description: 'کاهش هشدارهای اشتباه و شناسایی دقیق تخلفات سازمان‌یافته.'
      }
    ],
    architecture: {
      adrTitle: 'ADR-D2: موتور گراف کاوی تراکنش‌ها و یادگیری بدون ناظر Isolation Forest',
      adrText: 'تحلیل ارتباطات متقابل میان اپراتورهای صندوق، مشتریان خاص، شیفت‌های کاری و اقلام مرجوعی از طریق دیتابیس گراف (Neo4j) و الگوریتم‌های کشف ناهنجاری پیشرفته.',
      dataFlow: ['استریم تراکنش‌های POS و ابطال‌ها', 'ساخت گراف تراکنش‌ها', 'مدل ناهنجاریابی', 'کارتابل بازرسی و حراست رفاه'],
      layers: [
        {
          layer: 'موتور پایش تقلب و گراف تراکنش',
          components: ['POS Stream Auditor', 'Graph Anomaly Detector', 'Audit Alert Queue'],
          techStack: ['Python', 'FastAPI', 'Neo4j / NetworkX', 'PostgreSQL'],
          description: 'پایش بلادرنگ و کشف تبانی‌های ساختاریافته'
        }
      ],
      recommendedStack: {
        backend: 'FastAPI + Python',
        database: 'PostgreSQL + Neo4j',
        frontend: 'React Audit Dashboard',
        aiMlEngine: 'Isolation Forest + Graph Neural Networks (GNN)',
        dataPipeline: 'Kafka + Celery',
        reasoning: 'کشف ارتباطات پنهان میان صندوق‌داران و تراکنش‌های مشکوک بدون ایجاد حساسیت بی‌مورد'
      }
    },
    pilotPlan: {
      targetBranches: '۲۰ شعبه دارای بالاترین نرخ کسری سالانه و ۲ مرکز پخش اصلی',
      controlGroupMethod: 'مقایسه نرخ کسری و ابطال‌های ناموجه در طول ۳ ماه پایلوت با دوره مشابه',
      durationWeeks: 8,
      sprints: [
        {
          sprint: 1,
          title: 'اسپرینت ۱: اتصال به لاگ ابطال و اصلاح فاکتورها در نرم‌افزار صندوق',
          durationWeeks: 3,
          deliverables: ['خط‌لوله استخراج داده‌های حساس'],
          milestone: 'مدل ناهنجاری آموزش دید'
        },
        {
          sprint: 2,
          title: 'اسپرینت ۲: تحویل کارتابل اختصاصی هشدارهای مشکوک به تیم بازرسی رفاه',
          durationWeeks: 3,
          deliverables: ['پنل کاربری حراست و بازرسی'],
          milestone: 'آغاز بررسی میدانی هشدارهای AI'
        },
        {
          sprint: 3,
          title: 'اسپرینت ۳: گزارش ارزیابی ریالی کسری‌های مهار شده',
          durationWeeks: 2,
          deliverables: ['گزارش بازگشت مالی به مدیرعامل'],
          milestone: 'تاییدیه معاونت بازرسی و حراست'
        }
      ],
      acceptanceCriteria: ['شناسایی موفق حداقل ۸۰٪ از موارد کسری عمدی و کاهش ۵۰ درصدی ابطال‌های مشکوک فاکتور']
    },
    monorepoStructure: ['refah-fraud-prevention/', '├── pos-auditor/', '└── inspection-portal/'],
    strategicPitchWhyUs: ['حفظ کامل محرمانگی داده‌ها و الگوریتم‌های بومی اختصاصی شرکت ویستا']
  },

  {
    id: 'SCM-2',
    title: 'بهینه‌سازی مسیرگان ناوگان توزیع، حمل‌ونقل و بارگیری مراکز پخش رفاه (Fleet Route & Dispatch AI)',
    subtitle: 'موتور هوش مصنوعی مسیریابی بهینه کامیونت‌های توزیع کالا، کاهش مصرف سوخت و زمان‌بندی دقیق تحویل به شعب',
    domain: 'SCM',
    wave: 3,
    isFlagship: false,
    iconName: 'Truck',
    executiveSummary: 'کاهش ۱۵٪ تا ۲۵٪ در هزینه‌های حمل‌ونقل و سوخت ناوگان لجستیک رفاه با بهینه‌سازی مسیرهای توزیع چندمقصدی، زمان‌بندی بارگیری بر اساس پنجره‌های زمانی شعب و تطبیق با ترافیک شهری.',
    problemStatement: [
      'برنامه‌ریزی دستی و سنتی مسیرهای پخش که منجر به پیمایش کیلومترهای اضافه و مصرف بیهوده سوخت می‌شود',
      'رسیدن کامیونت‌ها به شعب در ساعات اوج ترافیک یا زمان‌های عدم آمادگی انباردار برای تخلیه بار',
      'نبود سیستم پایش بلادرنگ تاخیرات ناوگان و اطلاع‌رسانی به مدیران فروشگاه‌ها'
    ],
    solutionOverview: [
      'موتور حل مسئله مسیریابی ناوگان با پنجره‌های زمانی (Vehicle Routing Problem with Time Windows - VRPTW)',
      'تطبیق با نقشه ترافیک زنده شهری و محدودیت‌های تردد کامیونت‌ها در کلان‌شهرها',
      'اپلیکیشن موبایل رانندگان توزیع با قابلیت مسیریابی گام‌به‌گام و ثبت امضای دیجیتال تحویل'
    ],
    capabilities: [
      'کاهش مصرف سوخت و استهلاک ناوگان پخش تا ۲۰٪',
      'افزایش نرخ تحویل به موقع بار (On-Time Delivery) به بالای ۹۵٪',
      'بهینه‌سازی چیدمان داخل کانتینر بار (3D Packing Optimization) بر مبنای ترتیب تخلیه در شعب'
    ],
    financials: {
      benefitCostRatio: 3.5,
      estimatedAnnualBenefitBillionToman: 21.0,
      pilotCostMillionToman: 380,
      paybackMonths: 3.3,
      formulaBreakdown: {
        affectedBase: 'هزینه‌های سالانه حمل، سوخت، کرایه ناوگان استیجاری و استهلاک خودروهای پخش (۳۰+ میلیارد)',
        improvementRate: 'کاهش ۱۸٪ در مسافت پیموده شده کل ناوگان توزیع',
        coverageRatio: 'پوشش کلیه مراکز توزیع منطقه‌ای رفاه',
        attributionRatio: 'ضریب اسناد ۵۰٪'
      }
    },
    kpis: [
      {
        code: 'LOG-01',
        title: 'نرخ تحویل به موقع بار به شعب (On-Time In-Full - OTIF)',
        unit: 'درصد (%)',
        baseline: '۷۱٪',
        target: '۹۴٪+',
        description: 'درصد محموله‌هایی که در پنجره زمانی مقرر بدون تاخیر تحویل شده‌اند.'
      },
      {
        code: 'LOG-02',
        title: 'میانگین کیلومتر پیمایش به ازای هر تن بار توزیع‌شده',
        unit: 'کیلومتر / تن',
        baseline: '۴۲ کم / تن',
        target: '۳۱ کم / تن',
        description: 'کاهش مسافت طی شده با ادغام بهینه سفارشات چند شعبه در یک مسیر.'
      }
    ],
    architecture: {
      adrTitle: 'ADR-SCM2: موتور فراابتکاری بهینه‌سازی مسیر و سرویس نقشه اختصاصی',
      adrText: 'استفاده از الگوریتم‌های جستجوی ممنوعه (Tabu Search) و ژنتیک همراه با کتابخانه‌های OR-Tools برای تولید برنامه‌های بهینه مسیر در کمتر از ۳ دقیقه برای صدها خودروی پخش.',
      dataFlow: ['سفارشات آماده ارسال از انبار مرکزی', 'موتور مسیریابی و چیدمان بار', 'تخصیص به رانندگان در اپلیکیشن', 'پایش زنده موقعیت GPS'],
      layers: [
        {
          layer: 'موتور محاسباتی مسیریابی ناوگان',
          components: ['VRPTW Solver', '3D Load Optimizer', 'Live Traffic Matrix'],
          techStack: ['Python', 'FastAPI', 'Google OR-Tools', 'PostgreSQL / PostGIS'],
          description: 'محاسبه سریع‌ترین و کم‌هزینه‌ترین مسیرهای توزیع'
        }
      ],
      recommendedStack: {
        backend: 'FastAPI + Python',
        database: 'PostgreSQL + PostGIS',
        frontend: 'React Dispatcher Map Dashboard',
        aiMlEngine: 'Genetic Algorithms + Google OR-Tools Routing',
        dataPipeline: 'Celery + RabbitMQ',
        reasoning: 'بهینه‌سازی توزیع بار در زمان واقعی با کمترین زمان انتظار رانندگان'
      }
    },
    pilotPlan: {
      targetBranches: 'مرکز پخش اصلی تهران و توزیع به ۸۰ شعبه استان تهران و البرز',
      controlGroupMethod: 'مقایسه مصرف سوخت و زمان کل ماموریت‌ها با دوره ۳ ماهه قبل',
      durationWeeks: 6,
      sprints: [
        {
          sprint: 1,
          title: 'اسپرینت ۱: ورود اطلاعات مکانی شعب، پنجره‌های تحویل بار و ناوگان',
          durationWeeks: 2,
          deliverables: ['نقشه دیجیتال شبکه توزیع'],
          milestone: 'سیستم آماده مسیریابی شد'
        },
        {
          sprint: 2,
          title: 'اسپرینت ۲: فعال‌سازی اعزام هوشمند و اپلیکیشن رانندگان برای ۳۰ خودرو',
          durationWeeks: 2,
          deliverables: ['اپلیکیشن رانندگان و داشبورد دیسپچ'],
          milestone: 'آغاز توزیع با مسیرهای پیشنهادی AI'
        },
        {
          sprint: 3,
          title: 'اسپرینت ۳: سنجش صرفه‌جویی کیلومتراژ و افزایش رضایت مدیران شعب',
          durationWeeks: 2,
          deliverables: ['گزارش تحلیلی کاهش هزینه‌های سوخت'],
          milestone: 'ارائه به معاونت لجستیک و مدیرعامل'
        }
      ],
      acceptanceCriteria: ['کاهش حداقل ۱۵ درصدی در مسافت کل پیمایش ناوگان پایلوت و ارتقای تحویل به موقع به بالای ۹۰٪']
    },
    monorepoStructure: ['refah-fleet-ai/', '├── routing-optimizer/', '└── driver-app/'],
    strategicPitchWhyUs: ['تخصص تیم شبکه هوشمند ابتکار ویستا در لجستیک هوشمند و پلتفرم‌های مقیاس‌پذیر سازمانی']
  }
];

export const PROMOTION_SAMPLE_ITEMS = [
  {
    id: 'sku-101',
    skuCode: 'DAIRY-9021',
    title: 'شیر پرچرب ۱ لیتری پاک',
    category: 'لبنیات',
    currentPrice: 38000,
    costPrice: 31000,
    regularWeeklySales: 12500,
    currentDiscountPercent: 20,
    elasticity: 2.1,
    cannibalizationRisk: 'high' as const,
    cannibalizesSku: 'شیر کم‌چرب و بطری غنی‌شده (افت فروش ۱۸٪)',
    statusNote: 'تخفیف ۲۰٪ فعلی زیان‌ده است؛ توصیه به کاهش عمق تخفیف به ۸٪'
  },
  {
    id: 'sku-102',
    skuCode: 'DET-4412',
    title: 'مایع لباسشویی اکتیو ۲ لیتری',
    category: 'شوینده و بهداشتی',
    currentPrice: 145000,
    costPrice: 98000,
    regularWeeklySales: 4200,
    currentDiscountPercent: 15,
    elasticity: 1.8,
    cannibalizationRisk: 'low' as const,
    statusNote: 'پروموشن بسیار سودآور با نسبت بازده ۱٫۹۲x'
  },
  {
    id: 'sku-103',
    skuCode: 'OIL-7703',
    title: 'روغن سرخ‌کردنی ۱٫۵ لیتری بهار',
    category: 'کالاهای اساسی',
    currentPrice: 92000,
    costPrice: 84000,
    regularWeeklySales: 18000,
    currentDiscountPercent: 12,
    elasticity: 0.9,
    cannibalizationRisk: 'medium' as const,
    cannibalizesSku: 'روغن ذرت و کلزا با حاشیه سود بالا',
    statusNote: 'کشش قیمتی پایین؛ تخفیف فقط سود را می‌سوزاند'
  },
  {
    id: 'sku-104',
    skuCode: 'SNACK-1109',
    title: 'چیپس کتل فلفلی چی توز',
    category: 'تنقلات و شیرینی',
    currentPrice: 45000,
    costPrice: 28000,
    regularWeeklySales: 6800,
    currentDiscountPercent: 25,
    elasticity: 2.6,
    cannibalizationRisk: 'low' as const,
    statusNote: 'حاشیه سود بالا، کشش قیمتی عالی با افزایش فروش فزاینده ۲٫۲ برابر'
  },
  {
    id: 'sku-105',
    skuCode: 'MEAT-3301',
    title: 'گوشت چرخ‌کرده ۹۰۰ گرمی مهیا پروتئین',
    category: 'پروتئینی و تازه',
    currentPrice: 340000,
    costPrice: 305000,
    regularWeeklySales: 2100,
    currentDiscountPercent: 18,
    elasticity: 1.4,
    cannibalizationRisk: 'medium' as const,
    statusNote: 'تخفیف حاشیه سود را به زیر هزینه سربار رسانده است'
  }
];

export const SMART_ACADEMY_MODULES = [
  {
    id: 'course-1',
    title: 'اصول زرین تکریم مشتری، حل تعارض و مدیریت شکایات در صندوق‌های رفاه',
    category: 'خدمات مشتریان و صندوق',
    roleTarget: 'صندوق‌داران، متصدیان اطلاعات و پرسنل ارتباط با مشتری',
    durationMin: 25,
    level: 'کاربردی',
    aiFeature: 'شبیه‌ساز صوتی-متنی هوش مصنوعی برای تمرین مواجهه با مشتری شاکی و عصبانی',
    simulationTopic: 'خریدار نسبت به عدم اعمال تخفیف فاکتور اعتراض تند دارد',
    description: 'آموزش جامع کنترل هیجانات، تکنیک گوش‌دادن فعال (HEAT Model)، نحوه مدیریت مغایرت قیمت شلف و صندوق، و استانداردهای پاسخگویی حرفه‌ای طبق منشور کرامت مشتریان فروشگاه‌های رفاه.',
    syllabus: [
      {
        section: 'فصل اول: روانشناسی مشتری و منشور کرامت رفاه',
        topics: ['شناخت تایپ‌های شخصیتی خریداران (عجول، مردد، حساس به قیمت)', 'زبان بدن و ارتباط چشمی در ۵ ثانیه اول ورود به صندوق', 'اصول ۵‌گانه تکریم مشتری و اثر وفادارسازی بر LTV']
      },
      {
        section: 'فصل دوم: متدولوژی ۴ مرحله‌ای HEAT در حل تعارض',
        topics: ['مرحله Hear: گوش دادن کامل بدون قطع کلام مشتری', 'مرحله Empathize: همدلی صمیمانه و درک اضطراب خریدار', 'مرحله Apologize: عذرخواهی سازمانی بدون فرافکنی تقصیر', 'مرحله Troubleshoot: حل مشکل مالی در کمتر از ۹۰ ثانیه']
      },
      {
        section: 'فصل سوم: پروتکل اصلاح مغایرت قیمت فاکتور با شلف',
        topics: ['استعلام آنی بارکد در سامانه POS رفاه', 'اعمال تخفیف با کلید مجوز سرپرست شیفت', 'پروتکل پذیرش کالای مرجوعی بدون اتلاف وقت صف']
      }
    ],
    videoInfo: {
      title: 'فیلم آموزشی: سناریوی شبیه‌سازی مواجهه با مشتری خشمگین و فن بیان طلایی',
      duration: '۱۲:۳۰ دقیقه',
      quality: 'Full HD 1080p',
      videoType: 'ویدیو تعاملی با پرسش‌های حین پخش (Interactive Video)',
      sampleTimestampKeypoints: [
        { time: '۰۱:۱۵', title: 'تحلیل خطای صندوق‌دار در پاسخ تند' },
        { time: '۰۵:۴۰', title: 'اجرای تکنیک کلامی آرام‌سازی و معذرت‌خواهی' },
        { time: '۰۹:۱۰', title: 'اصلاح سیستمی فاکتور و بدرقه خشنود مشتری' }
      ]
    },
    imageInfo: {
      diagramTitle: 'اینفوگرافیک منشور زرین ارتباط با مشتری در صندوق رفاه',
      caption: 'چارت گام‌به‌گام نحوه پاسخگویی و ۴ کلمه کلیدی آرام‌بخش در مواجهه با نارضایتی',
      bannerUrl: 'https://images.unsplash.com/photo-1556742049-0a67e55722c0?auto=format&fit=crop&w=800&q=80'
    },
    pdfInfo: {
      filename: 'Refah-Customer-Excellence-Handbook.pdf',
      title: 'دستورالعمل جامع تکریم مشتری و حل تعارضات صندوق رفاه',
      pageCount: 24,
      fileSize: '۳٫۸ مگابایت',
      chapters: [
        '۱. کدهای رفتاری پرسنل صندوق رفاه',
        '۲. ماتریس برخورد با ۱۰ موقعیت بحرانی مشتریان',
        '۳. نمونه دیالوگ‌های استاندارد خوش‌آمدگویی و بدرقه',
        '۴. چک‌لیست امتیازدهی سرپرستان به کیفیت مکالمه'
      ],
      sampleExcerpt: '«پرسنل صندوق در فروشگاه‌های رفاه سفیران اصلی برند هستند. هیچ فاکتور اشتباهی نباید با توجیه مقصر دانستن همکار چیدمان پاسخ داده شود؛ مسئولیت سازمانی تا رفع کامل ابهام با متصدی صندوق است.»'
    },
    keyTakeaways: [
      'همیشه در شروع پاسخگویی از عبارت «کاملاً حق با شماست، در کمتر از یک دقیقه بررسی می‌کنم» استفاده شود.',
      'تماس چشمی و لبخند در زمان ورود خریدار به باجه الزامی است.',
      'در صورت اصرار مشتری به صحبت با مدیر، بدون بحث بیهوده سرپرست شیفت با پیجر فراخوانده شود.'
    ]
  },
  {
    id: 'course-2',
    title: 'چیدمان استاندارد قفسه‌ها (Planogram)، اصول FIFO و به حداقل‌رسانی ضایعات',
    category: 'چیدمان و انبارداری',
    roleTarget: 'سرپرستان سالن، چیدمان‌کاران و متصدیان شلف',
    durationMin: 30,
    level: 'کاربردی',
    aiFeature: 'آزمون بینایی ماشین برای تشخیص خطاهای چیدمان و عدم رعایت FIFO در تصاویر قفسه',
    simulationTopic: 'شناسایی کالای دارای تاریخ انقضای نزدیک در میان ردیف‌ها',
    description: 'آموزش کامل نقشه‌خوانی پلانگرام، رعایت محدوده خط دید مشتری (Eye-Level Golden Zone)، پیاده‌سازی متدولوژی گردش موجودی اولین ورودی اولین خروجی (FIFO) و تفکیک ضایعات فله و بسته‌بندی.',
    syllabus: [
      {
        section: 'فصل اول: استانداردهای چیدمان مدرن ریتیل (Planogram)',
        topics: ['مفهوم پلانگرام و اصول چیدمان عمودی/افقی', 'ناحیه طلایی قفسه (فاصله ۹۰ تا ۱۴۰ سانتی‌متری از کف)', 'رو به جلوسازی (Facing) و پُر نشان دادن عمق شلف']
      },
      {
        section: 'فصل دوم: اجرای دقیق قانون FIFO در لبنیات و پروتئین',
        topics: ['تکنیک قرار دادن بارهای جدید در انتهای ردیف', 'برچسب‌گذاری کالاهای تاریخ‌نزدیک (Short-Expiry)', 'جلوگیری از انباشت کالای سنگین روی اقلام شکننده']
      },
      {
        section: 'فصل سوم: نگهداری لیبل قیمت الکترونیک و اتیکت شلف',
        topics: ['انطباق بارکد کالا با اتیکت زیر قفسه', 'بررسی روزانه باتری و نمایشگر قیمت ESL', 'گزارش‌دهی عدم موجودی یا کجی تگ‌های قیمت']
      }
    ],
    videoInfo: {
      title: 'فیلم آموزشی: تکنیک‌های حرفه‌ای فیسینگ و چیدمان استاندارد راهروهای سوپرمارکت',
      duration: '۱۵:۰۰ دقیقه',
      quality: 'Full HD 1080p',
      videoType: 'ویدیو مستند کارگاهی با نماهای Before / After از شعب پایلوت',
      sampleTimestampKeypoints: [
        { time: '۰۲:۳۰', title: 'اصول فیسینگ محصولات تتراپک و کنسروی' },
        { time: '۰۷:۱۵', title: 'اجرای عملی FIFO در قفسه ماست و شیر' },
        { time: '۱۱:۴۵', title: 'نصب صحیح تگ‌های قیمت و اتیکت‌های زرد تخفیف' }
      ]
    },
    imageInfo: {
      diagramTitle: 'آناتومی قفسه فروشگاهی و نواحی چهارگانه جذب نگاه مشتری',
      caption: 'تقسیم‌بندی قفسه به مناطق طلایی، دسترس آسان، دید بالا و دسترسی خمیده کف',
      bannerUrl: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80'
    },
    pdfInfo: {
      filename: 'Refah-Planogram-FIFO-Standards.pdf',
      title: 'کتابچه راهنمای استاندارد چیدمان شلف و انبارش کالا در رفاه',
      pageCount: 32,
      fileSize: '۵٫۱ مگابایت',
      chapters: [
        '۱. اصول علمی چیدمان کالا در ۵ گروه اصلی',
        '۲. جدول زمان‌بندی بررسی تاریخ انقضای گروه‌های فسادپذیر',
        '۳. استاندارد فاصله‌گذاری و ارتفاع بهینه بین طبقات',
        '۴. چک‌لیست روزانه بازرسی راهروها قبل از بازگشایی فروشگاه'
      ],
      sampleExcerpt: '«چیدمان اشتباه، عامل اصلی بیش از ۳۰٪ از خسارات تاریخ‌گذشتگی اقلام لبنی در شعب است. هرگز بار جدید بدون بیرون کشیدن اقلام قبلی در جلوی قفسه چیده نمی‌شود.»'
    },
    keyTakeaways: [
      'کالاهای دارای حاشیه سود بالاتر در قفسه‌های طبقه ۳ و ۴ (هم‌سطح چشم خریدار) قرار گیرند.',
      'برچسب تخفیف زرد رنگ دقیقاً در گوشه سمت چپ اتیکت شلف بدون پوشاندن بارکد الصاق شود.',
      'پایش کالاهای با انقضای کمتر از ۳ روز هر روز صبح ساعت ۷:۳۰ الزامی است.'
    ]
  },
  {
    id: 'course-3',
    title: 'تسلط بر سامانه صندوق رفاه، صدور بارکد، کالابرگ الکترونیک و بن‌های اعتباری',
    category: 'سامانه‌ها و پرداخت',
    roleTarget: 'کلیه صندوق‌داران، سوپروایزرهای مالی و مسئولین حسابداری شعب',
    durationMin: 25,
    level: 'تخصصی',
    aiFeature: 'شبیه‌ساز کار با رابط کاربری POS رفاه و رفع کدهای خطای پرتکرار تراکنش',
    simulationTopic: 'رفع خطای عدم اتصال کارت کالابرگ و تسویه فاکتور چندبخشی',
    description: 'راهنمای گام‌به‌گام کاربری نرم‌افزار صندوق فروشگاهی رفاه، روش اعمال بن‌کارت‌های حکمت/تارا/اسنپ‌پی، ثبت طرح کالابرگ فجرانه الکترونیک، پروتکل ابطال فاکتور و تسویه حساب پایان شیفت.',
    syllabus: [
      {
        section: 'فصل اول: فرآیند ورود، افتتاح صندوق و تنظیم شیفت',
        topics: ['احراز هویت و ورود با نام کاربری اختصاصی', 'شمارش موجودی اولیه نقدی تنخواه صندوق (Cash Float)', 'تست چاپگر فاکتور و بارکدخوان نوری']
      },
      {
        section: 'فصل دوم: ثبت کالابرگ الکترونیک و کیف‌پول‌های اعتباری',
        topics: ['استعلام سهمیه یارانه ۱۱ قلم کالای اساسی', 'ثبت همزمان پرداخت نقدی + اعتبار تارا + کالابرگ', 'مدیریت خطاهای بانکی شاپرک و استرداد وجه ناموفق']
      },
      {
        section: 'فصل سوم: پروتکل‌های امنیتی ابطال فاکتور و مغایرت صندوق',
        topics: ['دستورالعمل ابطال فاکتور با تأیید بارکد سوپروایزر', 'ثبت فاکتورهای شرکتی و سازمانی با شناسه ملی', 'بستن شیفت و چاپ گزارش X و Z و واریز نقدی']
      }
    ],
    videoInfo: {
      title: 'فیلم آموزشی: صفر تا صد کار با نرم‌افزار صندوق و روش‌های پرداخت ترکیبی',
      duration: '۱۸:۲۰ دقیقه',
      quality: 'Full HD 1080p',
      videoType: 'اسکرین‌کست شبیه‌ساز POS رفاه با توضیحات صوتی مدرس ارشد مالی',
      sampleTimestampKeypoints: [
        { time: '۰۳:۱۰', title: 'نحوه اعمال بن حکمت و کالابرگ هوشمند' },
        { time: '۰۸:۴۰', title: 'تقسیم مبلغ خرید (Split Payment) بین دو کارت' },
        { time: '۱۴:۱۵', title: 'فرآیند صحیح چاپ گزارش روزانه و مغایرت‌گیری' }
      ]
    },
    imageInfo: {
      diagramTitle: 'فلوچارت عیب‌یابی خطاهای دستگاه پوز و کارت‌خوان‌های متصل به صندوق',
      caption: 'راهنمای سریع کدهای خطای خطوط بانکی و نحوه بازنشانی امن پورت سریال POS',
      bannerUrl: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80'
    },
    pdfInfo: {
      filename: 'Refah-POS-Cashier-Operations-Manual.pdf',
      title: 'دفترچه راهنمای جامع عملیات صندوق و سامانه‌های اعتباری رفاه',
      pageCount: 40,
      fileSize: '۶٫۲ مگابایت',
      chapters: [
        '۱. معرفی کامل میانبرهای صفحه‌کلید صندوق رفاه',
        '۲. راهنمای تصویری تسویه بن‌های سازمانی و کارت‌های اعتباری',
        '۳. دستورالعمل جامع مغایرت‌گیری صندوق در پایان شیفت',
        '۴. مقررات امنیتی نگهداری رمزهای عبور و صندوق نقدی'
      ],
      sampleExcerpt: '«هرگز نام کاربری و رمز عبور صندوق در اختیار صندوق‌دار دیگری قرار نگیرد. هرگونه مغایرت کسری یا فزونی صندوق در سیستم ثبت و توسط ناظر مالی شعبه تأیید می‌گردد.»'
    },
    keyTakeaways: [
      'کارت کالابرگ تنها برای اقلام مجاز مشمول طرح ملی قابل استفاده است.',
      'ابطال هرگونه ردیف فاکتور بالای ۲۰۰ هزار تومان نیازمند ثبت اثر انگشت یا کارت سوپروایزر است.',
      'رسید چاپی تراکنش‌های ناموفق باید ضمیمه گزارش شیفت روزانه شود.'
    ]
  },
  {
    id: 'course-4',
    title: 'تکنیک‌های طلایی بیش‌فروشی (Upselling) و فروش مکمل (Cross-Selling)',
    category: 'فروش و بازاریابی',
    roleTarget: 'صندوق‌داران، فروشندگان بخش لوازم خانگی و پوشاک، متصدیان فروشگاه',
    durationMin: 20,
    level: 'کاربردی',
    aiFeature: 'مربی صوتی هوش مصنوعی برای سنجش لحن کلام و پیشنهاد جملات طلایی ۵ ثانیه‌ای',
    simulationTopic: 'پیشنهاد شکلات یا شوینده پروموشنی همزمان با سبد خرید خانواده',
    description: 'اصول روانشناسی خرید در نقطه صندوق، روش‌های افزایش اندازه سبد خرید (Basket Size) بدون ایجاد مزاحمت، شناخت ترکیب‌های خرید مکمل و معرفی جذاب آفرها و جشنواره‌های فصلی رفاه.',
    syllabus: [
      {
        section: 'فصل اول: روانشناسی خرید تکانشی (Impulse Buying)',
        topics: ['چرا خریدار در صف صندوق تصمیم به خرید سریع می‌گیرد؟', 'نقش اقلام دم‌دستی (آدامس، باطری، تنقلات) در سودآوری', 'معرفی بدون اصرار و در زمان طلایی صدور فاکتور']
      },
      {
        section: 'فصل دوم: نقشه اقلام مکمل در سبد مصرفی خانوار',
        topics: ['جفت‌های طلایی: ماکارونی + سس / چای + نبات / پودر لباسشویی + نرم‌کننده', 'معرفی جشنواره تخفیف پله‌ای (یکی بخر دوتا ببر)', 'کارت کلامی اختصاصی پرسنل صندوق در جشنواره‌های ماهانه']
      },
      {
        section: 'فصل سوم: پرهیز از اشتباهات رایج در فروش مکمل',
        topics: ['تفاوت بین راهنمایی سودمند خریدار و احساس تحمیل کالا', 'زمان مناسب پیشنهاد (قبل از کشیدن کارت بانکی)', 'بدرقه مشتری و قدردانی صمیمانه']
      }
    ],
    videoInfo: {
      title: 'فیلم آموزشی: هنر مکالمه اثربخش در ۵ ثانیه پایانی خرید و جهش ۲۰٪ در فروش مکمل',
      duration: '۱۰:۴۵ دقیقه',
      quality: 'Full HD 1080p',
      videoType: 'نمایش ایفای نقش واقعی در شعب هایپرمارکت با بازخورد مربی رفتارشناسی',
      sampleTimestampKeypoints: [
        { time: '۰۱:۲۰', title: 'نمونه مکالمه ضعیف و واکنش منفی مشتری' },
        { time: '۰۴:۵۰', title: '۳ فرمول طلایی کلامی برای جلب توجه به آفر تخفیف' },
        { time: '۰۸:۳۰', title: 'تحلیل افزایش میانگین فاکتور به روایت آمار' }
      ]
    },
    imageInfo: {
      diagramTitle: 'ماتریس اقلام مکمل در سبدهای خرید روزمره فروشگاه‌های زنجیره‌ای',
      caption: 'راهنمای دسته‌بندی کالاهای جفت و مکمل جهت پیشنهاد سریع توسط صندوق‌دار',
      bannerUrl: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=800&q=80'
    },
    pdfInfo: {
      filename: 'Refah-CrossSelling-Mastery.pdf',
      title: 'راهنمای عملیاتی تکنیک‌های ارتقای سبد خرید و فروش مکمل در رفاه',
      pageCount: 20,
      fileSize: '۲٫۹ مگابایت',
      chapters: [
        '۱. جدول پیشنهادات کلامی ۵ ثانیه‌ای به تفکیک دسته‌بندی کالا',
        '۲. تکنیک‌های معرفی کالاهای برند اختصاصی رفاه (Private Label)',
        '۳. روش محاسبه کمیسیون و پاداش پرسنل برتر در تارگت فروش',
        '۴. نمونه سوالات آزمون آنلاین مهارت فروش'
      ],
      sampleExcerpt: '«پیشنهاد یک محصول تخفیف‌دار مناسب در زمان مناسب، خدمتی به بودجه خانواده خریدار است. وقتی با لحن خیرخواهانه بیان شود، حس قدردانی عمیقی در مشتری ایجاد می‌کند.»'
    },
    keyTakeaways: [
      'پیشنهاد باید کوتاه و حداکثر در قالب یک جمله مثبت ادا شود.',
      'همیشه ارزش ریالی سود مشتری در پیشنهاد بیان شود (مثلاً: ۳۰ هزار تومان تخفیف ویژه این کالا).',
      'در صورت تمایل نداشتن مشتری، بلافاصله فرآیند پرداخت انجام شود و اصرار نشود.'
    ]
  },
  {
    id: 'course-5',
    title: 'مدیریت زنجیره سرد، بهداشت مواد غذایی و استانداردهای HACCP در بخش پروتئین و تازه',
    category: 'بهداشت و زنجیره سرد',
    roleTarget: 'متصدیان قصابی، مرغ، ماهی، میوه و سبزیجات، ناظران بهداشت شعب',
    durationMin: 30,
    level: 'تخصصی',
    aiFeature: 'آزمون تحلیل چک‌لیست دمایی و شبیه‌سازی رفع بحران نوسان دمای چیلر/فریزر',
    simulationTopic: 'اقدام اضطراری در مواجهه با قطعی برق کمپرسور یخچال گوشت تازه',
    description: 'الزامات بهداشتی محیط کار، اصول زنجیره سرد (Cold Chain Management)، ثبت دقیق نمودارهای دمایی صبح و عصر، استانداردهای بسته‌بندی، تاریخ‌گذاری و نظافت ادواری ابزارهای برش گوشت و مرغ.',
    syllabus: [
      {
        section: 'فصل اول: استانداردهای دمایی زنجیره سرد در ریتیل',
        topics: ['محدوده دمای چیلرهای گوشت تازه (۰ تا ۴ درجه سانتی‌گراد)', 'محدوده دمای فریزرهای منجمد (منفی ۱۸ درجه سانتی‌گراد)', 'کالیبراسیون و قرائت صحیح ترمومترهای لیزری و سوزنی']
      },
      {
        section: 'فصل دوم: الزامات بهداشت فردی و محیط طبق استاندارد HACCP',
        topics: ['پوشش بهداشتی کامل (کلاه، دستکش، روپوش سفید و چکمه)', 'دستورالعمل گندزدایی تخته‌های کار، چاقوها و چرخ‌گوشت صنعتی', 'تفکیک تخته کار گوشت قرمز، مرغ و ماهی برای جلوگیری از آلودگی متقاطع']
      },
      {
        section: 'فصل سوم: بسته‌بندی بهداشتی، برچسب‌گذاری و کنترل ضایعات',
        topics: ['اصول بسته‌بندی سلفونی با گاز محافظ و وکیوم', 'الصاق لیبل قیمت شامل تاریخ تولید، انقضا و وزن دقیق', 'مقررات مرجوع‌کردن محموله‌های مشکوک پروتئینی به انبار مرکزی']
      }
    ],
    videoInfo: {
      title: 'فیلم آموزشی: الزامات بازرسی بهداشت و حفظ دمای استاندارد در یخچال‌های فروشگاهی',
      duration: '۱۶:۱۵ دقیقه',
      quality: 'Full HD 1080p',
      videoType: 'ویدیو آموزشی مستند در بخش پروتئین شعبه نمونه با دستورالعمل‌های عملیاتی',
      sampleTimestampKeypoints: [
        { time: '۰۲:۰۰', title: 'نحوه صحیح دماسنجی و ثبت در لاگ‌بوک رسمی' },
        { time: '۰۶:۴۵', title: 'مراحل شستشو و ضدعفونی ابزار برش با مواد استاندارد' },
        { time: '۱۱:۳۰', title: 'نشانه‌های افت کیفیت گوشت و تفکیک ضایعات' }
      ]
    },
    imageInfo: {
      diagramTitle: 'نمودار راهنمای دمایی استاندارد نگهداری انواع مواد غذایی فسادپذیر',
      caption: 'چارت دماهای حیاتی چیلرها، فریزرهای ایستاده، تاپینگ مرغ و یخچال‌های لبنیات',
      bannerUrl: 'https://images.unsplash.com/photo-1543083477-4f785aeafaa9?auto=format&fit=crop&w=800&q=80'
    },
    pdfInfo: {
      filename: 'Refah-HACCP-ColdChain-Manual.pdf',
      title: 'راهنمای جامع مدیریت زنجیره سرد و کنترل کیفیت بهداشتی در شعب رفاه',
      pageCount: 28,
      fileSize: '۴٫۳ مگابایت',
      chapters: [
        '۱. دستورالعمل ثبت روزانه چک‌لیست‌های دمایی در ۲ نوبت',
        '۲. پروتکل جامع نظافت و شستشوی دوره‌ای یخچال‌ها و سالن خردایش',
        '۳. ضوابط بازرسی مراجع بهداشت و دامپزشکی کشور',
        '۴. اقدامات اضطراری در شرایط خرابی چیلر یا قطعی برق'
      ],
      sampleExcerpt: '«شکسته شدن زنجیره سرد حتی برای ۲ ساعت می‌تواند بار میکروبی گوشت را به مرز خطر برساند. کنترل دما وظیفه حیاتی برای صیانت از سلامت مصرف‌کنندگان رفاه است.»'
    },
    keyTakeaways: [
      'ثبت دمای کلیه یخچال‌ها هر روز ساعت ۸:۰۰ صبح و ۱۶:۰۰ عصر اجباری است.',
      'استفاده از دستکش یکبار مصرف در هنگام دست زدن به اقلام فله پروتئینی الزامی است.',
      'هرگونه کالای دارای یخ‌زدگی مجدد در بخش منجمد فوراً باید از دسترس مشتری خارج شود.'
    ]
  },
  {
    id: 'course-6',
    title: 'کنترل کسری کالا (Shrinkage Prevention)، پیشگیری از سرقت و حفاظت از دارایی‌ها',
    category: 'حفاظت و امنیت',
    roleTarget: 'نیروهای حراست و انتظامات، مدیران شعب، سرپرستان سالن و صندوق‌داران',
    durationMin: 25,
    level: 'کاربردی',
    aiFeature: 'شبیه‌ساز رفتارشناسی مشتریان مشکوک و تکنیک‌های مراقبت بدون ایجاد تنش',
    simulationTopic: 'پایش نامحسوس مشتری مشکوک به پنهان‌سازی اقلام آرایشی گران‌قیمت',
    description: 'آشنایی با علل کسری کالا در فروشگاه‌های زنجیره‌ای (سرقت مشتری، تقلب داخلی، خطای دریافت بار)، تکنیک‌های پایش چشمی هوشمند، کاربری سیستم‌های تگ ضدسرقت EAS و پروتکل تعامل با مظنونین.',
    syllabus: [
      {
        section: 'فصل اول: کالبدشکافی مفهوم کسری (Shrinkage) در رفاه',
        topics: ['۴ عامل اصلی کسری: سرقت بیرونی، خطای اداری، سرقت داخلی و ضایعات ثبت‌نشده', 'اقلام پرخطر (High-Risk Items): تیغ اصلاح، زعفران، شکلات‌های لوکس، لوازم آرایشی', 'تحلیل هزینه سرقت بر حاشیه سود خالص شعبه']
      },
      {
        section: 'فصل دوم: سیستم‌های حفاظت فیزیکی و الکترونیکی EAS',
        topics: ['نحوه الصاق صحیح تگ سخت (Hard Tag) و لیبل مغناطیسی نرم', 'بررسی روزانه سلامت گیت‌های ضدسرقت ورودی و خروجی', 'پیشگیری از تبانی در صندوق (Sweethearting و عبور بدون اسکن)']
      },
      {
        section: 'فصل سوم: پروتکل حقوقی و رفتاری در مواجهه با موارد مشکوک',
        topics: ['قانون ۵ گام مشاهده کامل قبل از توقف فرد مظنون', 'دعوت محترمانه به اتاق انتظامات با رعایت کامل کرامت انسانی', 'مستندسازی فاکتور و تنظیم صورتجلسه قانونی حراست']
      }
    ],
    videoInfo: {
      title: 'فیلم آموزشی: رفتارشناسی سارقین فروشگاهی و بازرسی هوشمند نقاط کور شلف‌ها',
      duration: '۱۴:۴۰ دقیقه',
      quality: 'Full HD 1080p',
      videoType: 'ویدیو بازسازی سناریوهای واقعی ضبط‌شده با دوربین‌های مداربسته شعب',
      sampleTimestampKeypoints: [
        { time: '۰۱:۴۵', title: 'شناسایی زبان بدن مشکوک و رفتارهای انحرافی' },
        { time: '۰۶:۲۰', title: 'روش‌های حفاظت از اقلام گران‌قیمت در ویترین‌های قفل‌دار' },
        { time: '۱۰:۵۰', title: 'نحوه صحیح دعوت به اتاق حراست بدون تهمت مستقیم' }
      ]
    },
    imageInfo: {
      diagramTitle: 'پلان شناسایی نقاط کور سالن و محل استقرار گیت‌های بازرسی',
      caption: 'چیدمان بهینه آینه‌های محدب و چینش زاویه دوربین‌های نظارتی مداربسته',
      bannerUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80'
    },
    pdfInfo: {
      filename: 'Refah-LossPrevention-Security-Code.pdf',
      title: 'آیین‌نامه انضباطی و دستورالعمل حفاظت از دارایی‌ها و پیشگیری از کسری کالا',
      pageCount: 26,
      fileSize: '۳٫۵ مگابایت',
      chapters: [
        '۱. ماتریس اقلام گران‌قیمت و پروتکل تگ‌گذاری اجباری',
        '۲. چک‌لیست بازرسی روزانه حراست در زمان باز و بسته شدن شعبه',
        '۳. دستورالعمل رفتار قانونی با مظنونین به سرقت فروشگاهی',
        '۴. روش‌های ثبت و گزارش‌دهی تخلفات در سامانه بازرسی رفاه'
      ],
      sampleExcerpt: '«هیچ پرسنلی بدون داشتن ۵ شرط اثبات سرقت (دیدن کالا، مشاهده برداشتن، مشاهده پنهان‌سازی، پایش مستمر تا خروج از صندوق بدون پرداخت) حق توقف خریدار را ندارد.»'
    },
    keyTakeaways: [
      'تگ‌گذاری ضدسرقت کلیه اقلام بالای ۳۰۰ هزار تومان پیش از ورود به قفسه الزامی است.',
      'پرسنل سالن با حضور پررنگ و احوالپرسی از مشتریان مشکوک، قوی‌ترین عامل بازدارنده هستند.',
      'تست آژیر گیت‌های خروجی هر روز صبح پیش از ورود اولین مشتری انجام شود.'
    ]
  },
  {
    id: 'course-7',
    title: 'انبارداری نوین، تخلیه ایمن بار، چیدمان پالت‌ها و انبارگردانی چرخه‌ای (Cycle Count)',
    category: 'لجستیک و موجودی',
    roleTarget: 'انبارداران، متصدیان بارانداز، کارگران تخلیه بار و سرپرستان انبار شعب',
    durationMin: 25,
    level: 'کاربردی',
    aiFeature: 'شبیه‌ساز محاسبات ظرفیت پالت و ثبت شمارش چرخه‌ای با بارکدخوان پرتابل',
    simulationTopic: 'مغایرت‌گیری کاردکس اقلام شوینده در انبارگردانی هفتگی',
    description: 'آموزش اصول تحویل‌گیری بار از کامیونت‌های پخش، بازرسی سلامت بارنامه، رعایت استانداردهای ایمنی و ارگونومی جابجایی کالا، آدرس‌دهی دقیق پالت‌ها در انبار پشتی و اجرای شمارش‌های چرخه‌ای روزانه.',
    syllabus: [
      {
        section: 'فصل اول: فرآیند استاندارد ورود بار و تحویل‌گیری از هاب توزیع',
        topics: ['تطبیق بارنامه با حواله ارسال کالای انبار مرکزی', 'بازرسی ظاهری پالت‌ها از نظر له‌شدگی و سلامت شیرینگ', 'ثبت الکترونیکی مغایرت کسری یا اضافه بار در رسید انبار']
      },
      {
        section: 'فصل دوم: اصول چیدمان پالت، ارگونومی و ایمنی فیزیکی',
        topics: ['حداکثر ارتفاع مجاز چیدمان کارتن‌ها روی پالت چوبی', 'حفظ فاصله استاندارد از دیوارها و سیستم‌های اطفای حریق', 'تکنیک‌های صحیح بلند کردن بار سنگین جهت حفظ سلامت ستون فقرات']
      },
      {
        section: 'فصل سوم: انبارگردانی چرخه‌ای (Cycle Counting) و رفع Ghost Stock',
        topics: ['برنامه‌ریزی شمارش روزانه ۲۰ قلم کالای پرگردش کلاس A', 'ثبت لحظه‌ای در پایانه دستی (Handheld Terminal)', 'کشف ریشه‌ای علل عدم انطباق موجودی فیزیکی و سیستمی']
      }
    ],
    videoInfo: {
      title: 'فیلم آموزشی: استانداردهای ایمنی تخلیه بار در بارانداز و انبارش اصولی پالت‌ها',
      duration: '۱۵:۳۰ دقیقه',
      quality: 'Full HD 1080p',
      videoType: 'ویدیو آموزشی کار با جک‌پالت دستی، بارکدخوان و اصول چیدمان انبار پشتی',
      sampleTimestampKeypoints: [
        { time: '۰۲:۱۵', title: 'مراحل بازرسی پلمپ کامیونت و تحویل بارنامه' },
        { time: '۰۷:۴۰', title: 'اصول قفل کردن کارتن‌ها روی پالت (Brick Pattern)' },
        { time: '۱۲:۱۰', title: 'نحوه اجرای شمارش چرخه‌ای روزانه بدون توقف فروشگاه' }
      ]
    },
    imageInfo: {
      diagramTitle: 'کدگذاری مکانی انبار پشتی و راهنمای الگوی چیدمان پالت‌ها',
      caption: 'سیستم آدرس‌دهی ۳ بخشی (راهرو - ردیف - طبقه) جهت دسترسی سریع به کالا',
      bannerUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
    },
    pdfInfo: {
      filename: 'Refah-Warehouse-Inventory-Guidelines.pdf',
      title: 'دستورالعمل جامع انبارداری، ایمنی بارانداز و انبارگردانی چرخه‌ای رفاه',
      pageCount: 30,
      fileSize: '۴٫۸ مگابایت',
      chapters: [
        '۱. آیین‌نامه تحویل‌گیری و بازرسی فیزیکی محموله‌ها در شعب',
        '۲. جدول ظرفیت وزنی و ارتفاعی پالت‌های استاندارد',
        '۳. روش‌های کدگذاری و ثبت مکانیزه در نرم‌افزار انبار',
        '۴. چک‌لیست مغایرت‌گیری کاردکس و فرم‌های کسری و فزونی'
      ],
      sampleExcerpt: '«انبار پشتی نباید محل انباشت بی‌نظم کالا باشد؛ هر کالایی باید آدرس مکانی مشخص داشته و در کمتر از ۳ دقیقه توسط پرسنل شارژ قفسه قابل برداشت باشد.»'
    },
    keyTakeaways: [
      'تخلیه بارهای فسادپذیر و لبنیات اولویت اول بارانداز است و باید ظرف حداکثر ۲۰ دقیقه به چیلر منتقل شود.',
      'چیدمان پالت‌ها نباید مسیر راهروهای اضطراری یا تابلوهای برق را مسدود کند.',
      'شمارش چرخه‌ای هر هفته باید حداقل برای یک دسته‌بندی اصلی کالایی انجام پذیرد.'
    ]
  },
  {
    id: 'course-8',
    title: 'رهبری شیفت فروشگاهی، مدیریت تیم سالن و مدیریت بحران‌های عملیاتی',
    category: 'مدیریت و رهبری',
    roleTarget: 'مدیران شعب، سرپرستان شیفت، مسئولین امور عمومی و روسای نواحی',
    durationMin: 35,
    level: 'پیشرفته',
    aiFeature: 'سناریوی شبیه‌سازی تصمیم‌گیری چندمرحله‌ای در شرایط قطعی برق و شبکه بانکی',
    simulationTopic: 'مدیریت ازدحام و قطعی سراسری پوزها در شب عید',
    description: 'مهارت‌های رهبری پرسنل در محیط‌های پراسترس فروشگاهی، تقسیم متوازن شیفت‌ها، برگزاری جلسه هماهنگی ۵ دقیقه‌ای پیش از آغاز شیفت (Standup Meeting)، اصول حل اختلاف درون‌تیمی و پروتکل‌های مدیریت بحران.',
    syllabus: [
      {
        section: 'فصل اول: اصول مدیریت شیفت و رهبری روزمره سالن',
        topics: ['برگزاری جلسه ۵ دقیقه‌ای اول شیفت و تعیین تارگت روزانه', 'ارزیابی انگیزش پرسنل و بازخورد مثبت در لحظه', 'تقسیم کار هوشمندانه پرسنل متناسب با ساعات اوج تردد مشتری']
      },
      {
        section: 'فصل دوم: مدیریت بحران‌های فنی و محیطی در فروشگاه',
        topics: ['پروتکل مواجهه با قطعی ناگهانی برق و راه‌اندازی دیزل ژنراتور اضطراری', 'مدیریت قطعی شبکه بانکی و هدایت مشتریان به صندوق‌های نقدی/آفلاین', 'اقدامات فوری در صورت بروز حریق کوچک یا نشتی لوله‌های آب']
      },
      {
        section: 'فصل سوم: گزارش‌نویسی شیفت و ارزیابی بهره‌وری',
        topics: ['تحویل فرآیندهای باز به سرپرست شیفت بعد (Handover Report)', 'ثبت ساعات کارکرد، مرخصی‌ها و تاخیرات پرسنل', 'بررسی تحقق تارگت فروش شیفت و ارزیابی رضایت مشتریان']
      }
    ],
    videoInfo: {
      title: 'فیلم آموزشی: هنر رهبری شیفت در هایپرمارکت و تصمیم‌گیری قاطع در موقعیت‌های حساس',
      duration: '۱۹:۰۰ دقیقه',
      quality: 'Full HD 1080p',
      videoType: 'فیلم تعاملی کیس‌استادی با مشارکت مدیران ارشد برگزیده شعب رفاه',
      sampleTimestampKeypoints: [
        { time: '۰۳:۳۰', title: 'نحوه اجرای استندآپ میتینگ پرانرژی صبحگاهی' },
        { time: '۰۸:۵۰', title: 'مدیریت صف طولانی و تخصیص نیروی کمکی به صندوق‌ها' },
        { time: '۱۴:۲۰', title: 'تکنیک‌های آرامش‌بخشی به تیم در شرایط فشار کاری' }
      ]
    },
    imageInfo: {
      diagramTitle: 'ماتریس مدیریت بحران‌های عملیاتی در شعب فروشگاه‌های زنجیره‌ای',
      caption: 'فلوچارت تماس‌های اضطراری، سلسله مراتب تصمیم‌گیری و پروتکل تخلیه شعبه',
      bannerUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80'
    },
    pdfInfo: {
      filename: 'Refah-Shift-Leadership-Playbook.pdf',
      title: 'هندبوک جامع رهبری شیفت و مدیریت عملیات فروشگاه‌های رفاه',
      pageCount: 36,
      fileSize: '۵٫۷ مگابایت',
      chapters: [
        '۱. چک‌لیست وظایف سرپرست شیفت در ۳ بازه (شروع، حین شیفت، پایان)',
        '۲. ماتریس تخصیص منابع انسانی بر مبنای نمودار ترافیک تردد مشتری',
        '۳. پروتکل جامع واکنش اضطراری در ۱۰ بحران فروشگاهی',
        '۴. فرم استاندارد تحویل و تحول شیفت و گزارش عملکرد روزانه'
      ],
      sampleExcerpt: '«سرپرست شیفت موفق، پشت میز نمی‌نشیند؛ او در جریان پیوسته سالن حضور دارد، موانع کاری صندوق‌داران را رفع می‌کند و با انرژی مثبت خود انگیزه تیم را ارتقا می‌دهد.»'
    },
    keyTakeaways: [
      'جلسه ۵ دقیقه‌ای هماهنگی اول هر شیفت غیرقابل حذف و ضروری است.',
      'در صورت افزایش صف هر صندوق به بیش از ۴ نفر، فوراً صندوق کمکی افتتاح شود.',
      'فرم تحویل شیفت باید به امضای هر دو سرپرست تحویل‌دهنده و تحویل‌گیرنده برسد.'
    ]
  },
  {
    id: 'course-9',
    title: 'دیجیتال‌مارکتینگ محلی، کمپین‌های پیامکی و درک هوش مصنوعی باشگاه رفاه‌کارت',
    category: 'باشگاه مشتریان و وفاداری',
    roleTarget: 'کلیه صندوق‌داران، مسئولین روابط عمومی، سرپرستان فروش و متصدیان پذیرش',
    durationMin: 20,
    level: 'کاربردی',
    aiFeature: 'شبیه‌ساز ثبت‌نام مشتری در رفاه‌کارت و تحلیل پیشنهادات هوشمند خرید',
    simulationTopic: 'توضیح مزایای امتیازدهی رفاه‌کارت به مشتری مردد در زمان پرداخت',
    description: 'آشنایی با ساختار باشگاه مشتریان رفاه، روش‌های تشویق خریداران به عضویت و ارائه شماره همراه، کمپین‌های پیامکی تخفیف هدفمند (Geo-Targeted)، همکاری با پلتفرم‌های سفارش آنلاین و اندازه‌گیری رضایت NPS.',
    syllabus: [
      {
        section: 'فصل اول: چرا ثبت شماره موبایل مشتری برای رفاه حیاتی است؟',
        topics: ['اثر داده‌های خرید بر شخصی‌سازی تخفیفات هوش مصنوعی', 'مزایای مستقیم رفاه‌کارت برای مشتری (تخفیف نقدی، قرعه‌کشی، امتیاز اعتباری)', 'نحوه دریافت رضایت‌مندانه شماره همراه بدون ایجاد معطلی']
      },
      {
        section: 'فصل دوم: کمپین‌های منطقه‌ای و بازاریابی مبتنی بر موقعیت',
        topics: ['ارسال پیامک‌های تخفیف آخر هفته برای ساکنان اطراف شعبه', 'استفاده از کیو‌آرکدهای روی فاکتور جهت عضویت در کانال‌های اطلاع‌رسانی', 'معرفی طرح‌های خرید اعتباری اقساطی به مشتریان سازمانی']
      },
      {
        section: 'فصل سوم: تعامل با سفارش‌های آنلاین و ناوگان ارسال فوری',
        topics: ['فرآیند جمع‌آوری سفارش‌های اسنپ‌مارکت و دیجی‌کالا در سالن (Picking)', 'بسته‌بندی اختصاصی سفارش‌های آنلاین با هماهنگی صندوق', 'پایش امتیاز رضایت مشتریان محلی (NPS) و ثبت نظرات']
      }
    ],
    videoInfo: {
      title: 'فیلم آموزشی: چگونگی ترغیب خریداران به عضویت در باشگاه مشتریان در کمتر از ۱۰ ثانیه',
      duration: '۱۱:۲۰ دقیقه',
      quality: 'Full HD 1080p',
      videoType: 'ویدیو آموزشی مهارتی با مثال‌های کاربردی از پرسنل برتر کشوری رفاه',
      sampleTimestampKeypoints: [
        { time: '۰۱:۱۰', title: 'چرا مشتریان از دادن شماره همراه پرهیز می‌کنند و راه‌حل آن' },
        { time: '۰۵:۰۰', title: 'جملات کوتاه و موثر برای دعوت به عضویت در رفاه‌کارت' },
        { time: '۰۸:۴۵', title: 'مزایای کارت باشگاه در قرعه‌کشی‌های فصلی خودرو و لوازم خانگی' }
      ]
    },
    imageInfo: {
      diagramTitle: 'چرخه ارزش باشگاه مشتریان و تاثیر آن بر افزایش وفاداری و تکرار خرید',
      caption: 'مسیر تبدیل خریدار گذری به مشتری وفادار از طریق تخفیفات شخصی‌سازی‌شده',
      bannerUrl: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=800&q=80'
    },
    pdfInfo: {
      filename: 'Refah-LoyaltyClub-Staff-Guide.pdf',
      title: 'دستورالعمل اجرایی توسعه باشگاه مشتریان و جذب اعضای جدید رفاه‌کارت',
      pageCount: 22,
      fileSize: '۳٫۱ مگابایت',
      chapters: [
        '۱. معرفی ساختار سطوح کاربری باشگاه مشتریان (برنزی، نقره‌ای، طلایی)',
        '۲. راهنمای تصویری ثبت‌نام سریع مشتری در صفحه صندوق رفاه',
        '۳. جدول تخفیفات و امتیازدهی به ازای هر ۱۰۰ هزار تومان خرید',
        '۴. آیین‌نامه طرح‌های تشویقی صندوق‌داران برتر در جذب عضو'
      ],
      sampleExcerpt: '«هر شماره موبایلی که در صندوق ثبت می‌شود، پلی پایدار برای ارتباط با خانواده مشتری است تا در مناسبت‌ها و آفرهای ویژه آنها را دوباره به رفاه دعوت کنیم.»'
    },
    keyTakeaways: [
      'همیشه با لبخند بپرسید: «شماره رفاه‌کارت شما رو ثبت کنم تا از تخفیف ویژه این فاکتور استفاده کنین؟»',
      'ثبت شماره برای خریدهای بالای ۲۰۰ هزار تومان اولویت دارد.',
      'اطلاعات تماس مشتریان محرمانه بوده و تنها برای اطلاع‌رسانی رسمی رفاه استفاده می‌شود.'
    ]
  },
  {
    id: 'course-10',
    title: 'ایمنی کار، آتش‌نشانی، جعبه کمک‌های اولیه و ارگونومی شغلی پرسنل فروشگاهی',
    category: 'ایمنی و HSE',
    roleTarget: 'کلیه کارکنان شعب، مسئولین ایمنی، انتظامات و پرسنل خدماتی',
    durationMin: 25,
    level: 'عمومی و کاربردی',
    aiFeature: 'آزمون تعاملی انتخاب نوع کپسول آتش‌نشانی متناسب با منبع حریق',
    simulationTopic: 'انتخاب کپسول مناسب برای مهار اتصال برق در تابلوی توزیع انبار',
    description: 'آموزش جامع مبانی بهداشت، ایمنی و محیط زیست (HSE)، نحوه کار با خاموش‌کننده‌های CO2 و پودری، امدادهای اولیه در بریدگی یا سوختگی، اصول ایمنی کار با نردبان و جک‌پالت و پیشگیری از آسیب‌های عضلانی-اسکلتی.',
    syllabus: [
      {
        section: 'فصل اول: مبانی ایمنی و پیشگیری از حوادث در محیط فروشگاه',
        topics: ['شناسایی خطرات شایع (کف خیس، سیم‌کشی لخت، اجسام لغزنده در راهروها)', 'نصب علائم هشدار دهنده احتیاط (Caution Signs)', 'دستورالعمل ایمنی کار در ارتفاع و نردبان‌های قفسه‌بندی']
      },
      {
        section: 'فصل second: اصول آتش‌نشانی و کار با کپسول‌های اطفای حریق',
        topics: ['کلاس‌های حریق (A: جامدات، B: مایعات، C: گازها، E: تجهیزات برقی)', 'روش استفاده از کپسول با تکنیک PASS (کشیدن ضامن، نشانه، فشردن، جارو کردن)', 'پروتکل اعلام حریق و خروج اضطراری از درب‌های فرار']
      },
      {
        section: 'فصل سوم: کمک‌های اولیه و ارگونومی صحیح بدنی',
        topics: ['استفاده از محتویات جعبه کمک‌های اولیه در بریدگی، پانسمان و سوختگی', 'حرکات کششی کاهش خستگی صندوق‌داران در شیفت‌های طولانی', 'تنظیم ارگونومیک ارتفاع صندلی و اسکنر صندوق']
      }
    ],
    videoInfo: {
      title: 'فیلم آموزشی: کارگاه عملی اطفای حریق و اصول امداد و نجات در فروشگاه‌های زنجیره‌ای',
      duration: '۱۴:۱۰ دقیقه',
      quality: 'Full HD 1080p',
      videoType: 'ویدیو آموزشی مانور ایمنی با حضور کارشناسان سازمان آتش‌نشانی',
      sampleTimestampKeypoints: [
        { time: '۰۱:۵۰', title: 'آشنایی با انواع کپسول‌های خاموش‌کننده و گیج فشار' },
        { time: '۰۶:۱۵', title: 'تمرین عملی خاموش کردن آتش تابلو برق با CO2' },
        { time: '۱۰:۳۰', title: 'اقدامات اولیه در برخورد با بیهوشی یا صدمه دیدن همکار' }
      ]
    },
    imageInfo: {
      diagramTitle: 'اینفوگرافیک ارگونومی شغلی و نحوه صحیح بلند کردن اجسام سنگین',
      caption: 'مقایسه حالت صحیح خم کردن زانو در مقابل حالت اشتباه و خطرناک خم کردن کمر',
      bannerUrl: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=800&q=80'
    },
    pdfInfo: {
      filename: 'Refah-HSE-Safety-FirstAid-Manual.pdf',
      title: 'دستورالعمل جامع بهداشت، ایمنی، آتش‌نشانی و ارگونومی کار در رفاه',
      pageCount: 34,
      fileSize: '۵٫۰ مگابایت',
      chapters: [
        '۱. آیین‌نامه ایمنی و بهداشت کار اختصاصی فروشگاه‌های هایپر رفاه',
        '۲. راهنمای تصویری استفاده از تجهیزات اطفای حریق و شیرهای هیدرانت',
        '۳. دستورالعمل کمک‌های اولیه و شماره‌های تماس مراکز اورژانس',
        '۴. چک‌لیست ماهانه بررسی جعبه کمک‌های اولیه و کپسول‌های آتش‌نشانی'
      ],
      sampleExcerpt: '«سلامت و جان پرسنل و مشتریان، خط قرمز غیرقابل مذاکره در رفاه است. رعایت اصول ارگونومی و ایمنی کار، ضامن پایداری شغلی و آسایش خانواده پرسنل است.»'
    },
    keyTakeaways: [
      'هرگز برای حریق‌های برقی از آب یا کپسول‌های آبی استفاده نشود (فقط کپسول CO2 یا پودر خشک).',
      'در صورت ریختن مایعات روی زمین سالن، بلافاصله تابلوی احتیاط لغزندگی در محل قرار گیرد.',
      'بلند کردن بارهای بیش از ۲۵ کیلوگرم باید به صورت دونفره یا با تجهیزات مکانیکی انجام شود.'
    ]
  }
];

export const VISTA_COMPANY_INFO = {
  nameFa: 'شبکه هوشمند ابتکار ویستا',
  nameEn: 'Vista Intelligent Network',
  brandShort: 'ویستا (Vista)',
  slogan: 'طراحی و توسعه راهکارهای هوشمند مبتنی بر هوش مصنوعی، مدل‌های زبانی بزرگ، ایجنت‌های هوشمند، RAG و تحلیل داده',
  registrationNumber: '۵۸۳۳۰۲',
  domain: 'vistapower.ir',
  email: 'devcodebase.dev@gmail.com',
  phone: '09124733234',
  address: 'پارک علم و فناوری استان سمنان',
  honors: [
    { title: 'برنده دو جایزه در دومین رویداد ملی هوش مصنوعی ایران', badge: '2X AI Award' },
    { title: 'عضو نظام صنفی رایانه‌ای استان سمنان', badge: 'ICT Guild' },
    { title: 'مستقر در پارک علم و فناوری استان سمنان', badge: 'Tech Park' },
    { title: 'شماره ثبت رسمی ۵۸۳۳۰۲', badge: 'Registration No. 583302' }
  ],
  ecosystem: [
    {
      name: 'HooshGate',
      title: 'AI Knowledge Layer',
      description: 'رسانه و هاب تخصصی هوش مصنوعی که خبر، پژوهش، یادگیری، ابزارها، پروژه‌ها و چهره‌های تخصصی را کنار هم قرار می‌دهد.'
    },
    {
      name: 'DevCodeBase',
      title: 'Engineering Execution Layer',
      description: 'لایه توسعه، مهندسی و اجرای محصولات دیجیتال؛ طراحی پلتفرم‌های وب، سامانه‌های سازمانی، API، زیرساخت Dockerized، اتوماسیون و اتصال AI به محصول.'
    }
  ],
  services: [
    'طراحی و توسعه سامانه‌های مبتنی بر هوش مصنوعی',
    'پیاده‌سازی مدل‌های زبانی بزرگ و چت‌بات‌های سازمانی',
    'توسعه AI Agent و دستیارهای هوشمند فرآیندی',
    'طراحی سامانه‌های RAG و جستجوی هوشمند معنایی',
    'تحلیل داده و هوش تجاری پیشرفته سازمانی',
    'اتوماسیون فرآیندهای سازمانی با هوش مصنوعی',
    'طراحی پلتفرم‌های داده‌محور و میکروسرویس',
    'یکپارچه‌سازی AI با سامانه‌های سازمانی موجود و ERP',
    'توسعه رسانه و پلتفرم دانشی هوش مصنوعی',
    'توسعه محصول و وب‌اپلیکیشن‌های سازمانی Production-Ready'
  ]
};
