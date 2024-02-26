import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";
import { provideRouter } from "@angular/router";
import { AppComponent } from './app.component';
import { routes } from "./app.routes";
import { BrowserModule } from "@angular/platform-browser";
import { LayoutComponent } from "./layout/layout.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LayoutComponent
  ],
  bootstrap: [AppComponent],
  providers: [provideRouter(routes)]
})
export class AppModule { }
