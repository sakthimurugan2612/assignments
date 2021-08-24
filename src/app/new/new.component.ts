import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {  FormGroup,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  myForm: FormGroup;

  constructor(private afs: AngularFirestore,private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      category: '',
      name:  '',
      image: '',
      yess: '',
      noo: '',
      yes: '',
      no: '',

    });

    this.afs.collection<any>('cards', query =>
    query.where('CATEGORY', '==', 'Trend')).valueChanges().subscribe(data => {
      console.log(data);
      
    });
  }
  onSubmit(form: FormGroup) {
    const result = {
      ...form.value,
      createdate : new Date()
    };

    
    this.afs.collection(`cards`).add(
      result
    ) ; 
        }
      
  
}

