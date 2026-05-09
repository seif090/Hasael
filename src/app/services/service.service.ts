import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Service, ServiceRequest, ServiceProvider } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private servicesSubject = new BehaviorSubject<Service[]>([]);
  private serviceRequestsSubject = new BehaviorSubject<ServiceRequest[]>([]);
  private providersSubject = new BehaviorSubject<ServiceProvider[]>([]);

  services$ = this.servicesSubject.asObservable();
  serviceRequests$ = this.serviceRequestsSubject.asObservable();
  providers$ = this.providersSubject.asObservable();

  constructor() {
    this.loadMockServices();
  }

  private loadMockServices() {
    const mockServices: Service[] = [
      {
        id: '1',
        title: 'حصاد آلي بالحصادات الحديثة',
        description: 'خدمة حصاد آلية باستخدام أحدث الحصادات مع طاقم محترف',
        category: 'machinery',
        provider: {
          name: 'شركة الزراعة الحديثة',
          rating: 4.9,
          completedServices: 150
        },
        price: 500,
        unit: 'hectare',
        location: 'الرياض',
        availability: true,
        images: ['https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800'],
        createdAt: new Date('2024-01-20')
      },
      {
        id: '2',
        title: 'نظام الري بالتنقيط',
        description: 'تركيب وصيانة أنظمة الري بالتنقيط الحديثة',
        category: 'irrigation',
        provider: {
          name: 'مركز الري المتقدم',
          rating: 4.8,
          completedServices: 200
        },
        price: 150,
        unit: 'hour',
        location: 'القصيم',
        availability: true,
        images: ['https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800'],
        createdAt: new Date('2024-02-05')
      },
      {
        id: '3',
        title: 'نقل المحاصيل الزراعية',
        description: 'خدمات نقل المحاصيل ببرادات مخصصة للحفاظ على الجودة',
        category: 'logistics',
        provider: {
          name: 'النقل السريع',
          rating: 4.7,
          completedServices: 180
        },
        price: 300,
        unit: 'day',
        location: 'جميع المناطق',
        availability: true,
        images: ['https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800'],
        createdAt: new Date('2024-02-15')
      },
      {
        id: '4',
        title: 'استشارة زراعية متخصصة',
        description: 'استشارات من خبراء زراعيين لتحسين الإنتاجية',
        category: 'consultancy',
        provider: {
          name: 'د. أحمد الزراع',
          rating: 5.0,
          completedServices: 90
        },
        price: 200,
        unit: 'hour',
        location: 'عن بعد',
        availability: true,
        images: ['https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800'],
        createdAt: new Date('2024-03-01')
      }
    ];

    this.servicesSubject.next(mockServices);
  }

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
