import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LayoutModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [provideRouter(routes)]
})
export class AppModule { }
