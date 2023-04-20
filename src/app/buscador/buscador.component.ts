import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../service/github-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit{
  nomeUsuario: string = 'thomasmaikon';

  pessoa: any = {};

  constructor(private service: GithubServiceService, private route: Router) {
  
  }
 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  async buscarUsuario() {
    try {

      const sucesso = await this.service.buscaUsuarioPeloNome(this.nomeUsuario);
      if (sucesso) {
        this.route.navigate(['/perfil']);
      } else {
        // tratar erro
      }

    } catch (error) {
      // tratar erro, exibindo que usuario nao existe
    }
  }
}
