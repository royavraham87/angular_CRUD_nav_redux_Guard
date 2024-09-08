import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeirComponent } from './meir.component';

describe('MeirComponent', () => {
  let component: MeirComponent;
  let fixture: ComponentFixture<MeirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
