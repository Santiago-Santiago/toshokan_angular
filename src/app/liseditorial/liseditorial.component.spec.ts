import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiseditorialComponent } from './liseditorial.component';

describe('LiseditorialComponent', () => {
  let component: LiseditorialComponent;
  let fixture: ComponentFixture<LiseditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiseditorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiseditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
