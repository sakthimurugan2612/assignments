import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { specsmodel } from '../specsmodel';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-specs',
  templateUrl: './specs.component.html',
  styleUrls: ['./specs.component.css']
})
export class SpecsComponent implements OnInit {
specs:specsmodel;
id:any;

editMode:any;
  constructor(
    private service: DataService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params.id;
        this.editMode = params.id != null;
          console.log(this.id);
        this.showConfig();
        }
      );
  }
  showConfig() {
    this.service.getConfig(this.id)
      .subscribe((data: specsmodel) => 
  
      {

        console.log(data);
        console.log('data');
        this.specs = {
          id:data.id,
          model: data.model,
          ram:  data.ram,
          internalstorage: data.internalstorage,
        about :  data.about,
        imageurl : data.imageurl,
      }
    }  );



    }

  
 
 
}
