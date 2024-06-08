import { Component, Input, OnInit } from "@angular/core";
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { NzSkeletonAvatarShape, NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { User } from "src/app/model/domain/user.model";

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
export class UserDescriptionComponent {

  avatarShape: NzSkeletonAvatarShape = "circle";

  @Input()
  user!: User | null;

  @Input()
  isCollapsed!: boolean | null;
}
