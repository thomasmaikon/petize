import { Injectable } from '@angular/core';
import { RepositorioDTO } from '../entidades/Repositorio';

@Injectable({
  providedIn: 'root'
})
export class AlgoritmosService {

  constructor() { }

  ordernarDecrecente(repositorios: RepositorioDTO[]): RepositorioDTO[]{
    return repositorios.sort((p1, p2) => p2.qtdEstrelas - p1.qtdEstrelas);
  }
}
