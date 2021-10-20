import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';  
import { ConnectService} from '../connect.service';
@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  myForm: FormGroup;
  constructor(    private fb: FormBuilder,
    private connect: ConnectService,) 
    {

     }

 ngOnInit(): void {

    this.myForm = this.fb.group({
      name: '',
      email:'',
      ph:'',
      msg:''
    });
  }
  onSubmit(form: FormGroup) {
    let result = {
      ...form.value,
    };

    this.connect.passdata(result);
   console.log(form.value);
 
  } 
}

