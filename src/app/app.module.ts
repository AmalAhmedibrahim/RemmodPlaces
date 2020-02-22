import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReviewsComponent } from "./Reviews/Reviews.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  declarations: [AppComponent, ReviewsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, ButtonsModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
