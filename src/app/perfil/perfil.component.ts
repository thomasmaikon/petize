import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../service/github-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil: any;
  repositorio: any;

  constructor(private service: GithubServiceService) { }

  ngOnInit(): void {
    
    this.service.emitter.subscribe(
      (perfil) => {
        this.perfil = perfil      
      });

      this.popularRepositorios()
  }

   async popularRepositorios() {
    try {
      const resultado = await this.service.buscarRepositorios('thomasmaikon')
      if ( resultado ) {
        this.repositorio = resultado
      }
    } catch (erro) {
      // tratar erro
    }
   }

}
