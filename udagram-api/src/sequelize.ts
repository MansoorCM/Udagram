import { Sequelize } from "sequelize-typescript";
// const { Sequelize, DataTypes, Model } = require("sequelize");
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: config.port,

  dialect: "postgres",
  storage: ":memory:",
});


// export const sequelize = new Sequelize(
//   'postgres://postgres:$amazon&postgres@database-1.c8nh2w9fho6o.us-east-1.rds.amazonaws.com:5432/postgres'
// );
