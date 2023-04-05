import { Reflector } from "@nestjs/core";
import "reflect-metadata";
import { JwtAuthGuard } from "../modules/auth/auth-guard/jwt-auth.guard";

const getJWTGuard = () => {
  const reflector = new Reflector();
  const jwtGuard = new JwtAuthGuard(reflector);
  return jwtGuard;
};

export default getJWTGuard;
