import { Component, OnInit, Input } from '@angular/core';

export class FormGroupComponent implements OnInit {

  @Input() form;
  @Input() label;
  @Input() field;

  constructor() { }

  ngOnInit() {
  }

  verificarValidAndTouched(campo){
    return !this.form.get(campo).valid && this.form.get(campo).touched;
  }

  aplicaCssErro(campo){
    return {
      'has-error': this.verificarValidAndTouched(campo),
      'has-feedback': this.verificarValidAndTouched(campo)
    };
  }

}
