/* Defines the product entity */
export class IProduct {
constructor(values: Object = {}) {
    Object.assign(this, values);
  }
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}

