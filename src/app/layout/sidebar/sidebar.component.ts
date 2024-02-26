import { Component, Input, OnInit } from "@angular/core";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { IconsProviderModule } from "src/app/icons-provider.module";
import { User } from "src/app/model/domain/user.model";
import { UserService } from "src/app/service/user.service";
import { UserDescriptionComponent } from "./user-description/user-description.component";

@Component({
  standalone: true,
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.less"],
  imports: [
    // Angular Modules
    // Our modules/components
    UserDescriptionComponent,

    // NG Zorro-antd Modules/components
    NoopAnimationsModule,
    IconsProviderModule,
    NzMenuModule,
    NzToolTipModule,
  ]
})
export class SidebarComponent implements OnInit {
  @Input() userId: number = 1;
  @Input() isCollapsed = true;

  public user!: User;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.findById(this.userId).subscribe(user => {
      console.log(user);
      this.user = user;
    });
  }
}
