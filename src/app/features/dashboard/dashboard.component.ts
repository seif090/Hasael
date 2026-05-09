import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { InvestmentService } from '../../services/investment.service';
import { User } from '../../models/user.model';
import { Investment } from '../../models/investment.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User | null = null;
  userInvestments: Investment[] = [];
  isLoading = true;

  stats = [
    { label: 'الاستثمارات النشطة', value: '0', icon: 'trending-up' },
    { label: 'إجمالي الاستثمار', value: '0 ريال', icon: 'wallet' },
    { label: 'العوائد المحققة', value: '0 ريال', icon: 'dollar-sign' },
    { label: 'المشاريع المتابعة', value: '0', icon: 'activity' }
  ];

  recentActivities: any[] = [];

  constructor(
    private authService: AuthService,
    private investmentService: InvestmentService
  ) { }

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.user = user;
      if (user) {
        this.loadUserData(user.id);
      }
    });
  }

  loadUserData(userId: string) {
    this.investmentService.getUserInvestments(userId).subscribe(investments => {
      this.userInvestments = investments;
      this.updateStats();
      this.updateRecentActivities();
      this.isLoading = false;
    });
  }

  updateStats() {
    const activeInvestments = this.userInvestments.filter(i => i.status === 'active');
    const totalInvestment = this.userInvestments.reduce((sum, i) => sum + i.amount, 0);
    const totalReturns = this.userInvestments
      .filter(i => i.status === 'completed')
      .reduce((sum, i) => sum + i.expectedReturn, 0);

    this.stats = [
      { label: 'الاستثمارات النشطة', value: activeInvestments.length.toString(), icon: 'trending-up' },
      { label: 'إجمالي الاستثمار', value: `${totalInvestment.toLocaleString()} ريال`, icon: 'wallet' },
      { label: 'العوائد المحققة', value: `${totalReturns.toLocaleString()} ريال`, icon: 'dollar-sign' },
      { label: 'المشاريع المتابعة', value: activeInvestments.length.toString(), icon: 'activity' }
    ];
  }

  updateRecentActivities() {
    this.recentActivities = this.userInvestments.map(investment => ({
      action: `استثمار في مشروع #${investment.projectId}`,
      date: this.formatDate(investment.investedAt),
      amount: `${investment.amount.toLocaleString()} ريال`
    })).slice(0, 5);
  }

  formatDate(date: Date): string {
    const now = new Date();
    const diff = now.getTime() - new Date(date).getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return 'اليوم';
    if (days === 1) return 'أمس';
    if (days < 7) return `منذ ${days} أيام`;
    if (days < 30) return `منذ ${Math.floor(days / 7)} أسابيع`;
    return `منذ ${Math.floor(days / 30)} شهر`;
  }

  logout() {
    this.authService.logout();
  }
}
