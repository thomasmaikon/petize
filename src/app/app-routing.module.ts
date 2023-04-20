import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { BuscadorComponent } from './buscador/buscador.component';

const routes: Routes = [
  {path:'perfil', component: PerfilComponent},
  {path:'', component: BuscadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
