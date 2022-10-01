import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {

  // FOR POS LISTING
  POS = [
    {PID: 0, price: 0, quantity: 1, amount: 0 }
  ];
  posData = {...newPOS};

  // FOR POS DETAILS


  constructor() { }

  ngOnInit(): void {
  }

  save(){
    this.POS.push(this.posData);

    //Reset the POS DATA
    this.posData = {...newPOS, PID: Date.now()};
  }

}

const newDetail: posDetail = {
  PID: Date.now() +2,
  date: moment().format('DD-MM-YYYY'),
  price: 0,
  qnty: 0,
  amount: 0
}

  //FOR POS LISTING
  const newPOS = {
    PID: 0,
    price: 0,
    quantity: 0,
    amount: 0,
  }

  // FOR POS DETAILS
  interface posDetail {
    PID: number;
    date: number | string;
    price: number;
    qnty: number;
    amount: number;
  }
