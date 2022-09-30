import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

    // FOR INVENTORY LISTING
    inventories = [
      {id: Date.now(), name: 'Toothbrush', inStock: 20}
    ];
    inventoryData = {...newInventory};

    // FOR INVENTORY DETAILS
    inventoryDetail: InventoryDetail[] = [{ ...newDetail }];
    detail = {...newDetail};


  ngOnInit(): void {
  }

  inventorySave(){
    this.inventories.push(this.inventoryData);

    // reset the form data
    this.inventoryData = {...newInventory, id: Date.now()};
    console.log('newInventory', newInventory);

    this.inventoryDetail.push(this.detail);
    // data reset
    this.detail = {...newDetail, date: moment().format('DD-MM-YYYY')};
    console.log('newDetail', newDetail);
  }

  inventoryRemove(idx: number) {
    this.inventories.splice(idx, 1)
  }
  constructor() { }

}

const newDetail: InventoryDetail = {
  date: moment().format('DD-MM-YYYY'),
  stock: '',
  quantity: 0,
}

// FOR INVENTORY LISTING
const newInventory = {
  id: Date.now() + 2,
  name: '',
  inStock: 0
}

// FOR INVENTORY DETAILS
interface InventoryDetail {
  date: number | string;
  stock: string;
  quantity: number;
}
