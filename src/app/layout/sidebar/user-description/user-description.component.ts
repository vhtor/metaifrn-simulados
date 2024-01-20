import { Component, Input, OnInit } from "@angular/core";
import { User } from "src/app/model/domain/user.model";

@Component({
  selector: "app-user-description",
  templateUrl: "./user-description.component.html",
  styleUrls: ["./user-description.component.less"],
})
export class UserDescriptionComponent implements OnInit {

  @Input()
  public user!: User | null;

  @Input()
  public isCollapsed!: boolean | null;

  ngOnInit(): void {
    console.log(this.user);
  }
}
