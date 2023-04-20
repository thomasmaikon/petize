import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { GithubServiceService } from '../service/github-service.service';
@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PerfilComponent
  ],
  providers:[GithubServiceService]
})
export class PerfilModule { }
