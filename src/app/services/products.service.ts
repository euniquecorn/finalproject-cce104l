import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../components/products/products.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`)
      .pipe(
        map((result: any) => (result.data as Product[]))
      );
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/products`, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.baseUrl}/products/${product.id}`, product);
  }

  removeProduct(productId: string): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}/products/${productId}`);
  }
}
