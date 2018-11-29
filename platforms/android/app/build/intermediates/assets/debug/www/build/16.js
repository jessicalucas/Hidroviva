webpackJsonp([16],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaPageModule", function() { return AgendaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agenda__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AgendaPageModule = /** @class */ (function () {
    function AgendaPageModule() {
    }
    AgendaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__agenda__["a" /* AgendaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__agenda__["a" /* AgendaPage */]),
            ],
        })
    ], AgendaPageModule);
    return AgendaPageModule;
}());

//# sourceMappingURL=agenda.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaPage; });
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




var AgendaPage = /** @class */ (function () {
    function AgendaPage(navCtrl, toast, agendaProvider, atendenteProvider) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.agendaProvider = agendaProvider;
        this.atendenteProvider = atendenteProvider;
        this.agendas = [];
        this.onlyInactives = false;
        this.searchDate = null;
    }
    AgendaPage.prototype.ionViewDidEnter = function () {
        this.getAll();
    };
    AgendaPage.prototype.getAll = function () {
        var _this = this;
        this.agendaProvider.getAll(this.searchDate)
            .then(function (result) {
            _this.agendas = result;
        });
    };
    AgendaPage.prototype.getAtendente = function (cd_atendente) {
        var _this = this;
        this.atendenteProvider.getAtendente(cd_atendente)
            .then(function (result) {
            _this.atendente = result;
        });
    };
    AgendaPage.prototype.addAgenda = function () {
        this.navCtrl.push('CadastroAgendaPage');
    };
    AgendaPage.prototype.editAgenda = function (cd_agenda) {
        this.navCtrl.push('CadastroAgendaPage', { cd_agenda: cd_agenda });
    };
    AgendaPage.prototype.removeAgenda = function (agenda) {
        var _this = this;
        this.agendaProvider.remove(agenda.cd_agenda)
            .then(function () {
            // Removendo do array de produtos
            var index = _this.agendas.indexOf(agenda);
            _this.agendas.splice(index, 1);
            _this.toast.create({ message: 'Agenda removida.', duration: 3000, position: 'botton' }).present();
        });
    };
    AgendaPage.prototype.filterDataAgenda = function (ev) {
        this.getAll();
    };
    AgendaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agenda',template:/*ion-inline-start:"C:\Users\jessica\Documents\GitHub\AbrigaData\src\pages\agenda\agenda.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      AbrigaData\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n \n\n <ion-item>\n\n  <ion-label stacked>Data de abertura</ion-label>\n\n  <ion-datetime displayFormat="DD/MM/YYYY" name="dat_abertura" \n\n  min="2018" ></ion-datetime>\n\n\n\n  <button ion-button (click)="filterDataAgenda($event)">Buscar</button>\n\n\n\n</ion-item>\n\n\n\n <ion-list>\n\n    <ion-item-sliding *ngFor="let agendas of agenda">\n\n \n\n      <button ion-item (click)="editAgenda(agenda.cd_agenda)">\n\n        <h1>{{ agenda.dat_entrada }}</h1>\n\n      </button>\n\n \n\n      <ion-item-options side="left">\n\n        <button ion-button color="danger" (click)="removeAgenda(agenda)">\n\n          <ion-icon name="trash"></ion-icon>\n\n        </button>\n\n      </ion-item-options>\n\n \n\n    </ion-item-sliding>\n\n  </ion-list>\n\n  \n\n  <ion-fab right bottom>\n\n    <button ion-fab color="light" (click)="addAgenda()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>\n\n \n\n \n\n  <ion-footer>\n\n  <ion-toolbar>\n\n    <p>© 2020 AbrigaData</p>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n</ion-content>\n\n '/*ion-inline-end:"C:\Users\jessica\Documents\GitHub\AbrigaData\src\pages\agenda\agenda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_agenda_agenda__["b" /* AgendaProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_atendente_atendente__["b" /* AtendenteProvider */]])
    ], AgendaPage);
    return AgendaPage;
}());

//# sourceMappingURL=agenda.js.map

/***/ })

});
//# sourceMappingURL=16.js.map