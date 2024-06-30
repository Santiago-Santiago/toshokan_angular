import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisusuarioComponent } from './lisusuario.component';

describe('LisusuarioComponent', () => {
  let component: LisusuarioComponent;
  let fixture: ComponentFixture<LisusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LisusuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
