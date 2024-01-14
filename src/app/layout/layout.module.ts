import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { IconsProviderModule } from "../icons-provider.module";
import { NZ_I18N, pt_BR } from "ng-zorro-antd/i18n";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { UiToolkitComponent } from "./ui-toolkit/ui-toolkit.component";
import { RouterOutlet } from "@angular/router";
import { UserDescriptionComponent } from "./sidebar/user-description/user-description.component";
import { NzNoAnimationModule } from "ng-zorro-antd/core/no-animation";

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    ContentComponent,
    UiToolkitComponent,
    UserDescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    NzNoAnimationModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    RouterOutlet
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
