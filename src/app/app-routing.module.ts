import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { MyBlogsComponent } from "./my-blogs/my-blogs.component";
import { AuthGuard } from "./auth.guard";
import { ProfileComponent } from "./profile/profile.component";
import { ViewComponent } from "./view/view.component";
import { EditprofileComponent } from "./editprofile/editprofile.component";
import { EmailverificationComponent } from "./emailverification/emailverification.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "myBlogs",
    component: MyBlogsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "profile/:id",
    component: ProfileComponent,
  },
  {
    path: "edit-profile/:id",
    component: EditprofileComponent,
  },
  {
    path: "view/:postId",
    component: ViewComponent,
  },
  { path: "emailverification", component: EmailverificationComponent },
  {
    path: "**",
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
