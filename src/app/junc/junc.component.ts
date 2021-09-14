import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { specsmodel } from '../specsmodel';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-junc',
  templateUrl: './junc.component.html',
  styleUrls: ['./junc.component.css']
})
export class JuncComponent implements OnInit {
  specs:specsmodel;
image:any;
  constructor(  private service: ImageService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.showConfig();
  }

  showConfig() {
    this.service.getConfig()
      .subscribe((data: specsmodel[])=>{
  this.image=data;
      });
 }
}
