import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LayoutModule
  ],
  bootstrap: [AppComponent],
  providers: [provideRouter(routes)]
})
export class AppModule { }
