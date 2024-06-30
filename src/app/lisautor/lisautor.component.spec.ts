import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisautorComponent } from './lisautor.component';

describe('LisautorComponent', () => {
  let component: LisautorComponent;
  let fixture: ComponentFixture<LisautorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LisautorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisautorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
