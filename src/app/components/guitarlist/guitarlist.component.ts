import { Component, OnInit,Input} from '@angular/core';
import guitars from '../../../assets/data.json';
import { Router } from '@angular/router';
import { GuitarListTransferService } from 'src/app/services/guitar-list-transfer.service';


@Component({
  selector: 'app-guitarlist',
  templateUrl: './guitarlist.component.html',
  styleUrls: ['./guitarlist.component.scss']
})
export class GuitarlistComponent implements OnInit {
  @Input() Guitar: String | undefined;
  guitars = this.guitarListTransfer.data;
  
  constructor(public guitarListTransfer:GuitarListTransferService) {

    /*this.guitarListTransfer.data = this.guitars;*/
   }

  ngOnInit(): void {
  }  

  public toggleGuitarDetails(name:String){
    console.log(name)
  }


}

