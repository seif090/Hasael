import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InvestmentService } from '../../../../services/investment.service';
import { AuthService } from '../../../../services/auth.service';
import { InvestmentProject } from '../../../../models/investment.model';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: InvestmentProject | null = null;
  isLoading = true;
  currentImageIndex = 0;
  investing = false;
  investmentAmount = 0;

  constructor(
    private route: ActivatedRoute,
    private investmentService: InvestmentService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.investmentService.getProjectById(projectId).subscribe(project => {
        this.project = project || null;
        this.isLoading = false;
      });
    }
  }

  nextImage() {
    if (this.project && this.project.images.length > 1) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.project.images.length;
    }
  }

  prevImage() {
    if (this.project && this.project.images.length > 1) {
      this.currentImageIndex = this.currentImageIndex === 0 
        ? this.project.images.length - 1 
        : this.currentImageIndex - 1;
    }
  }

  getMaxInvestment(): number {
    if (!this.project) return 0;
    return this.project.targetAmount - this.project.currentAmount;
  }

  getProgressPercentage(): number {
    if (!this.project) return 0;
    return Math.round((this.project.currentAmount / this.project.targetAmount) * 100);
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  confirmInvestment() {
    if (!this.project || !this.investmentAmount) return;

    const user = this.authService.getCurrentUser();
    if (!user) return;

    this.investing = true;

    this.investmentService.investInProject(
      this.project.id,
      this.investmentAmount,
      user.id
    ).subscribe({
      next: () => {
        this.investing = false;
        alert('تم الاستثمار بنجاح!');
        this.investmentAmount = 0;
        window.location.reload();
      },
      error: () => {
        this.investing = false;
        alert('حدث خطأ أثناء الاستثمار. يرجى المحاولة مرة أخرى.');
      }
    });
  }
}