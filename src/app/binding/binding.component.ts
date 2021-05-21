import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  // class binding
  // public n = "CodeVolution";
  // public successClass = "text-success";
  // public hasError = false;
  // public isSpecial = true;
  // public messagesClasses ={
  //   "text-success": !this.hasError,
  //   "text-danger": this.hasError,
  //   "text-special": this.isSpecial
  // }

  //Style Binding
  // public n="codeVolution";
  // public hasError = true;
  // public isSpecial = true;
  // public highlightColor = "orange";
  // public titleStyle ={
  //   color: "blue",
  //   fontStyle:"italic"
  // }

  //Event Binding
  public n="codeVolution";
  public greeting ="";
  onClick()
  {
    console.log("Welcome To CodeVolution");
    this.greeting="Welcome To CodeVolution";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
