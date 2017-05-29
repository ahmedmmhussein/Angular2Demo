import { Component } from '@angular/core';

import { IProduct } from './product';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ProductService } from './product.service';

@Component({
  templateUrl: 'app/products/AddProductComponent.html'
})
export class EditProductComponent {
pageTitle: string = 'Edit Product';
 complexForm : FormGroup;

      constructor(private _router: Router,
                private _productService: ProductService,
            	fb: FormBuilder){
    this.complexForm = fb.group({
      'productName' : [null, Validators.required],
      'productCode': [],
      'releaseDate' : [null, Validators.compose([Validators.required, Validators.pattern("2017-[0-9]{2}-[0-9]{2}")])],
      'description' : [],
      'price' :[],
      'starRating' :[]
    })
       console.log(this.complexForm);
    this.complexForm.valueChanges.subscribe( (form: any) => {
      console.log('form changed to:', form);
    }
    );
  }


  submitForm(form: any): void {
   console.log('you submitted value:', form);
this._productService.addProduct(form);
  this.onBack();}

    onBack(): void {
        this._router.navigate(['/products']);
    }
}