import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenWrapperComponent } from './full-screen-wrapper.component';

describe('FullScreenWrapperComponent', () => {
  let component: FullScreenWrapperComponent;
  let fixture: ComponentFixture<FullScreenWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullScreenWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullScreenWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
