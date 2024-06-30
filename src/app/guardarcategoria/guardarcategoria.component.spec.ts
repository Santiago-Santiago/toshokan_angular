import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarcategoriaComponent } from './guardarcategoria.component';

describe('GuardarcategoriaComponent', () => {
  let component: GuardarcategoriaComponent;
  let fixture: ComponentFixture<GuardarcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuardarcategoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
