import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 
import { TransService } from '../trans.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
featureCards:any;

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.afs.collection<any>('cards').valueChanges().subscribe(data => {
      console.log(data);
      this.featureCards=data;
    });


    this.afs.collection<any>('cards', query =>
      query.where('category', '==', 'kanban')
    ).valueChanges().subscribe(
      data => {
        // this.cards = data;
        console.log(data);
      }
    );

 
  }

}
