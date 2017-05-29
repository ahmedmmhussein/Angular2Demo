import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { AddProductComponent } from './AddProductComponent';
import { ProductDetailGuard } from './product-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id',
        canActivate: [ ProductDetailGuard],
        component: ProductDetailComponent
      },
      { path: 'addproduct', component: AddProductComponent }
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    AddProductComponent,
    ProductFilterPipe
  ],
  providers: [
    ProductService,
    ProductDetailGuard
  ]
})
export class ProductModule {}
