import { Component, ElementRef, ViewChild } from '@angular/core';
import {Subscription,fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-selection-country',
  templateUrl: './selection-country.component.html',
  styleUrls: ['./selection-country.component.css']
})
export class SelectionCountryComponent {
  
  subs!: Subscription;

  @ViewChild('Input')
  inputText!:ElementRef;

  countries: Array<Country> = [
    { code: 'NC', libelle: 'Nouvelle-calédonie' },
    { code: 'FR', libelle: 'France' }
  ];

  currentCountries:Array<Country> =[];

  ngAfterViewInit(){
    this.subs = fromEvent(this.inputText.nativeElement,'keyup').pipe(
    map((x)=> this.inputText.nativeElement.value)
    ).subscribe((x) => {
      if (x.trim().length ==0){
        this.currentCountries=[]
      }
      else{
        this.currentCountries = this.countries.filter((y) => y.libelle.toLowerCase().startsWith(x.toLowerCase()));
      }
    })
  };

  selectCountry(event:any){
    this.inputText.nativeElement.value=event.target.innerText;
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }
}

export interface Country{
  code: String;
  libelle: String;
}