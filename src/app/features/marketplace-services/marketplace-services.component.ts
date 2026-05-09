import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MachineryEquipmentComponent } from './components/machinery-equipment/machinery-equipment.component';
import { IrrigationMaintenanceComponent } from './components/irrigation-maintenance/irrigation-maintenance.component';
import { LogisticsTransportComponent } from './components/logistics-transport/logistics-transport.component';
import { ConsultancyGuidanceComponent } from './components/consultancy-guidance/consultancy-guidance.component';

@Component({
  selector: 'app-marketplace-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MachineryEquipmentComponent,
    IrrigationMaintenanceComponent,
    LogisticsTransportComponent,
    ConsultancyGuidanceComponent
  ],
  templateUrl: './marketplace-services.component.html',
  styleUrls: ['./marketplace-services.component.css']
})
export class MarketplaceServicesComponent {
  activeTab = 'machinery';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
