import { Component, OnInit, Input } from '@angular/core';
import { FormGroupComponent } from '../form-group/form-group.component';

@Component({
  selector: 'app-form-group-select',
  templateUrl: './form-group-select.component.html',
  styleUrls: ['./form-group-select.component.css']
})
export class FormGroupSelectComponent extends FormGroupComponent {

  @Input() options;

  constructor() {
    super();
  }

}
