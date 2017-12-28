import { Component, OnInit, Input } from '@angular/core';

export class FormGroupComponent implements OnInit {

  @Input() form;
  @Input() label;
  @Input() field;
  errors: string[];

  constructor() { }

  ngOnInit() {
  }

  checkValidAndTouchAndDirty(field){
    return (!this.form.get(field).valid && this.form.get(field).touched) || 
    (!this.form.get(field).valid && this.form.get(field).dirty);
  }

  apllyErrorCss(field){
    this.setErrorMessages(field,this.form.get(field).errors);
    return {
      'has-error': this.checkValidAndTouchAndDirty(field),
      'has-feedback': this.checkValidAndTouchAndDirty(field)
    };
  }

  setErrorMessages(field,errors){
    this.errors = [];
    if(this.checkValidAndTouchAndDirty(field)){
      let errorsKeys = Object.keys(errors);
      errorsKeys.forEach(error => {
        switch(error){
          case 'maxlength':
            this.errors.push("Tamanho maximo permitido: "+errors[error].requiredLength);
          break;
          case 'minlength':
            this.errors.push("Tamanho minimo permitido: "+errors[error].requiredLength);
          break;
          case 'required':
            this.errors.push("Campo obrigatório.");
          break;
          default:
            console.log(error);
            console.log(errors[error]);
            this.errors.push("Campo inválido.");
          break;
        }
      });
    }
  }

}
