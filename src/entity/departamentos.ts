import {Entity, PrimaryColumn, Column, CreateDateColumn} from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("departamentos")
export class Departamento {

    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column({
        length: 2
    })   
    sigla: string;

@CreateDateColumn()
criado_em: Date;

constructor() {
    if (!this.id) {
        this.id = uuid();
    }

}
}
