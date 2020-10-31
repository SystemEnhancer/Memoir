import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AuthService } from "../auth.service";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { Router } from "@angular/router";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  signup: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authservice: AuthService,
    public router: Router
  ) {
    this.signup = this.fb.group(
      {
        firstname: ["", [Validators.required]],
        lastname: ["", [Validators.required]],
        email: ["", [Validators.required]],
        password: ["", [Validators.required, Validators.minLength(8)]],
        confirmpassword: ["", [Validators.required]],
      },
      {
        validator: this.checkIfMatching("password", "confirmpassword"),
      }
    );
  }
  checkIfMatching(pass: string, confpass: string) {
    return (group: FormGroup) => {
      let pas = group.controls[pass];
      let cpas = group.controls[confpass];
      if (pas.value == cpas.value) return;
      else {
        cpas.setErrors({
          notEqualToPassword: true,
        });
      }
    };
  }
  onSubmit(signup) {
    let email = signup.controls["email"].value;
    let password = signup.controls["password"].value;
    let firstname = signup.controls["firstname"].value;
    let lastname = signup.controls["lastname"].value;
    firebase.firestore().settings({
      timestampsInSnapshots: true,
    });

    this.authservice
      .signup(email, password, firstname, lastname)
      .then((user: any) => {
        firebase
          .firestore()
          .collection("users")
          .doc(user.uid)
          .set({
            firstname: signup.value.firstname,
            lastname: signup.value.lastname,
            email: signup.value.email,
            photo: user.photoURL,
            bio: "",
            hobbies: "",
            interests: "",
          })
          .then(() => {
            alert("You have been successfully signed up! Please log in.");
            this.router.navigate(["/login"]);
          });
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  }

  ngOnInit() {}
}
