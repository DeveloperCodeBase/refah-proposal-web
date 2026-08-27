export type ProjectWave = 1 | 2 | 3;
export type ProjectDomain = 'COM' | 'SCM' | 'HRM' | 'OPS' | 'ACADEMY';

export interface KPIIndicator {
  code: string; // e.g. COM-09
  title: string;
  unit: string;
  baseline: string;
  target: string;
  description: string;
  formula?: string;
}

export interface ArchitectureBlock {
  layer: string;
  components: string[];
  techStack: string[];
  description: string;
}

export interface FinancialMetric {
  benefitCostRatio: number; // e.g. 6.84
  estimatedAnnualBenefitBillionToman: number;
  pilotCostMillionToman: number;
  paybackMonths: number;
  formulaBreakdown: {
    affectedBase: string;
    improvementRate: string;
    coverageRatio: string;
    attributionRatio: string;
  };
}

export interface ExecutionSprint {
  sprint: number;
  title: string;
  durationWeeks: number;
  deliverables: string[];
  milestone: string;
}

export interface ProjectDetail {
  id: string; // e.g. 'C2', 'B5', 'B1', 'A3', 'C1', 'C3', 'D1'
  title: string;
  subtitle: string;
  domain: ProjectDomain;
  wave: ProjectWave;
  isFlagship: boolean;
  iconName: string;
  executiveSummary: string;
  problemStatement: string[];
  solutionOverview: string[];
  capabilities: string[];
  financials: FinancialMetric;
  kpis: KPIIndicator[];
  architecture: {
    adrTitle: string;
    dataFlow: string[];
    adrText: string;
    layers: ArchitectureBlock[];
    recommendedStack: {
      backend: string;
      database: string;
      frontend: string;
      aiMlEngine: string;
      dataPipeline: string;
      reasoning: string;
    };
  };
  pilotPlan: {
    targetBranches: string;
    controlGroupMethod: string;
    durationWeeks: number;
    sprints: ExecutionSprint[];
    acceptanceCriteria: string[];
  };
  monorepoStructure: string[];
  strategicPitchWhyUs: string[];
}

export interface PromotionSimulationItem {
  id: string;
  skuCode: string;
  title: string;
  category: string;
  currentPrice: number; // Toman
  costPrice: number; // Toman
  regularWeeklySales: number; // Units
  currentDiscountPercent: number; // Current promo discount %
  elasticity: number;
  cannibalizationRisk: 'low' | 'medium' | 'high';
  cannibalizesSku?: string;
}

export interface LMSCourseModule {
  id: string;
  title: string;
  roleTarget: 'cashier' | 'branch_manager' | 'logistics' | 'commercial';
  durationMin: number;
  aiFeature: string;
  description: string;
  simulationTopic: string;
}
