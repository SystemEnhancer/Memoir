import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-emailverification",
  templateUrl: "./emailverification.component.html",
  styleUrls: ["./emailverification.component.css"],
})
export class EmailverificationComponent implements OnInit {
  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit() {}

  verify() {
    this.authService
      .SendEmailVerification()
      .then(() => {
        alert("Email verification is sent to your mail");
        this.router.navigate(["/login"]);
      })
      .catch((error) => {
        alert(error);
      });
  }
}
