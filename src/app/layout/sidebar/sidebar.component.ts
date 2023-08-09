import { Component, Input } from '@angular/core';
import { bootstrapPersonFill } from "@ng-icons/bootstrap-icons";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent {
  public personIcon = bootstrapPersonFill;
  @Input() isCollapsed = false;
}
