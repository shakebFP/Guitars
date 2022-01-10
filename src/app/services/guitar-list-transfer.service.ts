import { Injectable } from '@angular/core';
import guitars from '../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class GuitarListTransferService {
  public guitarList:{name:string,description:string,category:string,price:number,image:string,longdescription:string}[]=guitars;
  constructor() { }

  get data(): any{
    return this.guitarList;
  }

  set data(val: any){
    this.guitarList = val;
    console.log(this.guitarList);
  }
}
