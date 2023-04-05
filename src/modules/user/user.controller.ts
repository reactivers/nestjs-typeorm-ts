import { Controller, Get, Request } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { AppResponse } from "src/types/common.type";
import { AuthenticatedRequest, UserDto } from "src/types/user.type";
import { UserService } from "./user.service";

@Controller("/user")
export class UserController {
  constructor(private readonly userSevice: UserService) {}

  @Get("profile")
  @ApiBearerAuth("JWT")
  async getProfile(
    @Request() req: AuthenticatedRequest,
  ): Promise<AppResponse<UserDto>> {
    try {
      const user = await this.userSevice.getUser(req.user.username);
      return {
        success: true,
        data: user,
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
