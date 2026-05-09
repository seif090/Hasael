import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { InvestmentProject, Investment, FundingRequest } from '../models/investment.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private projectsSubject = new BehaviorSubject<InvestmentProject[]>([]);
  private userInvestmentsSubject = new BehaviorSubject<Investment[]>([]);
  private fundingRequestsSubject = new BehaviorSubject<FundingRequest[]>([]);

  projects$ = this.projectsSubject.asObservable();
  userInvestments$ = this.userInvestmentsSubject.asObservable();
  fundingRequests$ = this.fundingRequestsSubject.asObservable();

  constructor() {
    this.loadMockProjects();
  }

  private loadMockProjects() {
    const mockProjects: InvestmentProject[] = [
      {
        id: '1',
        title: 'مشروع زراعة القمح في القصيم',
        description: 'مشروع استثماري في زراعة القمح على مساحة 50 هكتار مع تكنولوجيا الري الحديثة',
        category: 'crops',
        targetAmount: 500000,
        currentAmount: 350000,
        expectedReturn: 15,
        duration: 12,
        location: 'القصيم',
        farmer: {
          name: 'عبدالله الدوسري',
          rating: 4.8,
          completedProjects: 12
        },
        images: ['https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800'],
        status: 'active',
        createdAt: new Date('2024-01-15')
      },
      {
        id: '2',
        title: 'مشروع تسمين الأغنام',
        description: 'مشروع تسمين 500 رأس من الأغنام باستخدام أعلاف محلية عالية الجودة',
        category: 'livestock',
        targetAmount: 300000,
        currentAmount: 280000,
        expectedReturn: 18,
        duration: 8,
        location: 'الرياض',
        farmer: {
          name: 'سعود القحطاني',
          rating: 4.9,
          completedProjects: 8
        },
        images: ['https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800'],
        status: 'active',
        createdAt: new Date('2024-02-01')
      },
      {
        id: '3',
        title: 'مشروع الزراعة المائية',
        description: 'نظام زراعة مائية حديث للخضروات مع تكنولوجيا التحكم الآلي',
        category: 'infrastructure',
        targetAmount: 750000,
        currentAmount: 200000,
        expectedReturn: 20,
        duration: 18,
        location: 'الشرقية',
        farmer: {
          name: 'فهد الشمري',
          rating: 4.7,
          completedProjects: 5
        },
        images: ['https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800'],
        status: 'active',
        createdAt: new Date('2024-03-10')
      }
    ];

    this.projectsSubject.next(mockProjects);
  }

  getProjects(): Observable<InvestmentProject[]> {
    return this.projects$;
  }

  getProjectById(id: string): Observable<InvestmentProject | undefined> {
    return this.projects$.pipe(
      map(projects => projects.find(p => p.id === id))
    );
  }

  investInProject(projectId: string, amount: number, userId: string): Observable<Investment> {
    const investment: Investment = {
      id: Date.now().toString(),
      projectId,
      userId,
      amount,
      investedAt: new Date(),
      expectedReturn: amount * 0.15, // 15% return
      status: 'active'
    };

    // Update project current amount
    const projects = this.projectsSubject.value;
    const projectIndex = projects.findIndex(p => p.id === projectId);
    if (projectIndex !== -1) {
      projects[projectIndex].currentAmount += amount;
      this.projectsSubject.next(projects);
    }

    // Add to user investments
    const investments = [...this.userInvestmentsSubject.value, investment];
    this.userInvestmentsSubject.next(investments);

    return of(investment).pipe(delay(500));
  }

  getUserInvestments(userId: string): Observable<Investment[]> {
    return this.userInvestments$.pipe(
      map(investments => investments.filter(i => i.userId === userId))
    );
  }

  submitFundingRequest(request: Omit<FundingRequest, 'id' | 'submittedAt' | 'status'>): Observable<FundingRequest> {
    const newRequest: FundingRequest = {
      ...request,
      id: Date.now().toString(),
      submittedAt: new Date(),
      status: 'pending'
    };

    const requests = [...this.fundingRequestsSubject.value, newRequest];
    this.fundingRequestsSubject.next(requests);

    return of(newRequest).pipe(delay(800));
  }

  getUserFundingRequests(userId: string): Observable<FundingRequest[]> {
    return this.fundingRequests$.pipe(
      map(requests => requests.filter(r => r.userId === userId))
    );
  }

  searchProjects(query: string, category?: string): Observable<InvestmentProject[]> {
    return this.projects$.pipe(
      map(projects => {
        let filtered = projects;

        if (query) {
          filtered = filtered.filter(p =>
            p.title.includes(query) || p.description.includes(query)
          );
        }

        if (category && category !== 'all') {
          filtered = filtered.filter(p => p.category === category);
        }

        return filtered;
      })
    );
  }
}
