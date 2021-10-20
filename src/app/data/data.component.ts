import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';  
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ConnectService} from '../connect.service';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  myForm: FormGroup;
  editMode= true;
  name:any;
  id:string;
  constructor(private connect: ConnectService,
    private fb: FormBuilder,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    


    this.myForm = this.fb.group({
      name: '',
      email:'',
      ph:'',
      msg:''
    });
  
  
    this.route.params
    .subscribe(
      (params: Params) => {
        this.name = params.name;
        console.log(params.name);
        console.log(params.name !=='new');
        this.editMode = params.name !=='new'; 
        console.log(this.editMode);
        this.getValuesForEdit();
      }
    );


  }
  
  public getValuesForEdit() {
    if (this.editMode) {
      const doc = this.connect.recieve(this.name);
      doc.snapshotChanges()        
            .subscribe(
              data => {
                console.log(data[0].payload.doc.id);
                console.log(data[0].payload.doc.data());
                console.log(data);
                // this.bind=data[0];
                this.myForm.patchValue(data[0].payload.doc.data());
                this.id=data[0].payload.doc.id;  
              },
              err => console.log('HTTP Error', err)
            );
          }
       
    }


    onSubmit(form: FormGroup) {
      let result = {
        ...form.value,
      };
  
    //   this.connect.passdata(result);
    if(this.editMode){
      this.connect.updatedata(this.id,result);
    } else {
      this.connect.passdata(result);
    }


    console.log(this.id);
    
     console.log(form.value);
   
    }

}
