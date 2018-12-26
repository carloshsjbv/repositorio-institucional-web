import { Turmas } from "../turmas/turmas";

export interface Alunos {
    id: number,
    nome: string,
    ra: number,
    email: string,
    senha: string,
    turma: Turmas,
}