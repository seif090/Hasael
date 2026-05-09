import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-24 shadow-soft overflow-hidden">
      <ng-content></ng-content>
    </div>
  `
})
export class CardComponent {}
