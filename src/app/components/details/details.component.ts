import { Component, OnInit } from '@angular/core';
import { GuitarListTransferService } from 'src/app/services/guitar-list-transfer.service';
import { GuitarlistComponent } from '../guitarlist/guitarlist.component';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  /*servicelist: GuitarListTransferService = new GuitarListTransferService;*/
  id: number;
  name:any;
  body:any;
  star:any;
  data: any[];
  selectedGuitarData : any;
  description: any;
  longDescription :any;
  price:any;
  image:any;
  specifications:any;
  category:any;
  reviews!: any[];
 newTitle:any;
 view:any;
 addReview:any;
 reviewerName:any;
 reviewStars:any;
 reviewBody:any;
 addrev: any;
 hidden:boolean=false;
 show:boolean=true;
 str:any;
 hidebutton:boolean=true;
 hide:boolean=true;





  constructor(private route: ActivatedRoute,public guitarListTransfer:GuitarListTransferService) {
    this.id=0;
    this.view='description';
    this.route.params.subscribe(params => this.id = Number(params['id']));
    this.data = guitarListTransfer.data;
    this.selectedGuitarData = this.data[this.id];
   }

  ngOnInit(): void {
    /*this.selectedGuitarData = this.data[this.id];*/
    console.log('printttt',this.selectedGuitarData);
    this.name=this.selectedGuitarData.name;
    this.price=this.selectedGuitarData.price;
    this.longDescription=this.selectedGuitarData.longDescription;
    this.description=this.selectedGuitarData.description;
    this.image=this.selectedGuitarData.image;
    this.category=this.selectedGuitarData.category;
    this.specifications=this.selectedGuitarData.specifications;
    this.reviews = this.selectedGuitarData.reviews;
    console.log('iddd',this.id);

  }
  viewPrevious() {
    if (this.id > 0)
      this.id -= 1;
      console.log('changing id',this.data[this.id].name);
    this.selectedGuitarData = this.data[this.id];
  }
  viewNext() {
    if (this.id < this.guitarListTransfer.gc -1 )
      this.id += 1;
      console.log("checking next button",this.id);
    this.selectedGuitarData = this.data[this.id];
  }

  checkout(){
    this.show=false;
    this.hidden=true;
    this.hide=false;
  }
  

  /*addToJson(name:string,body:string,star:number){
    this.jsonName=this.name;
    this.jsonBody=this.body;
    this.jsonStar=this.star;
    console.log('this is json name',this.name);
    console.log('this is json body',this.body);
    console.log('this is json star',this.star);
  }
  addData(Revname:string,body:string,star:number){
    this.jsonName=this.Revname;
    this.jsonBody=this.body;
    this.jsonStar=this.star;
    console.log('this is json name',this.name);
    console.log('this is json body',this.body);
    console.log('this is json star',this.star);

  }*/

  onSubmit(f:NgForm){
    
    this.reviewBody=f.value.reviewBody;
    this.reviewStars=f.value.reviewStars;
    this.reviewerName=f.value.reviewerName;
    
    
    /*console.log('name:', this.reviewerName);
    console.log('body:',this.reviewBody);
    console.log('stars:',this.reviewStars);*/
    this.guitarListTransfer.addReview(this.id, this.reviewerName, this.reviewStars, this.reviewBody);
    this.addrev=false;

    
  }


}
