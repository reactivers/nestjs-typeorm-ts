import { DataSource, DataSourceOptions } from "typeorm";
import { dbConfig } from "./data-source.config";
import { Password } from "./entity/Password";
import { User } from "./entity/User";
import { Initial1679177705368 } from "./migrations/Initial";

const dataSourceConfig: DataSourceOptions = {
  ...dbConfig,
  entities: [User, Password],
  migrations: [Initial1679177705368],
};

let AppDataSource: DataSource = new DataSource(dataSourceConfig);

const createDataSource = async () => {
  AppDataSource = new DataSource(dataSourceConfig);
  await AppDataSource.initialize();
  await AppDataSource.runMigrations();
};

export { AppDataSource, createDataSource };
