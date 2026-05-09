import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user = {
    name: 'أحمد العتيبي',
    email: 'ahmed@example.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    memberSince: 'يناير 2024'
  };

  stats = [
    { label: 'الاستثمارات النشطة', value: '5', icon: 'trending-up' },
    { label: 'إجمالي الاستثمار', value: '250,000 ريال', icon: 'wallet' },
    { label: 'العوائد المحققة', value: '45,000 ريال', icon: 'dollar-sign' },
    { label: 'المشاريع المتابعة', value: '3', icon: 'activity' }
  ];

  recentActivities = [
    { action: 'استثمار في مزرعة القمح', date: 'منذ يومين', amount: '50,000 ريال' },
    { action: 'استلام عائد مشروع النخيل', date: 'منذ أسبوع', amount: '8,500 ريال' },
    { action: 'اشتراك في خدمة الإدارة', date: 'منذ أسبوعين', amount: '20,000 ريال' }
  ];
}
