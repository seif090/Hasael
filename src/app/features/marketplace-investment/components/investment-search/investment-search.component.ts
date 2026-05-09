import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-search.component.html',
  styleUrls: ['./investment-search.component.css']
})
export class InvestmentSearchComponent {
  searchFilters = {
    location: '',
    investmentRange: '',
    cropType: '',
    minReturn: ''
  };

  searchOpportunities() {
    console.log('Searching with filters:', this.searchFilters);
  }
}
