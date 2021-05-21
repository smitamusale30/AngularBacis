import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref-var',
  templateUrl: './template-ref-var.component.html',
  styleUrls: ['./template-ref-var.component.css']
})
export class TemplateRefVarComponent implements OnInit {

  public userName = "ABC";

  constructor() { }

  ngOnInit(): void {
  }

  logMessage(value: any){
    console.log(value);
    
  }

}
