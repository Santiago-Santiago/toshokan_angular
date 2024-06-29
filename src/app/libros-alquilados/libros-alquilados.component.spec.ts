import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosAlquiladosComponent } from './libros-alquilados.component';

describe('LibrosAlquiladosComponent', () => {
  let component: LibrosAlquiladosComponent;
  let fixture: ComponentFixture<LibrosAlquiladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibrosAlquiladosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrosAlquiladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
