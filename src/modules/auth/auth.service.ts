import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { AppDataSource } from "src/data-source";
import { User } from "src/entity/User";
import {
  SignUpResponseUserDto,
  SignUpUserDto,
  UserDto,
} from "src/types/user.type";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  private checkValidateParams(username: string, password: string) {
    if (!username) throw Error("Username can't be empty");
    // password length and strong test is not implemented
    if (!password) throw Error("Password can't be empty");
    return true;
  }

  async validateUser(username: string, password: string): Promise<UserDto> {
    this.checkValidateParams(username, password);
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({
      where: { username },
      relations: { password: true },
    });
    if (!user) throw Error("Username or password is incorrect!");
    const isMatch = await bcrypt.compare(password, user?.password?.password);
    if (!isMatch) throw Error("Username or password is incorrect");
    delete user["password"];
    return user;
  }

  login(user: UserDto): string {
    return this.jwtService.sign({ ...user });
  }

  async signup(data: SignUpUserDto): Promise<SignUpResponseUserDto> {
    return await this.userService.createUser(data);
  }
}
