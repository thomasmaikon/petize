import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { GithubServiceService } from '../service/github-service.service';
import { PerfilDTO } from '../entidades/Usuario';
import { RepositorioDTO } from '../entidades/Repositorio';
import { ParserService } from '../service/parser.service';
import { AlgoritmosService } from '../service/algoritmos.service';
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
  providers:[
    GithubServiceService,
    PerfilDTO,
    RepositorioDTO,
    ParserService,
    AlgoritmosService
  ]
})
export class PerfilModule { }
