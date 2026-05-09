import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, delay, tap } from 'rxjs/operators';
import { User, LoginCredentials, RegisterData } from '../models/user.model';
import { mockUsers } from '../data/mock-data';

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
    return of(mockUsers).pipe(
      delay(800),
      map(users => {
        const user = users.find(u => u.email === credentials.email);
        if (!user) {
          throw new Error('بيانات الدخول غير صحيحة');
        }
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
