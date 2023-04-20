import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  converteParaData(data: string): Date {
    return new Date(data);
  }

  converterParaHora(data: Date): number {
    const agora = new Date();
    const diferenca = agora.getTime() - data.getTime();
    const horas = Math.round(diferenca / (1000 * 60 * 60));
    return horas;
  }

  getDias(data: string): number {
    return Math.floor(this.converterParaHora(this.converteParaData(data)) / 24);
  }
}
