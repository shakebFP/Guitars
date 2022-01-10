import { Component, OnInit } from '@angular/core';
import { GuitarListTransferService } from 'src/app/services/guitar-list-transfer.service';
import { GuitarlistComponent } from '../guitarlist/guitarlist.component';

@Component({
  selector: 'app-electric-guitar',
  templateUrl: './electric-guitar.component.html',
  styleUrls: ['./electric-guitar.component.scss']
})
export class ElectricGuitarComponent implements OnInit {

  guitars = this.guitarListTransfer.data;
  details:any;

  constructor(public guitarListTransfer:GuitarListTransferService) { }

  ngOnInit(): void {
    for(var i=0;i<this.guitars.length;i++){
      if(this.guitars[i].name=='Electric Guitar'){
        this.details = this.guitars[i];
      }
    }
    console.log(this.details);
  }

}
