import { MigrationInterface, QueryRunner } from "typeorm";

export class CriandoTabelaUsuario1725191373638 implements MigrationInterface {
    name = 'CriandoTabelaUsuario1725191373638'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`usuario\` (\`id\` varchar(36) NOT NULL, \`nome\` varchar(30) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`usuario\``);
    }

}
