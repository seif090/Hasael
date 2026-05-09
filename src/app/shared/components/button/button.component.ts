import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [ngClass]="buttonClasses"
      [disabled]="disabled"
      [type]="type">
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    button {
      transition: all 0.3s ease;
    }
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `]
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'gold' = 'primary';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  get buttonClasses(): string {
    const baseClasses = 'px-8 py-3 rounded-20 font-bold transition-all duration-300';
    
    switch (this.variant) {
      case 'primary':
        return `${baseClasses} bg-primary-green text-white hover:opacity-90`;
      case 'secondary':
        return `${baseClasses} bg-white text-primary-green border-2 border-primary-green hover:bg-primary-green hover:text-white`;
      case 'gold':
        return `${baseClasses} bg-primary-gold text-white hover:opacity-90`;
      default:
        return `${baseClasses} bg-primary-green text-white hover:opacity-90`;
    }
  }
}
