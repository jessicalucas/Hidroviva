webpackJsonp([2],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
            ],
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
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



var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, toast, pessoaProvider) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.pessoaProvider = pessoaProvider;
        this.pessoas = [];
        this.onlyInactives = false;
        this.searchText = null;
    }
    MenuPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.getAllPessoas = function () {
        var _this = this;
        this.pessoaProvider.getAll(this.searchText)
            .then(function (result) {
            _this.pessoas = result;
        });
    };
    MenuPage.prototype.cadastroPessoa = function () {
        this.navCtrl.push('PessoaPage');
    };
    MenuPage.prototype.cadastroGrupoFamiliar = function () {
        this.navCtrl.push('GrupoFamiliarPage');
    };
    MenuPage.prototype.cadastroAgenda = function () {
        this.navCtrl.push('AgendaPage');
    };
    MenuPage.prototype.cadastroMapa = function () {
        this.navCtrl.push('MapaPage');
    };
    MenuPage.prototype.configuracao = function () {
        this.navCtrl.push('ConfiguracaoPage');
    };
    MenuPage.prototype.sair = function () {
        this.navCtrl.push('HomePage');
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\jessica\Documents\GitHub\AbrigaData\src\pages\menu\menu.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title> \n\n      AbrigaData\n\n    </ion-title>\n\n  </ion-navbar> \n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n  <button ion-button full (click)="cadastroPessoa()">Pessoa</button>\n\n  <button ion-button full (click)="cadastroGrupoFamiliar()">Grupo Familiar</button>\n\n  <button ion-button full>Atendimento</button>\n\n  <button ion-button full (click)="cadastroAgenda()">Agenda</button>\n\n  <button ion-button full (click)="cadastroMapa()">Mapas</button>\n\n  <button ion-button full>Relatórios</button>\n\n\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="light" (click)="configuracao()"><ion-icon name="cog"></ion-icon></button>\n\n    <button ion-fab color="light" (click)="sair()"><ion-icon name="log-out"></ion-icon></button>\n\n  </ion-fab>\n\n  \n\n  <ion-footer>\n\n  <ion-toolbar>\n\n    <p>© 2020 AbrigaData</p>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jessica\Documents\GitHub\AbrigaData\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_pessoa_pessoa__["b" /* PessoaProvider */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=2.js.map