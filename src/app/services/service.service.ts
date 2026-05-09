import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Service, ServiceRequest, ServiceProvider } from '../models/service.model';
import { mockServices, mockProviders } from '../data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private servicesSubject = new BehaviorSubject<Service[]>([...mockServices]);
  private serviceRequestsSubject = new BehaviorSubject<ServiceRequest[]>([]);
  private providersSubject = new BehaviorSubject<ServiceProvider[]>([...mockProviders]);

  services$ = this.servicesSubject.asObservable();
  serviceRequests$ = this.serviceRequestsSubject.asObservable();
  providers$ = this.providersSubject.asObservable();

  constructor() {}

  getServices(): Observable<Service[]> {
    return this.services$;
  }

  getServiceById(id: string): Observable<Service | undefined> {
    return this.services$.pipe(
      map(services => services.find(s => s.id === id))
    );
  }

  requestService(serviceId: string, userId: string, requestedDate: Date, notes?: string): Observable<ServiceRequest> {
    const request: ServiceRequest = {
      id: Date.now().toString(),
      serviceId,
      userId,
      requestedDate,
      status: 'pending',
      notes
    };

    const requests = [...this.serviceRequestsSubject.value, request];
    this.serviceRequestsSubject.next(requests);

    return of(request).pipe(delay(500));
  }

  getUserServiceRequests(userId: string): Observable<ServiceRequest[]> {
    return this.serviceRequests$.pipe(
      map(requests => requests.filter(r => r.userId === userId))
    );
  }

  searchServices(query: string, category?: string): Observable<Service[]> {
    return this.services$.pipe(
      map(services => {
        let filtered = services;
        
        if (query) {
          filtered = filtered.filter(s => 
            s.title.includes(query) || s.description.includes(query)
          );
        }
        
        if (category && category !== 'all') {
          filtered = filtered.filter(s => s.category === category);
        }
        
        return filtered;
      })
    );
  }

  getProviders(): Observable<ServiceProvider[]> {
    return this.providers$;
  }
}
