import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SignupComponent } from "./signup/signup.component";
import * as firebase from "firebase/app";
import "firebase/auth";
import { LoginComponent } from "./login/login.component";
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";
import { NgxEditorModule } from "ngx-editor";
import { HttpClientModule } from "@angular/common/http";
import { CreateComponent } from "./create/create.component";
import { MyBlogsComponent } from "./my-blogs/my-blogs.component";
import { ProfileComponent } from "./profile/profile.component";
import { PostComponent } from "./post/post.component";
import { ViewComponent } from "./view/view.component";
import { CommentComponent } from "./comment/comment.component";
import { EditprofileComponent } from "./editprofile/editprofile.component";
import { EmailverificationComponent } from './emailverification/emailverification.component';

let firebaseConfig = {
  apiKey: "AIzaSyB2z-BiSrIEMsfdZNIWjs0yG7C5Xe-YIBQ",
  authDomain: "memoir-5ba94.firebaseapp.com",
  databaseURL: "https://memoir-5ba94.firebaseio.com",
  projectId: "memoir-5ba94",
  storageBucket: "memoir-5ba94.appspot.com",
  messagingSenderId: "967252733031",
  appId: "1:967252733031:web:fb74e7096bc0ddff44f8c2",
  measurementId: "G-BLP72ZRE9G",
};
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    CreateComponent,
    MyBlogsComponent,
    ProfileComponent,
    PostComponent,
    ViewComponent,
    CommentComponent,
    EditprofileComponent,
    EmailverificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
