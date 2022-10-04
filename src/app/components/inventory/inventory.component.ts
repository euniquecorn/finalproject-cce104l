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

  constructor(
    private inventoryService: InventoryService,
  ) {}


  ngOnInit(): void {
    this.getInventory();
  }

  getInventory(): void {
    console.log('getInventory');
    this.inventoryService.getInventory()
      .subscribe((inventories: InventoryDetail[]) => this.inventories = inventories)
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
const newInventory = {
  id: Date.now() + 2,
  name: '',
  inStock: 0
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
