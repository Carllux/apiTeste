import { Funcionario } from '../entity/funcionarios';
import { getRepository } from "typeorm";


type EmployeeRequest = {
    id: string;
    nome: string;
    foto: string;
    idDepartamento: string
}

export class UpdateEmployeeService {
async execute({ id, nome, foto, idDepartamento }: EmployeeRequest) {
    const repo = getRepository(Funcionario);

    const funcionario = await repo.findOne(id);

    if(!funcionario) {
        return new Error("Este funcionário não existe")
    }
    funcionario.nome = nome ? nome : funcionario.nome;
    funcionario.foto = foto ? foto : funcionario.foto;
    funcionario.idDepartamento = idDepartamento ? idDepartamento : funcionario.idDepartamento;
    

await repo.save(funcionario);

}

}