import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Cursos } from "./cursos";
import { AppConfig } from "src/app/core/app.config";
import { AuthService } from "src/app/core/auth/auth.service";


// Significa que o service está no scopo root, e está pode ser utilizado por todas as partes da aplicação.
@Injectable({ providedIn: 'root' })
export class CursosService {

    // proporciona o acesso REST atráves do campo httpClient
    constructor(
        private http: HttpClient,
        private appConfig: AppConfig,
        private auth : AuthService
    ) { }

    // Método get lista 
    public listForModel(model: string) {
        return this.http.get<Cursos[]>(this.appConfig.apiContext + model);
    }

    public saveCursos(curso: Cursos) {
        return this.http.post(this.appConfig.apiContext + 'cursos', curso, this.appConfig.httpOptions);
    }

    public listById(id: number): any {
        return this.http.get(this.appConfig.apiContext + 'cursos' + "/" + id);
    }



}