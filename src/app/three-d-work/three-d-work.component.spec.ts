import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDWorkComponent } from './three-d-work.component';

describe('ThreeDWorkComponent', () => {
  let component: ThreeDWorkComponent;
  let fixture: ComponentFixture<ThreeDWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
