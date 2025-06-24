import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateInvestmentsTable1750418436740 implements MigrationInterface {
  name = 'CreateInvestmentsTable1750418436740';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "investments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(255) NOT NULL, "short_description" character varying(750) NOT NULL, "long_description" character varying(3000) NOT NULL, "funds_raised" integer NOT NULL, "funds_target" integer NOT NULL, "number_of_investors" smallint NOT NULL, "category" character varying(255) NOT NULL, "location" character varying(255) NOT NULL, "closing_date" date NOT NULL, "problem_statement" character varying(750) NOT NULL, "solution_statement" character varying(750) NOT NULL, "use_of_funds" character varying(750) NOT NULL, "customers" character varying(750) NOT NULL, CONSTRAINT "PK_a1263853f1a4fb8b849c1c9aff4" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "investments"`);
  }
}
