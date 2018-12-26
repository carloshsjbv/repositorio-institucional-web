import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { AppConfig } from "src/app/core/app.config";

@Injectable({ providedIn: 'root' })
export class SubmissoesService {

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig
    ) { }


    countAll(): any {
        return this.http.get(this.appConfig.apiContext + "/submissoes/count");
    }

    save(model: string, submissao) {
        return this.http.post(this.appConfig.apiContext + model, submissao);
    }

}