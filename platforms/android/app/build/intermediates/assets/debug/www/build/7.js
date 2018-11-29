webpackJsonp([7],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracaoPageModule", function() { return ConfiguracaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuracao__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfiguracaoPageModule = /** @class */ (function () {
    function ConfiguracaoPageModule() {
    }
    ConfiguracaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__configuracao__["a" /* ConfiguracaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__configuracao__["a" /* ConfiguracaoPage */]),
            ],
        })
    ], ConfiguracaoPageModule);
    return ConfiguracaoPageModule;
}());

//# sourceMappingURL=configuracao.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfiguracaoPage = /** @class */ (function () {
    function ConfiguracaoPage(navCtrl, toast) {
        this.navCtrl = navCtrl;
        this.toast = toast;
    }
    ConfiguracaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfiguracaoPage');
    };
    ConfiguracaoPage.prototype.gotoAtendente = function () {
        this.navCtrl.push('AtendentePage');
    };
    ConfiguracaoPage.prototype.gotoReportaErro = function () {
        this.navCtrl.push('ReportaErroPage');
    };
    ConfiguracaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configuracao',template:/*ion-inline-start:"C:\Users\jessica\Documents\GitHub\AbrigaData\src\pages\configuracao\configuracao.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      AbrigaData\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n  <button ion-button full (click)="gotoAtendente()">Configurar Login</button>\n\n  <button ion-button full (click)="gotoReportaErro()">Reportar erro</button>\n\n  \n\n  \n\n  <ion-footer>\n\n  <ion-toolbar>\n\n    <p>© 2020 AbrigaData</p>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jessica\Documents\GitHub\AbrigaData\src\pages\configuracao\configuracao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], ConfiguracaoPage);
    return ConfiguracaoPage;
}());

//# sourceMappingURL=configuracao.js.map

/***/ })

});
//# sourceMappingURL=7.js.map