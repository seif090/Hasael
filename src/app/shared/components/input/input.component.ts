import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  template: `
    <div class="relative">
      <input
        [type]="type"
        [placeholder]="placeholder"
        [value]="value"
        (input)="onInput($event)"
        [disabled]="disabled"
        class="input-field w-full px-4 py-3 rounded-20 border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition-all duration-300 pr-12"
      />
      <div class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
        <ng-content select="[icon]"></ng-content>
      </div>
    </div>
  `
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: 'text' | 'email' | 'password' | 'tel' = 'text';
  @Input() placeholder = '';
  @Input() disabled = false;
  
  value = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
