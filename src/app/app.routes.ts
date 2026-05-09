import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', loadComponent: () => import('./features/landing/landing.component').then(m => m.LandingComponent) },
  { path: 'login', loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent) },
  { path: 'marketplace-investment', loadComponent: () => import('./features/marketplace-investment/marketplace-investment.component').then(m => m.MarketplaceInvestmentComponent), canActivate: [AuthGuard] },
  { path: 'marketplace-services', loadComponent: () => import('./features/marketplace-services/marketplace-services.component').then(m => m.MarketplaceServicesComponent), canActivate: [AuthGuard] },
  { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent), canActivate: [AuthGuard] },
  { path: 'profile', loadComponent: () => import('./features/profile/profile.component').then(m => m.ProfileComponent), canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/landing' }
];
