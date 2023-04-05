import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JWT_SECRET } from "src/utils/constants";
import { UserModule } from "../user/user.module";
import { JwtStrategy } from "./auth-guard/jwt.strategy";
import { LocalStrategy } from "./auth-guard/local.strategy";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

export const AuthModuleConfig = {
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: "60m" },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
};

@Module(AuthModuleConfig)
export class AuthModule {}
