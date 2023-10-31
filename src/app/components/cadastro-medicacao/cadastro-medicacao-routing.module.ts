import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroMedicacaoComponent } from './cadastro-medicacao.component';

const routes: Routes = [{ path: '', component: CadastroMedicacaoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroMedicacaoRoutingModule { }
