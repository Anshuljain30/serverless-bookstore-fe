import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MyProductsComponent } from "./my-products.component";
import { MyProductRoutingModule } from "./my-product-routing.module";

@NgModule({
  declarations: [MyProductsComponent],
  imports: [CommonModule, MyProductRoutingModule],
})
export class MyProductsModule {}
