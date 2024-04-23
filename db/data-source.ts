//sample for generating migrations

import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    url: "postgres://default:PXruE40hsapZ@ep-fancy-pond-a4ucyhxe.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
    // host: process.env.DB_HOST || 'localhost',
    port: 5432,
    // username: process.env.USER_NAME || 'postgres',
    // password: process.env.PASSWORD || 'postgres',
    // database: process.env.DATABASE || 'arte7',
    entities: ['dist/**/*.entity.js'],
    dropSchema: true,
    synchronize: true,
    migrations: ['dist/shared/migrations/**/*{.ts,.js}'],
    migrationsRun: false,
    ssl: {
        rejectUnauthorized: false,
    }

};

console.log(dataSourceOptions);


const dataSource = new DataSource(dataSourceOptions);
export default dataSource;

/**
 * Command for generating migrations
 * npm run typeorm -- -d dist/db/data-source.js migration:generate ./src/shared/migrations/newMigration
 * / */
