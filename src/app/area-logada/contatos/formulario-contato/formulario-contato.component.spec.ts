import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioContatoComponent } from './formulario-contato.component';

describe('NovoContatoComponent', () => {
  let component: FormularioContatoComponent;
  let fixture: ComponentFixture<FormularioContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioContatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
