import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Layers, 
  Percent, 
  GraduationCap, 
  Calculator, 
  Bot, 
  Sparkles, 
  Filter, 
  Search, 
  FileCheck2, 
  ChevronLeft,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Store,
  FlaskConical,
  Award
} from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { TopNavbar } from './components/TopNavbar';
import { ExecutiveCockpit } from './components/ExecutiveCockpit';
import { ProjectCard } from './components/ProjectCard';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProjectScenarioInteractive } from './components/ProjectScenarioInteractive';
import { SmartAcademyDemo } from './components/SmartAcademyDemo';
import { RoiCalculator } from './components/RoiCalculator';
import { AIConsultantChat } from './components/AIConsultantChat';
import { BoardPresentationModal } from './components/BoardPresentationModal';
import { PilotMoUDraft } from './components/PilotMoUDraft';
import { VistaCompanyProfile } from './components/VistaCompanyProfile';
import { REFAH_PROJECTS, VISTA_COMPANY_INFO } from './data/projects';
import { ProjectDetail } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('cockpit');
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [selectedSimulatorProjectId, setSelectedSimulatorProjectId] = useState<string>('C2');
  const [showPitchMode, setShowPitchMode] = useState<boolean>(false);
  const [showMoUModal, setShowMoUModal] = useState<boolean>(false);

  // Responsive Sidebar States
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);

  // Filters for Project Catalog tab
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedWaveFilter, setSelectedWaveFilter] = useState<number | 'all'>('all');
  const [selectedDomainFilter, setSelectedDomainFilter] = useState<string>('all');

  const filteredProjects = REFAH_PROJECTS.filter(p => {
    const matchesSearch = p.title.includes(searchQuery) || 
                          p.subtitle.includes(searchQuery) || 
                          p.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.executiveSummary.includes(searchQuery);
    const matchesWave = selectedWaveFilter === 'all' || p.wave === selectedWaveFilter;
    const matchesDomain = selectedDomainFilter === 'all' || p.domain === selectedDomainFilter;
    return matchesSearch && matchesWave && matchesDomain;
  });

  const handleLaunchPilotCelebration = (project: ProjectDetail) => {
    setSelectedProject(null);
    setShowMoUModal(true);
  };

  const handleLaunchSimulatorForProject = (projectId: string) => {
    setSelectedSimulatorProjectId(projectId);
    setSelectedProject(null);
    setActiveTab('simulator');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex font-['Vazirmatn',sans-serif] selection:bg-emerald-600 selection:text-white">
      
      {/* Responsive Sidebar (Right-side in RTL layout) */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenPitchMode={() => setShowPitchMode(true)}
        onOpenMoU={() => setShowMoUModal(true)}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        mobileOpen={mobileSidebarOpen}
        setMobileOpen={setMobileSidebarOpen}
      />

      {/* Main Layout Area (Pushed on desktop according to sidebar width) */}
      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${
        isSidebarCollapsed ? 'lg:mr-20' : 'lg:mr-72'
      }`}>
        
        {/* Top Navbar */}
        <TopNavbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenPitchMode={() => setShowPitchMode(true)}
          onOpenMoU={() => setShowMoUModal(true)}
          onToggleMobileMenu={() => setMobileSidebarOpen(true)}
        />

        {/* Main Content Area */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-16">
        
        {/* VIEW 1: EXECUTIVE COCKPIT */}
        {activeTab === 'cockpit' && (
          <ExecutiveCockpit
            onSelectProject={(proj) => setSelectedProject(proj)}
            onNavigateTab={(tab) => setActiveTab(tab)}
          />
        )}

        {/* VIEW 2: PROJECT CATALOG (ALL 10 PROJECTS) */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            {/* Catalog Banner & Filter Bar */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-2">
                    <Layers className="w-3.5 h-3.5 text-emerald-600" />
                    <span>کاتالوگ جامع ۱۰ پروژه استراتژیک سند رفاه هوشمند</span>
                  </div>
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                    طرح‌های عملیاتی تحول هوش مصنوعی و داده
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    شامل معماری فنی (ADR)، مدل داده، شاخص‌های کلیدی (COM/SCM/HRM)، تست سناریو و جزئیات فاز پایلوت
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                    {filteredProjects.length} پروژه آماده پیاده‌سازی
                  </span>
                </div>
              </div>

              {/* Search and Filters */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-3 border-t border-slate-100">
                
                {/* Search Bar */}
                <div className="sm:col-span-6 relative">
                  <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="جستجو در کد پروژه (C2، B5، B1، A3...)، نام، الگوریتم یا شاخص..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pr-10 pl-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white"
                  />
                </div>

                {/* Wave Filter */}
                <div className="sm:col-span-3">
                  <select
                    value={selectedWaveFilter}
                    onChange={(e) => setSelectedWaveFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-emerald-500 focus:bg-white cursor-pointer font-medium"
                  >
                    <option value="all">تمام امواج (موج‌های ۱، ۲ و ۳)</option>
                    <option value={1}>موج ۱: زودبازده و پایلوت فوری (C2, B5, B1, A3)</option>
                    <option value={2}>موج ۲: هوشمندسازی شلف و CRM (C1, C3, A1)</option>
                    <option value={3}>موج ۳: برج مراقبت و ضدتقلب (D1, D2, SCM-2)</option>
                  </select>
                </div>

                {/* Domain Filter */}
                <div className="sm:col-span-3">
                  <select
                    value={selectedDomainFilter}
                    onChange={(e) => setSelectedDomainFilter(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-emerald-500 focus:bg-white cursor-pointer font-medium"
                  >
                    <option value="all">تمام حوزه‌های سازمانی رفاه</option>
                    <option value="COM">حوزه تجاری و بازرگانی (COM)</option>
                    <option value="SCM">حوزه زنجیره تامین و لجستیک (SCM)</option>
                    <option value="ACADEMY">حوزه دانشگاه سازمانی و منابع انسانی</option>
                    <option value="OPS">حوزه عملیات و شعب فروشگاهی</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 10 Projects Grid with Smooth Framer-Motion Layout Animations */}
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={() => setSelectedProject(project)}
                    onLaunchSimulator={() => handleLaunchSimulatorForProject(project.id)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>

            <AnimatePresence>
              {filteredProjects.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="text-center py-16 bg-white border border-slate-200 rounded-3xl shadow-xs"
                >
                  <p className="text-slate-500 text-sm">هیچ پروژه‌ای با مشخصات فیلتر شده یافت نشد.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedWaveFilter('all');
                      setSelectedDomainFilter('all');
                    }}
                    className="mt-3 text-xs text-emerald-600 font-bold hover:underline cursor-pointer"
                  >
                    پاکسازی فیلترها
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* VIEW 3: INTERACTIVE SCENARIOS & LIVE LAB (ALL 10 PROJECTS) */}
        {activeTab === 'simulator' && (
          <div className="space-y-6">
            <ProjectScenarioInteractive
              projectId={selectedSimulatorProjectId}
              onSelectProject={(id) => setSelectedSimulatorProjectId(id)}
            />
          </div>
        )}

        {/* VIEW 4: SMART ACADEMY & LMS/TMS DEMO (PROJECT A3) */}
        {activeTab === 'academy' && (
          <div className="space-y-6">
            <SmartAcademyDemo
              onRequestPilotProposal={() => {
                const a3 = REFAH_PROJECTS.find(p => p.id === 'A3');
                if (a3) handleLaunchPilotCelebration(a3);
              }}
            />
          </div>
        )}

        {/* VIEW 5: FINANCIAL ROI & ECONOMIC FEASIBILITY */}
        {activeTab === 'calculator' && (
          <div className="space-y-6">
            <RoiCalculator
              onSelectProject={(proj) => setSelectedProject(proj)}
              onOpenMoU={() => setShowMoUModal(true)}
            />
          </div>
        )}

        {/* VIEW 6: VISTA COMPANY PROFILE & ECOSYSTEM */}
        {activeTab === 'vista' && (
          <div className="space-y-6">
            <VistaCompanyProfile
              onOpenMoU={() => setShowMoUModal(true)}
              onExploreProjects={() => setActiveTab('projects')}
            />
          </div>
        )}

        {/* VIEW 7: AI STRATEGIC CONSULTANT */}
        {activeTab === 'advisor' && (
          <div className="space-y-6">
            <AIConsultantChat />
          </div>
        )}

      </main>

      {/* MODAL 1: PROJECT DETAIL MODAL WITH FULL ARCHITECTURE & SCENARIO */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onLaunchSimulator={() => handleLaunchSimulatorForProject(selectedProject.id)}
          onRequestPilotProposal={() => handleLaunchPilotCelebration(selectedProject)}
        />
      )}

      {/* MODAL 2: BOARD PRESENTATION PITCH DECK */}
      {showPitchMode && (
        <BoardPresentationModal
          onClose={() => setShowPitchMode(false)}
          onSelectProject={(proj) => {
            setShowPitchMode(false);
            setSelectedProject(proj);
          }}
          onOpenMoU={() => {
            setShowPitchMode(false);
            setShowMoUModal(true);
          }}
        />
      )}

      {/* MODAL 3: OFFICIAL PILOT MOU DRAFT */}
      {showMoUModal && (
        <PilotMoUDraft
          onClose={() => setShowMoUModal(false)}
        />
      )}

        {/* Modern Footer with Clear Corporate Co-Branding */}
        <footer className="bg-white border-t border-slate-200 py-6 mt-auto text-center text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-800">طرح جامع هوش مصنوعی و داده فروشگاه‌های زنجیره‌ای رفاه</span>
              <span className="text-slate-300">|</span>
              <span>طراحی و اجرا: شرکت شبکه هوشمند ابتکار ویستا (Vista)</span>
            </div>
            <div className="text-slate-400 text-[11px]">
              سازگار با استانداردهای بصری Refah.ir (لایت تم سبز و سفید)
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
