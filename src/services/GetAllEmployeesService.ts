import { Funcionario } from './../entity/funcionarios';
import { getRepository } from "typeorm";


export class GetAllEmployeesService{
async execute() {
    const repo = getRepository(Funcionario);
    
    const funcionarios = await repo.find({
        relations: ["departamento"]
    });

    return funcionarios;


}

}