import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtStackComponent } from './at-stack.component';

describe('AtStackComponent', () => {
  let component: AtStackComponent;
  let fixture: ComponentFixture<AtStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
