import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEComponent } from './cadastro-e.component';

describe('CadastroEComponent', () => {
  let component: CadastroEComponent;
  let fixture: ComponentFixture<CadastroEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroEComponent]
    });
    fixture = TestBed.createComponent(CadastroEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
