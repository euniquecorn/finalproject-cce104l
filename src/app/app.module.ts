import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { PosComponent } from './components/pos/pos.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    InventoryComponent,
    PosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
