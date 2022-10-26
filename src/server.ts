import "reflect-metadata";
import { routes } from "./routers";
import * as express from "express";
import "./database"


const app = express();
app.use(express.json());

app.use(routes);

app.listen(8080, () => console.log ("Back-end funcionando!"));
