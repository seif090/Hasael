import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListingProjectsComponent } from './components/listing-projects/listing-projects.component';
import { InvestmentSearchComponent } from './components/investment-search/investment-search.component';
import { FarmManagementComponent } from './components/farm-management/farm-management.component';
import { FundingRequestComponent } from './components/funding-request/funding-request.component';

@Component({
  selector: 'app-marketplace-investment',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ListingProjectsComponent,
    InvestmentSearchComponent,
    FarmManagementComponent,
    FundingRequestComponent
  ],
  templateUrl: './marketplace-investment.component.html',
  styleUrls: ['./marketplace-investment.component.css']
})
export class MarketplaceInvestmentComponent {
  activeTab = 'listings';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
