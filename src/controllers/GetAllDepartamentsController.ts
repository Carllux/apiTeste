import { Response, Request } from 'express';
import { GetAllDepartamentsService } from '../services/GetAllDepartamentsService';

export class GetAllDepartamentsController {
async handle(request: Request, response: Response) {
    const service = new GetAllDepartamentsService();

    const departamentos = await service.execute();

    return response.json(departamentos);

    }
}