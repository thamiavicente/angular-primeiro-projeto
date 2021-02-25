import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarContatosComponent } from './listar-contatos.component';

describe('ContatosComponent', () => {
  let component: ListarContatosComponent;
  let fixture: ComponentFixture<ListarContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarContatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
