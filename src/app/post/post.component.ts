import { Component, OnInit, Input ,EventEmitter, Output} from '@angular/core';
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  @Input('pos') pos:any
  @Output ('onDelete') onDelete = new EventEmitter();
  postData : any = {}
  user : any = {}


  constructor() {
    firebase.firestore().settings({
      timestampsInSnapshots:true
    });
    
    
   }

  ngOnInit() {
    this.postData = this.pos.data(); 
    this.user = firebase.auth().currentUser;
  }
  delete(){
  
    firebase.firestore().collection("posts").doc(this.pos.id).delete().then(()=>{
      this.onDelete.emit();
    });
  }
}
