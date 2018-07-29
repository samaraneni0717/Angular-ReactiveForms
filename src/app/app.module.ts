import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { SignupModule } from './signup/signup.module';
import { CustomcontrolsModule } from './customcontrols/customcontrols.module';
import { SharedModule } from './shared/shared-module';

@NgModule({
  declarations: [
    AppComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SignupModule.forRoot(),
    CustomcontrolsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
