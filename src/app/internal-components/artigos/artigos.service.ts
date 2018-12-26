import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { AppConfig } from "src/app/core/app.config";
import { Artigo } from "./individual-grid/artigo";

@Injectable({
    providedIn: 'root'
})
export class PublicacoesService {

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig
    ) { }

    findById(id) {
        return this.http.get(this.appConfig.apiContext + 'submissoes/' + id);
    }

    findArtigos() {
        return this.http.get(this.appConfig.apiContext + 'submissoes');
    }

    findArtigosCurso(curso) {
        return this.http.get(this.appConfig.apiContext + 'submissoes/list/' + curso);
    }

    findArtigosCursoAno(curso, anoInicial) {
        return this.http.get(this.appConfig.apiContext + 'submissoes/list/' + curso + '/' + anoInicial);
    }

}