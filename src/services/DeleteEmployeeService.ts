import { Funcionario } from '../entity/funcionarios';
import { getRepository } from "typeorm";

export class DeleteEmployeeService {
async execute(id:string) {
    const repo = getRepository(Funcionario)

    if(!await repo.findOne(id)) {
        return new Error("Este funcionário não existe!");

    }
    await repo.delete(id);
}

}