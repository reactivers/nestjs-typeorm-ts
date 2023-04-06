import { config } from "dotenv";

const ENV = () => process.env.NODE_ENV;

if (!ENV()) throw Error("ENV is not set!");

const getEnvExtension = () => {
  const env = ENV();
  if (env === "production") return "";
  return `.${env}`;
};

config({
  path: `.env${getEnvExtension()}`,
});

export const POSTGRES_HOST = process.env.POSTGRES_HOST;
export const POSTGRES_DATABASE = process.env.POSTGRES_DATABASE;
export const POSTGRES_SCHEMA = process.env.POSTGRES_SCHEMA;
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
export const POSTGRES_PORT = parseInt(process.env.POSTGRES_PORT);
export const JWT_SECRET = process.env.JWT_SECRET;
