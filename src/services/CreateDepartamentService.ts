import { Departamento } from '../entity/departamentos';

import {getRepository} from "typeorm"


type DepartamentRequest = {
    // id:string;
    nome: string;
    sigla: string;
}

export class CreateDepartamentService {

    async execute ({ nome, sigla }:DepartamentRequest): Promise<Departamento | Error>{
    const repo = getRepository(Departamento);    
    
    const departamento = repo.create ({
        
        nome,
        sigla
    });

    //SELECT * FROM FUNCIONARIOS WHERE RG = "RG" LIMIT 1
if(await repo.findOne({sigla})){
            return new Error("Sigla já cadastrada");
        }
    await repo.save(departamento);

    return departamento;
    }

}