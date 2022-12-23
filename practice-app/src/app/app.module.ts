// modules.ts files bundles the different pieces of an app into packages.
// a module is a bundle of functionalities of an app and features for the AppComponent.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { WarningalertComponent } from './warningalert/warningalert.component';

//this is the NgModule decorator. Decorators are a design pattern that is used to separate modification or decoration of a class without modifying the original source code.
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningalertComponent,
    SuccessalertComponent,
  ],

  imports: [BrowserModule, AppRoutingModule],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
