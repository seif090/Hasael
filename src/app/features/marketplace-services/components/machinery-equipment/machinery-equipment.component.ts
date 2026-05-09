import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../../../../services/service.service';
import { AuthService } from '../../../../services/auth.service';
import { Service } from '../../../../models/service.model';

@Component({
  selector: 'app-machinery-equipment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './machinery-equipment.component.html',
  styleUrls: ['./machinery-equipment.component.css']
})
export class MachineryEquipmentComponent implements OnInit {
  services: Service[] = [];
  isLoading = true;
  selectedService: Service | null = null;
  showRequestModal = false;
  requesting = false;
  requestDetails = {
    startDate: '',
    notes: ''
  };

  constructor(
    private serviceService: ServiceService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.serviceService.getServices().subscribe(services => {
      this.services = services.filter(s => s.category === 'machinery');
      this.isLoading = false;
    });
  }

  requestService(service: Service) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    this.selectedService = service;
    this.showRequestModal = true;
    this.requestDetails = {
      startDate: '',
      notes: ''
    };
  }

  closeRequestModal() {
    this.showRequestModal = false;
    this.selectedService = null;
    this.requestDetails = {
      startDate: '',
      notes: ''
    };
  }

  confirmRequest() {
    if (!this.selectedService || !this.requestDetails.startDate) return;

    const user = this.authService.getCurrentUser();
    if (!user) return;

    this.requesting = true;

    this.serviceService.requestService(
      this.selectedService.id,
      user.id,
      new Date(this.requestDetails.startDate),
      this.requestDetails.notes
    ).subscribe({
      next: () => {
        this.requesting = false;
        this.closeRequestModal();
        alert('تم إرسال طلب الخدمة بنجاح!');
      },
      error: () => {
        this.requesting = false;
        alert('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.');
      }
    });
  }

  getTotalPrice(): number {
    if (!this.selectedService) return 0;
    return this.selectedService.price;
  }
}
