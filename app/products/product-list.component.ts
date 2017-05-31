import { Component, OnInit }  from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;
    orderByField : string = "productName";
    applyFilter: boolean = false;

    products: IProduct[];

    constructor(private _productService: ProductService, private _router: Router) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }



    ngOnInit(): void {
       this.products=this._productService.getAllProduct();
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    setSortBy(message: string): void {
    if(this.applyFilter){
        this.orderByField = "productId";
        this.applyFilter=false;
    }else{
        this.orderByField = message;
        this.applyFilter=true;
    }
    }

      onAddItem(): void {
        this._router.navigate(['/addproduct']);
    }
}
