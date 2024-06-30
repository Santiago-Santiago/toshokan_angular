import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiscargoComponent } from './liscargo.component';

describe('LiscargoComponent', () => {
  let component: LiscargoComponent;
  let fixture: ComponentFixture<LiscargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiscargoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiscargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
