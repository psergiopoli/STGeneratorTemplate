import { CardService } from './../card.service';
import { GlobalMessageService } from './../../global-message/global-message.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  models: any;
  formulario: FormGroup;

  @ViewChild('image') image;
  base64image: string = null;
  faltandoImagemError = false;

  constructor(
    private cardService: CardService,
    private formBuilder: FormBuilder,
    private globalMessageService: GlobalMessageService,
    private router: Router) { }

  ngOnInit() {
    this.cardService.getModels().subscribe(models => {
      this.models = models;
    }, error => {
      this.globalMessageService.addMessage('Erro ao consultar modelos de cartas', 'danger', 10);
    });

    this.formulario = this.formBuilder.group({
      publico : [true, Validators.required],
      modeloSelecionado: ['Modelo1', Validators.required],
      tituloCarta: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      atributo1: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      atributo2: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      atributo3: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      atributo4: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      atributo5: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      valorAtributo1: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      valorAtributo2: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      valorAtributo3: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      valorAtributo4: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      valorAtributo5: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      numeroCarta: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(3)]]
    });
  }

  verificarValidAndTouched(campo){
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  aplicaCssErro(campo){
    return {
      'has-error': this.verificarValidAndTouched(campo),
      'has-feedback': this.verificarValidAndTouched(campo)
    };
  }

  selectImage() {
    const file: File = this.image.nativeElement.files[0];
    const fileReader: FileReader = new FileReader();

    fileReader.onloadend = (e) => {
      this.base64image = fileReader.result;
    };
    fileReader.readAsDataURL(file);
  }

  submitForm(){
    if (this.formulario.valid && this.base64image != null){
      this.formulario.value.imagem = this.base64image;
      this.cardService.createCard(this.formulario.value).subscribe( card => {
        this.globalMessageService.addMessage('Carta criada com sucesso', 'success', 10);
        this.router.navigate(['card/' + card.id]);
      }, error => {
        this.globalMessageService.addMessage('Erro ao criar carta', 'danger', 10);
      });
    }else{
      this.verificarImagem();
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsTouched();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  verificarImagem(){
    if (this.base64image == null){
      this.faltandoImagemError = true;
    }else{
      this.faltandoImagemError = false;
    }
  }

}
