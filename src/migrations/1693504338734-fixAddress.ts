import { MigrationInterface, QueryRunner } from "typeorm";

export class FixAddress1693504338734 implements MigrationInterface {
    name = 'FixAddress1693504338734'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_75facd1c24e1de014d33f1c4a42"`);
        await queryRunner.query(`ALTER TABLE "realEstates" RENAME COLUMN "adressId" TO "addressId"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ALTER COLUMN "sold" SET DEFAULT 'false'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT 'false'`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_c7a1c763ff260ac28674afa8c60" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_c7a1c763ff260ac28674afa8c60"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "realEstates" ALTER COLUMN "sold" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "realEstates" RENAME COLUMN "addressId" TO "adressId"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_75facd1c24e1de014d33f1c4a42" FOREIGN KEY ("adressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
