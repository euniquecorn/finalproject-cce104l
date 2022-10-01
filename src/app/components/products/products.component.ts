import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // FOR PRODUCT LISTING
  products: Product[] = []
  formData = {...newData};

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts()
      .subscribe((products: Product[]) => this.products = products)
  }

  productRemove(product: Product) {
    console.log('delete: ', product);
    this.productsService.removeProduct(product._id!)
      .subscribe(() => this.getProducts())
  }

  save(){
    this.productsService.createProduct(this.formData)
      .subscribe(
        () => {
          this.products.push(this.formData);

          // reset the form data
          this.formData = {...newData, productId: Date.now()};
          console.log('newData', newData);
        },
        (error) => console.log(error.message || error.stack || error)
      );
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
