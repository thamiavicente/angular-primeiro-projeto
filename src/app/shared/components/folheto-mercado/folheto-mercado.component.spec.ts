import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolhetoMercadoComponent } from './folheto-mercado.component';

describe('FolhetoMercadoComponent', () => {
  let component: FolhetoMercadoComponent;
  let fixture: ComponentFixture<FolhetoMercadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolhetoMercadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolhetoMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
