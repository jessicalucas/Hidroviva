webpackJsonp([17],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AtendenteProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Atendente; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AtendenteProvider = /** @class */ (function () {
    function AtendenteProvider(dbProvider) {
        this.dbProvider = dbProvider;
    }
    AtendenteProvider.prototype.insert = function (atendente) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'insert into Atendente (nome, login, senha) values (?, ?, ?)';
            var data = [atendente.nome, atendente.login, atendente.senha];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    AtendenteProvider.prototype.update = function (atendente) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'update Atendente set nome = ?, login = ?, senha = ? where cd_atendente = ?';
            var data = [atendente.nome, atendente.login, atendente.senha, atendente.cd_atendente];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    AtendenteProvider.prototype.remove = function (cd_atendente) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'delete from Atendente where cd_atendente = ?';
            var data = [cd_atendente];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    AtendenteProvider.prototype.getAtendente = function (cd_atendente) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'select * from Atendente where cd_atendente = ?';
            var data = [cd_atendente];
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var item = data.rows.item(0);
                    var atendente = new Atendente();
                    atendente.cd_atendente = item.cd_atendente;
                    atendente.nome = item.nome;
                    atendente.login = item.login;
                    atendente.senha = item.senha;
                    return atendente;
                }
                return null;
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    AtendenteProvider.prototype.getLogin = function (login) {
        if (login === void 0) { login = null; }
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'SELECT * FROM Atendente where login = ? limit 1';
            var data = [login];
            return db.executeSql(sql, data)
                .then(function (data) {
                var atendentes;
                return atendentes;
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    AtendenteProvider.prototype.getAll = function () {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'SELECT * FROM Atendente';
            return db.executeSql(sql, null)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var atendentes = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var atendente = data.rows.item(i);
                        atendentes.push(atendente);
                    }
                    return atendentes;
                }
                else {
                    return [];
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    AtendenteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */]])
    ], AtendenteProvider);
    return AtendenteProvider;
}());

var Atendente = /** @class */ (function () {
    function Atendente() {
    }
    return Atendente;
}());

//# sourceMappingURL=atendente.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agenda/agenda.module": [
		284,
		16
	],
	"../pages/atendente/atendente.module": [
		285,
		15
	],
	"../pages/atendimento/atendimento.module": [
		286,
		14
	],
	"../pages/cadastro-agenda/cadastro-agenda.module": [
		287,
		13
	],
	"../pages/cadastro-atendente/cadastro-atendente.module": [
		288,
		12
	],
	"../pages/cadastro-atendimento/cadastro-atendimento.module": [
		289,
		11
	],
	"../pages/cadastro-grupo-familiar/cadastro-grupo-familiar.module": [
		290,
		10
	],
	"../pages/cadastro-pessoa/cadastro-pessoa.module": [
		291,
		9
	],
	"../pages/cadastro/cadastro.module": [
		292,
		8
	],
	"../pages/configuracao/configuracao.module": [
		293,
		7
	],
	"../pages/digital/digital.module": [
		294,
		6
	],
	"../pages/esqueci-senha/esqueci-senha.module": [
		295,
		5
	],
	"../pages/grupo-familiar/grupo-familiar.module": [
		296,
		4
	],
	"../pages/mapa/mapa.module": [
		297,
		3
	],
	"../pages/menu/menu.module": [
		298,
		2
	],
	"../pages/pessoa/pessoa.module": [
		299,
		1
	],
	"../pages/reporta-erro/reporta-erro.module": [
		300,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, toast, atendenteProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.atendenteProvider = atendenteProvider;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__providers_atendente_atendente__["a" /* Atendente */]();
    }
    HomePage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.Menu = function () {
        this.navCtrl.push('MenuPage');
    };
    HomePage.prototype.getAdmin = function () {
        var _this = this;
        this.atendenteProvider.getAtendente(1)
            .then(function (result) {
            _this.model = result;
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\jessica\Documents\GitHub\AbrigaData\src\pages\home\home.html"*/'<ion-header>\n\n  \n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n  <ion-img center [width]="350" [height]="350" src="assets/imgs/logo_abrigadata.png"></ion-img>\n\n  \n\n  <ion-item>\n\n    <ion-label stacked>Login</ion-label>\n\n    <ion-input type="text" name="login" [(ngModel)]="model.login"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Senha</ion-label>\n\n    <ion-input type="text" name="senha" [(ngModel)]="model.senha"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button full (click)="Menu()">Entrar</button>\n\n\n\n  \n\n  <ion-footer>\n\n  <ion-toolbar>\n\n    <p>© 2020 AbrigaData</p>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jessica\Documents\GitHub\AbrigaData\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_atendente_atendente__["b" /* AtendenteProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PessoaProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pessoa; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PessoaProvider = /** @class */ (function () {
    function PessoaProvider(dbProvider) {
        this.dbProvider = dbProvider;
    }
    PessoaProvider.prototype.insert = function (pessoa) {
        var sql;
        var data;
        return this.dbProvider.getDB()
            .then(function (db) {
            db.executeSql('select max(id) max from Pessoa')
                .then(function (saida) {
                if (saida.rows.item(0).max == null) {
                    sql = 'insert into Pessoa (cd_pessoa,nome, nome_social, cpf, data_nascimento, rg) values (?, ?, ?, ?, ?, ?)';
                    data = [1, pessoa.nome, pessoa.nome_social, pessoa.cpf, pessoa.data_nascimento, pessoa.rg];
                }
                else {
                    sql = 'insert into Pessoa (cd_pessoa,nome, nome_social, cpf, data_nascimento, rg) values (?, ?, ?, ?, ?, ?)';
                    data = [saida.rows.item(0).max + 1, pessoa.nome, pessoa.nome_social, pessoa.cpf, pessoa.data_nascimento, pessoa.rg];
                }
            });
            return db.executeSql(sql, data)
                .then(function (a) { return console.log("Dados de pessoa inseridos"); })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    PessoaProvider.prototype.update = function (pessoa) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'update Pessoa set nome = ? nome_social = ? cpf = ? data_nascimento = ?  rg = ? where cd_pessoa = ?';
            var data = [pessoa.nome, pessoa.nome_social, pessoa.cpf, pessoa.data_nascimento, pessoa.rg, pessoa.cd_pessoa];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    PessoaProvider.prototype.remove = function (cd_pessoa) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'delete from Pessoa where cd_pessoa = ?';
            var data = [cd_pessoa];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    PessoaProvider.prototype.get = function (cd_pessoa) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'select * from Pessoa where cd_pessoa = ?';
            var data = [cd_pessoa];
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var item = data.rows.item(0);
                    var pessoa = new Pessoa();
                    pessoa.cd_pessoa = item.cd_pessoa;
                    pessoa.nome = item.nome;
                    pessoa.nome_social = item.nome_social;
                    pessoa.cpf = item.cpf;
                    pessoa.data_nascimento = item.data_nascimento;
                    pessoa.rg = item.rg;
                    return pessoa;
                }
                return null;
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    PessoaProvider.prototype.getAll = function (nome) {
        if (nome === void 0) { nome = null; }
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'SELECT * FROM Pessoa where nome like ?';
            var data = ['%' + nome + '%'];
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var pessoas = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var pessoa = data.rows.item(i);
                        pessoas.push(pessoa);
                    }
                    return pessoas;
                }
                else {
                    return [];
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    PessoaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */]])
    ], PessoaProvider);
    return PessoaProvider;
}());

var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    return Pessoa;
}());

//# sourceMappingURL=pessoa.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AgendaProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Agenda; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgendaProvider = /** @class */ (function () {
    function AgendaProvider(dbProvider) {
        this.dbProvider = dbProvider;
    }
    AgendaProvider.prototype.insert = function (agenda) {
        var sql;
        var data;
        return this.dbProvider.getDB()
            .then(function (db) {
            db.executeSql('select max(id) max from Agenda')
                .then(function (saida) {
                if (saida.rows.item(0).max == null) {
                    sql = 'insert into Agenda (cd_agenda,dat_abertura, dat_fechamento, cd_atendente) values (?, ?, ?, ?)';
                    data = [1, agenda.dat_abertura, agenda.dat_fechamento, agenda.cd_atendente];
                }
                else {
                    sql = 'insert into Agenda (cd_agenda,dat_abertura, dat_fechamento, cd_atendente) values (?, ?, ?, ?)';
                    data = [saida.rows.item(0).max + 1, agenda.dat_abertura, agenda.dat_fechamento, agenda.cd_atendente];
                }
            });
            return db.executeSql(sql, data)
                .then(function (a) { return console.log("Dados da agenda inseridos"); })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    AgendaProvider.prototype.update = function (agenda) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'update Agenda set dat_abertura = ? dat_fechamento = ? cd_atendente = ? where cd_agenda = ?';
            var data = [agenda.dat_abertura, agenda.dat_fechamento, agenda.cd_atendente];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    AgendaProvider.prototype.remove = function (cd_agenda) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'delete from Agenda where cd_agenda = ?';
            var data = [cd_agenda];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    AgendaProvider.prototype.get = function (cd_agenda) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'select * from Agenda where cd_agenda = ?';
            var data = [cd_agenda];
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var item = data.rows.item(0);
                    var agenda = new Agenda();
                    agenda.cd_agenda = item.cd_agenda;
                    agenda.dat_abertura = item.dat_abertura;
                    agenda.dat_fechamento = item.dat_fechamento;
                    agenda.cd_atendente = item.cd_atendente;
                    return agenda;
                }
                return null;
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    AgendaProvider.prototype.getAll = function (dat_abertura) {
        if (dat_abertura === void 0) { dat_abertura = null; }
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'SELECT * FROM Agenda where dat_abertura like ?';
            var data = ['%' + dat_abertura + '%'];
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var agendas = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var agenda = data.rows.item(i);
                        agenda.push(agenda);
                    }
                    return agendas;
                }
                else {
                    return [];
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    AgendaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */]])
    ], AgendaProvider);
    return AgendaProvider;
}());

var Agenda = /** @class */ (function () {
    function Agenda() {
    }
    return Agenda;
}());

//# sourceMappingURL=agenda.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AtendimentoProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Atendimento; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AtendimentoProvider = /** @class */ (function () {
    function AtendimentoProvider(dbProvider) {
        this.dbProvider = dbProvider;
    }
    AtendimentoProvider.prototype.insert = function (atendimento) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = "insert into Atendimento values (cd_atendimento, cd_localizacao, " +
                "cd_pessoa, cd_atendente, cd_agenda, Data_Realizacao" +
                "Hora_Inicial, Hora_Final, tempo_rua_qtd, tempo_rua_tipo," +
                "tipo_local_pernoite, idc_trabalho_carteira," +
                "tempo_trabalho_carteira_qtd, tempo_trabalho_carteira_tipo, " +
                "idc_trabalha_atualmente, desc_trabalho," +
                "renda_atual, gasto_renda, municipio_origem, " +
                "tempo_resid_atual_qtd, tempo_resid_atual_tipo)" +
                "values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            var data = [atendimento.cd_atendimento, atendimento.cd_localizacao,
                atendimento.cd_pessoa, atendimento.cd_atendente, atendimento.cd_agenda, atendimento.data_realizacao,
                atendimento.hora_inicial, atendimento.hora_final, atendimento.tempo_rua_qtd, atendimento.tempo_rua_tipo,
                atendimento.tipo_local_pernoite, atendimento.idc_trabalho_carteira,
                atendimento.tempo_trabalho_carteira_qtd, atendimento.tempo_trabalho_carteira_tipo,
                atendimento.idc_trabalha_atualmente, atendimento.desc_trabalho,
                atendimento.renda_atual, atendimento.gasto_renda, atendimento.municipio_origem,
                atendimento.tempo_resid_atual_qtd, atendimento.tempo_resid_atual_tipo];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    AtendimentoProvider.prototype.update = function (atendimento) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = "update Atendimento set cd_atendimento = ?, cd_localizacao = ?, " +
                "cd_pessoa = ?, cd_atendente = ?, cd_agenda = ?, Data_Realizacao = ?" +
                "Hora_Inicial = ?, Hora_Final = ?, tempo_rua_qtd = ?, tempo_rua_tipo = ?," +
                "tipo_local_pernoite = ?, idc_trabalho_carteira = ?," +
                "tempo_trabalho_carteira_qtd = ?, tempo_trabalho_carteira_tipo = ?, " +
                "idc_trabalha_atualmente = ?, desc_trabalho = ?," +
                "renda_atual = ?, gasto_renda = ?, municipio_origem = ?, " +
                "tempo_resid_atual_qtd = ?, tempo_resid_atual_tipo = ?" +
                "where cd_atendimento = ?";
            var data = [atendimento.cd_localizacao,
                atendimento.cd_pessoa, atendimento.cd_atendente, atendimento.cd_agenda, atendimento.data_realizacao,
                atendimento.hora_inicial, atendimento.hora_final, atendimento.tempo_rua_qtd, atendimento.tempo_rua_tipo,
                atendimento.tipo_local_pernoite, atendimento.idc_trabalho_carteira,
                atendimento.tempo_trabalho_carteira_qtd, atendimento.tempo_trabalho_carteira_tipo,
                atendimento.idc_trabalha_atualmente, atendimento.desc_trabalho,
                atendimento.renda_atual, atendimento.gasto_renda, atendimento.municipio_origem,
                atendimento.tempo_resid_atual_qtd, atendimento.tempo_resid_atual_tipo, atendimento.cd_atendimento];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    AtendimentoProvider.prototype.remove = function (cd_atendimento) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'delete from Atendimento where cd_atendimento = ?';
            var data = [cd_atendimento];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    AtendimentoProvider.prototype.get = function (cd_atendimento) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'select * from Atendimento where cd_atendimento = ?';
            var data = [cd_atendimento];
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var item = data.rows.item(0);
                    var atendimento = new Atendimento();
                    atendimento.cd_atendimento = item.cd_atendimento;
                    atendimento.cd_localizacao = item.cd_localizacao;
                    atendimento.cd_pessoa = item.cd_pessoa;
                    atendimento.cd_atendente = item.cd_atendente;
                    atendimento.cd_agenda = item.cd_agenda;
                    atendimento.data_realizacao = item.Data_Realizacao;
                    atendimento.hora_inicial = item.Hora_Inicial;
                    atendimento.hora_final = item.Hora_Final;
                    atendimento.tempo_rua_qtd = item.tempo_rua_qtd;
                    atendimento.tempo_rua_tipo = item.tempo_rua_tipo;
                    atendimento.tipo_local_pernoite = item.tipo_local_pernoite;
                    atendimento.idc_trabalho_carteira = item.idc_trabalho_carteira;
                    atendimento.tempo_trabalho_carteira_qtd = item.tempo_trabalho_carteira_qtd;
                    atendimento.tempo_trabalho_carteira_tipo = item.tempo_trabalho_carteira_tipo;
                    atendimento.idc_trabalha_atualmente = item.idc_trabalha_atualmente;
                    atendimento.desc_trabalho = item.desc_trabalho;
                    atendimento.renda_atual = item.renda_atual;
                    atendimento.gasto_renda = item.gasto_renda;
                    atendimento.municipio_origem = item.municipio_origem;
                    atendimento.tempo_resid_atual_qtd = item.tempo_resid_atual_qtd;
                    atendimento.tempo_resid_atual_tipo = item.tempo_resid_atual_tipo;
                    return atendimento;
                }
                return null;
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    AtendimentoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */]])
    ], AtendimentoProvider);
    return AtendimentoProvider;
}());

var Atendimento = /** @class */ (function () {
    function Atendimento() {
    }
    return Atendimento;
}());

//# sourceMappingURL=atendimento.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GrupoFamiliarProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrupoFamiliar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GrupoFamiliarProvider = /** @class */ (function () {
    function GrupoFamiliarProvider(dbProvider) {
        this.dbProvider = dbProvider;
    }
    GrupoFamiliarProvider.prototype.insert = function (grupo) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'insert into GrupoFamiliar (cd_pessoa, grau_parentesco, nome, cpf) values (?, ?, ?, ?)';
            var data = [grupo.cd_pessoa, grupo.grau_parentesco, grupo.nome, grupo.cpf];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    GrupoFamiliarProvider.prototype.update = function (grupo) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'update GrupoFamiliar set cd_pessoa = ? grau_parentesco = ? nome = ? cpf = ? where cd_grupo = ?';
            var data = [grupo.cd_pessoa, grupo.grau_parentesco, grupo.nome, grupo.cpf, grupo.cd_grupo];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    GrupoFamiliarProvider.prototype.remove = function (cd_grupo) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'delete from GrupoFamiliar where cd_grupo = ?';
            var data = [cd_grupo];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    GrupoFamiliarProvider.prototype.get = function (cd_grupo) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'select * from GrupoFamiliar where cd_grupo = ?';
            var data = [cd_grupo];
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var item = data.rows.item(0);
                    var grupo = new GrupoFamiliar();
                    grupo.cd_grupo = item.cd_grupo;
                    grupo.cd_pessoa = item.cd_pessoa;
                    grupo.nome = item.nome;
                    grupo.grau_parentesco = item.grau_parentesco;
                    grupo.cpf = item.cpf;
                    return grupo;
                }
                return null;
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    GrupoFamiliarProvider.prototype.getAll = function (cd_pessoa) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'SELECT * FROM GrupoFamiliar where cd_pessoa = ?';
            var data = [cd_pessoa];
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var grupo = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var integrante = data.rows.item(i);
                        grupo.push(integrante);
                    }
                    return grupo;
                }
                else {
                    return [];
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    GrupoFamiliarProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */]])
    ], GrupoFamiliarProvider);
    return GrupoFamiliarProvider;
}());

var GrupoFamiliar = /** @class */ (function () {
    function GrupoFamiliar() {
    }
    return GrupoFamiliar;
}());

//# sourceMappingURL=grupo-familiar.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LocalizacaoProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Localizacao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalizacaoProvider = /** @class */ (function () {
    function LocalizacaoProvider(dbProvider) {
        this.dbProvider = dbProvider;
    }
    LocalizacaoProvider.prototype.insert = function (localizacao) {
        var sql;
        var data;
        return this.dbProvider.getDB()
            .then(function (db) {
            db.executeSql('select max(id) max from Localizacao')
                .then(function (saida) {
                if (saida.rows.item(0).max == null) {
                    sql = 'insert into Localizacao (cd_localizacao,nome, logradouro, numero, complemento, bairro, cep, municipio, estado, mapa) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
                    data = [1, localizacao.nome, localizacao.logradouro, localizacao.numero, localizacao.complemento,
                        localizacao.bairro, localizacao.cep, localizacao.municipio, localizacao.estado, localizacao.mapa];
                }
                else {
                    sql = 'insert into Localizacao (cd_localizacao,nome, logradouro, numero, complemento, bairro, cep, municipio, estado, mapa) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
                    data = [localizacao.cd_localizacao + 1, localizacao.nome, localizacao.logradouro, localizacao.numero, localizacao.complemento,
                        localizacao.bairro, localizacao.cep, localizacao.municipio, localizacao.estado, localizacao.mapa];
                }
            });
            return db.executeSql(sql, data)
                .then(function (a) { return console.log("Dados de localização inseridos"); })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    LocalizacaoProvider.prototype.update = function (localizacao) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'update Localizacao set nome = ?, logradouro = ?, numero = ?, complemento = ?,  bairro = ?, cep = ?, municipio = ?, estado = ?, mapa = ? where cd_localizacao = ?';
            var data = [localizacao.nome, localizacao.logradouro, localizacao.numero, localizacao.complemento,
                localizacao.bairro, localizacao.cep, localizacao.municipio, localizacao.estado, localizacao.mapa];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    LocalizacaoProvider.prototype.remove = function (cd_localizacao) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'delete from Localizacao where cd_localizacao = ?';
            var data = [cd_localizacao];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    LocalizacaoProvider.prototype.get = function (cd_localizacao) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'select * from Localizacao where cd_localizacao = ?';
            var data = [cd_localizacao];
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var item = data.rows.item(0);
                    var localizacao = new Localizacao();
                    localizacao.cd_localizacao = item.cd_localizacao;
                    localizacao.nome = item.nome;
                    localizacao.logradouro = item.logradouro;
                    localizacao.numero = item.numero;
                    localizacao.complemento = item.complemento;
                    localizacao.bairro = item.bairro;
                    localizacao.cep = item.cep;
                    localizacao.municipio = item.municipio;
                    localizacao.estado = item.estado;
                    localizacao.mapa = item.mapa;
                    return localizacao;
                }
                return null;
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    LocalizacaoProvider.prototype.getAll = function (nome) {
        if (nome === void 0) { nome = null; }
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'SELECT * FROM Localizacao where nome like ?';
            var data = ['%' + nome + '%'];
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var localizacoes = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var localizacao = data.rows.item(i);
                        localizacoes.push(localizacao);
                    }
                    return localizacoes;
                }
                else {
                    return [];
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    LocalizacaoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */]])
    ], LocalizacaoProvider);
    return LocalizacaoProvider;
}());

var Localizacao = /** @class */ (function () {
    function Localizacao() {
    }
    Localizacao.prototype.setLocalizacao = function (nome, logradouro, numero, complemento, bairro, cep, cidade, estado) {
        this.nome = nome;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cep = cep;
        this.municipio = cidade;
        this.estado = estado;
        this.mapa = this.getMapa();
    };
    Localizacao.prototype.getEndereco = function () {
        return this.logradouro + ', ' + this.numero + ' - ' + this.bairro + ', ' + this.municipio + ' - ' + this.estado;
    };
    Localizacao.prototype.getMapa = function () {
        return 'https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=400x400&markers=color:green|' + this.getEndereco() + '&key=AIzaSyBniJb1ZDMAI4Z3ICv9mpgZBsGEqH3_J4A';
    };
    return Localizacao;
}());

//# sourceMappingURL=localizacao.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_sqlite__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_database_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_abrigadata_abrigadata__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_pessoa_pessoa__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_grupo_familiar_grupo_familiar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_atendente_atendente__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_agenda_agenda__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_atendimento_atendimento__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_localizacao_localizacao__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/agenda/agenda.module#AgendaPageModule', name: 'AgendaPage', segment: 'agenda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/atendente/atendente.module#AtendentePageModule', name: 'AtendentePage', segment: 'atendente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/atendimento/atendimento.module#AtendimentoPageModule', name: 'AtendimentoPage', segment: 'atendimento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-agenda/cadastro-agenda.module#CadastroAgendaPageModule', name: 'CadastroAgendaPage', segment: 'cadastro-agenda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-atendente/cadastro-atendente.module#CadastroAtendentePageModule', name: 'CadastroAtendentePage', segment: 'cadastro-atendente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-atendimento/cadastro-atendimento.module#CadastroAtendimentoPageModule', name: 'CadastroAtendimentoPage', segment: 'cadastro-atendimento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-grupo-familiar/cadastro-grupo-familiar.module#CadastroGrupoFamiliarPageModule', name: 'CadastroGrupoFamiliarPage', segment: 'cadastro-grupo-familiar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-pessoa/cadastro-pessoa.module#CadastroPessoaPageModule', name: 'CadastroPessoaPage', segment: 'cadastro-pessoa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configuracao/configuracao.module#ConfiguracaoPageModule', name: 'ConfiguracaoPage', segment: 'configuracao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/digital/digital.module#DigitalPageModule', name: 'DigitalPage', segment: 'digital', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/esqueci-senha/esqueci-senha.module#EsqueciSenhaPageModule', name: 'EsqueciSenhaPage', segment: 'esqueci-senha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/grupo-familiar/grupo-familiar.module#GrupoFamiliarPageModule', name: 'GrupoFamiliarPage', segment: 'grupo-familiar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mapa/mapa.module#MapaPageModule', name: 'MapaPage', segment: 'mapa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pessoa/pessoa.module#PessoaPageModule', name: 'PessoaPage', segment: 'pessoa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reporta-erro/reporta-erro.module#ReportaErroPageModule', name: 'ReportaErroPage', segment: 'reporta-erro', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_9__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_abrigadata_abrigadata__["a" /* AbrigadataProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_pessoa_pessoa__["b" /* PessoaProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_grupo_familiar_grupo_familiar__["b" /* GrupoFamiliarProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_atendente_atendente__["b" /* AtendenteProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_agenda_agenda__["b" /* AgendaProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_atendimento_atendimento__["b" /* AtendimentoProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_localizacao_localizacao__["b" /* LocalizacaoProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(sqlite) {
        this.sqlite = sqlite;
    }
    DatabaseProvider.prototype.getDB = function () {
        return this.sqlite.create({
            name: 'abrigadata.db',
            location: 'default'
        });
    };
    DatabaseProvider.prototype.createDatabase = function () {
        var _this = this;
        return this.getDB()
            .then(function (db) {
            // Criando as tabelas
            _this.createTables(db);
            // Inserindo dados padrão
            _this.insertDefaultItems(db);
        })
            .catch(function (e) { return console.log(e); });
    };
    DatabaseProvider.prototype.createTables = function (db) {
        // Criando as tabelas
        db.sqlBatch([
            ["create table IF NOT EXISTS Localizacao " +
                    "(cd_localizacao interger primary key, Nome text, Logradouro text,Numero interger," +
                    "Complemento text,Bairro text,CEP text,Municipio text,Estado text, Mapa text)"],
            ["create table IF NOT EXISTS Pessoa " +
                    "(cd_pessoa interger primary key,cd_localizacao interger,Nome text,Nome_Social text," +
                    "CPF text,Data_Nascimento text,RG text," +
                    "foreign key (cd_localizacao) references Localizacao(cd_localizacao));"],
            ["create table IF NOT EXISTS Atendente " +
                    "(cd_atendente interger primary key,Nome text,Login text,Senha text);"],
            ["create table IF NOT EXISTS Grupo_Familiar " +
                    "(cd_grupo interger primary key,cd_pessoa interger,Grau_Parentesco text,Nome text,CPF text," +
                    "foreign key (cd_pessoa) references Pessoa (cd_pessoa));"],
            ["create table IF NOT EXISTS Atendimento " +
                    "(cd_atendimento interger primary key,cd_localizacao interger,cd_pessoa interger," +
                    "cd_atendente interger, cd_agenda interger, Data_Realizacao text,Hora_Inicial text," +
                    "Hora_Final text," +
                    "tempo_rua_qtd interger," +
                    "tempo_rua_tipo text," +
                    "tipo_local_pernoite text," +
                    "idc_trabalho_carteira text," +
                    "tempo_trabalho_carteira_qtd interger," +
                    "tempo_trabalho_carteira_tipo text," +
                    "idc_trabalha_atualmente text," +
                    "desc_trabalho text," +
                    "renda_atual text," +
                    "gasto_renda text," +
                    "municipio_origem text," +
                    "tempo_resid_atual_qtd interger ," +
                    "tempo_resid_atual_tipo text," +
                    "foreign key (cd_localizacao) references Localizacao (cd_localizacao)," +
                    "foreign key (cd_pessoa) references Pessoa (cd_pessoa)," +
                    "foreign key (cd_atendente) references Atendente(cd_atendente)," +
                    "foreign key (cd_agenda) references Agenda(cd_agenda));"],
            ["create table IF NOT EXISTS Agenda " +
                    "(cd_agenda interger primary key,cd_atendente interger," +
                    "Data_Abertura text,Data_Fechamento text," +
                    "foreign key (cd_atendente) references Atendente(cd_atendente)," +
                    "foreign key (cd_atendimento) references Atendimento (cd_atendimento));"],
        ])
            .then(function () { return console.log('Tabelas criadas'); })
            .catch(function (e) { return console.error('Erro ao criar as tabelas', e); });
    };
    DatabaseProvider.prototype.insertDefaultItems = function (db) {
        db.executeSql('select COUNT(cd_atendente) as qtd from Atendente', [])
            .then(function (data) {
            //Se não existe nenhum registro
            if (data.rows.item(0).qtd == 0) {
                // Criando as tabelas
                db.sqlBatch([
                    ['insert into Atendente values (?,?,?,?)', [1, 'Administrador', 'admin', 'admin']]
                ])
                    .then(function () { return console.log('Dados padrões incluídos'); })
                    .catch(function (e) { return console.error('Erro ao incluir dados padrões', e); });
            }
            else
                console.log("Dados padrões já carregados");
        })
            .catch(function (e) { return console.error('Erro ao validar atendentes', e); });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, dbProvider) {
        var _this = this;
        this.rootPage = null;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            //Criando o banco de dados
            dbProvider.createDatabase()
                .then(function () {
                // fechando a SplashScreen somente quando o banco for criado
                _this.openHomePage(splashScreen);
                console.log('Banco de dados criado com sucesso.');
            })
                .catch(function (e) { return console.error('Erro de banco de dados, reinicie a aplicação', e); });
        });
    }
    MyApp.prototype.openHomePage = function (splashScreen) {
        splashScreen.hide();
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\jessica\Documents\GitHub\AbrigaData\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\jessica\Documents\GitHub\AbrigaData\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbrigadataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AbrigadataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AbrigadataProvider = /** @class */ (function () {
    function AbrigadataProvider(http) {
        this.http = http;
        console.log('Hello AbrigadataProvider Provider');
    }
    AbrigadataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AbrigadataProvider);
    return AbrigadataProvider;
}());

//# sourceMappingURL=abrigadata.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map