import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  // FOR INVENTORY LISTING
  inventories: InventoryDetail[] = [];
  selectedInventory: any;

  constructor(
    private inventoryService: InventoryService,
  ) {}

  ngOnInit(): void {
    this.getInventory();
  }

  getInventory(): void {
    this.inventoryService.getInventory()
      .subscribe((inventories: InventoryDetail[]) => {
        if (inventories && inventories.length) {
          this.selectedInventory = inventories[0];
        }

        this.inventories = inventories;
      })
  }

  selectInventory(inventory: InventoryDetail) {
    const newInventoryItem: InventoryItem = {
      prodDocId: inventory.prodDocId,
      productId: +inventory.productId,
      productName: inventory.productName,
      stockIn: 0,
      stockOut: 0,
      createdAt: moment().format('MM-DD-YYYY'),
    };

    this.selectedInventory = {
      ...inventory,
      inventories: inventory.inventories.length ? inventory.inventories : [{ ...newInventoryItem }]
    };
  }

  newInventory() {
    console.log('create new inventory');
  }

  inventorySave(inventory: InventoryItem){
    console.log('inventory: ', inventory);
    if (!inventory._id) {
      this.inventoryService.stockIn(inventory)
        .subscribe(
          (result) => {
            console.log('stockIn-result', result);
            this.getInventory();
          }
        );
    } else {
      this.inventoryService.updateInventory(inventory)
        .subscribe(
          (result) => {
            console.log('stockIn-result', result);
            this.getInventory();
          }
        );
    }
  }

  inventoryRemove(inventory: InventoryItem) {
    if (inventory._id) {
      this.inventoryService.removeInventory(inventory._id)
        .subscribe(
          (result) => {
            console.log('stockIn-result', result);
            this.getInventory();
          }
        );
    } else {
      console.log('Inventory ID is required.');
    }
  }

}

// FOR INVENTORY LISTING
const newInventoryDetail = {
  prodDocId: '',
  productId: Date.now(),
  productName: '',
  totalStockIn: 0,
  totalStockOut: 0,
  totalStockRem: 0,
  inventories: [],
}

// FOR INVENTORY DETAILS
export interface InventoryItem {
  _id?: string;
  prodDocId: string;
  productId: number;
  productName: string;
  stockIn: number;
  stockOut: number;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface InventoryDetail {
  prodDocId: string;
  productId: number | string;
  productName: string;
  totalStockIn: number | 0,
  totalStockOut: number | 0,
  totalStockRem: number | 0,
  inventories: InventoryItem[],
}
