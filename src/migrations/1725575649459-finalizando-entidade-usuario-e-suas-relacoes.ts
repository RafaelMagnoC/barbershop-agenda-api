import { MigrationInterface, QueryRunner } from "typeorm";

export class FinalizandoEntidadeUsuarioESuasRelacoes1725575649459 implements MigrationInterface {
    name = 'FinalizandoEntidadeUsuarioESuasRelacoes1725575649459'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`contato\` (\`id\` varchar(36) NOT NULL, \`email\` varchar(255) NULL, \`telefone\` varchar(15) NULL, \`whatsapp\` varchar(15) NULL, \`instagram\` varchar(255) NULL, \`facebook\` varchar(255) NULL, \`data_criacao\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`data_atualizacao\` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, UNIQUE INDEX \`IDX_f0323061835775208d577ffabc\` (\`email\`), UNIQUE INDEX \`IDX_e685b2af0d985d1224d5b2a106\` (\`telefone\`), UNIQUE INDEX \`IDX_93eefd4667576c83602c8e6cb4\` (\`whatsapp\`), UNIQUE INDEX \`IDX_c8771133b3f956cb369f4ca31b\` (\`instagram\`), UNIQUE INDEX \`IDX_8b2415b7f877fc69e9d4309a13\` (\`facebook\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`endereco\` (\`id\` varchar(36) NOT NULL, \`logradouro\` varchar(255) NOT NULL, \`numero\` varchar(5) NOT NULL, \`bairro\` varchar(30) NOT NULL, \`cidade\` varchar(100) NOT NULL, \`uf\` char(2) NOT NULL, \`cep\` varchar(10) NOT NULL, \`complemento\` varchar(100) NULL, \`data_criacao\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`data_atualizacao\` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD \`contato_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD UNIQUE INDEX \`IDX_5daacc3bec5ab44e05e26d3e82\` (\`contato_id\`)`);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD \`endereco_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD UNIQUE INDEX \`IDX_7227109ed06a73f9b83c2a3b24\` (\`endereco_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_5daacc3bec5ab44e05e26d3e82\` ON \`usuario\` (\`contato_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_7227109ed06a73f9b83c2a3b24\` ON \`usuario\` (\`endereco_id\`)`);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD CONSTRAINT \`FK_5daacc3bec5ab44e05e26d3e826\` FOREIGN KEY (\`contato_id\`) REFERENCES \`contato\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD CONSTRAINT \`FK_7227109ed06a73f9b83c2a3b240\` FOREIGN KEY (\`endereco_id\`) REFERENCES \`endereco\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP FOREIGN KEY \`FK_7227109ed06a73f9b83c2a3b240\``);
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP FOREIGN KEY \`FK_5daacc3bec5ab44e05e26d3e826\``);
        await queryRunner.query(`DROP INDEX \`REL_7227109ed06a73f9b83c2a3b24\` ON \`usuario\``);
        await queryRunner.query(`DROP INDEX \`REL_5daacc3bec5ab44e05e26d3e82\` ON \`usuario\``);
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP INDEX \`IDX_7227109ed06a73f9b83c2a3b24\``);
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP COLUMN \`endereco_id\``);
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP INDEX \`IDX_5daacc3bec5ab44e05e26d3e82\``);
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP COLUMN \`contato_id\``);
        await queryRunner.query(`DROP TABLE \`endereco\``);
        await queryRunner.query(`DROP INDEX \`IDX_8b2415b7f877fc69e9d4309a13\` ON \`contato\``);
        await queryRunner.query(`DROP INDEX \`IDX_c8771133b3f956cb369f4ca31b\` ON \`contato\``);
        await queryRunner.query(`DROP INDEX \`IDX_93eefd4667576c83602c8e6cb4\` ON \`contato\``);
        await queryRunner.query(`DROP INDEX \`IDX_e685b2af0d985d1224d5b2a106\` ON \`contato\``);
        await queryRunner.query(`DROP INDEX \`IDX_f0323061835775208d577ffabc\` ON \`contato\``);
        await queryRunner.query(`DROP TABLE \`contato\``);
    }

}
