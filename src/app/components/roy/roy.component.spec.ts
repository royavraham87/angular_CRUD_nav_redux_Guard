import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyComponent } from './roy.component';

describe('RoyComponent', () => {
  let component: RoyComponent;
  let fixture: ComponentFixture<RoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
