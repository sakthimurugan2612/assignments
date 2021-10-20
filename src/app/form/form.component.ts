import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
fill:any = {
  Name: '',
  Email:'',
  Ph:'',
  Subject:''
};
editMode:any;
name:any;
  constructor(private contact: ContactService,
    private route: ActivatedRoute, 
    private router: Router
    ) { }

  ngOnInit(): void {
   

          this.route.params
          .subscribe(
            (params: Params) => {
              this.name = params.Name;
              this.editMode = params.Name != null;
            }
          );
    
          this.getValuesForEdit();
    
        }
        public getValuesForEdit() {
          if (this.editMode) {
            const doc = this.contact.transfer(this.name);
            doc.valueChanges()        
                  .subscribe(
                    data => {
                      console.log(data);
                      this.fill=data[0];
                      // this.myForm.patchValue(this.fill);
                    }
                  );
                }
            
          }
    
    
    
      }

