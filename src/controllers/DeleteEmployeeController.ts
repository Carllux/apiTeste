import { DeleteEmployeeService } from './../services/DeleteEmployeeService';
import { Request, Response } from "express";

export class DeleteEmployeeController {
async handle(request: Request, response: Response){
    const {id} = request.params;

    const service = new DeleteEmployeeService();

    const result = await service.execute(id);

    if(result instanceof Error) {
        return response.status(400).json(result.message);

    }

    return response.status(204).end({message: 'Empregado deletado com sucesso! '});
}

}