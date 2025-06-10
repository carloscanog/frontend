import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirRolComponent } from './elegir-rol.component';

describe('ElegirRolComponent', () => {
  let component: ElegirRolComponent;
  let fixture: ComponentFixture<ElegirRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElegirRolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElegirRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
