import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statistics-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics-section.component.html',
  styleUrls: ['./statistics-section.component.css']
})
export class StatisticsSectionComponent {
  statistics = [
    {
      number: '+5000',
      label: 'مستثمر نشط',
      icon: 'users'
    },
    {
      number: '+200',
      label: 'مزرعة',
      icon: 'tractor'
    },
    {
      number: '+50',
      label: 'نوع محصول',
      icon: 'leaf'
    },
    {
      number: '98%',
      label: 'رضا المستثمرين',
      icon: 'star'
    }
  ];
}
