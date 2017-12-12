import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements AfterViewInit {

  ngAfterViewInit() {
    setTimeout(()=>{
      try{
        (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
      }catch(e){
        console.error("error");
      }
    },2000);
  }

  constructor() { }

  ngOnInit() {
  }

}
