import { Injectable } from '@angular/core';

import { IProduct } from './product';

@Injectable()
export class ProductService {
  lastId: number = 0;
  products: IProduct[] = [];
  constructor() {
    let product1 = new IProduct({
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    });

        this.addProduct(product1);
         let product2 = new IProduct({
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    });

        this.addProduct(product2);
  }

  addProduct(product: IProduct): ProductService {
    if (!product.id) {
      product.id = ++this.lastId;
    }
    this.products.push(product);
    return this;
  }

  deleteProductById(id: number): ProductService {
    this.products = this.products
      .filter(product => product.id !== id);
    return this;
  }

  updateProductById(id: number, values: Object = {}): IProduct {
    let product = this.getProductById(id);
    if (!product) {
      return null;
    }
    Object.assign(product, values);
    return product;
  }

  getAllProduct(): IProduct[] {
    return this.products;
  }

  getProductById(id: number): Todo {
    return this.products
      .filter(product => product.id === id)
      .pop();
  }
}
