import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-demo',
  // // templateUrl: './demo.component.html', //provide the link od html page
  // //template: '<div>Inline Templete</div> ', // Only in one line we can provide the html code
  // template: `<div>Inline Templete</div> `, //many Line html code we can provide
  // //styleUrls: ['./demo.component.css']
  // styles : [`div
  // {
  //   color :red
  // }`]

selector: 'app-demo',
templateUrl: './demo.component.html',
styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public name = "Smita";
  public siteURL = window.location.href;
  
  constructor() { }

  ngOnInit(): void {
  }

  greetUser()
  {
   return  "Hello "+this.name;
  }
}
