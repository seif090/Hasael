import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-farm-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './farm-management.component.html',
  styleUrls: ['./farm-management.component.css']
})
export class FarmManagementComponent {
  services = [
    {
      id: 1,
      title: 'إدارة كاملة للمزرعة',
      description: 'خدمة شاملة تشمل الزراعة والحصاد والتصريف',
      price: 'من 50,000 ريال/سنة',
      icon: 'tractor'
    },
    {
      id: 2,
      title: 'الإشراف الزراعي',
      description: 'متابعة دورية وتقارير أداء شهرية',
      price: 'من 20,000 ريال/سنة',
      icon: 'eye'
    },
    {
      id: 3,
      title: 'التخطيط المحصولي',
      description: 'تخطيط علمي للمحاصيل وتدويرها',
      price: 'من 15,000 ريال/سنة',
      icon: 'calendar'
    }
  ];

  requestService() {
    console.log('Request service');
  }
}
