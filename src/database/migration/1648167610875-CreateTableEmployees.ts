import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableEmployees1648167610875 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table(
                {
                name: "funcionarios",
                columns: [{
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                name: "nome",
                type: "varchar",
                },
                {
                    name:"foto",
                    type: "varchar",
                    isUnique: false,
                    default: null
                },
                {
                    name: "RG",
                    type: "varchar",
                    isUnique: true
                },                
                {
                name: "contratado_em",
                type: "timestamp",
                default: "now()"
                },
                {
                name: "idDepartamento",
                type: "uuid"
                }
            ],
            foreignKeys: [
                {
                    name: "fk_idDepartamento",
                    columnNames: ["idDepartamento"],
                    referencedTableName: "departamentos",
                    referencedColumnNames: ["id"]
                }
            ]
            }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("funcionarios")
    }

}