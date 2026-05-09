import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent {
  steps = [
    {
      number: 1,
      title: 'اختر فرصة استثمارية',
      description: 'تصفح فرص الاستثمار المتاحة واختر المشروع المناسب لك',
      icon: 'search'
    },
    {
      number: 2,
      title: 'استثمر بثقة',
      description: 'استثمر المبلغ الذي تريده مع ضمان الأمان والشفافية',
      icon: 'trending-up'
    },
    {
      number: 3,
      title: 'تابع أداء استثمارك',
      description: 'راقب تقدم مشروعك وتحديثاته في الوقت الفعلي',
      icon: 'activity'
    },
    {
      number: 4,
      title: 'احصل على عائدك',
      description: 'استلم عائد استثمارك عند نهاية فترة المشروع',
      icon: 'check-circle'
    }
  ];
}
