import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, delay, tap } from 'rxjs/operators';
import { User, LoginCredentials, RegisterData } from '../models/user.model';
import { mockUsers } from '../data/mock-data';

declare const google: any;

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
        if (user) {
          return user;
        }
        const names = ['ناصر', 'سارة', 'فيصل', 'هند', 'تركي', 'غادة'];
        const roles: ('investor' | 'farmer' | 'service_provider')[] = ['investor', 'farmer', 'service_provider'];
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomRole = roles[Math.floor(Math.random() * roles.length)];
        return {
          id: Date.now().toString(),
          fullName: randomName + ' المستثمر',
          email: credentials.email,
          phone: '050' + Math.floor(Math.random() * 10000000).toString().padStart(7, '0'),
          memberSince: new Date().toLocaleDateString('ar-SA', { month: 'long', year: 'numeric' }),
          role: randomRole
        };
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

  loginWithGoogle(idToken: string): Observable<User> {
    return of(null).pipe(
      delay(500),
      tap(() => {
        const mockGoogleUser: User = {
          id: 'google-' + Date.now().toString(),
          fullName: 'مستخدم Google',
          email: 'google-user@example.com',
          phone: '0500000000',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
          memberSince: new Date().toLocaleDateString('ar-SA', { month: 'long', year: 'numeric' }),
          role: 'investor'
        };
        this.currentUserSubject.next(mockGoogleUser);
        this.isAuthenticatedSubject.next(true);
        localStorage.setItem('currentUser', JSON.stringify(mockGoogleUser));
        localStorage.setItem('token', 'mock-google-jwt-token');
      }),
      map(() => this.currentUserSubject.value!)
    );
  }
}
