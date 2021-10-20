import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor(private afs: AngularFirestore) { }

  passdata(result: any) {
    this.afs.collection('ph').add(result);
    console.log(result);
  }

  updatedata(id:string ,result: any) {
    this.afs.doc('ph/'+id).set(result);
    console.log(result);
  }

  
  recieve(name:any){
    const doc = this.afs.collection('ph', ref => ref.where('name', '==', name).limit(1));
    return doc;
  }
}
