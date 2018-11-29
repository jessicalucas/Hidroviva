webpackJsonp([9],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPessoaPageModule", function() { return CadastroPessoaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_pessoa__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastroPessoaPageModule = /** @class */ (function () {
    function CadastroPessoaPageModule() {
    }
    CadastroPessoaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro_pessoa__["a" /* CadastroPessoaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro_pessoa__["a" /* CadastroPessoaPage */]),
            ],
        })
    ], CadastroPessoaPageModule);
    return CadastroPessoaPageModule;
}());

//# sourceMappingURL=cadastro-pessoa.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPessoaPage; });
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



var CadastroPessoaPage = /** @class */ (function () {
    function CadastroPessoaPage(navCtrl, navParams, toast, pessoaProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.pessoaProvider = pessoaProvider;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__providers_pessoa_pessoa__["a" /* Pessoa */]();
        if (this.navParams.data.cd_pessoa) {
            this.pessoaProvider.get(this.navParams.data.pessoa)
                .then(function (result) {
                _this.model = result;
            });
        }
    }
    CadastroPessoaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPessoaPage');
    };
    CadastroPessoaPage.prototype.save = function () {
        var _this = this;
        this.savePessoa()
            .then(function () {
            _this.toast.create({ message: 'Cadastro salvo.', duration: 3000, position: 'botton' }).present();
            _this.navCtrl.pop();
        })
            .catch(function () {
            _this.toast.create({ message: 'Erro ao salvar o cadastro.', duration: 3000, position: 'botton' }).present();
        });
    };
    CadastroPessoaPage.prototype.savePessoa = function () {
        /*if (this.model.nome) {
          return this.pessoaProvider.update(this.model);
        } else {*/
        return this.pessoaProvider.insert(this.model);
        //}
    };
    CadastroPessoaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-pessoa',template:/*ion-inline-start:"C:\Users\jessica\Documents\GitHub\AbrigaData\src\pages\cadastro-pessoa\cadastro-pessoa.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      AbrigaData \n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<ion-list>\n\n  \n\n    <ion-item>\n\n      <ion-label stacked>Nome</ion-label>\n\n      <ion-input type="text" name="nome" [(ngModel)]="model.nome"></ion-input>\n\n    </ion-item>\n\n \n\n    <ion-item>\n\n      <ion-label stacked>Nome Social</ion-label>\n\n      <ion-input type="text" name="nome_social" [(ngModel)]="model.nome_social"></ion-input>\n\n    </ion-item>\n\n	\n\n	<ion-item>\n\n      <ion-label stacked>CPF</ion-label>\n\n      <ion-input type="number" name="cpf" [(ngModel)]="model.cpf"></ion-input>\n\n    </ion-item>\n\n \n\n    <ion-item>\n\n      <ion-label stacked>Data de Nascimento</ion-label>\n\n      <ion-datetime displayFormat="DD/MM/YYYY" name="data_nascimento" min="1920" [(ngModel)]="model.data_nascimento"></ion-datetime>\n\n    </ion-item>\n\n	\n\n	<ion-item>\n\n      <ion-label stacked>RG</ion-label>\n\n      <ion-input type="text" name="rg" [(ngModel)]="model.rg"></ion-input>\n\n    </ion-item>\n\n \n\n \n\n  </ion-list>\n\n \n\n  <button ion-button block (click)="save()">Salvar</button>\n\n \n\n\n\n  <ion-footer>\n\n  <ion-toolbar>\n\n    <p>© 2020 AbrigaData</p>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jessica\Documents\GitHub\AbrigaData\src\pages\cadastro-pessoa\cadastro-pessoa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_pessoa_pessoa__["b" /* PessoaProvider */]])
    ], CadastroPessoaPage);
    return CadastroPessoaPage;
}());

//# sourceMappingURL=cadastro-pessoa.js.map

/***/ })

});
//# sourceMappingURL=9.js.map