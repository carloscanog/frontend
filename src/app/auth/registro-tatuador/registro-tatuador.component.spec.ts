import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTatuadorComponent } from './registro-tatuador.component';

describe('RegistroTatuadorComponent', () => {
  let component: RegistroTatuadorComponent;
  let fixture: ComponentFixture<RegistroTatuadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroTatuadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroTatuadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
