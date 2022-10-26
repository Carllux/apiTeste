import { Funcionario } from '../entity/funcionarios';
import { getRepository } from "typeorm";


type PhotoRequest = {
    id: string;
    foto: string;
}

export class ProfilePhotoService {
async execute({ id, foto }: PhotoRequest) {
    const repo = getRepository(Funcionario);

    const funcionario = await repo.findOne(id);

    if(!funcionario) {
        return new Error("Este funcionário não existe")
    }

    funcionario.foto = foto ? foto : funcionario.foto;

    

await repo.save(funcionario);

}

}