import { Departamento } from './departamentos';
import {Entity,  Column, ManyToOne, JoinColumn, PrimaryColumn, CreateDateColumn } from "typeorm";
import {v4 as uuid} from "uuid";



@Entity("funcionarios")
export class Funcionario {

    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()   
    foto: string;

    @Column({
        length: 9
    })   
    RG: string;

    @CreateDateColumn()
    contratado_em: Date;

    @Column()
    idDepartamento: string;

    @ManyToOne(() => Departamento)
    @JoinColumn({name:"idDepartamento"}) //basicamente um inner join 
    departamento: Departamento
    
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}