import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuncComponent } from './junc.component';

describe('JuncComponent', () => {
  let component: JuncComponent;
  let fixture: ComponentFixture<JuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
