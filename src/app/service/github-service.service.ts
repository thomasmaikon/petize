import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subscription, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {
  private url: string = 'https://api.github.com/users/';

  emitter = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

  buscaUsuarioPeloNome(nome: string) {
    return this.http.get(this.url + nome).subscribe(
      (dados) => {
        this.emitter.emit(dados)
      });
  }

  buscarRepositorios(nomeusuario: string): any {
    return this.http.get(this.url + nomeusuario + '/repos')
    .pipe(
      map((resultado)=>{
        return resultado
      })
    ).toPromise();
  }
}
