import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiscategoriaComponent } from './liscategoria.component';

describe('LiscategoriaComponent', () => {
  let component: LiscategoriaComponent;
  let fixture: ComponentFixture<LiscategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiscategoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiscategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
