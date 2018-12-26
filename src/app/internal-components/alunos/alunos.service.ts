import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Alunos } from "./alunos";
import { AppConfig } from "src/app/core/app.config";


@Injectable({ providedIn: 'root' })
export class AlunosService {

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig
    ) { }

    countAll () {
        return this.http.get(this.appConfig.apiContext + "/alunos/count");
    }

    save(model: string, aluno: Alunos): any {
        return this.http.post(this.appConfig.apiContext + model, aluno);
    }

}