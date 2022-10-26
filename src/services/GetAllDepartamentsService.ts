import { getRepository } from "typeorm";
import { Departamento } from './../entity/departamentos';




export class GetAllDepartamentsService{
async execute() {
    const repo = getRepository(Departamento);

    const departamentos = await repo.find();

    return departamentos;


}

}