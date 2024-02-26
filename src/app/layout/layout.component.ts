import { Component } from '@angular/core';
import { NzLayoutModule, NzSiderComponent } from 'ng-zorro-antd/layout';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RouterOutlet } from "@angular/router";
import { NzIconModule } from "ng-zorro-antd/icon";

@Component({
  standalone: true,
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
  imports: [
    // Angular Modules
    RouterOutlet,
    // Our modules/components
    SidebarComponent,

    // NG Zorro-antd Modules/components
    NzLayoutModule,
    NzSiderComponent,
    NzIconModule
  ]
})
export class LayoutComponent {
  readonly userId: number = 1;

  isCollapsed = true;
}
