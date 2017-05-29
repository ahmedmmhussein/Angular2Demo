import { Component } from '@angular/core';

import { IProduct } from './product';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ProductService } from './product.service';

@Component({
  templateUrl: 'app/products/AddProductComponent.html'
})
export class EditProductComponent implements OnInit {
pageTitle: string = 'Edit Product';
 complexForm : FormGroup;
 product: IProduct;
 private sub: Subscription;
 formBuilder : FormBuilder;

      constructor(private _router: Router,
                  private _route: ActivatedRoute,
                private _productService: ProductService,
            	fb: FormBuilder){
              this.formBuilder=fb;
  }


    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.product=this._productService.getProductById(id);
 this.complexForm = this.formBuilder.group({
      'productName' : [this.product.productName, Validators.required],
      'productCode': [this.product.productCode],
      'releaseDate' : [this.product.releaseDate, Validators.compose([Validators.required, Validators.pattern("2017-[0-9]{2}-[0-9]{2}")])],
      'description' : [this.product.description],
      'price' :[this.product.price],
      'starRating' :[this.product.starRating]
        })
       console.log(this.complexForm);
    this.complexForm.valueChanges.subscribe( (form: any) => {
      console.log('form changed to:', form);
    }
    );
        });
    }


  submitForm(form: any): void {
   console.log('you submitted value:', form);
this._productService.updateProductById(this.product.productId,form);
  this.onBack();}

    onBack(): void {
        this._router.navigate(['/products']);
    }
}