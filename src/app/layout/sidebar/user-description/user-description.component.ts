import { Component, Input, OnInit } from "@angular/core";
import { User } from "src/app/model/domain/user.model";
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { NzSkeletonModule, NzSkeletonAvatarShape } from "ng-zorro-antd/skeleton";

@Component({
  standalone: true,
  selector: "app-user-description",
  templateUrl: "./user-description.component.html",
  styleUrls: ["./user-description.component.less"],
  imports: [
    // Angular Modules
    // Our modules/components
    // NG Zorro-antd Modules/components
    NzAvatarModule,
    NzSkeletonModule
  ]
})
export class UserDescriptionComponent implements OnInit {

  avatarShape: NzSkeletonAvatarShape = "circle";

  @Input()
  user!: User | null;

  @Input()
  isCollapsed!: boolean | null;

  ngOnInit(): void {
    console.log(this.user);
  }
}
