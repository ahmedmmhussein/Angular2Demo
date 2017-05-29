"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_1 = require("./product");
var ProductService = (function () {
    function ProductService() {
        this.lastId = 0;
        this.products = [];
        var product1 = new product_1.IProduct({
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "2017-03-19",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        });
        this.addProduct(product1);
        var product2 = new product_1.IProduct({
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "2017-11-20",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        });
        this.addProduct(product2);
    }
    ProductService.prototype.addProduct = function (product) {
        if (!product.productId) {
            product.productId = ++this.lastId;
        }
        this.products.push(product);
        return this;
    };
    ProductService.prototype.deleteProductById = function (id) {
        this.products = this.products
            .filter(function (product) { return product.productId !== id; });
        return this;
    };
    ProductService.prototype.updateProductById = function (id, values) {
        if (values === void 0) { values = {}; }
        var product = this.getProductById(id);
        if (!product) {
            return null;
        }
        Object.assign(product, values);
        return product;
    };
    ProductService.prototype.getAllProduct = function () {
        return this.products;
    };
    ProductService.prototype.getProductById = function (id) {
        return this.products
            .filter(function (product) { return product.productId === id; })
            .pop();
    };
    ProductService.prototype.sortedProducts = function () {
        return this.products.sort(function (a, b) { return b.starRating - a.starRating; });
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map