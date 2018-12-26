import { Alunos } from "../../alunos/alunos";

export interface Artigo {
    id: number;
    titulo: string;
    resumo: string;
    palavrasChave: string;
    pathHTML: File;
    aluno: Alunos;
}