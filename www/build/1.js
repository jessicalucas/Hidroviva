webpackJsonp([1],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PessoaPageModule", function() { return PessoaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pessoa__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PessoaPageModule = /** @class */ (function () {
    function PessoaPageModule() {
    }
    PessoaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pessoa__["a" /* PessoaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pessoa__["a" /* PessoaPage */]),
            ],
        })
    ], PessoaPageModule);
    return PessoaPageModule;
}());

//# sourceMappingURL=pessoa.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PessoaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pessoa_pessoa__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PessoaPage = /** @class */ (function () {
    function PessoaPage(navCtrl, toast, pessoaProvider) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.pessoaProvider = pessoaProvider;
        this.pessoas = [];
        this.onlyInactives = false;
        this.searchText = null;
    }
    PessoaPage.prototype.ionViewDidEnter = function () {
        this.getAllPessoas();
    };
    PessoaPage.prototype.getAllPessoas = function () {
        var _this = this;
        this.pessoaProvider.getAll(this.searchText)
            .then(function (result) {
            _this.pessoas = result;
        });
    };
    PessoaPage.prototype.addPessoa = function () {
        this.navCtrl.push('CadastroPessoaPage');
    };
    PessoaPage.prototype.editPessoa = function (cd_pessoa) {
        this.navCtrl.push('CadastroPessoaPage', { cd_pessoa: cd_pessoa });
    };
    PessoaPage.prototype.removePessoa = function (pessoa) {
        var _this = this;
        this.pessoaProvider.remove(pessoa.cd_pessoa)
            .then(function () {
            // Removendo do array de produtos
            var index = _this.pessoas.indexOf(pessoa);
            _this.pessoas.splice(index, 1);
            _this.toast.create({ message: 'Pessoa removida.', duration: 3000, position: 'botton' }).present();
        });
    };
    PessoaPage.prototype.filterPessoas = function (ev) {
        this.getAllPessoas();
    };
    PessoaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pessoa',template:/*ion-inline-start:"C:\Users\jessica\Documents\GitHub\Hidroviva\src\pages\pessoa\pessoa.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Pessoa\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-searchbar (ionInput)="filterPessoas($event)" [(ngModel)]="searchText"></ion-searchbar>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let pessoa of pessoas">\n\n \n\n      <button ion-item (click)="editPessoa(pessoa.cd_pessoa)">\n\n        <h1>{{ pessoa.nome }}</h1>\n\n        <h2>{{ pessoa.nome_social }}</h2>\n\n        <h2>{{ pessoa.cpf }}</h2>\n\n      </button>\n\n \n\n      <ion-item-options side="left">\n\n        <button ion-button color="danger" (click)="removePessoa(pessoa)">\n\n          <ion-icon name="trash"></ion-icon>\n\n        </button>\n\n      </ion-item-options>\n\n \n\n    </ion-item-sliding>\n\n  </ion-list>\n\n  \n\n  <ion-fab right bottom>\n\n    <button ion-fab color="light" (click)="addPessoa()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>\n\n  \n\n \n\n  <ion-footer>\n\n  <ion-toolbar>\n\n    <p>© 2020 AbrigaData</p>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jessica\Documents\GitHub\Hidroviva\src\pages\pessoa\pessoa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_pessoa_pessoa__["b" /* PessoaProvider */]])
    ], PessoaPage);
    return PessoaPage;
}());

//# sourceMappingURL=pessoa.js.map

/***/ })

});
//# sourceMappingURL=1.js.map