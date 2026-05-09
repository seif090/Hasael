import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logistics-transport',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logistics-transport.component.html',
  styleUrls: ['./logistics-transport.component.css']
})
export class LogisticsTransportComponent {
  services = [
    {
      id: 1,
      title: 'نقل المحاصيل الزراعية',
      description: 'خدمات نقل محاصيل من المزرعة إلى السوق',
      provider: 'النقل السريع',
      pricePerKm: '5 ريال/كم',
      capacity: '10 أطنان'
    },
    {
      id: 2,
      title: 'التخزين البارد',
      description: 'مرافق تخزين بارد للمحاصيل القابلة للتلف',
      provider: 'التخزين الحديث',
      pricePerMonth: '2,000 ريال/شهر',
      capacity: '500 طن'
    },
    {
      id: 3,
      title: 'خدمات الشحن الدولي',
      description: 'تصدير المحاصيل إلى الأسواق العالمية',
      provider: 'الشحن العالمي',
      pricePerContainer: '15,000 ريال/حاوية',
      capacity: 'حاويات 20 و 40 قدم'
    }
  ];

  requestQuote(id: number) {
    console.log('Request quote for service:', id);
  }
}
