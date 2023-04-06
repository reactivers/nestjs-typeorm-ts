import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Password } from "./Password";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  // Id is used as unique identifier
  // for
  @Column({ unique: true })
  username: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  // To prevent sending password in respose
  @OneToOne(() => Password, { cascade: true })
  @JoinColumn()
  password: Password;
}
