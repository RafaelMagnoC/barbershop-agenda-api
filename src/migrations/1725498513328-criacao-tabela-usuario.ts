import { MigrationInterface, QueryRunner } from "typeorm";

export class CriacaoTabelaUsuario1725498513328 implements MigrationInterface {
    name = 'CriacaoTabelaUsuario1725498513328'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`usuario\` (\`id\` varchar(36) NOT NULL, \`nome\` varchar(30) NOT NULL, \`cpf\` varchar(11) NOT NULL, \`data_nascimento\` datetime NULL, \`genero\` enum ('masculino', 'feminino', 'outro', 'não declarar') NOT NULL, \`ativo\` tinyint NOT NULL DEFAULT 1, \`token\` varchar(255) NULL, \`data_criacao\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`data_atualizacao\` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, UNIQUE INDEX \`IDX_28cd8597e57c8197d4929a98e7\` (\`cpf\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_28cd8597e57c8197d4929a98e7\` ON \`usuario\``);
        await queryRunner.query(`DROP TABLE \`usuario\``);
    }

}
