import { SignUpUserDto } from "src/types/user.type";

export const testUser: SignUpUserDto = {
  username: "muratguney",
  firstName: "Murat",
  lastName: "Guney",
  password: "123",
};

export const invalidUsers: SignUpUserDto[] = [
  {
    username: "",
    firstName: "",
    lastName: "",
    password: "",
  },
  {
    username: "muratguney",
    firstName: "",
    lastName: "",
    password: "",
  },
  {
    username: "muratguney",
    firstName: "Murat",
    lastName: "",
    password: "",
  },
  {
    username: "muratguney",
    firstName: "Murat",
    lastName: "Guney",
    password: "",
  },
];
