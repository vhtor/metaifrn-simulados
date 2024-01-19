import { Component, Input, OnInit } from "@angular/core";
import { User } from "src/app/model/domain/user.model";
import { UserService } from "src/app/service/user.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.less"],
})
export class SidebarComponent implements OnInit {
  @Input() userId: number = 1;
  @Input() isCollapsed = true;

  private user!: User;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.findById(this.userId).subscribe(user => {
      console.log(user);
      this.user = user;
    });
  }
}
