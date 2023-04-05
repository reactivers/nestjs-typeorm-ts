import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UserDto } from "src/types/user.type";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<UserDto> {
    try {
      return await this.authService.validateUser(username, password);
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
