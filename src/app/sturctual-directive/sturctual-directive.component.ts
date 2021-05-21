import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sturctual-directive',
  templateUrl: './sturctual-directive.component.html',
  styleUrls: ['./sturctual-directive.component.css']
})
export class SturctualDirectiveComponent implements OnInit {
  //ngIf
  displayName = true;
  //ngSwitch
  public color ="yellow";  
  //ngFor
  public colors = ["red","blue","green","yellow"];
  constructor() { }

  ngOnInit(): void {
  }

}
