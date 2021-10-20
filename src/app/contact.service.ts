import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
 

  constructor(private afs: AngularFirestore) { 
    

  }

  savecontacct(result: any) {
    this.afs.collection('contact').add(result);
    console.log(result);
  }

  transfer(name:any){
    const doc = this.afs.collection('contact', ref => ref.where('Name', '==', name).limit(1));
    return doc;
  }
}
