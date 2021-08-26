import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Student } from '../srudent.model';
import { TransService } from '../trans.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  myForm: FormGroup;
  stud2: Student = {
    name: "tihru",
    id:1
  };


  stud3: Student = {
    name: "sakthi",
    id:2
  };



  
  constructor(
    private afs: AngularFirestore,
    private fb: FormBuilder,
    private trans: TransService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      category: '',
      name: '',
      image: '',
      yess: '',
      noo: '',
      yes: '',
      no: '',
    });
  }
  onSubmit(form: FormGroup) {
    const result = {
      ...form.value,
      createdate: new Date(),
    };

    // this.afs.collection(`cards`).add(result);
    let stud1 = {name:'ssktho',id: 12};
    this.trans.addinfo('stud1');
  }
}
