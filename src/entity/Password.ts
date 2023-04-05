import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// Created for preventing to send password in respose
@Entity()
export class Password {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  password: string;
}
