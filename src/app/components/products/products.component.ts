import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // FOR PRODUCT LISTING
  products = [
    {id: Date.now(), name: 'Toothbrush', unitPrice: 20}
  ];
  formData = {...newData};

  constructor() { }

  ngOnInit(): void {
  }


  productRemove(idx: number) {
    this.products.splice(idx, 1)
  }

  save(){
    this.products.push(this.formData);

    // reset the form data
    this.formData = {...newData, id: Date.now()};
    console.log('newData', newData);
  }
}

// FOR PRODUCT LISTING
const newData = {
  id: Date.now() + 2,
  name: '',
  unitPrice: 0
}
