import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../service/github-service.service';
import { PerfilDTO } from '../entidades/Usuario';
import { RepositorioDTO } from '../entidades/Repositorio';
import { DataServiceService } from '../service/data-service.service';
import { ParserService } from '../service/parser.service';
import { AlgoritmosService } from '../service/algoritmos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  private urlGithub: string = "https://github.com";
  
  perfil: PerfilDTO;
  repositorios: RepositorioDTO[];

  constructor(private service: GithubServiceService, private parser: ParserService, private algoritmos: AlgoritmosService, private route: Router, perfil: PerfilDTO) {
    this.perfil = perfil
    this.repositorios = []
  }

  ngOnInit(): void {
    
    this.service.emitter.subscribe(
      (perfil) => {
        this.perfil =  this.parser.converteParaPerfil(perfil);
        
        this.popularRepositorios()
      });

  }

   async popularRepositorios() {
    try {
      const resultado = await this.service.buscarRepositorios(this.perfil.login)
      if ( resultado ) {
        const repositorios = resultado.map((repo: any) => {
          return this.parser.converteParaRepositorio(repo);
        });
        
        this.repositorios =  this.algoritmos.ordernarDecrecente(repositorios);
      }
    } catch (erro) {
      // tratar erro
    }
   }

  getUrl(repositorio: string) {
    return `${this.urlGithub}/${this.perfil.login}/${repositorio}`
  }


  retornarMenu(){
    this.route.navigate(['/']);
  }
}
