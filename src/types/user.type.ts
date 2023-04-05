import { ApiProperty } from "@nestjs/swagger";

export declare type AuthenticatedRequest = ParameterDecorator & {
  user: UserDto;
};

export class UserDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;
}

export class SignUpUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;
}

export class SignUpResponseUserDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;
}

export class SignInUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}
