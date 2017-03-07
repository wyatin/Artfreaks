import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SharedModule} from './shared/sharedmodule'
import {MODULE_ROUTES} from './shared/routes/routes';
import { HttpModule} from '@angular/http';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from './app.component';
import {AccountModule} from './account/accountmodule';
import { RouterModule, CanActivate  }   from '@angular/router';
import { MaterializeDirective } from "angular2-materialize";
import { JwtHelper } from 'angular2-jwt';
import {ServiceModule} from './services/servicemodule';
import {loader} from './shared/loader/loader';
import { ModuleWithProviders } from '@angular/core';
import {upload} from'./upload/upload';
import {tag} from'./tag/tag';
import {aboutus} from'./aboutus/aboutus';
import {article} from'./article/article';
import {findyourart} from'./findyourart/findyourart';
import {contactartist} from'./contactartist/contactartist';
import {artistpage} from'./artistpage/artistpage';
import {paintings} from'./paintings/paintings';
import {paintingbox} from'./paintingbox/paintingbox';
import {photography} from'./photography/photography';
import {drawings} from'./drawings/drawings';
import {sclupture} from'./sclupture/sclupture';
import {digital} from'./digital/digital';
import {artistname} from'./artistname/artistname';
import {artistnamebox} from'./artistnamebox/artistnamebox';
import {artistlocation} from'./artistlocation/artistlocation';
import {artdeal} from'./artdeal/artdeal';
export const routing: ModuleWithProviders = RouterModule.forRoot(MODULE_ROUTES);
@NgModule({
  imports:      [ BrowserModule,
                  HttpModule, 
                  FormsModule,
                  AccountModule,
                  SharedModule,
                  ServiceModule,
                  routing,
                  
                   ],
  declarations: [ AppComponent,MaterializeDirective,upload,tag,aboutus,article,findyourart,contactartist,artistpage,paintings,paintingbox,photography,drawings,sclupture,digital,artistname,artistnamebox,artistlocation,artdeal ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
