import { Component, OnInit } from '@angular/core';
import { GuitarListTransferService } from 'src/app/services/guitar-list-transfer.service';

@Component({
  selector: 'app-acoustic-guitar',
  templateUrl: './acoustic-guitar.component.html',
  styleUrls: ['./acoustic-guitar.component.scss']
})
export class AcousticGuitarComponent implements OnInit {
  guitars = this.guitarListTransfer.data;
  details:any;
  constructor(public guitarListTransfer:GuitarListTransferService) { }

  ngOnInit(): void {
    for(var i=0;i<this.guitars.length;i++){
      if(this.guitars[i].name=='Acoustic Guitar'){
        this.details = this.guitars[i];
      }
    }
  }


}
