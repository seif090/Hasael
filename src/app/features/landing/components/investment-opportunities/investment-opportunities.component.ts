import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-opportunities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-opportunities.component.html',
  styleUrls: ['./investment-opportunities.component.css']
})
export class InvestmentOpportunitiesComponent {
  opportunities = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      duration: '12 شهر',
      title: 'مشروع زراعة القمح',
      location: 'القصيم',
      returnRate: '18%',
      investmentDuration: '12 شهر',
      progress: 75,
      investors: 45
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      duration: '18 شهر',
      title: 'مشروع زراعة التمور',
      location: 'الرياض',
      returnRate: '22%',
      investmentDuration: '18 شهر',
      progress: 60,
      investors: 32
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      duration: '24 شهر',
      title: 'مشروع زراعة الخضروات',
      location: 'الشرقية',
      returnRate: '25%',
      investmentDuration: '24 شهر',
      progress: 40,
      investors: 28
    }
  ];
}
