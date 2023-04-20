import { DataServiceService } from "../service/data-service.service";

export class RepositorioDTO {
    nome: string;
    descricao: string;
    qtdEstrelas: number;
    tempoPassado: number

    constructor() {
        this.nome = '';
        this.descricao = ''
        this.qtdEstrelas = 0;
        this.tempoPassado = 0;
    }
}