"use strict";
var registration_1 = require('./registration/registration');
var login_1 = require('./login/login');
exports.AccountRoutes = [
    { path: 'account/registration', pathMatch: 'prefix', component: registration_1.registration },
    { path: 'account/login', pathMatch: 'prefix', component: login_1.loginComponent }
];
//# sourceMappingURL=accountroutes.js.map