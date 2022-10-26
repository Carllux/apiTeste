import { Departamento } from './../entity/departamentos';
import { getRepository } from "typeorm";

export class DeleteDepartamentService {
async execute(id:string) {
    const repo = getRepository(Departamento)

    if(!await repo.findOne(id)) {
        return new Error("Este departamento não existe!");

    }
    await repo.delete(id);
}

}