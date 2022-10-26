import { DeleteDepartamentService } from './../services/DeleteDepartamentService';
import { Request, Response } from "express";

export class DeleteDepartamentController {
async handle(request: Request, response: Response){
    const {id} = request.params;

    const service = new DeleteDepartamentService();

    const result = await service.execute(id);

    if(result instanceof Error) {
        return response.status(400).json(result.message);

    }

    return response.status(204).end();
}

}