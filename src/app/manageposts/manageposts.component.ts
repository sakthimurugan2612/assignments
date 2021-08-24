import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manageposts',
  templateUrl: './manageposts.component.html',
  styleUrls: ['./manageposts.component.css']
})
export class ManagepostsComponent implements OnInit {

  result = [{
    fname: "thiru",
    lname:"murugan",
    amount: 100
  } ,
  {
    fname: "sakthi",
    lname:"murugan",
    amount: 200
  },
  {
    fname: "sakthi",
    lname:"murugan",
    amount: 200
  },
  {
    fname: "sakthi",
    lname:"murugan",
    amount: 200
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
