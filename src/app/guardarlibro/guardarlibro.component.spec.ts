import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarlibroComponent } from './guardarlibro.component';

describe('GuardarlibroComponent', () => {
  let component: GuardarlibroComponent;
  let fixture: ComponentFixture<GuardarlibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuardarlibroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarlibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
