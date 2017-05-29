"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SortGridPipe = (function () {
    function SortGridPipe() {
    }
    SortGridPipe.prototype.transform = function (array, args) {
        if (typeof args[0] === "undefined") {
            return array;
        }
        var direction = args[0][0];
        var column = args;
        array.sort(function (a, b) {
            var left = a[column];
            var right = b[column];
            return right - left;
        });
        return array;
    };
    return SortGridPipe;
}());
SortGridPipe = __decorate([
    core_1.Pipe({
        name: 'sortgrid'
    }),
    core_1.Injectable()
], SortGridPipe);
exports.SortGridPipe = SortGridPipe;
//# sourceMappingURL=SortGridPipe.js.map