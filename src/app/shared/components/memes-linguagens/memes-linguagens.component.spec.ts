import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemesLinguagensComponent } from './memes-linguagens.component';

describe('MemesLinguagensComponent', () => {
  let component: MemesLinguagensComponent;
  let fixture: ComponentFixture<MemesLinguagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemesLinguagensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemesLinguagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
