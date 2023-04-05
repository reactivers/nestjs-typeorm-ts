import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { ILoginResponse } from "src/types/auth.type";
import { AppResponse } from "src/types/common.type";
import {
  AuthenticatedRequest,
  SignInUserDto,
  SignUpResponseUserDto,
  SignUpUserDto,
} from "src/types/user.type";
import { LocalAuthGuard } from "./auth-guard/local-auth.guard";
import { Public } from "./auth-guard/public.guard";
import { AuthService } from "./auth.service";

@Controller("/auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("signin")
  @Public()
  signin(
    @Request() req: AuthenticatedRequest,
    // The next line is for SwaggerUI
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Body() _?: SignInUserDto,
  ): AppResponse<ILoginResponse> {
    const token = this.authService.login(req.user);
    return {
      success: true,
      data: { token },
    };
  }

  @Public()
  @Post("signup")
  async signup(
    @Body() user: SignUpUserDto,
  ): Promise<AppResponse<SignUpResponseUserDto>> {
    try {
      const savedUser = await this.authService.signup(user);
      return {
        success: true,
        data: savedUser,
      };
    } catch (error) {
      console.log("error", error);
      return {
        success: false,
        error: {
          message: error.message,
        },
      };
    }
  }
}
