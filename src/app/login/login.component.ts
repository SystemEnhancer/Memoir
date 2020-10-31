import { Component, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import * as firebase from "firebase/app";
import "firebase/auth";
import { JsonPipe } from "@angular/common";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  usererror: string;
  login: FormGroup;

  constructor(
    public f: FormBuilder,
    public authservice: AuthService,
    public router: Router
  ) {
    this.login = this.f.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required]],
    });
  }

  onSubmit(login) {
    let em = login.controls["email"].value;
    let pwd = login.controls["password"].value;
    this.authservice
      .login(em, pwd)
      .then(() => {
        alert("You are successfully loggedin!");
        if (firebase.auth().currentUser.emailVerified)
          this.router.navigate(["/myBlogs"]);
        else this.router.navigate(["/emailverification"]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  ngOnInit() {}
}
