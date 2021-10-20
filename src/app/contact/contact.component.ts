import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';  
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myForm: FormGroup;
   
  constructor(   
    private fb: FormBuilder,
    private contact: ContactService,
    ) { 
    
  }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      Name: '',
      Email:'',
      Ph:'',
      Subject:''
    });
  }
  onSubmit(form: FormGroup) {
    let result = {
      ...form.value,
    };

    this.contact.savecontacct(result);
   console.log(form.value);
 
  } 
}
