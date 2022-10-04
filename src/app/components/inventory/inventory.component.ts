import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { InventoryService } from 'src/app/services/inventory.service';
import { Product } from '../products/products.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  // FOR INVENTORY LISTING
  inventories: InventoryItem[] = [];
  inventoryData = {...newInventory};

  // FOR INVENTORY DETAILS
  inventoryDetail: InventoryDetail[] = [{ ...newDetail }];
  detail = {...newDetail};

  constructor(
    private inventoryService: InventoryService,
  ) {}


  ngOnInit(): void {
    this.getInventory();
  }

  getInventory(): void {
    console.log('getInventory');
    this.inventoryService.getInventory()
      .subscribe((inventories: InventoryItem[]) => this.inventories = inventories)
  }

  inventorySave(){
    // this.inventories.push(this.inventoryData);

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

export interface InventoryItem {
  prodDocId: string;
  productId: string;
  productName: string;
  totalStockIn: number,
  totalStockOut: number,
  totalStockRem: number,
}
