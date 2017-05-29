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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var product_service_1 = require("./product.service");
var EditProductComponent = (function () {
    function EditProductComponent(_router, _productService, fb) {
        this._router = _router;
        this._productService = _productService;
        this.pageTitle = 'Edit Product';
        this.complexForm = fb.group({
            'productName': [null, forms_1.Validators.required],
            'productCode': [],
            'releaseDate': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("2017-[0-9]{2}-[0-9]{2}")])],
            'description': [],
            'price': [],
            'starRating': []
        });
        console.log(this.complexForm);
        this.complexForm.valueChanges.subscribe(function (form) {
            console.log('form changed to:', form);
        });
    }
    EditProductComponent.prototype.submitForm = function (form) {
        console.log('you submitted value:', form);
        this._productService.addProduct(form);
        this.onBack();
    };
    EditProductComponent.prototype.onBack = function () {
        this._router.navigate(['/products']);
    };
    return EditProductComponent;
}());
EditProductComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/products/AddProductComponent.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        product_service_1.ProductService,
        forms_1.FormBuilder])
], EditProductComponent);
exports.EditProductComponent = EditProductComponent;
//# sourceMappingURL=EditProductComponent.js.map