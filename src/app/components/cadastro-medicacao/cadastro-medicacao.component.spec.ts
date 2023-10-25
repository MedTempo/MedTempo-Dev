import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMedicacaoComponent } from './cadastro-medicacao.component';

describe('CadastroMedicacaoComponent', () => {
  let component: CadastroMedicacaoComponent;
  let fixture: ComponentFixture<CadastroMedicacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroMedicacaoComponent]
    });
    fixture = TestBed.createComponent(CadastroMedicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
