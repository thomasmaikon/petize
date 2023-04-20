export class PerfilDTO {
    login: string;
    nome: string;
    urlImagem: string;
    biografia: string;
    qtdSeguidores: number;
    qtdSeguindo: number;
    empresaTrabalho: string;
    localizacao: string;
    email: string;
    blogURL: string;
    twitter: string;

    constructor() {
      this.nome = '';
      this.urlImagem = '';
      this.login = '';
      this.biografia = ''
      this.empresaTrabalho = '';
      this.urlImagem = '';
      this.localizacao = '';
      this.email = '';
      this.blogURL = '';
      this.twitter = ''
      this.qtdSeguidores = 0;
      this.qtdSeguindo = 0;
    }
  }