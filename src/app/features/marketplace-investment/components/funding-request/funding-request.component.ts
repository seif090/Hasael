import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InvestmentService } from '../../../../services/investment.service';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-funding-request',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './funding-request.component.html',
  styleUrls: ['./funding-request.component.css']
})
export class FundingRequestComponent {
  requestType = 'funding';
  submitting = false;

  fundingForm = {
    title: '',
    category: 'crops' as 'crops' | 'livestock' | 'equipment' | 'infrastructure',
    targetAmount: 0,
    duration: 12,
    location: '',
    description: ''
  };

  categories = [
    { value: 'crops', label: 'المحاصيل' },
    { value: 'livestock', label: 'الماشية' },
    { value: 'equipment', label: 'المعدات' },
    { value: 'infrastructure', label: 'البنية التحتية' }
  ];

  constructor(
    private investmentService: InvestmentService,
    private authService: AuthService,
    private router: Router
  ) { }

  setRequestType(type: string) {
    this.requestType = type;
  }

  submitRequest() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    if (this.requestType === 'funding') {
      this.submitFundingRequest();
    } else {
      this.submitLoanRequest();
    }
  }

  submitFundingRequest() {
    const user = this.authService.getCurrentUser();
    if (!user || !this.fundingForm.title || !this.fundingForm.targetAmount) {
      alert('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    this.submitting = true;

    this.investmentService.submitFundingRequest({
      userId: user.id,
      projectTitle: this.fundingForm.title,
      category: this.fundingForm.category,
      requestedAmount: this.fundingForm.targetAmount,
      duration: this.fundingForm.duration,
      location: this.fundingForm.location,
      description: this.fundingForm.description,
      expectedReturn: 15,
      documents: []
    }).subscribe({
      next: () => {
        this.submitting = false;
        alert('تم إرسال طلب التمويل بنجاح!');
        this.resetForm();
      },
      error: () => {
        this.submitting = false;
        alert('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.');
      }
    });
  }

  submitLoanRequest() {
    alert('سيتم تنفيذ طلب القرض قريباً');
  }

  resetForm() {
    this.fundingForm = {
      title: '',
      category: 'crops' as 'crops' | 'livestock' | 'equipment' | 'infrastructure',
      targetAmount: 0,
      duration: 12,
      location: '',
      description: ''
    };
  }
}
