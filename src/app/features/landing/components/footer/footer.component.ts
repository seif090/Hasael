import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  quickLinks = [
    { name: 'الرئيسية', path: '/landing' },
    { name: 'فرص الاستثمار', path: '#opportunities' },
    { name: 'كيف نعمل', path: '#how-it-works' },
    { name: 'عن حصائل', path: '#about' }
  ];

  investmentLinks = [
    { name: 'المشاريع الحالية', path: '#' },
    { name: 'المشاريع المكتملة', path: '#' },
    { name: 'الأسئلة الشائعة', path: '#faq' },
    { name: 'الشروط والأحكام', path: '#' }
  ];

  contactInfo = [
    { icon: 'mail', text: 'info@hasael.com' },
    { icon: 'phone', text: '+966 50 123 4567' },
    { icon: 'map-pin', text: 'الرياض، المملكة العربية السعودية' }
  ];
}
