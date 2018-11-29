webpackJsonp([14],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtendimentoPageModule", function() { return AtendimentoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__atendimento__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AtendimentoPageModule = /** @class */ (function () {
    function AtendimentoPageModule() {
    }
    AtendimentoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__atendimento__["a" /* AtendimentoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__atendimento__["a" /* AtendimentoPage */]),
            ],
        })
    ], AtendimentoPageModule);
    return AtendimentoPageModule;
}());

//# sourceMappingURL=atendimento.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtendimentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_atendimento_atendimento__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_agenda_agenda__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pessoa_pessoa__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AtendimentoPage = /** @class */ (function () {
    function AtendimentoPage(navCtrl, toast, AtendimentoProvider, pessoaProvider, agendaProvider) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.AtendimentoProvider = AtendimentoProvider;
        this.pessoaProvider = pessoaProvider;
        this.agendaProvider = agendaProvider;
        this.atendimentos = [];
        this.agendas = [];
        this.pessoas = [];
        this.onlyInactives = false;
        this.searchText = null;
    }
    AtendimentoPage.prototype.ionViewDidEnter = function () {
        this.getAllPessoas();
    };
    AtendimentoPage.prototype.getAllPessoas = function () {
        var _this = this;
        this.pessoaProvider.getAll(this.searchText)
            .then(function (result) {
            _this.pessoas = result;
        });
    };
    AtendimentoPage.prototype.getAllAgendas = function () {
        var _this = this;
        this.agendaProvider.getAll(this.modelAgenda.dat_abertura)
            .then(function (result) {
            _this.agendas = result;
        });
    };
    AtendimentoPage.prototype.getAtentimento = function () {
        var _this = this;
        this.AtendimentoProvider.get(this.model.cd_atendimento)
            .then(function (result) {
            _this.model = result;
        });
    };
    AtendimentoPage.prototype.addAtendimento = function (cd_pessoa) {
        this.navCtrl.push('CadastroAtendimentoPage', { cd_pessoa: cd_pessoa });
    };
    AtendimentoPage.prototype.addAtendimentoaux = function () {
        this.navCtrl.push('CadastroAtendimentoPage');
    };
    AtendimentoPage.prototype.editAtendimento = function (cd_atendimento) {
        this.navCtrl.push('CadastroAtendimentoPage', { cd_atendimento: cd_atendimento });
    };
    AtendimentoPage.prototype.removeAtendimento = function (atendimento) {
        var _this = this;
        this.AtendimentoProvider.remove(atendimento.cd_atendimento)
            .then(function () {
            // Removendo do array de produtos
            var index = _this.atendimentos.indexOf(atendimento);
            _this.atendimentos.splice(index, 1);
            _this.toast.create({ message: 'Atendimento removido.', duration: 3000, position: 'botton' }).present();
        });
    };
    AtendimentoPage.prototype.filterPessoas = function (ev) {
        this.getAllPessoas();
    };
    AtendimentoPage.prototype.filterAgenda = function (ev) {
        this.getAllAgendas();
    };
    AtendimentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-atendimento',template:/*ion-inline-start:"C:\Users\jessica\Documents\GitHub\AbrigaData\src\pages\atendimento\atendimento.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title> \n\n        Atendimento\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n   \n\n  <ion-content padding>\n\n    \n\n    <p>Busca pessoa cadastrada:</p>\n\n    <ion-searchbar (ionInput)="filterPessoas($event)" [(ngModel)]="searchText"></ion-searchbar>\n\n  \n\n    <h1>Lista de pessoas cadastradas:</h1>\n\n    <p>Clique para inserir novo membro no grupo familiar</p>\n\n    <ion-list>\n\n      <ion-item-sliding *ngFor="let pessoa of pessoas">\n\n   \n\n        <button ion-item (click)="addAtendimento(pessoa.cd_pessoa)">\n\n          <h1>{{ pessoa.nome }}</h1>\n\n          <h2>{{ pessoa.nome_social }}</h2>\n\n          <h2>{{ pessoa.cpf }}</h2>\n\n          <h2>{{ pessoa.data_nascimento | date:\'dd/MM/yyyy\' }}</h2>\n\n          <h2>{{ pessoa.rg }}</h2>\n\n        </button>\n\n   \n\n      </ion-item-sliding>\n\n    </ion-list>\n\n\n\n    <ion-fab right bottom>\n\n      <button ion-fab color="light" (click)="addAtendimentoaux()"><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab>\n\n    \n\n    <ion-footer>\n\n    <ion-toolbar>\n\n      <p>© 2020 AbrigaData</p>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n  \n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\jessica\Documents\GitHub\AbrigaData\src\pages\atendimento\atendimento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_atendimento_atendimento__["b" /* AtendimentoProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_pessoa_pessoa__["b" /* PessoaProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_agenda_agenda__["b" /* AgendaProvider */]])
    ], AtendimentoPage);
    return AtendimentoPage;
}());

//# sourceMappingURL=atendimento.js.map

/***/ })

});
//# sourceMappingURL=14.js.map