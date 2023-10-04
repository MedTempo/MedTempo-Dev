import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPComponent } from './cadastro-p.component';

describe('CadastroPComponent', () => {
  let component: CadastroPComponent;
  let fixture: ComponentFixture<CadastroPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroPComponent]
    });
    fixture = TestBed.createComponent(CadastroPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
