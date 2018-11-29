webpackJsonp([12],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroAtendentePageModule", function() { return CadastroAtendentePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_atendente__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastroAtendentePageModule = /** @class */ (function () {
    function CadastroAtendentePageModule() {
    }
    CadastroAtendentePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro_atendente__["a" /* CadastroAtendentePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro_atendente__["a" /* CadastroAtendentePage */]),
            ],
        })
    ], CadastroAtendentePageModule);
    return CadastroAtendentePageModule;
}());

//# sourceMappingURL=cadastro-atendente.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroAtendentePage; });
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



var CadastroAtendentePage = /** @class */ (function () {
    function CadastroAtendentePage(navCtrl, navParams, toast, atendenteProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.atendenteProvider = atendenteProvider;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__providers_atendente_atendente__["a" /* Atendente */]();
        if (this.navParams.data.cd_atendente) {
            this.atendenteProvider.getAtendente(this.navParams.data.atendente)
                .then(function (result) {
                _this.model = result;
            });
        }
    }
    CadastroAtendentePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroAtendentePage');
    };
    CadastroAtendentePage.prototype.save = function () {
        var _this = this;
        this.saveAtendente()
            .then(function () {
            _this.toast.create({ message: 'Cadastro salvo.', duration: 3000, position: 'botton' }).present();
            _this.navCtrl.pop();
        })
            .catch(function () {
            _this.toast.create({ message: 'Erro ao salvar o cadastro.', duration: 3000, position: 'botton' }).present();
        });
    };
    CadastroAtendentePage.prototype.saveAtendente = function () {
        /*if (this.model.nome) {
          return this.pessoaProvider.update(this.model);
        } else {*/
        return this.atendenteProvider.insert(this.model);
        //}
    };
    CadastroAtendentePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-atendente',template:/*ion-inline-start:"C:\Users\jessica\Documents\GitHub\AbrigaData\src\pages\cadastro-atendente\cadastro-atendente.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      AbrigaData \n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<ion-list>\n\n  \n\n    <ion-item>\n\n      <ion-label stacked>Nome</ion-label>\n\n      <ion-input type="text" name="nome" [(ngModel)]="model.nome"></ion-input>\n\n    </ion-item>\n\n \n\n    <ion-item>\n\n      <ion-label stacked>Login</ion-label>\n\n      <ion-input type="text" name="login" [(ngModel)]="model.login"></ion-input>\n\n    </ion-item>\n\n	\n\n	<ion-item>\n\n      <ion-label stacked>Senha</ion-label>\n\n      <ion-input type="text" name="senha" [(ngModel)]="model.senha"></ion-input>\n\n    </ion-item> \n\n \n\n  </ion-list>\n\n \n\n  <button ion-button block (click)="save()">Salvar</button>\n\n  \n\n\n\n  <ion-footer>\n\n  <ion-toolbar>\n\n    <p>© 2020 AbrigaData</p>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jessica\Documents\GitHub\AbrigaData\src\pages\cadastro-atendente\cadastro-atendente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_atendente_atendente__["b" /* AtendenteProvider */]])
    ], CadastroAtendentePage);
    return CadastroAtendentePage;
}());

//# sourceMappingURL=cadastro-atendente.js.map

/***/ })

});
//# sourceMappingURL=12.js.map