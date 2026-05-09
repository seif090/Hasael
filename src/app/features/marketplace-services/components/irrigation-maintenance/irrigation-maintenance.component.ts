import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-irrigation-maintenance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './irrigation-maintenance.component.html',
  styleUrls: ['./irrigation-maintenance.component.css']
})
export class IrrigationMaintenanceComponent {
  services = [
    {
      id: 1,
      title: 'خدمات الري بالتنقيط',
      description: 'تركيب وصيانة أنظمة الري بالتنقيط',
      provider: 'شركة الري الحديث',
      rating: 4.8,
      price: 'من 5,000 ريال'
    },
    {
      id: 2,
      title: 'صيانة المضخات الزراعية',
      description: 'فحص وإصلاح المضخات والموتورات',
      provider: 'الخدمات الزراعية المتكاملة',
      rating: 4.6,
      price: 'من 3,000 ريال'
    },
    {
      id: 3,
      title: 'خدمات الري المحوري',
      description: 'تركيب وصيانة أنظمة الري المحوري',
      provider: 'الزراعة الذكية',
      rating: 4.9,
      price: 'من 8,000 ريال'
    }
  ];

  bookService(id: number) {
    console.log('Book service:', id);
  }
}
