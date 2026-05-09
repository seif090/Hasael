export interface InvestmentProject {
  id: string;
  title: string;
  description: string;
  category: 'crops' | 'livestock' | 'equipment' | 'infrastructure';
  targetAmount: number;
  currentAmount: number;
  expectedReturn: number;
  duration: number;
  location: string;
  farmer: {
    name: string;
    rating: number;
    completedProjects: number;
  };
  images: string[];
  status: 'active' | 'funded' | 'completed' | 'cancelled';
  createdAt: Date;
}

export interface Investment {
  id: string;
  projectId: string;
  userId: string;
  amount: number;
  investedAt: Date;
  expectedReturn: number;
  status: 'active' | 'completed' | 'cancelled';
}

export interface FundingRequest {
  id: string;
  userId: string;
  projectTitle: string;
  description: string;
  category: 'crops' | 'livestock' | 'equipment' | 'infrastructure';
  requestedAmount: number;
  duration: number;
  expectedReturn: number;
  location: string;
  documents: string[];
  status: 'pending' | 'approved' | 'rejected' | 'funded';
  submittedAt: Date;
}
