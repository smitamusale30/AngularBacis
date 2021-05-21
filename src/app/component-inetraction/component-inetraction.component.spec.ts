import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInetractionComponent } from './component-inetraction.component';

describe('ComponentInetractionComponent', () => {
  let component: ComponentInetractionComponent;
  let fixture: ComponentFixture<ComponentInetractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentInetractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInetractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
