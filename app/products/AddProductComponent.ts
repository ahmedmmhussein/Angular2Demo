import { Component } from '@angular/core';

import { IProduct } from './product';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ProductService } from './product.service';

@Component({
  templateUrl: 'app/products/AddProductComponent.html'
})
export class AddProductComponent {
pageTitle: string = 'Add Product';
  model = new IProduct({});
 complexForm : FormGroup;

      constructor(private _router: Router,
                private _productService: ProductService,
            	fb: FormBuilder){
    this.complexForm = fb.group({
      'productName' : [null, Validators.required],
      'productCode': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'releaseDate' : [null, Validators.required],
      'description' : false,
      'price' :false,
      'starRating' :false
    })
    }


  submitForm(form: any): void {
   console.log('you submitted value:', form);
this._productService.addProduct(form);
  this.onBack();}

    onBack(): void {
        this._router.navigate(['/products']);
    }
}