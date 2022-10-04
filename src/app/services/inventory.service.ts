import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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

  // createProduct(product: Product): Observable<Product> {
  //   return this.http.post<Product>(`${this.baseUrl}/products`, product);
  // }

  // updateProduct(product: Product): Observable<Product> {
  //   return this.http.patch<Product>(`${this.baseUrl}/products/${product._id || product.id}`, product);
  // }

  // removeProduct(productId: string): Observable<Product> {
  //   return this.http.delete<Product>(`${this.baseUrl}/products/${productId}`);
  // }
}
