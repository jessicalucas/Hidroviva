webpackJsonp([4],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoFamiliarPageModule", function() { return GrupoFamiliarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grupo_familiar__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GrupoFamiliarPageModule = /** @class */ (function () {
    function GrupoFamiliarPageModule() {
    }
    GrupoFamiliarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__grupo_familiar__["a" /* GrupoFamiliarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__grupo_familiar__["a" /* GrupoFamiliarPage */]),
            ],
        })
    ], GrupoFamiliarPageModule);
    return GrupoFamiliarPageModule;
}());

//# sourceMappingURL=grupo-familiar.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrupoFamiliarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_grupo_familiar_grupo_familiar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pessoa_pessoa__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GrupoFamiliarPage = /** @class */ (function () {
    function GrupoFamiliarPage(navCtrl, toast, GrupoFamiliarProvider, pessoaProvider) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.GrupoFamiliarProvider = GrupoFamiliarProvider;
        this.pessoaProvider = pessoaProvider;
        this.grupoFamiliar = [];
        this.pessoas = [];
        this.onlyInactives = false;
        this.searchText = null;
    }
    GrupoFamiliarPage.prototype.ionViewDidEnter = function () {
        this.getAllPessoas();
    };
    GrupoFamiliarPage.prototype.getAllPessoas = function () {
        var _this = this;
        this.pessoaProvider.getAll(this.searchText)
            .then(function (result) {
            _this.pessoas = result;
        });
    };
    GrupoFamiliarPage.prototype.getAllIntegrantes = function () {
        var _this = this;
        this.GrupoFamiliarProvider.getAll(this.modelPessoa.cd_pessoa)
            .then(function (result) {
            _this.grupoFamiliar = result;
        });
    };
    GrupoFamiliarPage.prototype.getIntegrante = function () {
        var _this = this;
        this.GrupoFamiliarProvider.get(this.model.cd_grupo)
            .then(function (result) {
            _this.model = result;
        });
    };
    GrupoFamiliarPage.prototype.addGrupoFamiliar = function (cd_pessoa) {
        this.navCtrl.push('CadastroGrupoFamiliarPage', { cd_pessoa: cd_pessoa });
    };
    GrupoFamiliarPage.prototype.editGrupoFamiliar = function (cd_grupo) {
        this.navCtrl.push('CadastroGrupoFamiliarPage', { cd_grupo: cd_grupo });
    };
    GrupoFamiliarPage.prototype.removeGrupoFamiliar = function (grupoFamiliar) {
        var _this = this;
        this.GrupoFamiliarProvider.remove(grupoFamiliar.cd_grupo)
            .then(function () {
            // Removendo do array de produtos
            var index = _this.grupoFamiliar.indexOf(grupoFamiliar);
            _this.grupoFamiliar.splice(index, 1);
            _this.toast.create({ message: 'Membro do grupo familiar removido.', duration: 3000, position: 'botton' }).present();
        });
    };
    GrupoFamiliarPage.prototype.filterPessoas = function (ev) {
        this.getAllPessoas();
    };
    GrupoFamiliarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-grupo-familiar',template:/*ion-inline-start:"C:\Users\jessica\Documents\GitHub\Hidroviva\src\pages\grupo-familiar\grupo-familiar.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title> \n\n      Grupo Familiar\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n<ion-content padding>\n\n  \n\n  <p>Busca pessoa cadastrada:</p>\n\n  <ion-searchbar (ionInput)="filterPessoas($event)" [(ngModel)]="searchText"></ion-searchbar>\n\n\n\n  <h1>Lista de pessoas cadastradas:</h1>\n\n  <p>Clique para inserir novo membro no grupo familiar</p>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let pessoa of pessoas">\n\n \n\n      <button ion-item (click)="addGrupoFamiliar(pessoa.cd_pessoa)">\n\n        <h1>{{ pessoa.nome }}</h1>\n\n        <h2>{{ pessoa.nome_social }}</h2>\n\n        <h2>{{ pessoa.cpf }}</h2>\n\n        <h2>{{ pessoa.data_nascimento | date:\'dd/MM/yyyy\' }}</h2>\n\n        <h2>{{ pessoa.rg }}</h2>\n\n      </button>\n\n \n\n    </ion-item-sliding>\n\n  </ion-list>\n\n  \n\n  <ion-footer>\n\n  <ion-toolbar>\n\n    <p>© 2020 AbrigaData</p>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jessica\Documents\GitHub\Hidroviva\src\pages\grupo-familiar\grupo-familiar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_grupo_familiar_grupo_familiar__["b" /* GrupoFamiliarProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_pessoa_pessoa__["b" /* PessoaProvider */]])
    ], GrupoFamiliarPage);
    return GrupoFamiliarPage;
}());

//# sourceMappingURL=grupo-familiar.js.map

/***/ })

});
//# sourceMappingURL=4.js.map