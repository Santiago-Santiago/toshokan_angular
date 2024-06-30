import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LislibroComponent } from './lislibro.component';

describe('LislibroComponent', () => {
  let component: LislibroComponent;
  let fixture: ComponentFixture<LislibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LislibroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LislibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
