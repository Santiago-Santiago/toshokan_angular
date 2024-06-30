import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardareditorialComponent } from './guardareditorial.component';

describe('GuardareditorialComponent', () => {
  let component: GuardareditorialComponent;
  let fixture: ComponentFixture<GuardareditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuardareditorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardareditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
