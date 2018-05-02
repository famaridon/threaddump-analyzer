import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknowStackEntryComponent } from './unknow-stack-entry.component';

describe('UnknowStackEntryComponent', () => {
  let component: UnknowStackEntryComponent;
  let fixture: ComponentFixture<UnknowStackEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnknowStackEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknowStackEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
