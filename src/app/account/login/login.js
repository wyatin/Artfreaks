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
var angular2_jwt_1 = require('angular2-jwt');
var core_1 = require('@angular/core');
var accountservice_1 = require('../../services/account/accountservice');
var router_1 = require('@angular/router');
var authmodel_1 = require('../../models/account/authmodel');
var shareduserdetails_1 = require('../../services/account/shareduserdetails');
var loginComponent = (function () {
    function loginComponent(jwtHelper, _parentRouter, authentication, authLoginService) {
        this.jwtHelper = jwtHelper;
        this._parentRouter = _parentRouter;
        this.authentication = authentication;
        this.authLoginService = authLoginService;
        this.model = new authmodel_1.logModel();
        this.token = "";
        this.isloading = false;
        this.submitted = false;
        this.sharedUserDetailsModel = new shareduserdetails_1.SharedUserDetailsModel();
    }
    loginComponent.prototype.ngOnInit = function () {
        var instance = this;
        // check if auth key is present
        if (localStorage.getItem('auth_key')) {
            this.token = this.jwtHelper.decodeToken(localStorage.getItem("auth_key"));
            console.log(this.token);
            if (!this.jwtHelper.isTokenExpired(localStorage.getItem('auth_key'))) {
                instance.getUserFromServer();
                this._parentRouter.navigate(['/']);
                this.isLoggedin = true;
            }
            else {
                if (localStorage.getItem('refresh_key')) {
                    this.refreshLogin();
                }
            }
        }
    };
    loginComponent.prototype.Login = function (creds) {
        var _this = this;
        this.isloading = true;
        console.log(creds);
        var instance = this;
        this.authentication.Login(creds)
            .subscribe(function (Ttoken) {
            localStorage.setItem("auth_key", Ttoken.access_token);
            localStorage.setItem("refresh_key", Ttoken.refresh_token);
            _this.isLoggedin = true;
            _this.isloading = false;
            instance.getUserFromServer();
            _this._parentRouter.navigate(['/']);
        }, function (error) {
            console.log(error);
            _this.isloading = false;
            demo.showNotification('bottom', 'center', error.error_description);
        });
    };
    loginComponent.prototype.refreshLogin = function () {
        var _this = this;
        var instance = this;
        this.authentication.refreshLogin()
            .subscribe(function (Ttoken) {
            localStorage.setItem("auth_key", Ttoken.access_token);
            localStorage.setItem("refresh_key", Ttoken.refresh_token);
            _this.isLoggedin = true;
            instance.getUserFromServer();
            _this._parentRouter.navigate(['/']);
        }, function (Error) {
            demo.showNotification('bottom', 'center', Error.error);
        });
    };
    loginComponent.prototype.getUserFromServer = function () {
        var _this = this;
        this.isloading = true;
        this.authentication.getUserInfo().subscribe(function (data) {
            _this.token = data;
            _this.isloading = false;
            _this.sharedUserDetailsModel.username = data.user[0].fullName;
            _this.sharedUserDetailsModel.isLoggedIn = true;
            _this.authLoginService.broadcastTextChange(_this.sharedUserDetailsModel);
            demo.showNotification('bottom', 'center', "Welcome " + data.user[0].fullName);
        }, function (error) {
            if (localStorage.getItem('refresh_key')) {
                _this.refreshLogin(); // renew auth key and redirect
            }
            _this.isloading = false;
        });
    };
    loginComponent.prototype.Logout = function () {
        var _this = this;
        this.authentication.logout().subscribe(function (data) {
            localStorage.removeItem("auth_key");
            localStorage.removeItem("refresh_key");
            _this._parentRouter.navigate(['/']);
            _this.isLoggedin = false;
            demo.showNotification('bottom', 'center', "User Logged out Added Successfully");
        }, function (error) {
        });
    };
    loginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: '/app/account/login/login.html',
            animations: [
                core_1.trigger('cardauth', [
                    core_1.state('*', core_1.style({
                        '-ms-transform': 'translate3D(0px, 0px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                        '-moz-transform': 'translate3D(0px, 0px, 0px)',
                        '-o-transform': 'translate3D(0px, 0px, 0px)',
                        transform: 'translate3D(0px, 0px, 0px)',
                        opacity: 1
                    })),
                    core_1.transition('void => *', [
                        core_1.style({
                            opacity: 0,
                            '-ms-transform': 'translate3D(0px, 150px, 0px)',
                            '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                            '-moz-transform': 'translate3D(0px, 150px, 0px)',
                            '-o-transform': 'translate3D(0px, 150px, 0px)',
                            transform: 'translate3D(0px, 150px, 0px)',
                        }),
                        core_1.animate('0.3s 0s ease-out')
                    ])
                ]),
            ]
        }), 
        __metadata('design:paramtypes', [angular2_jwt_1.JwtHelper, router_1.Router, accountservice_1.authservice, shareduserdetails_1.AuthLoginService])
    ], loginComponent);
    return loginComponent;
}());
exports.loginComponent = loginComponent;
//# sourceMappingURL=login.js.map