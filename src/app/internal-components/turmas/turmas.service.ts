import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Turmas } from "./turmas";
import { CursosService } from "../cursos/cursos.service";
import { AppConfig } from "src/app/core/app.config";

// Significa que o service está no scopo root, e está pode ser utilizado por todas as partes da aplicação.
@Injectable({ providedIn: 'root' })
export class TurmasService {
    // proporciona o acesso REST atráves do campo httpClient
    constructor(
        private http: HttpClient,
        private cursoService: CursosService,
        private appConfig: AppConfig
    ) { }

    // Método get lista 
    public listForModel(model: string) {
        return this.http.get<Turmas[]>(this.appConfig.apiContext + model);
    }

    public listByTurmaByCursoId(model: string, id: number) {
        return this.http.get<Turmas[]>(this.appConfig.apiContext + model + id);
    }

    public listByTurmaAndYear(model: string, acronimo: string): any {
        return this.http.get<Turmas[]>(this.appConfig.apiContext + model + "/" + acronimo);
    }

    public saveTurmas(model: string, turma: Turmas) {
        return this.http.post(this.appConfig.apiContext + model, turma);
    }

}