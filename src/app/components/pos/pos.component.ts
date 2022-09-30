import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {

  // FOR POS LISTING
  POS = [
    {id: Date.now(), name: 'Toothbrush', unitPrice: 20, qnty: 1, subTotal:1 }
  ];
  posData = {...newPOS};

  constructor() { }

  ngOnInit(): void {
  }
}

  //FOR POS LISTING
  const newPOS = {
    id: Date.now() + 2,
    name: '',
    unitPrice: 0,
    qnty: 0,
    subTotal:0
  }
