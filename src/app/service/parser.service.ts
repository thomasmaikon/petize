import { Injectable } from '@angular/core';
import { PerfilDTO } from '../entidades/Usuario';
import { RepositorioDTO } from '../entidades/Repositorio';
import { DataServiceService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class ParserService {

  constructor(private dataService: DataServiceService) { }

  converteParaPerfil(input: any): PerfilDTO {
        let perfil = new PerfilDTO();
        perfil.urlImagem = input.avatar_url;
        perfil.nome = input.name;
        perfil.login = input.login;
        perfil.biografia = input.bio;
        perfil.qtdSeguidores = input.followers;
        perfil.qtdSeguindo = input.following;
        perfil.empresaTrabalho = input.company;
        perfil.localizacao = input.location;
        perfil.email = input.email;
        perfil.blogURL = input.blog;
        perfil.twitter = input.twitter_username;

    return perfil
  }

  converteParaRepositorio(input: any): RepositorioDTO {
    let repositorio = new RepositorioDTO();
    repositorio.nome = input.name
    repositorio.descricao = input.description
    repositorio.qtdEstrelas = input.stargazers_count
    repositorio.tempoPassado = this.dataService.getDias(input.updated_at)
    
    return repositorio
  }
}
