import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ShopFiltersComponent } from './shop-filters/shop-filters.component';
import { FormsModule } from '@angular/forms';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';

@NgModule({
  declarations: [ShopComponent, ShopFiltersComponent, ShopDetailComponent],
  imports: [CommonModule, FormsModule, ShopRoutingModule, SharedModule]
})
export class ShopModule {}
