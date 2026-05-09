import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../../../../services/investment.service';
import { InvestmentProject } from '../../../../models/investment.model';

@Component({
  selector: 'app-investment-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './investment-search.component.html',
  styleUrls: ['./investment-search.component.css']
})
export class InvestmentSearchComponent implements OnInit {
  @Output() searchResults = new EventEmitter<InvestmentProject[]>();

  searchFilters = {
    query: '',
    category: 'all',
    location: '',
    minReturn: ''
  };

  categories = [
    { value: 'all', label: 'جميع الفئات' },
    { value: 'crops', label: 'المحاصيل' },
    { value: 'livestock', label: 'الماشية' },
    { value: 'equipment', label: 'المعدات' },
    { value: 'infrastructure', label: 'البنية التحتية' }
  ];

  constructor(private investmentService: InvestmentService) { }

  ngOnInit() { }

  searchOpportunities() {
    this.investmentService.searchProjects(
      this.searchFilters.query,
      this.searchFilters.category === 'all' ? undefined : this.searchFilters.category
    ).subscribe(results => {
      this.searchResults.emit(results);
    });
  }

  resetFilters() {
    this.searchFilters = {
      query: '',
      category: 'all',
      location: '',
      minReturn: ''
    };
    this.searchOpportunities();
  }
}
