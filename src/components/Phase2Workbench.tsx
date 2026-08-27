import React, { useState } from 'react';
import { 
  Database, 
  Table, 
  CheckCircle2, 
  FileText, 
  Search, 
  Sparkles, 
  ArrowLeft, 
  ArrowRight, 
  RefreshCw, 
  Activity, 
  Layers, 
  GitFork, 
  HardDrive, 
  BarChart3, 
  Check, 
  Server, 
  Zap, 
  ShieldCheck, 
  FileCheck2, 
  Eye, 
  Clock, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { VISTA_COMPANY_INFO } from '../data/projects';

interface Phase2WorkbenchProps {
  onCompletePhase2?: () => void;
  onSwitchToPhase?: (phase: 1 | 2 | 3) => void;
  phase2AuditPassed: boolean;
  runningPhase2Audit: boolean;
  phase2AuditProgress: number;
  onRunPhase2Audit: () => void;
  phase2Checklist: { [key: string]: boolean };
  onTogglePhase2Checklist: (key: string) => void;
}

export const Phase2Workbench: React.FC<Phase2WorkbenchProps> = ({
  onCompletePhase2,
  onSwitchToPhase,
  phase2AuditPassed,
  runningPhase2Audit,
  phase2AuditProgress,
  onRunPhase2Audit,
  phase2Checklist,
  onTogglePhase2Checklist,
}) => {
  const [activeTab, setActiveTab] = useState<'study' | 'schema' | 'profiler' | 'verify'>('schema');
  const [selectedTable, setSelectedTable] = useState<'POS_SALES' | 'INVENTORY_LOG' | 'MASTER_SKU' | 'PROMO_HISTORY'>('POS_SALES');
  const [selectedStore, setSelectedStore] = useState('REFAH_TEHRAN_T01');
  const [isProfiling, setIsProfiling] = useState(false);
  const [profilingProgress, setProfilingProgress] = useState(100);
  const [profilingDone, setProfilingDone] = useState(true);

  const handleRunProfiler = () => {
    setIsProfiling(true);
    setProfilingProgress(10);
    setProfilingDone(false);

    const interval = setInterval(() => {
      setProfilingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProfiling(false);
          setProfilingDone(true);
          return 100;
        }
        return prev + 30;
      });
    }, 300);
  };

  // Pilot stores list
  const pilotStores = [
    { id: 'REFAH_TEHRAN_T01', name: 'رفاه تهران - میدان آزادی (هایپر مرکزی T-01)', records: '۱۲,۴۵۰', latency: '۲۸ ms', status: 'عالی (۹۹٫۹٪)' },
    { id: 'REFAH_TEHRAN_T04', name: 'رفاه تهران - میدان ونک (T-04)', records: '۹,۸۲۰', latency: '۳۲ ms', status: 'عالی (۹۹٫۸٪)' },
    { id: 'REFAH_ISFAHAN_ISF02', name: 'رفاه اصفهان - چهارباغ عباسی (ISF-02)', records: '۱۱,۱۴۰', latency: '۳۵ ms', status: 'عالی (۹۹٫۷٪)' },
    { id: 'REFAH_SHIRAZ_SHZ01', name: 'رفاه شیراز - خیابان زند (SHZ-01)', records: '۸,۹۰۰', latency: '۴۰ ms', status: 'عالی (۹۹٫۸٪)' },
    { id: 'REFAH_KARAJ_KRJ03', name: 'رفاه کرج - گوهردشت (KRJ-03)', records: '۱۰,۲۰۰', latency: '۲۹ ms', status: 'عالی (۹۹٫۹٪)' },
    { id: 'REFAH_MASHHAD_MSH01', name: 'رفاه مشهد - بلوار سجاد (MSH-01)', records: '۱۴,۳۰۰', latency: '۳۸ ms', status: 'عالی (۹۹٫۸٪)' },
  ];

  // Schema Mapping definitions
  const schemaTables = {
    POS_SALES: {
      name: 'POS_SALES_TRANSACTIONS',
      faName: 'جدول تراکنش‌های پایانه فروش (صندوق)',
      dbEngine: 'Oracle 19c Enterprise / SQL Server',
      refahTable: 'TB_REFAH_POS_TRANS_LOG',
      vistaFeatureStore: 'feat_sales_transactions_stream',
      primaryKey: 'RECEIPT_ID + STORE_CODE',
      recordCount: '۱۸۰,۰۰۰ رکورد/روز (۲۰ شعبه پایلوت)',
      columns: [
        { refahCol: 'RECEIPT_ID', refahType: 'VARCHAR2(36)', vistaCol: 'receipt_hash_id', vistaType: 'STRING (UUID)', match: '۱۰۰٪ تطابق', indexed: true, desc: 'شناسه یکتای فاکتور خرید صادرشده از صندوق' },
        { refahCol: 'STORE_CODE', refahType: 'VARCHAR2(10)', vistaCol: 'store_id', vistaType: 'STRING', match: '۱۰۰٪ تطابق', indexed: true, desc: 'کد رسمی شعبه رفاه (مورد استفاده در تفکیک DiD)' },
        { refahCol: 'SKU_BARCODE', refahType: 'VARCHAR2(14)', vistaCol: 'sku_barcode', vistaType: 'STRING (GS1)', match: '۱۰۰٪ تطابق', indexed: true, desc: 'بارکد اسکن‌شده کالا استاندارد EAN-13' },
        { refahCol: 'SALE_TIMESTAMP', refahType: 'TIMESTAMP(6)', vistaCol: 'event_timestamp', vistaType: 'TIMESTAMP UTC', match: '۱۰۰٪ تطابق', indexed: true, desc: 'زمان دقیق ثبت تراکنش با دقت میلی‌ثانیه' },
        { refahCol: 'QTY_SOLD', refahType: 'NUMBER(8,2)', vistaCol: 'quantity', vistaType: 'FLOAT', match: '۱۰۰٪ تطابق', indexed: false, desc: 'تعداد یا وزن فروخته‌شده کالا' },
        { refahCol: 'BASE_PRICE_IRR', refahType: 'NUMBER(12)', vistaCol: 'price_base_irr', vistaType: 'INT64', match: '۱۰۰٪ تطابق', indexed: false, desc: 'قیمت مصوب کالا بدون اعمال تخفیف (ریال)' },
        { refahCol: 'PROMO_DISCOUNT_IRR', refahType: 'NUMBER(12)', vistaCol: 'promo_discount_irr', vistaType: 'INT64', match: '۱۰۰٪ تطابق', indexed: false, desc: 'مبلغ تخفیف اعمالی پروموشن (ریال)' },
        { refahCol: 'FINAL_NET_PAID_IRR', refahType: 'NUMBER(12)', vistaCol: 'net_paid_irr', vistaType: 'INT64', match: '۱۰۰٪ تطابق', indexed: false, desc: 'مبلغ خالص دریافتی از مشتری (ریال)' },
        { refahCol: 'CUST_CLUB_TOKEN', refahType: 'VARCHAR2(64)', vistaCol: 'customer_token_sha256', vistaType: 'STRING (HASHED)', match: 'ماسک‌سازی امن', indexed: true, desc: 'توکن هش‌شده بدون افشای هویت جهت سبد خرید C1' },
      ]
    },
    INVENTORY_LOG: {
      name: 'INVENTORY_SNAPSHOT',
      faName: 'جدول اسنپ‌شات موجودی و انبار شعب',
      dbEngine: 'Oracle 19c Enterprise',
      refahTable: 'TB_REFAH_STORE_INVENTORY',
      vistaFeatureStore: 'feat_inventory_ghost_stock',
      primaryKey: 'STORE_CODE + SKU_ID + SNAPSHOT_DATE',
      recordCount: '۲۵,۰۰۰ قلم کالا در هر شعبه',
      columns: [
        { refahCol: 'STORE_CODE', refahType: 'VARCHAR2(10)', vistaCol: 'store_id', vistaType: 'STRING', match: '۱۰۰٪ تطابق', indexed: true, desc: 'شناسه شعبه' },
        { refahCol: 'SKU_ID', refahType: 'VARCHAR2(16)', vistaCol: 'sku_id', vistaType: 'STRING', match: '۱۰۰٪ تطابق', indexed: true, desc: 'کد سیستمی کالا در مستر کاتالوگ' },
        { refahCol: 'PHYSICAL_ON_HAND', refahType: 'NUMBER(10,2)', vistaCol: 'stock_physical_qty', vistaType: 'FLOAT', match: '۱۰۰٪ تطابق', indexed: false, desc: 'موجودی فیزیکی اعلام‌شده در سیستم انبار' },
        { refahCol: 'RESERVED_ONLINE_QTY', refahType: 'NUMBER(8)', vistaCol: 'stock_reserved_qty', vistaType: 'INT32', match: '۱۰۰٪ تطابق', indexed: false, desc: 'موجودی رزروشده سفارشات اینترنتی/سازمانی' },
        { refahCol: 'LAST_RESTOCK_DATETIME', refahType: 'TIMESTAMP', vistaCol: 'last_restock_time', vistaType: 'TIMESTAMP', match: '۱۰۰٪ تطابق', indexed: false, desc: 'زمان آخرین ورود کالا از مرکز توزیع DC' },
        { refahCol: 'SAFETY_STOCK_MIN', refahType: 'NUMBER(8)', vistaCol: 'safety_stock_threshold', vistaType: 'INT32', match: '۱۰۰٪ تطابق', indexed: false, desc: 'حد آستانه نقطه سفارش مجدد' },
      ]
    },
    MASTER_SKU: {
      name: 'MASTER_CATALOG_SKU',
      faName: 'جدول کاتالوگ مرجع کالاها (Master SKU)',
      dbEngine: 'SQL Server / Central ERP',
      refahTable: 'TB_REFAH_MASTER_SKU_CATALOG',
      vistaFeatureStore: 'feat_catalog_attributes_dim',
      primaryKey: 'SKU_ID',
      recordCount: '۴۵,۰۰۰ بارکد فعال کشوری',
      columns: [
        { refahCol: 'SKU_ID', refahType: 'VARCHAR2(16)', vistaCol: 'sku_id', vistaType: 'STRING', match: '۱۰۰٪ تطابق', indexed: true, desc: 'شناسه یکتای کالا در ERP' },
        { refahCol: 'SKU_TITLE_FA', refahType: 'NVARCHAR2(150)', vistaCol: 'sku_title', vistaType: 'STRING', match: '۱۰۰٪ تطابق', indexed: false, desc: 'نام تجاری کالا به فارسی' },
        { refahCol: 'CATEGORY_L1', refahType: 'VARCHAR2(40)', vistaCol: 'category_dept', vistaType: 'STRING', match: '۱۰۰٪ تطابق', indexed: true, desc: 'دپارتمان اصلی (FMCG، پروتئینی، شوینده، لبنیات)' },
        { refahCol: 'CATEGORY_L2', refahType: 'VARCHAR2(50)', vistaCol: 'category_class', vistaType: 'STRING', match: '۱۰۰٪ تطابق', indexed: true, desc: 'دسته کالایی جهت کشش تقاطع قیمتی' },
        { refahCol: 'BRAND_NAME', refahType: 'NVARCHAR2(60)', vistaCol: 'brand_name', vistaType: 'STRING', match: '۱۰۰٪ تطابق', indexed: true, desc: 'برند تولیدکننده کالا' },
        { refahCol: 'UNIT_COGS_IRR', refahType: 'NUMBER(12)', vistaCol: 'unit_cost_irr', vistaType: 'INT64', match: '۱۰۰٪ تطابق', indexed: false, desc: 'قیمت تمام‌شده خرید از تامین‌کننده (محرمانه)' },
        { refahCol: 'SHELF_LIFE_DAYS', refahType: 'NUMBER(5)', vistaCol: 'shelf_life_days', vistaType: 'INT32', match: '۱۰۰٪ تطابق', indexed: false, desc: 'ماندگاری کالا جهت ماژول ضایعات Fresh' },
      ]
    },
    PROMO_HISTORY: {
      name: 'PROMO_CAMPAIGN_HISTORY',
      faName: 'جدول کمپین‌ها و جشنواره‌های تخفیف',
      dbEngine: 'Oracle 19c Enterprise',
      refahTable: 'TB_REFAH_PROMOTION_CAMPAIGNS',
      vistaFeatureStore: 'feat_promo_elasticity_dim',
      primaryKey: 'CAMPAIGN_ID + SKU_ID',
      recordCount: '۱,۲۰۰ کمپین ثبت‌شده تاریخی',
      columns: [
        { refahCol: 'CAMPAIGN_ID', refahType: 'VARCHAR2(20)', vistaCol: 'promo_campaign_id', vistaType: 'STRING', match: '۱۰۰٪ تطابق', indexed: true, desc: 'کد کمپین بازاریابی و پروموشن' },
        { refahCol: 'CAMPAIGN_TYPE', refahType: 'VARCHAR2(30)', vistaCol: 'promo_mechanic_type', vistaType: 'STRING', match: '۱۰۰٪ تطابق', indexed: false, desc: 'مکانیسم (تخفیف درصدی، یکی بخر دوتا ببر، باندل)' },
        { refahCol: 'SUPPLIER_FUND_PCT', refahType: 'NUMBER(5,2)', vistaCol: 'supplier_rebate_share', vistaType: 'FLOAT', match: '۱۰۰٪ تطابق', indexed: false, desc: 'درصد سهم تخفیف پرداخت‌شده توسط تامین‌کننده' },
        { refahCol: 'START_DATETIME', refahType: 'TIMESTAMP', vistaCol: 'promo_start_utc', vistaType: 'TIMESTAMP', match: '۱۰۰٪ تطابق', indexed: true, desc: 'شروع کمپین' },
        { refahCol: 'END_DATETIME', refahType: 'TIMESTAMP', vistaCol: 'promo_end_utc', vistaType: 'TIMESTAMP', match: '۱۰۰٪ تطابق', indexed: true, desc: 'پایان کمپین' },
      ]
    }
  };

  const samplePosRecords = [
    { id: 'TX-984210', store: 'T-01 (آزادی)', sku: 'برنج طارم هاشمی ۱۰kg', barcode: '6260123456789', basePrice: '۱,۴۵۰,۰۰۰', discount: '۱۵۰,۰۰۰', netPrice: '۱,۳۰۰,۰۰۰', qty: '۱', time: '۱۰:۲۴:۱۸', cust: 'HASH_8f4a...21c' },
    { id: 'TX-984211', store: 'T-01 (آزادی)', sku: 'روغن سرخ‌کردنی ۱٫۵L', barcode: '6260987654321', basePrice: '۱۸۵,۰۰۰', discount: '۰', netPrice: '۱۸۵,۰۰۰', qty: '۲', time: '۱۰:۲۴:۴۵', cust: 'HASH_1e9b...77a' },
    { id: 'TX-984212', store: 'T-01 (آزادی)', sku: 'شیر کم‌چرب ۱L پاک', barcode: '6260456123789', basePrice: '۳۹,۰۰۰', discount: '۴,۰۰۰', netPrice: '۳۵,۰۰۰', qty: '۳', time: '۱۰:۲۵:۰۲', cust: 'HASH_c34d...99f' },
    { id: 'TX-984213', store: 'T-01 (آزادی)', sku: 'رب گوجه‌فرنگی ۸۰۰g', barcode: '6260333221144', basePrice: '۶۸,۰۰۰', discount: '۱۰,۰۰۰', netPrice: '۵۸,۰۰۰', qty: '۲', time: '۱۰:۲۵:۳۳', cust: 'HASH_a11e...33b' },
    { id: 'TX-984214', store: 'T-01 (آزادی)', sku: 'دستمال کاغذی جعبه‌ای ۲۰۰ برگ', barcode: '6260778899001', basePrice: '۴۲,۰۰۰', discount: '۵,۰۰۰', netPrice: '۳۷,۰۰۰', qty: '۴', time: '۱۰:۲۶:۰۱', cust: 'HASH_44fd...88c' }
  ];

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
      
      {/* Header of Phase 2 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-xl shadow-md shadow-emerald-600/30">
            ۲
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                بخش اول: مقدمات و خط‌لوله امن داده
              </span>
              <span className="text-xs text-slate-400">|</span>
              <span className="text-xs font-semibold text-slate-500">مدت زمان برآورد: ۳ روز کاری</span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 mt-1">
              فاز ۲: ارزیابی و ماتریس سازگاری داده‌های POS و انبار رفاه
            </h2>
          </div>
        </div>

        {/* Phase 2 Status Pill & Quick Action */}
        <div className="flex items-center gap-2">
          {phase2AuditPassed ? (
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-black bg-emerald-50 text-emerald-800 border border-emerald-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>فاز ۲ با موفقیت راستی‌آزمایی شد</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
              <Clock className="w-4 h-4 text-amber-600 animate-pulse" />
              <span>در حال بررسی سازگاری و تست پروفایلر داده</span>
            </span>
          )}
        </div>
      </div>

      {/* Phase 2 Workflow Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-100 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('study')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer shrink-0 ${
            activeTab === 'study'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>۱. مطالعه مستند مرجع (بند ۱-۲: جداول و Master SKU)</span>
        </button>

        <button
          onClick={() => setActiveTab('schema')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer shrink-0 ${
            activeTab === 'schema'
              ? 'bg-emerald-600 text-white shadow-xs shadow-emerald-600/30'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <GitFork className="w-4 h-4" />
          <span>۲. ماتریس نگاشت دیاگرام ERD و فیلدهای دیتابیس</span>
        </button>

        <button
          onClick={() => setActiveTab('profiler')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer shrink-0 ${
            activeTab === 'profiler'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Activity className="w-4 h-4" />
          <span>۳. پروفایلر و نمونه‌برداری زنده داده ۲۰ شعبه پایلوت</span>
          {profilingDone && <Check className="w-3.5 h-3.5 text-white bg-emerald-600 rounded-full p-0.5" />}
        </button>

        <button
          onClick={() => setActiveTab('verify')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer shrink-0 ${
            activeTab === 'verify'
              ? 'bg-emerald-700 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>۴. شبیه‌ساز ممیزی کیفیت داده و صدور گواهی فاز ۲</span>
          {phase2AuditPassed && <Check className="w-3.5 h-3.5 text-white bg-emerald-800 rounded-full p-0.5" />}
        </button>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* TAB 1: STUDY MASTER DOC (بند ۱-۲ مستند رفاه)                  */}
      {/* ------------------------------------------------------------- */}
      {activeTab === 'study' && (
        <div className="space-y-5 animate-in fade-in duration-200">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-emerald-600" />
                <h3 className="text-sm font-black text-slate-900">
                  استخراج الزامات فاز ۲ از مستند بالادستی رفاه (بخش ۱-۲: ساختار داده‌ها و انبار)
                </h3>
              </div>
              <span className="text-[11px] font-bold text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                مستند مرجع - بند ۱-۲ و پیوست فنی
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-1.5 text-emerald-700">
                  <Database className="w-4 h-4" />
                  <span>۱. استاندارد کدهای کاتالوگ (Master SKU)</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  تعریف ساختار طبقه‌بندی سلسله‌مراتبی کالاها بر اساس استانداردهای GS1 و کدهای ۱۳ رقمی EAN-13 به همراه ثبت مشخصات ماندگاری (Shelf-life) برای تفکیک اقلام تندمصرف FMCG از کالاهای اساسی و تازه.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-1.5 text-emerald-700">
                  <Table className="w-4 h-4" />
                  <span>۲. جداسازی تخفیف‌ها و قیمت پایه</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  ضرورت تفکیک قیمت پایه مصوب، میزان تخفیف تامین‌کننده (Supplier Rebate)، تخفیف رفاه و قیمت نهایی پرداخت‌شده جهت تغذیه دقیق الگوریتم‌های بهینه‌سازی کشش قیمتی (پروژه C2).
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-1.5 text-emerald-700">
                  <HardDrive className="w-4 h-4" />
                  <span>۳. همگام‌سازی اسنپ‌شات انبار</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  انتقال دوره‌ای سیاهه موجودی فیزیکی و مقادیر رزروشده به منظور تشخیص مغایرت‌های موجودی شبح (Ghost Stock) و بهینه‌سازی مدل‌های پیش‌بینی تقاضای TFT (پروژه‌های B5 و B1).
                </p>
              </div>
            </div>

            {/* Master Doc Quote Box */}
            <div className="p-4 bg-emerald-900 text-white rounded-xl space-y-2 border border-emerald-700">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                <Sparkles className="w-4 h-4" />
                <span>گزیده ماده ۱-۲ مستند تحول هوش مصنوعی رفاه:</span>
              </div>
              <blockquote className="text-xs text-emerald-100 italic leading-relaxed">
                «پایگاه داده پایانه فروش رفاه روزانه بیش از ۱۸۰ هزار رکورد تراکنش در شعب پایلوت ثبت می‌نماید. سیستم هوش مصنوعی باید بدون تحمیل بار مضاعف، فیلدهای ضروری شامل شناسه فاکتور، کد کالا، قیمت پایه، تخفیف، و زمان را با دقت ۱۰۰٪ نگاشت نموده و داده‌های مفقوده یا نویزدار را قبل از مرحله یادگیری ماشین پالایش کند.»
              </blockquote>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setActiveTab('schema')}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition cursor-pointer"
              >
                <span>ورود به کارتابل ماتریس نگاشت ERD و فیلدها</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* TAB 2: INTERACTIVE ERD & SCHEMA MAPPING WORKBENCH             */}
      {/* ------------------------------------------------------------- */}
      {activeTab === 'schema' && (
        <div className="space-y-5 animate-in fade-in duration-200">
          
          {/* Table Switcher Selector */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-black text-slate-900">
                  ماتریس تطبیق و نگاشت جداول پایگاه داده رفاه به Feature Store هوش مصنوعی ویستا
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  انتخاب جدول جهت بررسی فیلدها، نوع داده‌ها، کلیدهای اصلی و وضعیت ایندکس‌ها:
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {[
                  { key: 'POS_SALES', label: 'تراکنش‌های فروش POS', count: '۹ فیلد' },
                  { key: 'INVENTORY_LOG', label: 'موجودی انبار شعب', count: '۶ فیلد' },
                  { key: 'MASTER_SKU', label: 'مستر کاتالوگ کالاها', count: '۷ فیلد' },
                  { key: 'PROMO_HISTORY', label: 'سوابق پروموشن‌ها', count: '۵ فیلد' },
                ].map(t => (
                  <button
                    key={t.key}
                    onClick={() => setSelectedTable(t.key as any)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                      selectedTable === t.key
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <span>{t.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      selectedTable === t.key ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {t.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Current Table Meta Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px]">جدول مبدا در رفاه:</span>
                <span className="font-mono font-bold text-slate-800 text-xs">
                  {schemaTables[selectedTable].refahTable}
                </span>
                <span className="text-[10px] text-emerald-700 block font-semibold">({schemaTables[selectedTable].dbEngine})</span>
              </div>

              <div>
                <span className="text-slate-400 block text-[11px]">مخزن ویژگی هوش مصنوعی (Feature Store):</span>
                <span className="font-mono font-bold text-emerald-800 text-xs">
                  {schemaTables[selectedTable].vistaFeatureStore}
                </span>
                <span className="text-[10px] text-slate-500 block">خط‌لوله استریم/بچ ویستا</span>
              </div>

              <div>
                <span className="text-slate-400 block text-[11px]">کلید اصلی (Primary Key):</span>
                <span className="font-mono font-bold text-slate-800 text-xs">
                  {schemaTables[selectedTable].primaryKey}
                </span>
              </div>

              <div>
                <span className="text-slate-400 block text-[11px]">حجم داده در پایلوت ۲۰ شعبه:</span>
                <span className="font-bold text-slate-800 text-xs">
                  {schemaTables[selectedTable].recordCount}
                </span>
              </div>
            </div>

            {/* Field Mapping Interactive Table */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead className="bg-slate-100/80 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3">ستون مبدا (Refah Database)</th>
                      <th className="p-3">نوع داده مبدا</th>
                      <th className="p-3 text-center">نگاشت به</th>
                      <th className="p-3">فیلد مقصد (AI Feature Store)</th>
                      <th className="p-3">نوع داده مقصد</th>
                      <th className="p-3 text-center">وضعیت انطباق</th>
                      <th className="p-3">توضیحات و کاربرد در مدل AI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {schemaTables[selectedTable].columns.map((col, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition">
                        <td className="p-3 font-mono font-bold text-slate-900">
                          {col.refahCol}
                          {col.indexed && (
                            <span className="mr-1.5 text-[9px] bg-slate-200 text-slate-700 px-1 py-0.2 rounded font-sans font-bold">
                              INDEX
                            </span>
                          )}
                        </td>
                        <td className="p-3 font-mono text-slate-500">{col.refahType}</td>
                        <td className="p-3 text-center text-slate-400 font-bold">➔</td>
                        <td className="p-3 font-mono font-bold text-emerald-800">{col.vistaCol}</td>
                        <td className="p-3 font-mono text-slate-600">{col.vistaType}</td>
                        <td className="p-3 text-center">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black ${
                            col.match.includes('ماسک')
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}>
                            <CheckCircle2 className="w-3 h-3" />
                            <span>{col.match}</span>
                          </span>
                        </td>
                        <td className="p-3 text-slate-600 leading-snug text-[11px]">{col.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Flow to Profiler */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>تمامی ۲۷ فیلد کلیدی دیتابیس رفاه با موفقیت نگاشت شده و بدون مغایرت تایپ داده می‌باشند.</span>
              </div>

              <button
                onClick={() => setActiveTab('profiler')}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition cursor-pointer shrink-0"
              >
                <span>مرحله بعد: پروفایلر و نمونه‌برداری زنده ۲۰ شعبه</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* TAB 3: POS DATA PROFILER & LIVE QUALITY SAMPLING              */}
      {/* ------------------------------------------------------------- */}
      {activeTab === 'profiler' && (
        <div className="space-y-5 animate-in fade-in duration-200">
          
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-5">
            
            {/* Header of Profiler */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-black text-slate-900">
                  ابزار پروفایلر سنجش کیفیت و اعتبارسنجی زنده داده‌های POS (Data Quality Profiler)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  ارزیابی نرخ مقادیر نال، صحت چک‌سام بارکدها و تاخیر انتقال داده در شعب ۲۰ گانه پایلوت
                </p>
              </div>

              {/* Store Selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-700">انتخاب شعبه پایلوت:</span>
                <select
                  value={selectedStore}
                  onChange={(e) => setSelectedStore(e.target.value)}
                  className="bg-white border border-slate-300 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-500 shadow-2xs"
                >
                  {pilotStores.map(st => (
                    <option key={st.id} value={st.id}>{st.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span>شاخص سلامت داده (DQ Score):</span>
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div className="text-xl font-black text-emerald-700">۹۹٫۸۴٪</div>
                <div className="text-[10px] text-emerald-600 font-bold">بسیار عالی (استاندارد بالای ۹۸٪)</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span>نرخ مقادیر تهی / Null:</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div className="text-xl font-black text-slate-900">۰٫۰۳٪</div>
                <div className="text-[10px] text-slate-500">حداکثر مجاز: ۰٫۵٪</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span>صحت بارکدهای EAN:</span>
                  <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div className="text-xl font-black text-slate-900">۹۹٫۹۷٪</div>
                <div className="text-[10px] text-slate-500">چک‌سام معتبر GS1</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span>تاخیر واکشی Replica:</span>
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                </div>
                <div className="text-xl font-black text-slate-900">۳۲ ms</div>
                <div className="text-[10px] text-emerald-600 font-bold">بدون تاخیر (زیر ۵۰ میلی‌ثانیه)</div>
              </div>

            </div>

            {/* Sampling Action & Progress */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="font-bold text-xs text-slate-900 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-600" />
                  <span>نمونه‌برداری ۱۰,۰۰۰ تراکنش زنده از شعبه {pilotStores.find(s => s.id === selectedStore)?.name}</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  تطبیق فیلدهای قیمت، تخفیف، بارکد و توکن‌های هش‌شده مشتریان باشگاه رفاه
                </p>
              </div>

              <button
                onClick={handleRunProfiler}
                disabled={isProfiling}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold shadow-xs transition cursor-pointer shrink-0 ${
                  isProfiling
                    ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30'
                }`}
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isProfiling ? 'animate-spin' : ''}`} />
                <span>{isProfiling ? 'در حال اجرای پروفایلر...' : 'اجرای مجدد پروفایلر روی شعبه'}</span>
              </button>
            </div>

            {/* Sampled Records Preview Table */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs space-y-2 p-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="font-bold text-xs text-slate-900">
                  پیش‌نمایش ۵ رکورد نمونه واکشی‌شده از دیتابیس صندوق (با ماسک‌سازی هویتی):
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  Sample size: 10,000 txs | Latency: 32ms
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-2.5">شناسه فاکتور</th>
                      <th className="p-2.5">نام کالای کاتالوگ</th>
                      <th className="p-2.5">بارکد EAN-13</th>
                      <th className="p-2.5">قیمت پایه (ریال)</th>
                      <th className="p-2.5">تخفیف پروموشن</th>
                      <th className="p-2.5">مبلغ خالص (ریال)</th>
                      <th className="p-2.5">زمان ثبت</th>
                      <th className="p-2.5">توکن هش خریدار (SHA-256)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {samplePosRecords.map((r, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition">
                        <td className="p-2.5 font-mono font-bold text-slate-800">{r.id}</td>
                        <td className="p-2.5 font-semibold text-slate-900">{r.sku}</td>
                        <td className="p-2.5 font-mono text-slate-500">{r.barcode}</td>
                        <td className="p-2.5 font-mono text-slate-700">{r.basePrice}</td>
                        <td className="p-2.5 font-mono text-emerald-700 font-bold">{r.discount}</td>
                        <td className="p-2.5 font-mono text-slate-900 font-bold">{r.netPrice}</td>
                        <td className="p-2.5 font-mono text-slate-500">{r.time}</td>
                        <td className="p-2.5 font-mono text-[10px] text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                          {r.cust}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Forward to verify button */}
            <div className="flex justify-end pt-1">
              <button
                onClick={() => setActiveTab('verify')}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition cursor-pointer"
              >
                <span>مرحله نهایی: راستی‌آزمایی و صدور تاییدیه DBA رفاه</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* TAB 4: AUDIT, VERIFICATION & HANDOVER TO PHASE 3               */}
      {/* ------------------------------------------------------------- */}
      {activeTab === 'verify' && (
        <div className="space-y-5 animate-in fade-in duration-200">
          
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-5">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-black text-slate-900">
                  چک‌لیست ممیزی کیفیت داده‌ها و صحه‌گذاری انطباق فاز ۲
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  ارزیابی الزامات بند ۱-۲ و تایید مدیر ارشد پایگاه داده (DBA) رفاه جهت شروع فاز ۳ (پایپ‌لاین ETL)
                </p>
              </div>

              <button
                onClick={onRunPhase2Audit}
                disabled={runningPhase2Audit}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black shadow-xs transition cursor-pointer shrink-0 ${
                  runningPhase2Audit
                    ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30'
                }`}
              >
                <RefreshCw className={`w-3.5 h-3.5 ${runningPhase2Audit ? 'animate-spin' : ''}`} />
                <span>{runningPhase2Audit ? 'در حال اجرای تست ممیزی داده...' : 'اجرای تست ممیزی خودکار فاز ۲'}</span>
              </button>
            </div>

            {/* Progress bar */}
            {runningPhase2Audit && (
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>در حال اعتبارسنجی جداول POS، انبار و مستر کاتالوگ...</span>
                  <span>{phase2AuditProgress}٪</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-emerald-600 h-full transition-all duration-300 rounded-full"
                    style={{ width: `${phase2AuditProgress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Checklist Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {[
                { key: 'posSchemaMapped', label: 'انطباق ۱۰۰٪ فیلدهای تراکنش فروش (POS Sales Schema)', desc: 'شامل شناسه فاکتور، قیمت پایه، تخفیف و تفکیک بارکدها' },
                { key: 'inventoryLogSynced', label: 'صحه‌گذاری ساختار لاگ موجودی انبار (Inventory Snapshot)', desc: 'تطبیق فیلدهای موجودی فیزیکی و رزرو سفارشات' },
                { key: 'masterSkuHierarchy', label: 'یکپارچگی کدهای سلسله‌مراتبی Master SKU کاتالوگ', desc: 'تضمین سازگاری بارکدهای EAN-13 در شعب ۲۰ گانه' },
                { key: 'nullRateUnderLimit', label: 'نرخ مقادیر نامعتبر یا نال کمتر از ۰٫۱٪', desc: 'شاخص سلامت داده به ثبت ۹۹٫۸۴٪ رسید' },
                { key: 'latencyBenchmarked', label: 'تاخیر تبادل داده Replica زیر ۵۰ میلی‌ثانیه', desc: 'ثبت میانگین ۳۲ میلی‌ثانیه بدون بار پردازشی روی سرور اصلی' },
                { key: 'refahDbaSignoff', label: 'صدور تاییدیه رسمی مدیر پایگاه داده (DBA) رفاه', desc: 'تایید کامل ماتریس سازگاری و مجوز رسمی شروع فاز ۳' }
              ].map(item => (
                <div 
                  key={item.key}
                  onClick={() => onTogglePhase2Checklist(item.key)}
                  className={`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition select-none ${
                    phase2Checklist[item.key]
                      ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                    phase2Checklist[item.key]
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'bg-white border-slate-300 text-transparent'
                  }`}>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-bold block">{item.label}</span>
                    <span className="text-[11px] text-slate-500">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Handover to Phase 3 Banner */}
            {phase2Checklist.refahDbaSignoff && (
              <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md animate-in fade-in duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-sm">فاز ۲ با موفقیت تکمیل و راستی‌آزمایی شد!</h4>
                    <p className="text-xs text-emerald-100 mt-0.5">
                      ماتریس سازگاری داده‌های POS و انبار تایید گردید. سیستم آماده ورود به فاز ۳ (طراحی خط لوله انتقال امن داده ETL Pipeline) می‌باشد.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      if (onSwitchToPhase) onSwitchToPhase(1);
                    }}
                    className="px-3.5 py-2 bg-white/20 hover:bg-white/30 text-white rounded-xl text-xs font-bold transition cursor-pointer"
                  >
                    بازگشت به فاز ۱
                  </button>

                  <button
                    onClick={() => {
                      if (onCompletePhase2) onCompletePhase2();
                    }}
                    className="px-4 py-2 bg-white text-emerald-900 hover:bg-emerald-50 rounded-xl text-xs font-black shadow-sm transition cursor-pointer flex items-center gap-1.5"
                  >
                    <span>مرور فاز ۳ (خط‌لوله امن داده ETL)</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      )}

    </div>
  );
};
