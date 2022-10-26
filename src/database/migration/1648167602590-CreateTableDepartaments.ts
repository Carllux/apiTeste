import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableDepartaments1648167602590 implements MigrationInterface{

    public async up(queryRunner: QueryRunner): Promise<any> {        
        await queryRunner.createTable(
            new Table(
                {
                    name: "departamentos",
                    columns: [
                    {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                    },
                    {
                    name: "nome",
                    type: "varchar",
                    isUnique: true
                    },
			        {
                    name: "sigla",
                    type: "varchar",
                    isUnique: true
                    },
                    {
                    name: "criado_em",
                    type: "timestamp",
                    default: "now()"
                    }
                ]
            }
        )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("departamentos")
    }
}