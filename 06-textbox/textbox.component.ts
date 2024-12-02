import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cod-textbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent {
  @Input() placeholder: string = '';
  @Input() isRequired: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() errorMessage: string = '';
  @Input() value: string = '';
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() pattern: string = '';

  @Output() valueChanged = new EventEmitter<string>();

  touched: boolean = false;

  onValueChange(newValue: string): void {
    this.value = newValue;
    this.valueChanged.emit(newValue);
  }

  onBlur(): void {
    this.touched = true;
  }

  getErrorMessage(): string {
    if (this.touched && this.isRequired && !this.value) {
      return 'This field is required';
    }
    if (this.touched && this.pattern && !new RegExp(this.pattern).test(this.value)) {
      return this.errorMessage;
    }
    return '';
  }
}