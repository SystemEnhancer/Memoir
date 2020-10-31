import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

@Component({
  selector: "app-my-blogs",
  templateUrl: "./my-blogs.component.html",
  styleUrls: ["./my-blogs.component.css"],
})
export class MyBlogsComponent implements OnInit {
  user: any = {};
  posts: any[] = [];
  constructor() {
    firebase.firestore().settings({
      timestampsInSnapshots: true,
    });
    this.user = firebase.auth().currentUser;

    this.getPostList();
  }

  ngOnInit() {}

  getPostList() {
    firebase
      .firestore()
      .collection("posts")
      .orderBy("created", "desc")
      .get()
      .then((querySnapshot) => {
        this.posts = querySnapshot.docs;
        console.log(querySnapshot.docs);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onPostCreate() {
    this.posts = [];
    this.getPostList();
  }
  onDelete() {
    this.posts = [];
    this.getPostList();
  }
}
