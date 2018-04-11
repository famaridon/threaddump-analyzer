import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownStackComponent } from './unknown-stack.component';

describe('UnknownStackComponent', () => {
  let component: UnknownStackComponent;
  let fixture: ComponentFixture<UnknownStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnknownStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknownStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
