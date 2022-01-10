import { Component, OnInit } from '@angular/core';
import { GuitarListTransferService } from 'src/app/services/guitar-list-transfer.service';

@Component({
  selector: 'app-bass-guitar',
  templateUrl: './bass-guitar.component.html',
  styleUrls: ['./bass-guitar.component.scss']
})
export class BassGuitarComponent implements OnInit {
  guitars = this.guitarListTransfer.data;
  details:any;
  constructor(public guitarListTransfer:GuitarListTransferService) { }

  ngOnInit(): void {
    for(var i=0;i<this.guitars.length;i++){
      if(this.guitars[i].name=='Bass Guitar'){
        this.details = this.guitars[i];
      }
    }
  }

}
