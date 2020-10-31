import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";
import "firebase/auth";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent implements OnInit {
  loggedin: boolean = false;
  user: any;

  constructor() {
    this.user = firebase.auth().currentUser;

    if (this.user && firebase.auth().currentUser.emailVerified) {
      this.loggedin = true;
    } else {
      this.loggedin = false;
    }
    firebase.auth().onAuthStateChanged((user) => {
      if (user && firebase.auth().currentUser.emailVerified) {
        this.loggedin = true;
        this.user = user;
      } else {
        this.loggedin = false;
      }
    });
  }

  ngOnInit() {}

  logout() {
    firebase.auth().signOut();
  }
}
