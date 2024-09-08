import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorComponent } from './mor.component';

describe('MorComponent', () => {
  let component: MorComponent;
  let fixture: ComponentFixture<MorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
