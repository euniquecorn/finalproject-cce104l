import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { InventoryItem } from '../components/inventory/inventory.component';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  baseUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
  ) { }

  getInventory(): any {
    return this.http.get<InventoryItem[]>(`${this.baseUrl}/inventory`)
      .pipe(
        map((result: any) => (result.data as InventoryItem[]))
      );
  }

  stockIn(inventory: InventoryItem): Observable<InventoryItem> {
    return this.http.post<InventoryItem>(`${this.baseUrl}/inventory`, inventory)
      .pipe(
        map((result: any) => (result.data as InventoryItem))
      );
  }

  updateInventory(inventory: InventoryItem): Observable<InventoryItem> {
    return this.http.patch<InventoryItem>(`${this.baseUrl}/inventory/${inventory._id}`, inventory);
  }

  removeInventory(inventoryId: string): Observable<InventoryItem> {
    return this.http.delete<InventoryItem>(`${this.baseUrl}/inventory/${inventoryId}`);
  }
}
