import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InvestmentService } from '../../../../services/investment.service';
import { AuthService } from '../../../../services/auth.service';
import { InvestmentProject } from '../../../../models/investment.model';

@Component({
  selector: 'app-listing-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listing-projects.component.html',
  styleUrls: ['./listing-projects.component.css']
})
export class ListingProjectsComponent implements OnInit {
  projects: InvestmentProject[] = [];
  isLoading = true;
  investing = false;
  selectedProject: InvestmentProject | null = null;
  investmentAmount = 0;
  showInvestmentModal = false;

  constructor(
    private investmentService: InvestmentService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.investmentService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.isLoading = false;
    });
  }

  investInProject(project: InvestmentProject) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    this.selectedProject = project;
    this.showInvestmentModal = true;
    this.investmentAmount = 0;
  }

  closeInvestmentModal() {
    this.showInvestmentModal = false;
    this.selectedProject = null;
    this.investmentAmount = 0;
  }

  confirmInvestment() {
    if (!this.selectedProject || !this.investmentAmount) return;

    const user = this.authService.getCurrentUser();
    if (!user) return;

    this.investing = true;

    this.investmentService.investInProject(
      this.selectedProject.id,
      this.investmentAmount,
      user.id
    ).subscribe({
      next: () => {
        this.investing = false;
        this.closeInvestmentModal();
        alert('تم الاستثمار بنجاح!');
      },
      error: () => {
        this.investing = false;
        alert('حدث خطأ أثناء الاستثمار. يرجى المحاولة مرة أخرى.');
      }
    });
  }

  getMaxInvestment(project: InvestmentProject): number {
    return project.targetAmount - project.currentAmount;
  }

  getProgressPercentage(project: InvestmentProject): number {
    return (project.currentAmount / project.targetAmount) * 100;
  }
}
