import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoralComponent } from './coral.component';

describe('CoralComponent', () => {
  let component: CoralComponent;
  let fixture: ComponentFixture<CoralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
