import { Component, OnInit } from '@angular/core';
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
    console.log('getInventory');
    this.inventoryService.getInventory()
      .subscribe((inventories: InventoryDetail[]) => {
        if (inventories && inventories.length) {
          this.selectedInventory = inventories[0];
        }

        this.inventories = inventories;
      })
  }

  selectInventory(inventory: InventoryDetail) {
    this.selectedInventory = {
      ...inventory,
      inventories: inventory.inventories.length ? inventory.inventories : [{ ...newInventoryDetail }]
    };
  }

  newInventory() {
    console.log('create new inventory');
  }

  inventorySave(){
    console.log('save inventory');
  }

  inventoryRemove(inventory: InventoryItem) {
    console.log('remove-inventory: ', inventory);
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
  prodDocId: string;
  productId: number;
  productName: string;
  stockIn: number;
  stockOut: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface InventoryDetail {
  prodDocId: string;
  productId: string;
  productName: string;
  totalStockIn: number | 0,
  totalStockOut: number | 0,
  totalStockRem: number | 0,
  inventories: InventoryItem[],
}
