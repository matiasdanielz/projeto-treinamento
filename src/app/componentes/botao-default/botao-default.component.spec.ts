import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoDefaultComponent } from './botao-default.component';

describe('BotaoDefaultComponent', () => {
  let component: BotaoDefaultComponent;
  let fixture: ComponentFixture<BotaoDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotaoDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
