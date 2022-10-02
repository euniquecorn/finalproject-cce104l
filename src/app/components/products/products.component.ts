import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // FOR PRODUCT LISTING
  products: Product[] = []
  formData: Product = { ...newData };
  isEditing = false;

  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts()
      .pipe(
        tap((products) => { this.formData = products[0]; })
      )
      .subscribe((products: Product[]) => this.products = products)
  }

  productRemove(product: Product) {
    console.log('delete: ', product);
    this.productsService.removeProduct(product._id!)
      .subscribe(() => this.getProducts())
  }

  save() {
    if (this.isEditing) {
      return this.productsService.updateProduct(this.formData)
        .subscribe(
          () => {
            console.log('Update success');
            this.isEditing = false;
            this.getProducts();
          },
          (error) => console.log(error.message || error.stack || error)
        );
    }

    return this.productsService.createProduct(this.formData)
      .subscribe(
        () => {
          this.products.push(this.formData);

          // reset the form data
          this.formData = {...newData, productId: Date.now()};
          console.log('newData', newData);
          this.isEditing = false;
        },
        (error) => console.log(error.message || error.stack || error)
      );
  }

  selectItem(product: Product) {
    this.isEditing = true;
    this.formData = { ...product };
  }

  createNew() {
    this.isEditing = true;
    this.formData = { ...newData };
  }

  cancel() {
    this.getProducts();
    this.isEditing = false;
  }
}

// FOR PRODUCT LISTING
const newData = {
  productId: Date.now(),
  name: '',
  count: 0,
  price: 0,
}

export interface Product {
  _id?: string;
  id?: number | string;
  productId: number,
  name: string
  count: number,
  price: number,
}
