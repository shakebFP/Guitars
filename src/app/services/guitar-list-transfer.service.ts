import { Injectable } from '@angular/core';
import guitars from '../../assets/data.json';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class GuitarListTransferService {
  guitarCount:any;
  data:any;
  gc:any;

  /*public guitarList:{name:string,description:string,category:string,price:number,image:string,longdescription:string}[]=guitars;*/
  constructor(private titleService: Title) {
    this.guitarCount=0;
    this.data = this.getData();
    this.gc;
   }
   
  private getData(): any{
    
    let data: any[] = [];
    for (let guitar of guitars) {
      if (guitar.soldOut == 'false') {
        data.push(guitar);
        this.guitarCount += 1;
      }
    }
    this.gc = data.length+1;
    return data;
  }

  addReview(index: number, name: string, star: string, body: string) {
    let review: any;
    review = { "star": star, "body": body, "name": name }
    this.data[index].reviews.push(review);
  }
 /* set data(val: any){
    this.guitarList = val;
    console.log(this.guitarList);
  }*/


}
