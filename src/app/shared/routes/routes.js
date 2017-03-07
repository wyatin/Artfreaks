"use strict";
var registration_1 = require('../../account/registration/registration');
var accountroutes_1 = require('../../account/accountroutes');
exports.first = [
    { path: '', pathMatch: 'full', component: registration_1.registration }
];
exports.MODULE_ROUTES = [].concat(accountroutes_1.AccountRoutes); //.concat(first)
//# sourceMappingURL=routes.js.map