import { HeaderComponent } from "./layout/header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReviewsComponent } from "./Reviews/Reviews.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { SharedModule } from "./shared/shared.module";
import { LayoutModule } from "./layout/layout.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
