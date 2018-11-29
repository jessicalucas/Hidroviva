webpackJsonp([10],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroGrupoFamiliarPageModule", function() { return CadastroGrupoFamiliarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_grupo_familiar__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastroGrupoFamiliarPageModule = /** @class */ (function () {
    function CadastroGrupoFamiliarPageModule() {
    }
    CadastroGrupoFamiliarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro_grupo_familiar__["a" /* CadastroGrupoFamiliarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro_grupo_familiar__["a" /* CadastroGrupoFamiliarPage */]),
            ],
        })
    ], CadastroGrupoFamiliarPageModule);
    return CadastroGrupoFamiliarPageModule;
}());

//# sourceMappingURL=cadastro-grupo-familiar.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroGrupoFamiliarPage; });
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




var CadastroGrupoFamiliarPage = /** @class */ (function () {
    function CadastroGrupoFamiliarPage(navCtrl, navParams, toast, GrupoFamiliarProvider, pessoaProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.GrupoFamiliarProvider = GrupoFamiliarProvider;
        this.pessoaProvider = pessoaProvider;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__providers_grupo_familiar_grupo_familiar__["a" /* GrupoFamiliar */]();
        if (this.navParams.data.cd_grupo) {
            this.GrupoFamiliarProvider.get(this.navParams.data.GrupoFamiliar)
                .then(function (result) {
                _this.model = result;
            });
        }
    }
    CadastroGrupoFamiliarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroGrupoFamiliarPage');
    };
    CadastroGrupoFamiliarPage.prototype.save = function () {
        var _this = this;
        this.saveGrupoFamiliar()
            .then(function () {
            _this.toast.create({ message: 'Cadastro salvo.', duration: 3000, position: 'botton' }).present();
            _this.navCtrl.pop();
        })
            .catch(function () {
            _this.toast.create({ message: 'Erro ao salvar o cadastro.', duration: 3000, position: 'botton' }).present();
        });
    };
    CadastroGrupoFamiliarPage.prototype.saveGrupoFamiliar = function () {
        if (this.model.nome) {
            return this.GrupoFamiliarProvider.update(this.model);
        }
        else {
            return this.GrupoFamiliarProvider.insert(this.model);
        }
    };
    CadastroGrupoFamiliarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-grupo-familiar',template:/*ion-inline-start:"C:\Users\jessica\Documents\GitHub\AbrigaData\src\pages\cadastro-grupo-familiar\cadastro-grupo-familiar.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      AbrigaData \n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<ion-list>\n\n \n\n  <ion-item>\n\n    <ion-label stacked>Nome</ion-label>\n\n    <ion-input type="text" name="nome" [(ngModel)]="model.grau_parentesco"></ion-input>\n\n  </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Nome</ion-label>\n\n      <ion-input type="text" name="nome" [(ngModel)]="model.nome"></ion-input>\n\n    </ion-item>\n\n	\n\n	<ion-item>\n\n      <ion-label stacked>CPF</ion-label>\n\n      <ion-input type="number" name="cpf" [(ngModel)]="model.cpf"></ion-input>\n\n    </ion-item>\n\n \n\n  </ion-list>\n\n \n\n  <button ion-button block (click)="save()">Salvar</button>\n\n \n\n\n\n  <ion-footer>\n\n  <ion-toolbar>\n\n    <p>© 2020 AbrigaData</p>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jessica\Documents\GitHub\AbrigaData\src\pages\cadastro-grupo-familiar\cadastro-grupo-familiar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_grupo_familiar_grupo_familiar__["b" /* GrupoFamiliarProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_pessoa_pessoa__["b" /* PessoaProvider */]])
    ], CadastroGrupoFamiliarPage);
    return CadastroGrupoFamiliarPage;
}());

//# sourceMappingURL=cadastro-grupo-familiar.js.map

/***/ })

});
//# sourceMappingURL=10.js.map