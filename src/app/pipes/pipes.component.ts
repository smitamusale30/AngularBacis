import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name = "CodeVolution";
  public message = "welcome to codeVolution"

  public person ={
    "firstName" : "john",
    "lastName" : "Doe"
  }

  public date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
