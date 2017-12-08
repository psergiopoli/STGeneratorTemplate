import { GlobalMessageService } from './global-message.service';
import { GlobalMessageComponent } from './global-message.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GlobalMessageComponent
  ],
  exports: [
    GlobalMessageComponent
  ],
  providers: [
    GlobalMessageService
  ]
})
export class GlobalMessageModule { }
