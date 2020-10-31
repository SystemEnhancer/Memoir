import { Component, OnInit, NgZone } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  posts:any = {};
  postId : string;

  constructor(public activaterouted : ActivatedRoute,public ngzone: NgZone) {
    let postId = this.activaterouted.snapshot.paramMap.get("postId");
    this.postId=postId;
    firebase.firestore().settings({
      timestampsInSnapshots:true
    });
    firebase.firestore().collection("posts").doc(postId).get().then((docsnapshot)=>{
      this.ngzone.run(()=>{
        this.posts = docsnapshot.data();
      console.log(this.posts);
      })
      
    })
  }

  ngOnInit() {
  }

}
