import { Router } from "express";
import express = require("express");
import multer = require('multer');
import bodyParser = require('body-parser');
import cors = require('cors')
// import path = require('path')

// Departaments
import { DeleteDepartamentController } from './controllers/DeleteDepartamentController';
import { GetAllDepartamentsController } from './controllers/GetAllDepartamentsController';
import { CreateDepartmentController } from './controllers/CreateDepartamentController';
import { UpdateDepartamentController } from './controllers/UpdateDepartamentController';

// Employee
import { CreateEmployeeController } from "./controllers/CreateEmployeeController";
import { GetAllEmployeesController } from './controllers/GetAllEmployeesController';
import { DeleteEmployeeController } from './controllers/DeleteEmployeeController';
import { UpdateEmployeeController } from './controllers/UpdateEmployeeController';
// import { ProfilePhotoController } from "./controllers/ProfilePhotoController";
// Multer


//constantes


// var storage = multer.diskStorage({
//         destination: function (req, file, cb) {
//         cb(null, 'uploads/')
//         },
//         filename: function (req, file, cb) {
//           cb(null,  + Date.now() + path.extname(file.originalname)) //Appending extension
//         }
//       })
// const upload = multer({ storage });

// CRUD - CREATE/POST, READ/GET, UPDATE/PUT, DELETE/DELETE
// ao usar diferentes métodos, podemos utilizar o mesmo caminho de referência


const  routes = Router();

routes.use(express.json())
routes.use(express.urlencoded({extended: true}))

routes.post("/departamento", new CreateDepartmentController().handle);
// routes.post("/departamentos", new CreateDepartmentController().handle);
routes.get("/departamentos", new GetAllDepartamentsController().handle);
routes.delete("/departamento/:id", new DeleteDepartamentController().handle)
routes.put("/departamento/:id", new UpdateDepartamentController().handle)

// employees
routes.post("/funcionario", new CreateEmployeeController().handle);
// routes.post("/funcionario/fotoPerfil", new ProfilePhotoController().handle)
routes.get("/funcionarios", new GetAllEmployeesController().handle);
routes.delete("/funcionario/:id", new DeleteEmployeeController().handle);
routes.put("/funcionario/:id", new UpdateEmployeeController().handle)

export {routes};