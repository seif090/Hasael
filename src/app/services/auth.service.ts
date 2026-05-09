import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, delay, tap } from 'rxjs/operators';
import { User, LoginCredentials, RegisterData } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  
  currentUser$ = this.currentUserSubject.asObservable();
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {
    this.checkAuthStatus();
  }

  private checkAuthStatus() {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
      this.isAuthenticatedSubject.next(true);
    }
  }

  login(credentials: LoginCredentials): Observable<User> {
    // Simulate API call with mock data
    const mockUsers: User[] = [
      {
        id: '1',
        fullName: 'أحمد العتيبي',
        email: 'ahmed@example.com',
        phone: '0501234567',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        memberSince: 'يناير 2024',
        role: 'investor'
      },
      {
        id: '2',
        fullName: 'محمد السالم',
        email: 'mohammed@example.com',
        phone: '0507654321',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        memberSince: 'فبراير 2024',
        role: 'farmer'
      }
    ];

    return of(mockUsers).pipe(
      delay(800),
      map(users => {
        const user = users.find(u => u.email === credentials.email);
        if (!user) {
          throw new Error('بيانات الدخول غير صحيحة');
        }
        // In real app, verify password hash
        return user;
      }),
      tap(user => {
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('token', 'mock-jwt-token');
      })
    );
  }

  register(data: RegisterData): Observable<User> {
    // Simulate API call
    const newUser: User = {
      id: Date.now().toString(),
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      memberSince: new Date().toLocaleDateString('ar-SA', { month: 'long', year: 'numeric' }),
      role: data.role || 'investor'
    };

    return of(newUser).pipe(
      delay(1000),
      tap(user => {
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('token', 'mock-jwt-token');
      })
    );
  }

  logout(): void {
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  updateUser(user: User): void {
    this.currentUserSubject.next(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
}
