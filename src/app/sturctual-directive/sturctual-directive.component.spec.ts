import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SturctualDirectiveComponent } from './sturctual-directive.component';

describe('SturctualDirectiveComponent', () => {
  let component: SturctualDirectiveComponent;
  let fixture: ComponentFixture<SturctualDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SturctualDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SturctualDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
