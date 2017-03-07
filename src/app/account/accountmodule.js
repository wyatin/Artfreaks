"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var registration_1 = require('./registration/registration');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
var sharedmodule_1 = require('../shared/sharedmodule');
var login_1 = require('./login/login');
var angular2_jwt_1 = require('angular2-jwt');
var AccountModule = (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                sharedmodule_1.SharedModule,
                router_1.RouterModule,
                common_1.CommonModule
            ],
            declarations: [registration_1.registration, login_1.loginComponent],
            exports: [registration_1.registration],
            providers: [angular2_jwt_1.JwtHelper]
        }), 
        __metadata('design:paramtypes', [])
    ], AccountModule);
    return AccountModule;
}());
exports.AccountModule = AccountModule;
exports.MODULE_ROUTES = [
    { path: 'registration', pathMatch: 'full', component: registration_1.registration },
    { path: 'login', pathMatch: 'full', component: registration_1.registration },
];
//# sourceMappingURL=accountmodule.js.map