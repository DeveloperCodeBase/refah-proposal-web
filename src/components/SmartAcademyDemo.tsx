import React, { useState } from 'react';
import { 
  Bot, 
  Video, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Send, 
  RotateCcw, 
  Play, 
  Pause,
  FileText, 
  Users, 
  Clock,
  Layers,
  ChevronLeft,
  Download,
  BookOpen,
  Image as ImageIcon,
  Check,
  Search,
  ExternalLink,
  ShieldCheck,
  GraduationCap,
  Sparkle,
  Printer,
  Loader2
} from 'lucide-react';
import { SMART_ACADEMY_MODULES } from '../data/projects';
import { downloadCourseHandbookPdf, printElementDirectly } from '../utils/pdfExport';

interface SmartAcademyDemoProps {
  onRequestPilotProposal?: () => void;
}

export const SmartAcademyDemo: React.FC<SmartAcademyDemoProps> = ({
  onRequestPilotProposal
}) => {
  const [activeView, setActiveView] = useState<'courses' | 'roleplay' | 'meeting'>('courses');
  const [selectedCourseId, setSelectedCourseId] = useState<string>('course-1');
  const [activeCourseTab, setActiveCourseTab] = useState<'syllabus' | 'video' | 'image' | 'pdf'>('syllabus');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Video Player state simulation
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('۰۲:۱۵');
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  // AI Roleplay Interactive State
  const [userReply, setUserReply] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'ai' | 'user' | 'system'; text: string; score?: number }>>([
    {
      sender: 'system',
      text: 'سناریوی شبیه‌سازی: خریدار با عصبانیت به صندوق رفاه مراجعه کرده و می‌گوید: «چرا تخفیف ۲۰ درصدی روغن روی فاکتور من اعمال نشده؟ شما مشتریان رو فریب میدین!»'
    },
    {
      sender: 'ai',
      text: 'خریدار (با صدای بلند): «آقا/خانم صندوق‌دار! این فاکتور چرا ۱۲۰ هزار تومنه در حالی که روی برچسب شلف زده بودین ۹۶ تومن؟ الان مدیر فروشگاه رو صدا کنین!»'
    }
  ]);
  const [evaluation, setEvaluation] = useState<{ score: number; feedback: string; strengths: string[] } | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const selectedCourse = SMART_ACADEMY_MODULES.find(c => c.id === selectedCourseId) || SMART_ACADEMY_MODULES[0];

  const categories = ['all', ...Array.from(new Set(SMART_ACADEMY_MODULES.map(c => c.category)))];

  const filteredCourses = SMART_ACADEMY_MODULES.filter(course => {
    const matchesSearch = course.title.includes(searchQuery) || course.roleTarget.includes(searchQuery) || course.description.includes(searchQuery);
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSendResponse = (presetText?: string) => {
    const textToSend = presetText || userReply;
    if (!textToSend.trim()) return;

    const newChat = [...chatMessages, { sender: 'user' as const, text: textToSend }];
    setChatMessages(newChat);
    setUserReply('');
    setIsSimulating(true);

    setTimeout(() => {
      let score = 85;
      let feedback = 'پاسخ متین و منطبق بر پروتکل‌های آموزشی تکریم مشتری در پلتفرم آموزش ضمن خدمت رفاه.';
      let strengths = ['عذرخواهی محترمانه', 'بررسی سریع سیستم', 'عدم ایجاد تنش در صف'];

      if (textToSend.includes('سیستم') || textToSend.includes('تخفیف') || textToSend.includes('بررسی') || textToSend.includes('عذر') || textToSend.includes('صبر') || textToSend.includes('یک دقیقه')) {
        score = 96;
        feedback = 'بسیار عالی! رفتار پرسنل بر اساس مدل طلایی HEAT اجرا شد و در کمتر از یک دقیقه تنش خریدار رفع گردید.';
        strengths = ['کنترل احساسات', 'تکنیک گوش دادن فعال', 'شفافیت فاکتور و حل فوری مغایرت'];
      } else if (textToSend.includes('به من ربط نداره') || textToSend.includes('تقصیر') || textToSend.includes('نمیدونم') || textToSend.includes('سالن')) {
        score = 45;
        feedback = 'نیاز به بازآموزی: ارجاع دادن مشتری ناراضی به همکاران دیگر خلاف خط‌مشی تکریم ارباب‌رجوع در فروشگاه‌های رفاه است.';
        strengths = ['سرعت در بیان'];
      }

      setChatMessages(prev => [
        ...prev,
        {
          sender: 'ai',
          text: `خریدار (با آرامش بیشتر): «بسیار ممنون از پاسخگویی و رفع سریع مغایرت فاکتور. رفتار حرفه‌ای شما قابل تقدیر است.»`
        }
      ]);

      setEvaluation({
        score,
        feedback,
        strengths
      });
      setIsSimulating(false);
    }, 800);
  };

  const handleResetSimulation = () => {
    setChatMessages([
      {
        sender: 'system',
        text: `سناریوی شبیه‌سازی دوره [${selectedCourse.title}]: ${selectedCourse.simulationTopic}`
      },
      {
        sender: 'ai',
        text: `مشتری/پرسنل در موقعیت آزمون: «لطفاً موضوع ${selectedCourse.simulationTopic} را در کمتر از ۱ دقیقه طبق استاندارد رفاه مدیریت نمایید.»`
      }
    ]);
    setEvaluation(null);
  };

  const handleDownloadHandbookPdf = async () => {
    setIsGeneratingPdf(true);
    const success = await downloadCourseHandbookPdf(selectedCourse);
    setIsGeneratingPdf(false);
    if (success) {
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }
  };

  const handlePrintHandbook = () => {
    printElementDirectly(
      'academy-handbook-preview',
      `کتابچه راهنمای آموزشی رفاه - ${selectedCourse.title}`
    );
  };


  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-teal-100 text-teal-800 border border-teal-300">
                سامانه A3 سازمانی
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                پلتفرم آموزش ضمن خدمت، کپسول‌های میکرولرنینگ و سامانه‌های LMS/TMS رفاه
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              مجموعه ۱۰ دوره مهارتی کارکنان زنجیره تأمین و فروشگاه‌های رفاه همراه با سرفصل‌ها، ویدیوهای تعاملی، اینفوگرافیک و هندبوک PDF
            </p>
          </div>

          {/* Navigation View Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
            <button
              onClick={() => setActiveView('courses')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                activeView === 'courses' ? 'bg-teal-700 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>۱۰ دوره تخصصی ضمن خدمت (کامل)</span>
            </button>

            <button
              onClick={() => setActiveView('roleplay')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                activeView === 'roleplay' ? 'bg-teal-700 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>مربی شبیه‌ساز مکالمه AI</span>
            </button>

            <button
              onClick={() => setActiveView('meeting')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                activeView === 'meeting' ? 'bg-teal-700 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>جلسات آنلاین و خلاصه‌ساز هوشمند</span>
            </button>
          </div>
        </div>
      </div>

      {/* VIEW 1: 10 REFAH COURSES EXPLORER */}
      {activeView === 'courses' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left / Sidebar Column: Course Selection List (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-teal-700" />
                  <span>دوره‌های آموزش ضمن خدمت (۱۰ دوره)</span>
                </h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                  {filteredCourses.length} دوره
                </span>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute right-3 top-3 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="جستجو در عنوان یا نقش پرسنل..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pr-8 pl-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-600 focus:bg-white"
                />
              </div>

              {/* Category Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2 py-1 rounded-lg text-[10px] font-bold transition cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-teal-700 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat === 'all' ? 'همه دسته‌ها' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Courses Scrollable List */}
            <div className="space-y-2.5 max-h-[640px] overflow-y-auto pr-0.5">
              {filteredCourses.map((course, idx) => {
                const isSelected = course.id === selectedCourse.id;
                return (
                  <div
                    key={course.id}
                    onClick={() => setSelectedCourseId(course.id)}
                    className={`p-3.5 rounded-2xl border transition cursor-pointer text-right ${
                      isSelected
                        ? 'bg-teal-50/80 border-teal-500 shadow-xs ring-1 ring-teal-400'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                        کد {idx + 1}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-100/70 text-teal-800">
                        {course.category}
                      </span>
                    </div>

                    <h4 className={`text-xs font-black leading-snug line-clamp-2 ${isSelected ? 'text-teal-950' : 'text-slate-900'}`}>
                      {course.title}
                    </h4>

                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                      مخاطب: {course.roleTarget}
                    </p>

                    <div className="flex items-center justify-between pt-2 mt-2 border-t border-slate-100 text-[10px] text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-teal-600" />
                        <span>{course.durationMin} دقیقه</span>
                      </span>
                      <span className="flex items-center gap-1 text-teal-700 font-bold">
                        <span>مشاهده محتوا</span>
                        <ChevronLeft className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Course Deep View (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {/* Active Course Card Header */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-xl text-xs font-black bg-teal-700 text-white">
                    {selectedCourse.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                    سطح: {selectedCourse.level}
                  </span>
                  <span className="px-2.5 py-1 rounded-xl text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>{selectedCourse.durationMin} دقیقه آموزشی</span>
                  </span>
                </div>

                <div className="text-xs text-slate-500 font-bold">
                  جامعه هدف: <span className="text-slate-900 font-black">{selectedCourse.roleTarget}</span>
                </div>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                  {selectedCourse.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {selectedCourse.description}
                </p>
              </div>

              {/* AI Coaching Feature Pill */}
              <div className="flex items-center gap-2.5 bg-teal-50/70 border border-teal-200/80 p-2.5 rounded-xl text-xs text-teal-900">
                <Sparkles className="w-4 h-4 text-teal-700 shrink-0" />
                <div>
                  <span className="font-black">قابلیت هوشمند پلتفرم: </span>
                  <span className="font-medium">{selectedCourse.aiFeature}</span>
                </div>
              </div>

              {/* Sub-tabs for Course Materials */}
              <div className="flex flex-wrap gap-2 border-b border-slate-200 pt-2">
                <button
                  onClick={() => setActiveCourseTab('syllabus')}
                  className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition cursor-pointer flex items-center gap-1.5 ${
                    activeCourseTab === 'syllabus'
                      ? 'border-teal-700 text-teal-800 font-black'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>۱. سرفصل‌ها و مباحث دوره</span>
                </button>

                <button
                  onClick={() => setActiveCourseTab('video')}
                  className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition cursor-pointer flex items-center gap-1.5 ${
                    activeCourseTab === 'video'
                      ? 'border-teal-700 text-teal-800 font-black'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>۲. فیلم و سناریوی تصویری</span>
                </button>

                <button
                  onClick={() => setActiveCourseTab('image')}
                  className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition cursor-pointer flex items-center gap-1.5 ${
                    activeCourseTab === 'image'
                      ? 'border-teal-700 text-teal-800 font-black'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>۳. اینفوگرافیک و دیاگرام</span>
                </button>

                <button
                  onClick={() => setActiveCourseTab('pdf')}
                  className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition cursor-pointer flex items-center gap-1.5 ${
                    activeCourseTab === 'pdf'
                      ? 'border-teal-700 text-teal-800 font-black'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>۴. هندبوک و کتابچه PDF</span>
                </button>
              </div>

              {/* TAB 1: SYLLABUS */}
              {activeCourseTab === 'syllabus' && (
                <div className="space-y-4 pt-1">
                  <div className="grid grid-cols-1 gap-3">
                    {selectedCourse.syllabus?.map((sec, i) => (
                      <div key={i} className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-black text-slate-900 border-b border-slate-200 pb-2">
                          <span className="w-5 h-5 rounded-md bg-teal-700 text-white flex items-center justify-center text-[10px]">
                            {i + 1}
                          </span>
                          <span>{sec.section}</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-700 pr-2">
                          {sec.topics.map((top, tIdx) => (
                            <li key={tIdx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                              <span>{top}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Golden Rules */}
                  <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 space-y-2 text-xs">
                    <div className="font-extrabold text-emerald-950 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-700" />
                      <span>قوانین طلایی و چک‌لیست عملیاتی در شعب رفاه:</span>
                    </div>
                    <ul className="space-y-1.5 text-emerald-900 pr-2">
                      {selectedCourse.keyTakeaways?.map((takeaway, kIdx) => (
                        <li key={kIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* TAB 2: VIDEO PLAYER */}
              {activeCourseTab === 'video' && (
                <div className="space-y-4 pt-1">
                  <div className="bg-slate-950 rounded-2xl p-4 text-white space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                        <span className="text-xs font-black">{selectedCourse.videoInfo?.title}</span>
                      </div>
                      <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md font-mono">
                        {selectedCourse.videoInfo?.quality}
                      </span>
                    </div>

                    {/* Video Simulation Canvas */}
                    <div className="aspect-video bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 rounded-xl flex flex-col items-center justify-center relative overflow-hidden border border-slate-800 p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-teal-600/90 hover:bg-teal-500 text-white flex items-center justify-center cursor-pointer shadow-lg transition transform hover:scale-105"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 mr-1" />}
                      </div>

                      <p className="text-xs text-slate-300 font-bold mt-4">
                        {isPlaying ? 'در حال پخش ماژول آموزشی تعاملی...' : 'برای شروع پخش ویدیوی کپسولی کلیک کنید'}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        نوع مدیا: {selectedCourse.videoInfo?.videoType}
                      </p>

                      {/* Video Player Progress Bar */}
                      <div className="absolute bottom-3 left-4 right-4 flex items-center gap-3 text-[10px] text-slate-300 bg-slate-950/70 p-2 rounded-lg backdrop-blur-xs">
                        <span>{currentTime}</span>
                        <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                          <div className="w-1/4 h-full bg-teal-500 rounded-full" />
                        </div>
                        <span>{selectedCourse.videoInfo?.duration}</span>
                      </div>
                    </div>

                    {/* Video Keypoints */}
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold text-slate-300">نقاط عطف و سرفصل‌های زمانی این ویدیو:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {selectedCourse.videoInfo?.sampleTimestampKeypoints.map((kp, kpIdx) => (
                          <div 
                            key={kpIdx} 
                            onClick={() => setCurrentTime(kp.time)}
                            className="bg-slate-900/90 hover:bg-slate-800 p-2 rounded-lg border border-slate-800 text-[11px] cursor-pointer transition flex items-center gap-2"
                          >
                            <span className="text-teal-400 font-mono font-bold">{kp.time}</span>
                            <span className="text-slate-300 truncate">{kp.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: IMAGE & INFOGRAPHIC */}
              {activeCourseTab === 'image' && (
                <div className="space-y-4 pt-1">
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                        <ImageIcon className="w-4 h-4 text-teal-700" />
                        <span>{selectedCourse.imageInfo?.diagramTitle}</span>
                      </h4>
                      <span className="text-[10px] text-slate-500 font-bold bg-white px-2 py-0.5 rounded border border-slate-200">
                        پوستر آموزشی شلف و بورد شعبه
                      </span>
                    </div>

                    {/* Image Mock Container */}
                    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs relative">
                      <img 
                        src={selectedCourse.imageInfo?.bannerUrl} 
                        alt={selectedCourse.imageInfo?.diagramTitle}
                        className="w-full h-72 object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-4 text-white">
                        <p className="text-xs font-bold leading-relaxed">
                          {selectedCourse.imageInfo?.caption}
                        </p>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-500 leading-relaxed bg-white p-3 rounded-xl border border-slate-200">
                      این پوستر در ابعاد A3 روی تابلوی اعلانات اتاق پرسنل و بخش سرپرستی کلیه شعب هایپر و مینی هایپر رفاه جهت یادآوری مستمر الصاق می‌گردد.
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: PDF HANDBOOK */}
              {activeCourseTab === 'pdf' && (
                <div className="space-y-4 pt-1">
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3 no-print">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-sm">
                          PDF
                        </div>
                        <div>
                          <h4 className="text-xs font-black text-slate-900">{selectedCourse.pdfInfo?.title}</h4>
                          <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                            {selectedCourse.pdfInfo?.filename} • {selectedCourse.pdfInfo?.pageCount} صفحه • {selectedCourse.pdfInfo?.fileSize}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={handlePrintHandbook}
                          className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer shadow-xs border border-slate-700"
                        >
                          <Printer className="w-3.5 h-3.5 text-teal-400" />
                          <span>چاپ کتابچه</span>
                        </button>

                        <button
                          onClick={handleDownloadHandbookPdf}
                          disabled={isGeneratingPdf}
                          className="px-3.5 py-2 bg-teal-700 hover:bg-teal-800 disabled:bg-teal-900 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer shadow-xs"
                        >
                          {isGeneratingPdf ? (
                            <>
                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              <span>در حال تولید PDF...</span>
                            </>
                          ) : downloadSuccess ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-teal-300" />
                              <span>فایل PDF دانلود شد</span>
                            </>
                          ) : (
                            <>
                              <Download className="w-3.5 h-3.5" />
                              <span>دانلود دفترچه راهنما (PDF)</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Printable Handbook Preview Container */}
                    <div 
                      id="academy-handbook-preview"
                      className="printable-document bg-white border border-slate-200 rounded-2xl p-6 space-y-6 text-slate-800 font-['Vazirmatn',sans-serif]"
                    >
                      {/* Official Header */}
                      <div className="print-break-avoid border-b-2 border-slate-900 pb-4 flex items-center justify-between">
                        <div>
                          <div className="text-[11px] font-bold text-teal-700">سامانه آموزش ضمن خدمت آکادمی رفاه (پروژه A3)</div>
                          <h3 className="text-base font-black text-slate-950 mt-0.5">{selectedCourse.pdfInfo?.title}</h3>
                          <p className="text-xs text-slate-500 mt-0.5">سرفصل دوره: {selectedCourse.title} • گروه هدف: {selectedCourse.roleTarget}</p>
                        </div>
                        <div className="text-left text-xs text-slate-500">
                          <div><strong>شناسه سند:</strong> {selectedCourse.pdfInfo?.filename}</div>
                          <div><strong>ویرایش:</strong> رسمی زمستان ۱۴۰۳</div>
                        </div>
                      </div>

                      {/* PDF Table of Contents */}
                      <div className="print-break-avoid space-y-2">
                        <div className="text-xs font-black text-slate-900">سرفصل‌های مندرج در کتابچه راهنما:</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {selectedCourse.pdfInfo?.chapters.map((chap, cIdx) => (
                            <div key={cIdx} className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0" />
                              <span>{chap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Sample Excerpt */}
                      <div className="print-break-avoid bg-amber-50/80 border border-amber-200 rounded-xl p-4 space-y-1.5">
                        <div className="text-[11px] font-black text-amber-900">گزیده‌ای از دستورالعمل و آیین‌نامه رسمی رفاه:</div>
                        <p className="text-xs text-amber-950 italic leading-relaxed font-medium">
                          {selectedCourse.pdfInfo?.sampleExcerpt}
                        </p>
                      </div>

                      {/* Training Objectives */}
                      <div className="print-break-avoid space-y-2 pt-2 border-t border-slate-100">
                        <div className="text-xs font-black text-slate-900">اهداف یادگیری و شایستگی‌های عملیاتی:</div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {(selectedCourse.keyTakeaways || selectedCourse.syllabus.flatMap(s => s.topics)).map((t, idx) => (
                            <div key={idx} className="bg-teal-50 border border-teal-200 text-teal-950 text-xs p-2 rounded-lg font-medium">
                              ✓ {t}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Signoff / Footer for Document */}
                      <div className="print-break-avoid pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                        <span>سازمان مدیریت منابع انسانی و فناوری اطلاعات فروشگاه‌های زنجیره‌ای رفاه</span>
                        <span>صفحه ۱ از {selectedCourse.pdfInfo?.pageCount || 1}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: AI ROLEPLAY TRAINER */}
      {activeView === 'roleplay' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Chat Simulator */}
          <div className="lg:col-span-8 bg-white border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between shadow-sm h-[580px]">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs">
                    AI
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-slate-900">مربی هوشمند شبیه‌ساز مهارت‌های عملیاتی رفاه</h3>
                    <p className="text-[10px] text-slate-500">سناریوی فعال: {selectedCourse.title}</p>
                  </div>
                </div>

                <button
                  onClick={handleResetSimulation}
                  className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>شروع مجدد</span>
                </button>
              </div>

              {/* Chat messages */}
              <div className="space-y-3 overflow-y-auto max-h-[340px] p-2">
                {chatMessages.map((msg, i) => (
                  <div 
                    key={i} 
                    className={`p-3.5 rounded-xl text-xs max-w-[85%] leading-relaxed ${
                      msg.sender === 'system'
                        ? 'bg-slate-100 border border-slate-200 text-slate-700 text-center max-w-full font-medium'
                        : msg.sender === 'ai'
                        ? 'bg-rose-50 border border-rose-200 text-rose-950 self-start font-medium'
                        : 'bg-emerald-50 border border-emerald-200 text-emerald-950 mr-auto ml-0 font-medium'
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
                {isSimulating && (
                  <div className="text-xs text-teal-700 font-bold animate-pulse p-2">
                    مربی هوش مصنوعی در حال تحلیل پاسخ و استانداردهای رفتاری پرسنل...
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="space-y-3 pt-3 border-t border-slate-100">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold text-slate-500">پاسخ‌های پیشنهادی آزمون:</span>
                <button
                  onClick={() => handleSendResponse('سلام خریدار محترم، از صبوری شما متشکرم. اجازه بدین همین الان فاکتور رو در کمتر از یک دقیقه در سیستم پوز بررسی و تخفیف رو اعمال کنم.')}
                  className="text-[11px] bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200 transition cursor-pointer font-medium"
                >
                  پاسخ استاندارد و مودبانه (تست نمره عالی)
                </button>
                <button
                  onClick={() => handleSendResponse('آقا شلف مربوط به من نیست، باید خودتون به همکاران سالن می‌گفتین!')}
                  className="text-[11px] bg-rose-50 hover:bg-rose-100 text-rose-800 px-2.5 py-1 rounded-lg border border-rose-200 transition cursor-pointer font-medium"
                >
                  پاسخ غیرحرفه‌ای (تست نمره منفی)
                </button>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={userReply}
                  onChange={(e) => setUserReply(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendResponse()}
                  placeholder="پاسخ خود را به عنوان متصدی یا مسئول رفاه تایپ کنید..."
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-600 focus:bg-white"
                />
                <button
                  onClick={() => handleSendResponse()}
                  disabled={!userReply.trim() || isSimulating}
                  className="px-4 py-2 bg-teal-700 hover:bg-teal-800 disabled:opacity-50 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>ارسال</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Real-time Evaluation Card */}
          <div className="lg:col-span-4 bg-white border border-slate-200/90 rounded-2xl p-5 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-teal-800 font-extrabold text-sm border-b border-slate-100 pb-3">
              <Award className="w-5 h-5 text-teal-700" />
              <span>کارنامه شایستگی هوش مصنوعی (TMS)</span>
            </div>

            {evaluation ? (
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                  <div className="text-xs font-bold text-slate-500">نمره کسب‌شده در این سناریو</div>
                  <div className={`text-4xl font-black mt-1 ${evaluation.score >= 80 ? 'text-emerald-700' : 'text-rose-600'}`}>
                    {evaluation.score} <span className="text-sm font-normal text-slate-400">از ۱۰۰</span>
                  </div>
                  <div className="text-[11px] font-bold text-slate-600 mt-1">
                    {evaluation.score >= 80 ? 'سطح: بسیار مطلوب و تأییدشده (Pass)' : 'سطح: نیاز به بازآموزی و تکرار کپسول'}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="text-xs font-bold text-slate-800">تحلیل رفتاری مربی هوش مصنوعی:</div>
                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                    {evaluation.feedback}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="text-xs font-bold text-slate-800">شاخص‌های شایستگی ثبت‌شده:</div>
                  <div className="space-y-1">
                    {evaluation.strengths.map((str, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-emerald-800 font-medium bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{str}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 space-y-2 text-slate-400">
                <Bot className="w-10 h-10 mx-auto text-slate-300 stroke-1" />
                <p className="text-xs">یک پاسخ در شبیه‌ساز ثبت نمایید تا نمره عملکردی و بازخورد هوش مصنوعی نمایش داده شود.</p>
              </div>
            )}

            <div className="pt-3 border-t border-slate-100">
              <div className="text-[11px] text-slate-500 leading-relaxed">
                این پلتفرم با آموزش ضمن خدمت مستمر ۲۰۰ سناریوی تعاملی، شاخص <strong>HRM-03</strong> (مدت زمان یادگیری پرسنل تازه استخدام) را از <strong>۲۸ روز به ۹ روز</strong> کاهش می‌دهد.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: SMART MEETING & AI MINUTES */}
      {activeView === 'meeting' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5 text-teal-700" />
                <h3 className="text-sm font-extrabold text-slate-900">جلسه آنلاین هفتگی مدیران شعب منطقه ۱ تهران</h3>
              </div>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full">
                اتصال پایدار و امن
              </span>
            </div>

            <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden relative flex items-center justify-center text-white">
              <div className="absolute top-3 right-3 flex items-center gap-2 bg-slate-950/80 px-2.5 py-1 rounded-lg text-xs">
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                <span>در حال ضبط و تحلیل بلادرنگ توسط AI</span>
              </div>

              <div className="text-center space-y-2">
                <Users className="w-12 h-12 text-slate-500 mx-auto" />
                <p className="text-xs text-slate-300 font-bold">اتاق کنفرانس سازمانی آموزش ضمن خدمت رفاه (۲۴ نفر آنلاین)</p>
                <p className="text-[11px] text-slate-400">موضوع: تحلیل دوره‌های جدید و بازخورد پرسنل در آزمون‌های عملی</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-teal-800 font-extrabold text-sm border-b border-slate-100 pb-3">
              <FileText className="w-4 h-4 text-teal-700" />
              <span>صورتجلسه هوشمند و مصوبات استخراج‌شده توسط AI</span>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                <div className="font-bold text-slate-900">۱. خلاصه مباحث کلیدی:</div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  مدیران شعب تجریش و صادقیه اعلام کردند گذراندن دوره ۱ (تکریم مشتری) و دوره ۳ (سامانه صندوق) توسط پرسنل جدید، زمان انتظار صف مشتریان را ۳۵٪ کاهش داده است.
                </p>
              </div>

              <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 space-y-1 text-emerald-950">
                <div className="font-bold">۲. اقدامات و مصوبات معین (Action Items):</div>
                <ul className="text-[11px] space-y-1 list-disc list-inside">
                  <li><strong>معاونت منابع انسانی رفاه:</strong> اجباری شدن آزمون شبیه‌ساز AI برای تمام صندوق‌داران پیش از شروع شیفت اول.</li>
                  <li><strong>سرپرستان شعب:</strong> بارگذاری گزارش پیشرفت ۱۰ دوره در سامانه TMS به صورت هفتگی.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
