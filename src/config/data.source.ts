import { DataSource } from 'typeorm';
import { DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

require('dotenv').config();

export const Config: DataSourceOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    synchronize: true,
    // synchronize: process.env.MODE === "dev",
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    migrations: [__dirname + '/../**/db/seed/*.{ts,js}'],
    logging: true,
    namingStrategy: new SnakeNamingStrategy(),
}
export const AppDataSource = new DataSource(Config);