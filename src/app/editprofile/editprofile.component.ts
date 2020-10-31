import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  user : any = {};
  message : string;

  constructor() { 
    this.getProfile();
  }

  ngOnInit() {
  }

  getProfile(){
    let userId = firebase.auth().currentUser.uid;
    firebase.firestore().collection("users").doc(userId).get().then((documentSnapshot)=>{
      this.user = documentSnapshot.data();
      this.user.displayName =  this.user.firstname+" "+this.user.lastname;
      this.user.id = documentSnapshot.id;
      console.log(this.user);
    }).catch((error)=>{
      console.log(error);
    })
  }

  update(){
    this.message = "Updating profile...."
    firebase.auth().currentUser.updateProfile({
      displayName:this.user.displayName,
      photoURL:this.user.photo
    }).then(()=>{
      let userId = firebase.auth().currentUser.uid;
    firebase.firestore().collection("users").doc(userId).update({
      firstname : this.user.displayName.split(' ')[0],
      lastname : this.user.displayName.split(' ')[1],
      bio : this.user.bio,
      interests : this.user.interests,
      hobbies : this.user.hobbies 
    }).then(()=>{
      this.message="Profile updates successfully!"
    }).catch((error)=>{
      console.log(error)
    })


    }).catch((error)=>{
      console.log(error);
    })

    
  }

}
