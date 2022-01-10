import { Component, OnInit } from '@angular/core';
import { GuitarListTransferService } from 'src/app/services/guitar-list-transfer.service';

@Component({
  selector: 'app-violin',
  templateUrl: './violin.component.html',
  styleUrls: ['./violin.component.scss']
})
export class ViolinComponent implements OnInit {

  guitars = this.guitarListTransfer.data;
  details:any;
  constructor(public guitarListTransfer:GuitarListTransferService) { }

  ngOnInit(): void {
    for(var i=0;i<this.guitars.length;i++){
      if(this.guitars[i].name=='Violin / Fiddle'){
        this.details = this.guitars[i];
      }
    }
  }

}
