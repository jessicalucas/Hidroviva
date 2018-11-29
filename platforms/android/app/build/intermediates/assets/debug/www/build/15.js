webpackJsonp([15],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtendentePageModule", function() { return AtendentePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__atendente__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AtendentePageModule = /** @class */ (function () {
    function AtendentePageModule() {
    }
    AtendentePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__atendente__["a" /* AtendentePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__atendente__["a" /* AtendentePage */]),
            ],
        })
    ], AtendentePageModule);
    return AtendentePageModule;
}());

//# sourceMappingURL=atendente.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtendentePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_atendente_atendente__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AtendentePage = /** @class */ (function () {
    function AtendentePage(navCtrl, toast, atendenteProvider) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.atendenteProvider = atendenteProvider;
        this.atendentes = [];
        this.onlyInactives = false;
        this.searchText = null;
    }
    AtendentePage.prototype.ionViewDidEnter = function () {
        this.getAllAtendente();
    };
    AtendentePage.prototype.getAllAtendente = function () {
        var _this = this;
        this.atendenteProvider.getAll()
            .then(function (result) {
            _this.atendentes = result;
        });
    };
    AtendentePage.prototype.editAtendente = function (cd_atendente) {
        this.navCtrl.push('CadastroAtendentePage', { cd_pessoa: cd_atendente });
    };
    AtendentePage.prototype.addAtendente = function () {
        this.navCtrl.push('CadastroAtendentePage');
    };
    AtendentePage.prototype.removeAtendente = function (atendente) {
        var _this = this;
        this.atendenteProvider.remove(atendente.cd_atendente)
            .then(function () {
            // Removendo do array de produtos
            var index = _this.atendentes.indexOf(atendente);
            _this.atendentes.splice(index, 1);
            _this.toast.create({ message: 'Cadastro removido.', duration: 3000, position: 'botton' }).present();
        });
    };
    AtendentePage.prototype.filterAtendente = function (ev) {
        this.getAllAtendente();
    };
    AtendentePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-atendente',template:/*ion-inline-start:"C:\Users\jessica\Documents\GitHub\AbrigaData\src\pages\atendente\atendente.html"*/'<ion-header>\n\n  <ion-navbar> \n\n    <ion-title>\n\n      AbrigaData\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n \n\n  <ion-searchbar (ionInput)="filterAtendente($event)" [(ngModel)]="searchText"></ion-searchbar>\n\n   <ion-list>\n\n     <ion-item-sliding *ngFor="let atendente of atendentes">\n\n  \n\n       <button ion-item (click)="editPessoa(pessoa.cd_pessoa)">\n\n         <h1>{{ pessoa.nome }}</h1>\n\n         <h2>{{ pessoa.login }}</h2>\n\n         <h2>{{ pessoa.senha }}</h2>\n\n       </button>\n\n  \n\n       <ion-item-options side="left">\n\n         <button ion-button color="danger" (click)="removeAtendente(pessoa)">\n\n           <ion-icon name="trash"></ion-icon>\n\n         </button>\n\n       </ion-item-options>\n\n  \n\n     </ion-item-sliding>\n\n   </ion-list>\n\n   \n\n   <ion-fab right bottom>\n\n     <button ion-fab color="light" (click)="addAtendente()"><ion-icon name="add"></ion-icon></button>\n\n   </ion-fab>\n\n  \n\n  \n\n   <ion-footer>\n\n   <ion-toolbar>\n\n     <p>© 2020 AbrigaData</p>\n\n   </ion-toolbar>\n\n </ion-footer>\n\n </ion-content>\n\n '/*ion-inline-end:"C:\Users\jessica\Documents\GitHub\AbrigaData\src\pages\atendente\atendente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_atendente_atendente__["b" /* AtendenteProvider */]])
    ], AtendentePage);
    return AtendentePage;
}());

//# sourceMappingURL=atendente.js.map

/***/ })

});
//# sourceMappingURL=15.js.map