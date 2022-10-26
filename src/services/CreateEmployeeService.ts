import { Funcionario } from '../entity/funcionarios';
import { Departamento } from '../entity/departamentos';
import {getRepository} from "typeorm"

type EmployeeRequest = {
    nome: string;
    foto: string;
    RG: string;
    idDepartamento: string
}

export class CreateEmployeeService {

    async execute ({ nome, foto, RG, idDepartamento }:EmployeeRequest): Promise<Funcionario | Error>{
    const repo = getRepository(Funcionario);  
    const repoDepartamento = getRepository(Departamento);

    
    const funcionario = repo.create ({
        nome,
        foto,
        RG,
        idDepartamento
    });


    // validando departamento
    if(!await repoDepartamento.findOne(idDepartamento)) {
        return new Error ("O departamento não existe")
    }
    // validando RG
    //SELECT * FROM FUNCIONARIOS WHERE RG = "RG" LIMIT 1
if(await repo.findOne({RG})){
            return new Error("RG já cadastrado");
        }
    await repo.save(funcionario);

    return funcionario;
    }

}