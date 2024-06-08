import { Component } from '@angular/core';
import { NzLayoutModule, NzSiderComponent } from 'ng-zorro-antd/layout';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RouterOutlet } from "@angular/router";
import { NzIconModule } from "ng-zorro-antd/icon";
import { BehaviorSubject, of } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
  imports: [
    // Angular Modules
    CommonModule,
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
  public readonly userId = 1;

  public isCollapsed = true;

  constructor() {
  }
}
