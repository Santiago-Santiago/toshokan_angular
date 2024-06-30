import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarcargoComponent } from './guardarcargo.component';

describe('GuardarcargoComponent', () => {
  let component: GuardarcargoComponent;
  let fixture: ComponentFixture<GuardarcargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuardarcargoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarcargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
