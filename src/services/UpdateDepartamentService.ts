import { getRepository } from "typeorm";
import { Departamento } from "../entity/departamentos";

type DepartamentUpdateRequest = {
id: string;
nome: string;
sigla: string;

}

export class UpdateDepartamentService {
async execute({id, nome, sigla}: DepartamentUpdateRequest) {
    const repo = getRepository(Departamento);

    const departamento = await repo.findOne(id);

    if(!departamento) {
        return new Error("Este departamento não existe")
    }
    departamento.nome = nome ? nome : departamento.nome;
    departamento.sigla = sigla ? sigla : departamento.sigla;

await repo.save(departamento);

}

}