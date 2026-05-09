import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consultancy-guidance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consultancy-guidance.component.html',
  styleUrls: ['./consultancy-guidance.component.css']
})
export class ConsultancyGuidanceComponent {
  consultants = [
    {
      id: 1,
      name: 'د. أحمد الزراعي',
      specialty: 'خبير زراعي',
      experience: '15 سنة',
      rating: 4.9,
      hourlyRate: '500 ريال/ساعة',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'م. سارة الحربي',
      specialty: 'استشارية إدارة مشاريع',
      experience: '10 سنوات',
      rating: 4.8,
      hourlyRate: '400 ريال/ساعة',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'د. محمد القحطاني',
      specialty: 'خبير اقتصاد زراعي',
      experience: '20 سنة',
      rating: 5.0,
      hourlyRate: '600 ريال/ساعة',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  bookConsultation(id: number) {
    console.log('Book consultation with:', id);
  }
}
