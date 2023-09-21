import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFComponent } from './cadastro-f.component';

describe('CadastroFComponent', () => {
  let component: CadastroFComponent;
  let fixture: ComponentFixture<CadastroFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroFComponent]
    });
    fixture = TestBed.createComponent(CadastroFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
