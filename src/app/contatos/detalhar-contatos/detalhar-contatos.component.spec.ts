import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharContatosComponent } from './detalhar-contatos.component';

describe('DetalharContatosComponent', () => {
  let component: DetalharContatosComponent;
  let fixture: ComponentFixture<DetalharContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalharContatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
