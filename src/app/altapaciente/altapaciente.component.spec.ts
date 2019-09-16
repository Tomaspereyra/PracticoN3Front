import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltapacienteComponent } from './altapaciente.component';

describe('AltapacienteComponent', () => {
  let component: AltapacienteComponent;
  let fixture: ComponentFixture<AltapacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltapacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltapacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
