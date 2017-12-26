import { Component, OnInit } from '@angular/core';
import { FormGroupComponent } from '../form-group/form-group.component';

@Component({
  selector: 'app-form-group-input',
  templateUrl: './form-group-input.component.html',
  styleUrls: ['./form-group-input.component.css']
})
export class FormGroupInputComponent extends FormGroupComponent {

  constructor() {
    super();
  }
  
}
