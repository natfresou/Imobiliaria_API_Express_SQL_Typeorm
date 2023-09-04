import { MigrationInterface, QueryRunner } from "typeorm";

export class FixRealEstateEntity1693852291800 implements MigrationInterface {
    name = 'FixRealEstateEntity1693852291800'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT 'false'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT false`);
    }

}
