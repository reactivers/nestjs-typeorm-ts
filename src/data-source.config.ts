import { DataSourceOptions } from "typeorm";
import {
  POSTGRES_DATABASE,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_SCHEMA,
} from "./utils/constants";
import { isTest } from "./utils/functions";

const testConfig: DataSourceOptions = {
  type: "sqlite",
  synchronize: true,
  logging: false,
  dropSchema: true,
  database: ":memory:",
};

const defaultConfig: DataSourceOptions = {
  type: "postgres",
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  synchronize: false,
  logging: false,
  dropSchema: false,
  username: "postgres",
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DATABASE,
  schema: POSTGRES_SCHEMA,
};

export const dbConfig = isTest() ? testConfig : defaultConfig;
