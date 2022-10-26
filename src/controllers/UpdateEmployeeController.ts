import { UpdateEmployeeService } from './../services/UpdateEmployeeService';


import { Request, Response } from 'express';

export class  UpdateEmployeeController {
async handle(request: Request, response: Response){
const {id} = request.params;
const{nome, foto, idDepartamento} = request.body
const service = new UpdateEmployeeService
const result = await service.execute({id, nome, foto, idDepartamento})

if(result instanceof Error) {
    return response.status(400).json(result.message)
}

return response.json(result);


}

}