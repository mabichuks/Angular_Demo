import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcomComponent } from './newcom.component';

describe('NewcomComponent', () => {
  let component: NewcomComponent;
  let fixture: ComponentFixture<NewcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
