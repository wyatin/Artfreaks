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
var platform_browser_1 = require('@angular/platform-browser');
var sharedmodule_1 = require('./shared/sharedmodule');
var routes_1 = require('./shared/routes/routes');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var accountmodule_1 = require('./account/accountmodule');
var router_1 = require('@angular/router');
var angular2_materialize_1 = require("angular2-materialize");
var servicemodule_1 = require('./services/servicemodule');
var upload_1 = require('./upload/upload');
var tag_1 = require('./tag/tag');
var aboutus_1 = require('./aboutus/aboutus');
var article_1 = require('./article/article');
var findyourart_1 = require('./findyourart/findyourart');
var contactartist_1 = require('./contactartist/contactartist');
var artistpage_1 = require('./artistpage/artistpage');
var paintings_1 = require('./paintings/paintings');
var paintingbox_1 = require('./paintingbox/paintingbox');
var photography_1 = require('./photography/photography');
var drawings_1 = require('./drawings/drawings');
var sclupture_1 = require('./sclupture/sclupture');
var digital_1 = require('./digital/digital');
var artistname_1 = require('./artistname/artistname');
var artistnamebox_1 = require('./artistnamebox/artistnamebox');
var artistlocation_1 = require('./artistlocation/artistlocation');
var artdeal_1 = require('./artdeal/artdeal');
var forgotpassword_1 = require('./forgotpassword/forgotpassword');
var paintingclick_1 = require('./paintingclick/paintingclick');
var home_1 = require('./home/home');
var carousel_1 = require('./carousel/carousel');
exports.routing = router_1.RouterModule.forRoot(routes_1.MODULE_ROUTES);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                accountmodule_1.AccountModule,
                sharedmodule_1.SharedModule,
                servicemodule_1.ServiceModule,
                exports.routing,
            ],
            declarations: [app_component_1.AppComponent, angular2_materialize_1.MaterializeDirective, upload_1.upload, tag_1.tag, aboutus_1.aboutus, article_1.article, findyourart_1.findyourart, contactartist_1.contactartist, artistpage_1.artistpage, paintings_1.paintings, paintingbox_1.paintingbox, photography_1.photography, drawings_1.drawings, sclupture_1.sclupture, digital_1.digital, artistname_1.artistname, artistnamebox_1.artistnamebox, artistlocation_1.artistlocation, artdeal_1.artdeal, forgotpassword_1.forgotpassword, paintingclick_1.paintingclick, home_1.home, carousel_1.carousel],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map