import { CreateEmployeeService } from './../services/CreateEmployeeService';
import { Response , Request} from 'express';


export class CreateEmployeeController {
async handle(request: Request, response: Response) {
    const { nome,
            RG,
            foto, 
            idDepartamento} = request.body
    
    
    const service = new CreateEmployeeService();

    const result = await service.execute({
        nome,
        foto ,
        RG,
        idDepartamento
    });

    if(result instanceof Error){
        return response.status(400).json(result.message)
    }

    return response.json(result);
}

}