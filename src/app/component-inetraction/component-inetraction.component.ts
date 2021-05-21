import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-inetraction',
  templateUrl: './component-inetraction.component.html',
  styleUrls: ['./component-inetraction.component.css']
})
export class ComponentInetractionComponent implements OnInit {

  
  @Input('parentData') public name: any;
  //@Input() public parentData:any;

  constructor() { }

  ngOnInit(): void {
  }

}
