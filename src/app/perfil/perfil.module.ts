import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { GithubServiceService } from '../service/github-service.service';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    PerfilComponent
  ],
  providers:[GithubServiceService]
})
export class PerfilModule { }
