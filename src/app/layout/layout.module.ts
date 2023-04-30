import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IconsProviderModule } from "../icons-provider.module";
import { NZ_I18N, pt_BR } from "ng-zorro-antd/i18n";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: pt_BR }
  ],
  exports: [
    LayoutComponent
  ],
  bootstrap: [LayoutComponent]
})
export class LayoutModule {}
