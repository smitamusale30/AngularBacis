import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-inetraction',
  templateUrl: './component-inetraction.component.html',
  styleUrls: ['./component-inetraction.component.css']
})
export class ComponentInetractionComponent implements OnInit {

  
  @Input('parentData') public name: any;
  //@Input() public parentData:any;

  @Output() public childEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  fireEvent()
  {
    this.childEvent.emit('hey CodeVolution');
  }
}
