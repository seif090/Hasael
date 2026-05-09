import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { InvestmentProject, Investment, FundingRequest } from '../models/investment.model';
import { mockProjects, mockInvestments, mockFundingRequests } from '../data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private projectsSubject = new BehaviorSubject<InvestmentProject[]>([...mockProjects]);
  private userInvestmentsSubject = new BehaviorSubject<Investment[]>([...mockInvestments]);
  private fundingRequestsSubject = new BehaviorSubject<FundingRequest[]>([...mockFundingRequests]);

  projects$ = this.projectsSubject.asObservable();
  userInvestments$ = this.userInvestmentsSubject.asObservable();
  fundingRequests$ = this.fundingRequestsSubject.asObservable();

  constructor() {}

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
