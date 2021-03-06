import { HomeModule } from './Modules/Home/Home.module';
import { AuthModule } from './Modules/Auth/Auth.module';
import { HeaderComponent } from './layout/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './Modules/shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { from } from 'rxjs';
import { ErrorInterceptorProvider } from './Interceptors/ErrorInterceptor.interceptor';
import { AuthGuard } from './Modules/Shared/Guards/auth.guard';


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      SharedModule,
      LayoutModule,
      AuthModule,
      BsDropdownModule.forRoot(),
      HomeModule
   ],
   providers: [
      ErrorInterceptorProvider,
      AuthGuard],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
