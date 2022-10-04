import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { PosComponent } from './components/pos/pos.component';
import { PipesModule } from './pipes/pipes.module';


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
    FormsModule,
    HttpClientModule,
    PipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
