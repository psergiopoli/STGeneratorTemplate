import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @ViewChild('image') image;
  base64image: string = null;
  maxSizePermited = 1000000;//1mb

  @Input() errorMsg;
  @Output() onImageSelect = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectImage() {
    const file: File = this.image.nativeElement.files[0];
    if(this.checkFileSize(file)){      
      const fileReader: FileReader = new FileReader();

      fileReader.onloadend = (e) => {
        this.base64image = fileReader.result;
        this.onImageSelect.emit(this.base64image);
      };

      fileReader.readAsDataURL(file);
    }
  }

  checkFileSize(file){
    if(file.size < this.maxSizePermited){
      this.errorMsg = '';
      return true;
    }else{
      this.errorMsg = 'Tamanho maximo permitido 1mb';
    }
  }

}
