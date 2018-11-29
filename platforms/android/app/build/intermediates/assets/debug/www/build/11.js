webpackJsonp([11],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroAtendimentoPageModule", function() { return CadastroAtendimentoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_atendimento__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastroAtendimentoPageModule = /** @class */ (function () {
    function CadastroAtendimentoPageModule() {
    }
    CadastroAtendimentoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro_atendimento__["a" /* CadastroAtendimentoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro_atendimento__["a" /* CadastroAtendimentoPage */]),
            ],
        })
    ], CadastroAtendimentoPageModule);
    return CadastroAtendimentoPageModule;
}());

//# sourceMappingURL=cadastro-atendimento.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroAtendimentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_atendimento_atendimento__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CadastroAtendimentoPage = /** @class */ (function () {
    function CadastroAtendimentoPage(navCtrl, navParams, toast, atendimentoProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.atendimentoProvider = atendimentoProvider;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__providers_atendimento_atendimento__["a" /* Atendimento */]();
        if (this.navParams.data.cd_atendimento) {
            this.atendimentoProvider.get(this.navParams.data.atendimento)
                .then(function (result) {
                _this.model = result;
            });
        }
    }
    CadastroAtendimentoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroAtendimentoPage');
    };
    CadastroAtendimentoPage.prototype.save = function () {
        var _this = this;
        this.saveAtendimento()
            .then(function () {
            _this.toast.create({ message: 'Cadastro salvo.', duration: 3000, position: 'botton' }).present();
            _this.navCtrl.pop();
        })
            .catch(function () {
            _this.toast.create({ message: 'Erro ao salvar o cadastro.', duration: 3000, position: 'botton' }).present();
        });
    };
    CadastroAtendimentoPage.prototype.saveAtendimento = function () {
        /*if (this.model.nome) {
          return this.pessoaProvider.update(this.model);
        } else {*/
        return this.atendimentoProvider.insert(this.model);
        //}
    };
    CadastroAtendimentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-atendimento',template:/*ion-inline-start:"C:\Users\jessica\Documents\GitHub\AbrigaData\src\pages\cadastro-atendimento\cadastro-atendimento.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Cadastro de atendimento \n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<ion-list>\n\n  \n\n  <h2>Dados do atendimento</h2>\n\n  <ion-item>\n\n    <ion-label stacked>Data de realização</ion-label>\n\n    <ion-datetime displayFormat="DD/MM/YYYY" name="data_realizacao" min="2018" \n\n    [(ngModel)]="model.data_realizacao"></ion-datetime>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>hora inicial</ion-label>\n\n    <ion-datetime displayFormat="HH:MM" name="data_realizacao"  \n\n    [(ngModel)]="model.hora_inicial"></ion-datetime>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>hora final</ion-label>\n\n    <ion-datetime displayFormat="HH:MM" name="data_final"  \n\n    [(ngModel)]="model.hora_final"></ion-datetime>\n\n  </ion-item>\n\n\n\n  <h2>Localização do indivíduo</h2>\n\n  <ion-item>\n\n    <ion-label stacked>Tempo em situação de rua</ion-label>\n\n    <ion-input type="number" name="tempo_atendimento" [(ngModel)]="model.cpf"></ion-input>\n\n  </ion-item>\n\n   \n\n  <ion-item>\n\n    <ion-label stacked>Local em que costuma pernoitar</ion-label>\n\n    <ion-input type="text" name="tipo_local_pernoite" \n\n    [(ngModel)]="model.tipo_local_pernoite"></ion-input>\n\n  </ion-item>\n\n  \n\n  <h2>Trabalho</h2>\n\n  <ion-item>\n\n    <ion-label stacked>Já trabalhou com carteira assinada?</ion-label>\n\n    <ion-ion-checkbox name="idc_trabalho_carteira" \n\n    [(ngModel)]="model.idc_trabalho_carteira"></ion-checkbox>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Há quanto tempo?</ion-label>\n\n    <ion-input type="number" name="tempo_trabalho_carteira_qtd" \n\n    [(ngModel)]="model.tempo_trabalho_carteira_qtd"></ion-tempo_atendimento>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Já trabalhou com carteira assinada?</ion-label>\n\n    <ion-ion-checkbox name="idc_trabalho_carteira" \n\n    [(ngModel)]="model.idc_trabalho_carteira"></ion-checkbox>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Desenvolve alguma atividade atualmente?</ion-label>\n\n    <ion-ion-checkbox name="idc_trabalha_atualmente" \n\n    [(ngModel)]="model.idc_trabalha_atualmente"></ion-checkbox>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Qual?</ion-label>\n\n    <ion-input type="text" name="desc_trabalho" \n\n    [(ngModel)]="model.desc_trabalho"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Recebe algum tipo de remuneração?</ion-label>\n\n    <ion-input type="text" name="renda_atual" \n\n    [(ngModel)]="model.renda_atual"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Como costuma gastar sua renda?</ion-label>\n\n    <ion-input type="text" name="gasto_renda" \n\n    [(ngModel)]="model.gasto_renda"></ion-input>\n\n  </ion-item>\n\n\n\n  <h2>Naturalidade do indivíduo</h2>\n\n  <ion-item>\n\n    <ion-label stacked>Naturalidade</ion-label>\n\n    <ion-input type="text" name="municipio_origem" [(ngModel)]="model.municipio_origem"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Há quanto tempo reside em BH?</ion-label>\n\n    <ion-input type="number" name="tempo_resid_atual_qtd" \n\n    [(ngModel)]="model.tempo_resid_atual_qtd"></ion-tempo_atendimento>\n\n  </ion-item>\n\n\n\n\n\n  <h2>Observações</h2>\n\n  <ion-item>\n\n      <ion-input type="text" name="des_observacao" [(ngModel)]="model.des_observacao"></ion-input>\n\n  </ion-item>\n\n \n\n  </ion-list>\n\n \n\n  <button ion-button block (click)="save()">Salvar</button>\n\n \n\n\n\n  <ion-footer>\n\n  <ion-toolbar>\n\n    <p>© 2020 AbrigaData</p>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jessica\Documents\GitHub\AbrigaData\src\pages\cadastro-atendimento\cadastro-atendimento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_atendimento_atendimento__["b" /* AtendimentoProvider */]])
    ], CadastroAtendimentoPage);
    return CadastroAtendimentoPage;
}());

//# sourceMappingURL=cadastro-atendimento.js.map

/***/ })

});
//# sourceMappingURL=11.js.map