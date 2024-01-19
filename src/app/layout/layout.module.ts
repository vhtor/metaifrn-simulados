import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterOutlet } from "@angular/router";
import { NzNoAnimationModule } from "ng-zorro-antd/core/no-animation";
import { NZ_I18N, pt_BR } from "ng-zorro-antd/i18n";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { IconsProviderModule } from "../icons-provider.module";
import { ContentComponent } from './content/content.component';
import { LayoutComponent } from "./layout.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserDescriptionComponent } from "./sidebar/user-description/user-description.component";
import { UiToolkitComponent } from "./ui-toolkit/ui-toolkit.component";
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

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
    NzAvatarModule,
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
