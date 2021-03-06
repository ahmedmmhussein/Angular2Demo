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
var product_service_1 = require("./product.service");
var router_1 = require("@angular/router");
var ProductListComponent = (function () {
    function ProductListComponent(_productService, _router) {
        this._productService = _productService;
        this._router = _router;
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.orderByField = "productName";
        this.applyFilter = false;
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.ngOnInit = function () {
        this.products = this._productService.getAllProduct();
    };
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product List: ' + message;
    };
    ProductListComponent.prototype.setSortBy = function (message) {
        if (this.applyFilter) {
            this.orderByField = "productId";
            this.applyFilter = false;
        }
        else {
            this.orderByField = message;
            this.applyFilter = true;
        }
    };
    ProductListComponent.prototype.onAddItem = function () {
        this._router.navigate(['/addproduct']);
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/products/product-list.component.html',
        styleUrls: ['app/products/product-list.component.css']
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, router_1.Router])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map