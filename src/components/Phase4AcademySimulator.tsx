import React, { useState } from 'react';
import { 
  GraduationCap, 
  MessageSquare, 
  Sparkles, 
  Send, 
  Coins, 
  Cpu, 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle, 
  Users, 
  Smile, 
  Frown, 
  Volume2, 
  RotateCcw, 
  Layers, 
  ShieldCheck, 
  Check, 
  X,
  Flame,
  Clock,
  ThumbsUp,
  BrainCircuit
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend,
  CartesianGrid 
} from 'recharts';

interface ScenarioPersona {
  id: string;
  title: string;
  customerName: string;
  avatarMood: 'angry' | 'confused' | 'hesitant';
  difficulty: 'سخت' | 'متوسط' | 'خیلی سخت';
  initialPrompt: string;
  aiPersonaContext: string;
  expectedKeywords: string[];
}

export const Phase4AcademySimulator: React.FC = () => {
  const personas: ScenarioPersona[] = [
    {
      id: 'angry_discount',
      title: 'مشتری معترض به اعمال نشدن تخفیف روغن در صندوق',
      customerName: 'آقای شریفی (مشتری شاکی)',
      avatarMood: 'angry',
      difficulty: 'سخت',
      initialPrompt: 'سلام آقا! من فاکتورم رو دیدم، چرا تخفیف ۲۰٪ روغن بهار که توی بنر تبلیغاتی سر در فروشگاه بود برام اعمال نشده؟ ۴۰ هزار تومن اضافه حساب کردین! زودباش درستش کن وقت ندارم!',
      aiPersonaContext: 'شما مشتری شاکی و عجول فروشگاه زنجیره‌ای رفاه هستید...',
      expectedKeywords: ['پوزش', 'عذرخواهی', 'کارت باشگاه', 'بررسی فاکتور', 'اصلاح مبلغ']
    },
    {
      id: 'elderly_hekmat',
      title: 'مشتری سالخورده و اختلال در پذیرش کارت حکمت/تارا',
      customerName: 'حاج‌آقا رضایی (بازنشسته)',
      avatarMood: 'confused',
      difficulty: 'متوسط',
      initialPrompt: 'پسرم این کارت حکمت من اعتبار خرید اعتباری داره، ولی دستگاه پوز شما مدام خطای ۹۲ میزنه. دخترم منتظره، داروهامم همراهمه، نمیدونم چیکار کنم؟',
      aiPersonaContext: 'شما مشتری سالمند و محترم رفاه هستید که با سامانه بن اعتباری آشنایی فنی ندارد...',
      expectedKeywords: ['راهنمایی', 'آرامش', 'استعلام سامانه', 'رمز دوم', 'پشتیبانی تارا']
    },
    {
      id: 'hesitant_upsell',
      title: 'مشتری مردد در انتخاب میان دو برند روغن زیتون',
      customerName: 'خانم دکتر افشار',
      avatarMood: 'hesitant',
      difficulty: 'متوسط',
      initialPrompt: 'بین این روغن زیتون فرابکر کریستال و روغن زیتون تصفیه‌شده بدون بو اتکا شک دارم. فرابکر تلخه؟ واسه سالاد کدوم بهتره؟ ارزش داره ۱۰۰ تومن بیشتر بدم؟',
      aiPersonaContext: 'شما مشتری دقیق و کیفیت‌محور هستید...',
      expectedKeywords: ['فرابکر', 'اسیدیته پایین', 'ارزش غذایی', 'سالاد', 'تضمین اصالت']
    }
  ];

  const [selectedPersona, setSelectedPersona] = useState<ScenarioPersona>(personas[0]);
  const [activeTab, setActiveTab] = useState<'roleplay' | 'rubric_eval' | 'academy_impact' | 'financials' | 'architecture'>('roleplay');
  
  // Chat State
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'customer' | 'clerk' | 'ai_coach'; text: string; score?: number }>>([
    { sender: 'customer', text: personas[0].initialPrompt }
  ]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  // Performance Scores for Current Session
  const [empathyScore, setEmpathyScore] = useState<number>(88);
  const [protocolScore, setProtocolScore] = useState<number>(94);
  const [speedScore, setSpeedScore] = useState<number>(90);
  const [resolutionScore, setResolutionScore] = useState<number>(92);

  // Switch persona
  const handleSelectPersona = (p: ScenarioPersona) => {
    setSelectedPersona(p);
    setChatMessages([
      { sender: 'customer', text: p.initialPrompt }
    ]);
    setInputMessage('');
  };

  // Send Clerk Message
  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userText = inputMessage;
    const updated = [...chatMessages, { sender: 'clerk' as const, text: userText }];
    setChatMessages(updated);
    setInputMessage('');
    setIsTyping(true);

    // AI Evaluation and Persona Response
    setTimeout(() => {
      let coachFeedback = '';
      let nextCustomerReply = '';
      let calculatedScore = 85;

      if (userText.includes('پوزش') || userText.includes('عذر') || userText.includes('چشم') || userText.includes('خدمت شما')) {
        calculatedScore += 10;
        coachFeedback = 'عالی! همدلی اولیه برقرار شد (نمره ۹۵). توصیه: اکنون با استعلام شماره موبایل در سیستم باشگاه، تخفیف جشنواره را مستقیماً لحاظ نمایید.';
        nextCustomerReply = 'ممنون از توجهتون. شماره موبایلم ۰۹۱۲۳۴۵۶۷۸۹ هست. بی زحمت چک کنین ببینین درست میشه؟';
      } else {
        calculatedScore -= 10;
        coachFeedback = 'توجه: لحن دفاعی نگیرید! ابتدا با کلمات آرامش‌بخش از معطلی عذرخواهی کنید و سپس فاکتور را در صفحه صندوق بازبینی نمایید.';
        nextCustomerReply = 'چرا جواب سربالا میدین؟ این کار درستی نیست، من سال‌هاست از رفاه خرید می‌کنم!';
      }

      setEmpathyScore(Math.min(98, calculatedScore));
      setProtocolScore(Math.min(96, calculatedScore + 2));

      setChatMessages([
        ...updated,
        { sender: 'ai_coach', text: `[تحلیل زنده مربی هوش مصنوعی]: ${coachFeedback}`, score: calculatedScore },
        { sender: 'customer', text: nextCustomerReply }
      ]);
      setIsTyping(false);
    }, 1100);
  };

  // Radar Data for Competency Evaluation
  const radarData = [
    { subject: 'همدلی با مشتری', score: empathyScore, benchmark: 70 },
    { subject: 'رعایت دستورالعمل رفاه', score: protocolScore, benchmark: 75 },
    { subject: 'سرعت عمل و پاسخگویی', score: speedScore, benchmark: 65 },
    { subject: 'تسلط بر پروموشن‌ها', score: resolutionScore, benchmark: 68 },
    { subject: 'مدیریت بحران و تعارض', score: Math.round((empathyScore + protocolScore) / 2), benchmark: 60 },
  ];

  // CSAT Improvement Data
  const csatTrend = [
    { month: 'فروردین (قبل از آکادمی)', csat: 68, nps: 18, refundComplaints: 420 },
    { month: 'اردیبهشت (پایلوت ۱۰ شعبه)', csat: 74, nps: 31, refundComplaints: 290 },
    { month: 'خرداد (پوشش سراسری صندوق‌ها)', csat: 82, nps: 45, refundComplaints: 180 },
    { month: 'تیر (تثبیت کیفیت)', csat: 87, nps: 58, refundComplaints: 95 },
  ];

  return (
    <div className="space-y-6">
      
      {/* Top Header Banner for Phase 4 */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950 text-white rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-300 border border-amber-400/30 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                <span>فاز ۴ سند تحول: آکادمی هوشمند و شبیه‌ساز نقش‌آفرینی پرسنل (پروژه A3)</span>
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                Flagship Wave 1 (توسعه سرمایه انسانی)
              </span>
            </div>

            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white">
              شبیه‌ساز آموزش تعاملی صندوق‌داران و ارتقای مهارت مواجهه با مشتری (AI Roleplay)
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              تمرین بلادرنگ سناریوهای بحرانی و پرچالش فروشگاهی با هوش مصنوعی مکالمه‌ای، کاهش ۵۵٪ شکایات صندوق و ارتقای شاخص رضایت مشتری (CSAT) از ۶۸٪ به بیش از ۸۷٪.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="grid grid-cols-2 gap-3 shrink-0 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">نسبت منفعت به هزینه:</span>
              <span className="text-xl font-black text-amber-400">۵٫۳۸ برابر</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">ارتقای سود/بهره‌وری:</span>
              <span className="text-xl font-black text-emerald-400">۲۴٫۲ م.ت</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">هزینه پایلوت:</span>
              <span className="text-sm font-bold text-white">۱۹۰ میلیون تومان</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">دوره بازگشت:</span>
              <span className="text-sm font-bold text-amber-300">۱٫۹ ماه</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="bg-white border border-slate-200 rounded-2xl p-2 flex flex-wrap items-center justify-between gap-2 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <button
            onClick={() => setActiveTab('roleplay')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'roleplay'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>شبیه‌ساز مکالمه زنده با مشتری (Roleplay Arena)</span>
          </button>

          <button
            onClick={() => setActiveTab('rubric_eval')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'rubric_eval'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>ماتریس ارزیابی ۵ گانه شایستگی و گواهینامه</span>
          </button>

          <button
            onClick={() => setActiveTab('academy_impact')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'academy_impact'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>تحلیل جهش رضایت مشتری (CSAT & NPS)</span>
          </button>

          <button
            onClick={() => setActiveTab('financials')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'financials'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Coins className="w-3.5 h-3.5" />
            <span>مدل مالی و توجیه ۲۴٫۲ میلیارد تومانی</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'architecture'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>معماری فنی (ADR-003) و هوش مصنوعی مکالمه‌ای</span>
          </button>
        </div>

        <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
          شاخص ارزیابی: HR-03
        </span>
      </div>

      {/* TAB 1: ROLEPLAY SIMULATION ARENA */}
      {activeTab === 'roleplay' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left: Persona Selector (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-amber-600" />
              <span>انتخاب سناریوی آموزشی پرسنل:</span>
            </h3>

            <div className="space-y-2">
              {personas.map((p) => {
                const isSelected = selectedPersona.id === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => handleSelectPersona(p)}
                    className={`w-full p-4 rounded-2xl text-right transition cursor-pointer border ${
                      isSelected
                        ? 'bg-amber-50 border-amber-500 ring-2 ring-amber-500/20 text-amber-950 shadow-xs'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black">{p.customerName}</span>
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                        p.difficulty === 'خیلی سخت' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        سطح: {p.difficulty}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 font-medium leading-relaxed">
                      {p.title}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Live Realtime Scorecard Widget */}
            <div className="bg-slate-900 text-white rounded-2xl p-4 space-y-3 border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-300">امتیاز ارزیابی زنده هوش مصنوعی</span>
                <span className="text-sm font-black font-mono text-emerald-400">
                  {Math.round((empathyScore + protocolScore + speedScore + resolutionScore) / 4)} / ۱۰۰
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="bg-slate-950 p-2 rounded-xl border border-slate-800 flex justify-between">
                  <span className="text-slate-400">همدلی و ادب:</span>
                  <span className="font-bold text-amber-400">{empathyScore}٪</span>
                </div>
                <div className="bg-slate-950 p-2 rounded-xl border border-slate-800 flex justify-between">
                  <span className="text-slate-400">رعایت پروتکل:</span>
                  <span className="font-bold text-emerald-400">{protocolScore}٪</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Live Interactive Chat Dialog (8 Cols) */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-5 shadow-xs flex flex-col h-[520px]">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-black text-xs">
                  {selectedPersona.avatarMood === 'angry' ? <Frown className="w-4 h-4 text-rose-600" /> : <Smile className="w-4 h-4 text-amber-700" />}
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">{selectedPersona.customerName}</div>
                  <div className="text-[10px] text-slate-400">طرف مکالمه شبیه‌سازی‌شده با مدل زبانی رفاه</div>
                </div>
              </div>

              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                AI Coach: آماده تحلیل پاسخ
              </span>
            </div>

            {/* Chat Flow Container */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 font-medium">
              {chatMessages.map((msg, idx) => {
                if (msg.sender === 'customer') {
                  return (
                    <div key={idx} className="flex items-start gap-2.5 max-w-[85%]">
                      <div className="w-7 h-7 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center shrink-0 text-xs font-bold">
                        م
                      </div>
                      <div className="bg-slate-100 text-slate-900 rounded-2xl rounded-tr-xs p-3.5 text-xs leading-relaxed">
                        {msg.text}
                      </div>
                    </div>
                  );
                }

                if (msg.sender === 'clerk') {
                  return (
                    <div key={idx} className="flex items-start gap-2.5 max-w-[85%] mr-auto flex-row-reverse">
                      <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 text-xs font-bold">
                        شما
                      </div>
                      <div className="bg-indigo-600 text-white rounded-2xl rounded-tl-xs p-3.5 text-xs leading-relaxed">
                        {msg.text}
                      </div>
                    </div>
                  );
                }

                if (msg.sender === 'ai_coach') {
                  return (
                    <div key={idx} className="bg-amber-50/90 border border-amber-200 text-amber-900 rounded-2xl p-3 text-xs leading-relaxed my-1">
                      <div className="flex items-center gap-1.5 font-black text-[11px] text-amber-900 mb-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        <span>بازخورد مربی هوش مصنوعی آکادمی رفاه:</span>
                      </div>
                      <p className="text-slate-800">{msg.text}</p>
                    </div>
                  );
                }

                return null;
              })}

              {isTyping && (
                <div className="text-[11px] text-slate-400 flex items-center gap-2 p-2">
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-pulse" />
                  <span>مشتری در حال تایپ پاسخ...</span>
                </div>
              )}
            </div>

            {/* Quick Answer Prompt Suggestions */}
            <div className="pt-2 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1 text-[10px]">
              <span className="text-slate-400 shrink-0">پیشنهادات استاندارد:</span>
              <button 
                onClick={() => setInputMessage('پوزش می‌طلبم بابت معطلی. لطفاً شماره تماس کارت باشگاه رفاه رو بفرمایید تا تخفیف پروموشن رو همین الان دستی در فاکتور اعمال کنم.')}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-lg shrink-0 cursor-pointer"
              >
                عذرخواهی محترمانه + درخواست کارت باشگاه
              </button>
              <button 
                onClick={() => setInputMessage('حق با شماست، اجازه بدین فاکتور رو باز کنم و مابه‌التفاوت ۴۰ هزار تومان رو برگشت بدم.')}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-lg shrink-0 cursor-pointer"
              >
                پذیرش اشتباه و عودت وجه
              </button>
            </div>

            {/* Input Action Form */}
            <div className="pt-2 flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="پاسخ خود را به عنوان صندوق‌دار وارد نمایید..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-hidden focus:border-amber-500"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>ارسال</span>
              </button>
            </div>

          </div>

        </div>
      )}

      {/* TAB 2: COMPETENCY RADAR EVALUATION */}
      {activeTab === 'rubric_eval' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-600" />
                <span>ماتریس سنجش ۵ گانه شایستگی‌های رفتاری و گواهی‌نامه دیجیتال رفاه</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                صندوق‌دار با کسب امتیاز بالای ۸۰ در تمام ابعاد، گواهینامه معتبر «صندوق‌دار ارشد رفاه» را دریافت می‌کند.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Radar Chart (7 Cols) */}
              <div className="lg:col-span-7 h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: '#334155' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name="امتیاز صندوق‌دار" dataKey="score" stroke="#d97706" fill="#f59e0b" fillOpacity={0.4} />
                    <Radar name="حداقل استاندارد رفاه" dataKey="benchmark" stroke="#059669" fill="#10b981" fillOpacity={0.15} strokeDasharray="3 3" />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Certificate Widget (5 Cols) */}
              <div className="lg:col-span-5 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-3xl p-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center mx-auto shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-amber-800 uppercase tracking-widest font-black block">REFAH DIGITAL ACADEMY</span>
                  <h4 className="text-sm font-black text-amber-950 mt-0.5">گواهی‌نامه صلاحیت حرفه‌ای صندوق‌داری</h4>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed font-medium">
                  این گواهی تایید می‌کند فراگیر موفق به سپری کردن سناریوهای بحرانی و کسب نمره میانگین <strong>۹۲ از ۱۰۰</strong> گردیده است.
                </div>
                <div className="pt-2 border-t border-amber-200/60 flex justify-between items-center text-[10px] font-mono text-slate-500">
                  <span>شناسه: CERT-RFH-2026-992</span>
                  <span>اعتبار: تا پایان سال ۱۴۰۵</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: CSAT & NPS IMPACT */}
      {activeTab === 'academy_impact' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-600" />
                <span>روند جهش رضایت مشتریان (CSAT) و کاهش شکایات صندوق</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                سنجش مستقیم اثر آموزش هوش مصنوعی بر شاخص خالص ترویج‌کنندگان (NPS) و تجربه مشتری در شعب
              </p>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={csatTrend}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} unit="٪" />
                  <Tooltip />
                  <Line type="monotone" dataKey="csat" stroke="#d97706" strokeWidth={3} name="رضایت مشتری (CSAT)" />
                  <Line type="monotone" dataKey="nps" stroke="#059669" strokeWidth={2.5} name="شاخص ترویج‌کنندگان (NPS)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: FINANCIALS */}
      {activeTab === 'financials' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Coins className="w-5 h-5 text-amber-600" />
                <span>توجیه اقتصادی و مدل مالی ۲۴٫۲ میلیارد تومانی پروژه A3</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                استخراج بر اساس متدولوژی استاندارد سنجش اثربخشی سرمایه انسانی رفاه (HR-03)
              </p>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-3 font-mono text-xs">
              <div className="text-amber-400 font-extrabold text-sm">
                فرمول منفعت مالی: Benefit = Churn Prevention + Speed to Checkout + Error Reduction
              </div>
              <div className="text-slate-300 leading-relaxed font-sans text-xs">
                سودآوری سالانه = ۱۶٫۵ میلیارد تومان جلوگیری از ریزش مشتریان ناراضی + ۷٫۷ میلیارد تومان صرفه‌جویی در هزینه‌های خطای صندوق و برگشت از فروش
              </div>
              <div className="text-emerald-300 font-extrabold text-sm pt-2 border-t border-slate-800">
                = ۲۴٫۲ میلیارد تومان سود و ارزش‌افزوده خالص سالانه در شبکه رفاه
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">هزینه پایلوت (۸ هفته)</span>
                <span className="text-xl font-black text-slate-900 block mt-1">۱۹۰ میلیون تومان</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">آموزش ۵۰۰ صندوق‌دار</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">سود خالص سالانه</span>
                <span className="text-xl font-black text-amber-700 block mt-1">۲۴٫۲ میلیارد تومان</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">ارتقای وفاداری مشتری</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">نسبت منفعت به هزینه (BCR)</span>
                <span className="text-xl font-black text-amber-700 block mt-1">۵٫۳۸ برابر</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">بازگشت سریع</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-500 font-bold block">دوره بازگشت سرمایه</span>
                <span className="text-xl font-black text-emerald-700 block mt-1">۱٫۹ ماه</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">کمتر از ۶۰ روز</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: ARCHITECTURE */}
      {activeTab === 'architecture' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
          <div>
            <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-amber-600" />
              <span>تصمیم‌گیری معماری فنی ADR-003: خط لوله ارزیابی صوتی و متنی LLM با رویکرد RAG</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              معماری پایپ‌لاین تحلیل گفتار و ارزیابی زنده پاسخ‌های کارکنان بدون تاخیر
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-amber-600" />
                <span>۱. پایگاه دانش قوانین رفاه (RAG)</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                تعبیه کتابچه راهنمای رفتار سازمانی، آیین‌نامه عودت کالا و قوانین اعمال تخفیف باشگاه مشتریان رفاه در پایگاه وکتوری Qdrant.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>۲. مدل زبانی مولد شخصیت و داوری (LLM Judge)</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                اجرای هم‌زمان دو پرامپت: یکی برای تولید پاسخ طبیعی مشتری و دیگری برای داوری رفتار، لحن و همدلی پرسنل.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>۳. ذخیره سوابق و داشبورد منابع انسانی</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                ثبت پیشرفت یادگیری در سیستم LMS و صدور اتوماتیک مدرک شایستگی برای ارتقای رتبه و پاداش صندوق‌دار.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
