import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-machinery-equipment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './machinery-equipment.component.html',
  styleUrls: ['./machinery-equipment.component.css']
})
export class MachineryEquipmentComponent {
  equipment = [
    {
      id: 1,
      name: 'جرار زراعي - John Deere',
      type: 'جرارات',
      price: '150,000 ريال',
      location: 'الرياض',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      name: 'حصادة قمح - CLAAS',
      type: 'حصادات',
      price: '350,000 ريال',
      location: 'القصيم',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      name: 'نظام ري بالتنقيط',
      type: 'أنظمة ري',
      price: '45,000 ريال',
      location: 'الشرقية',
      image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  contactSeller(id: number) {
    console.log('Contact seller for equipment:', id);
  }
}
