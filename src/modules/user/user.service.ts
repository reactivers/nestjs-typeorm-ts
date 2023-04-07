import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { Password } from "src/entity/Password";
import { AppDataSource } from "../../data-source";
import { User } from "../../entity/User";
import {
  SignUpResponseUserDto,
  SignUpUserDto,
  UserDto,
} from "../../types/user.type";

@Injectable()
export class UserService {
  private checkSignUpParams(user: SignUpUserDto) {
    if (!user.username) throw Error("Username can't be empty");
    // password length and strong test is not implemented
    if (!user.password) throw Error("Password can't be empty");
    if (!user.firstName) throw Error("Firstname can't be empty");
    if (!user.lastName) throw Error("Lastname can't be empty");
    return true;
  }

  async getUserWithoutPassword(username: string): Promise<UserDto> {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ username });
    if (!user) throw Error("User not found!");
    delete (user as never)["password"];
    return user;
  }

  async getUser(username: string): Promise<UserDto> {
    return await this.getUserWithoutPassword(username);
  }

  async createUser(data: SignUpUserDto): Promise<SignUpResponseUserDto> {
    this.checkSignUpParams(data);
    const userRepository = AppDataSource.getRepository(User);
    const user = new User();
    user.username = data.username;
    user.firstName = data.firstName;
    user.lastName = data.lastName;
    const saltOrRounds = 10;
    const password = new Password();
    password.password = await bcrypt.hash(data.password, saltOrRounds);
    user.password = password;
    const savedUser = await userRepository.save(user);
    delete (savedUser as never)["password"];
    return savedUser;
  }
}
