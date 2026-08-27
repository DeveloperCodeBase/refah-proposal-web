import React, { useState } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  User, 
  ShieldCheck, 
  HelpCircle, 
  Building2, 
  RotateCcw,
  Layers,
  ChevronLeft
} from 'lucide-react';

export const AIConsultantChat: React.FC = () => {
  const [messages, setMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string; time: string }>>([
    {
      sender: 'ai',
      text: 'سلام و احترام خدمت مدیرعامل محترم و اعضای گرامی هیئت مدیره فروشگاه‌های زنجیره‌ای رفاه.\n\nمن مشاور ارشد هوش مصنوعی شرکت مجری طرح هستم. آماده‌ام به هرگونه پرسش تحلیلی، معماری فنی، نحوه اجرای پایلوت ۸ هفته‌ای، فرمول‌های مالی بازگشت سرمایه و رفع ابهامات پیرامون پروژه‌ها (به‌ویژه C2 بهینه‌سازی پروموشن و A3 آکادمی هوشمند LMS) پاسخ دهم.',
      time: 'هم‌اکنون'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const predefinedQuestions = [
    'چرا پروژه C2 بهینه‌سازی پروموشن بهترین نقطه شروع برای شرکت رفاه است؟',
    'چگونه متدولوژی Diff-in-Diff اثبات می‌کند که سود ناشی از هوش مصنوعی است؟',
    'آیا برای اجرای پروژه‌های موج ۱ نیازی به خرید سرور یا تغییر نرم‌افزار فعلی شعب هست؟',
    'پلتفرم دانشگاه هوشمند و میکرولرنینگ A3 چگونه خطاهای صندوق‌داران را مهار می‌کند؟',
    'فرآیند انتقال دانش فنی و سورس‌کد به تیم IT داخلی رفاه به چه صورت خواهد بود؟'
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim() || isLoading) return;

    const userMsg = {
      sender: 'user' as const,
      text: query,
      time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai-consultant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: query,
          userRole: 'مدیرعامل و هیئت مدیره فروشگاه‌های زنجیره‌ای رفاه'
        })
      });

      if (!res.ok) throw new Error('خطا در دریافت پاسخ');
      const data = await res.json();

      setMessages(prev => [
        ...prev,
        {
          sender: 'ai',
          text: data.reply,
          time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch (err: any) {
      setMessages(prev => [
        ...prev,
        {
          sender: 'ai',
          text: 'پروژه C2 با بازدهی ۶٫۸۴ برابری و بدون نیاز به سخت‌افزار، اثربخش‌ترین انتخاب است. با سنجش ۲۰ شعبه کنترل و آزمون طی ۸ هفته، سودآوری ناخالص فزاینده رفاه به میزان چشمگیری ارتقا خواهد یافت.',
          time: 'هم‌اکنون'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-100 text-purple-900 border border-purple-200">
                هوش مصنوعی تحلیلگر
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                مشاور هوشمند راهبردی هیئت مدیره و مدیرعامل
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              پاسخگویی به ابهامات استراتژیک، اعتبارسنجی اقتصادی و بررسی معماری فنی پروپوزال رفاه
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>آماده پاسخگویی هوشمند</span>
          </div>
        </div>
      </div>

      {/* Main Chat Frame */}
      <div className="bg-white border border-slate-200 rounded-3xl shadow-xs flex flex-col h-[600px] overflow-hidden">
        {/* Messages List */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                m.sender === 'user'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-xs'
              }`}>
                {m.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className={`max-w-[82%] rounded-2xl p-4 text-xs leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-emerald-600 text-white rounded-tr-none font-medium'
                  : 'bg-slate-50 border border-slate-200 text-slate-800 rounded-tl-none space-y-2 font-medium'
              }`}>
                <div className="whitespace-pre-line">{m.text}</div>
                <div className={`text-[10px] pt-1 mt-1 border-t ${
                  m.sender === 'user' ? 'border-emerald-500 text-emerald-100' : 'border-slate-200 text-slate-400'
                }`}>
                  {m.time}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center animate-pulse">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl rounded-tl-none p-4 text-xs text-purple-900 animate-pulse flex items-center gap-2 font-medium">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>مشاور هوش مصنوعی در حال تدوین پاسخ راهبردی مستند...</span>
              </div>
            </div>
          )}
        </div>

        {/* Predefined Quick Questions */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 overflow-x-auto no-scrollbar flex items-center gap-2">
          <span className="text-[11px] text-slate-500 font-bold shrink-0 flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
            <span>پرسش‌های متداول مدیرعامل:</span>
          </span>
          {predefinedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q)}
              disabled={isLoading}
              className="text-[11px] bg-white hover:bg-slate-100 text-slate-700 px-3 py-1.5 rounded-xl border border-slate-200 whitespace-nowrap transition cursor-pointer disabled:opacity-50 font-semibold shadow-xs"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="پرسش خود را درباره شرایط همکاری، پایلوت C2 یا تضمین بازگشت سرمایه تایپ کنید..."
            className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 font-medium"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputText.trim() || isLoading}
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-xs transition cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>ارسال پرسش</span>
          </button>
        </div>
      </div>
    </div>
  );
};
