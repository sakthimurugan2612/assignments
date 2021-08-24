import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
cards:any;
  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.afs.collection<any>('cards').valueChanges().subscribe(data => {
      console.log(data);
      this.cards=data;
    });
  }

}
