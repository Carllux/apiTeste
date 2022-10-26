import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class ProfilePhotoUpload1648773983435 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table(
                {
                name: "profilePhotos",
                columns: [{
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name:"nome",
                    type: "varchar",
                    isUnique: true
                },            
                {
                name: "cadastradoEm",
                type: "timestamp",
                default: "now()"
                },
                {
                    name:"userId",
                    type: "uuid",
                    
                },            
            ],
            foreignKeys: [
                {
                    name: "fk_profilePhoto",
                    columnNames: ["userId"],
                    referencedTableName: "funcionarios",
                    referencedColumnNames: ["id"]
                }
            ]
            }
            )
        )
    }
    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("profilePhotos")
    }

}
