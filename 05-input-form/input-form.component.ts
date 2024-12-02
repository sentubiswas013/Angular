import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TextboxComponent } from '../textbox/textbox.component';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TextboxComponent],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css',
})
export class InputFormComponent implements OnInit{
  form: FormGroup;

  // ========== 
  // placeholder: string = 'Enter Value';
  // isRequired: boolean = false;
  // isDisabled: boolean = false;
  // errorMessage: string = 'This is an example validation error';
  // value: string = 'Hello World';
  // id: string = 'activeInput';
  // name: string = 'activeInput';
  // pattern: string = '[A-Za-z]{3}';

  // @Output() valueChanged = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({})
  }

  ngOnInit(): void {
    
  }

 
}
