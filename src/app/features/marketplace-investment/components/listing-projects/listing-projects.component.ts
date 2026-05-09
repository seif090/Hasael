import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listing-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listing-projects.component.html',
  styleUrls: ['./listing-projects.component.css']
})
export class ListingProjectsComponent {
  projects = [
    {
      id: 1,
      title: 'مزرعة القمح - القصيم',
      location: 'القصيم',
      area: '500 هكتار',
      investmentRequired: '5,000,000 ريال',
      expectedReturn: '18%',
      status: 'قيد الاستثمار',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'مشروع النخيل - الرياض',
      location: 'الرياض',
      area: '300 هكتار',
      investmentRequired: '3,500,000 ريال',
      expectedReturn: '22%',
      status: 'متاح للاستثمار',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'مشروع الخضروات - الشرقية',
      location: 'الشرقية',
      area: '200 هكتار',
      investmentRequired: '2,000,000 ريال',
      expectedReturn: '25%',
      status: 'متاح للاستثمار',
      image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  listNewProject() {
    console.log('List new project');
  }
}
