import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesContatosComponent } from './detalhes-contatos.component';

describe('DetalhesContatosComponent', () => {
  let component: DetalhesContatosComponent;
  let fixture: ComponentFixture<DetalhesContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesContatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
