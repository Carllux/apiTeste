import { Response , Request} from 'express';
import {CreateDepartamentService} from '../services/CreateDepartamentService';

export class CreateDepartmentController {
    async handle(request: Request, response: Response) {
        const {nome, sigla} = request.body

        const service = new CreateDepartamentService();

        const result = await service.execute({nome, sigla});

        if (result instanceof Error){
            return response.status(400).json(result.message);
        }
        
        return response.json(result);
    }
} 
