import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCarregaMaisComponent } from './botao-carrega-mais.component';

describe('BotaoCarregaMaisComponent', () => {
  let component: BotaoCarregaMaisComponent;
  let fixture: ComponentFixture<BotaoCarregaMaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoCarregaMaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoCarregaMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
