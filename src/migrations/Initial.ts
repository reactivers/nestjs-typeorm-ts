import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1679177705368 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection.synchronize();
    // For up initial up
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection.synchronize();
    // For up initial down
  }
}
