import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials = [
    {
      id: 1,
      name: 'أحمد العتيبي',
      text: 'منصة ممتازة للاستثمار في الزراعة. استثمرت في عدة مشاريع وحصلت على عوائد ممتازة.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'سارة الحربي',
      text: 'تجربة رائعة مع حصائل. الشفافية في التعامل والمتابعة المستمرة جعلتني أشعر بالأمان.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'محمد القحطاني',
      text: 'أفضل منصة استثمارية زراعية في المنطقة. الخدمة ممتازة والعوائد مضمونة.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];
}
