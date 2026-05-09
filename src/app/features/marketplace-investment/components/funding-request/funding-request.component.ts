import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-funding-request',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './funding-request.component.html',
  styleUrls: ['./funding-request.component.css']
})
export class FundingRequestComponent {
  requestType = 'funding';

  setRequestType(type: string) {
    this.requestType = type;
  }

  submitRequest() {
    console.log('Submit request:', this.requestType);
  }
}
