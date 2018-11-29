webpackJsonp([13],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroAgendaPageModule", function() { return CadastroAgendaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_agenda__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastroAgendaPageModule = /** @class */ (function () {
    function CadastroAgendaPageModule() {
    }
    CadastroAgendaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro_agenda__["a" /* CadastroAgendaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro_agenda__["a" /* CadastroAgendaPage */]),
            ],
        })
    ], CadastroAgendaPageModule);
    return CadastroAgendaPageModule;
}());

//# sourceMappingURL=cadastro-agenda.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroAgendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_agenda_agenda__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_atendente_atendente__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CadastroAgendaPage = /** @class */ (function () {
    function CadastroAgendaPage(navCtrl, navParams, toast, agendaProvider, atendenteProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.agendaProvider = agendaProvider;
        this.atendenteProvider = atendenteProvider;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__providers_agenda_agenda__["a" /* Agenda */]();
        if (this.navParams.data.cd_agenda) {
            this.agendaProvider.get(this.navParams.data.agenda)
                .then(function (result) {
                _this.model = result;
            });
        }
    }
    CadastroAgendaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroAgendaPage');
    };
    CadastroAgendaPage.prototype.save = function () {
        var _this = this;
        this.saveAgenda()
            .then(function () {
            _this.toast.create({ message: 'Cadastro salvo.', duration: 3000, position: 'botton' }).present();
            _this.navCtrl.pop();
        })
            .catch(function () {
            _this.toast.create({ message: 'Erro ao salvar o cadastro.', duration: 3000, position: 'botton' }).present();
        });
    };
    CadastroAgendaPage.prototype.saveAgenda = function () {
        /*if (this.model.nome) {
          return this.pessoaProvider.update(this.model);
        } else {*/
        return this.agendaProvider.insert(this.model);
        //}
    };
    CadastroAgendaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-agenda',template:/*ion-inline-start:"C:\Users\jessica\Documents\GitHub\Hidroviva\src\pages\cadastro-agenda\cadastro-agenda.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      AbrigaData \n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<ion-list>\n\n  \n\n  <ion-item>\n\n    <ion-label stacked>Data de Abeertura</ion-label>\n\n    <ion-datetime displayFormat="DD/MM/YYYY" name="dat_abertura" min="2018" [(ngModel)]="model.dat_abertura"></ion-datetime>\n\n  </ion-item>\n\n \n\n  <ion-item>\n\n    <ion-label stacked>Data de Fechamento</ion-label>\n\n    <ion-datetime displayFormat="DD/MM/YYYY" name="dat_fechamento" min="2018" [(ngModel)]="model.dat_fechamento"></ion-datetime>\n\n  </ion-item>\n\n	\n\n	<ion-item>\n\n      <ion-label stacked>Responsável</ion-label>\n\n      <ion-input type="text" name="cd_atendente" [(ngModel)]="model.cd_atendente"></ion-input>\n\n  </ion-item>  \n\n \n\n  </ion-list>\n\n \n\n  <button ion-button block (click)="save()">Salvar</button>\n\n \n\n\n\n  <ion-footer>\n\n  <ion-toolbar>\n\n    <p>© 2020 AbrigaData</p>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jessica\Documents\GitHub\Hidroviva\src\pages\cadastro-agenda\cadastro-agenda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_agenda_agenda__["b" /* AgendaProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_atendente_atendente__["b" /* AtendenteProvider */]])
    ], CadastroAgendaPage);
    return CadastroAgendaPage;
}());

//# sourceMappingURL=cadastro-agenda.js.map

/***/ })

});
//# sourceMappingURL=13.js.map