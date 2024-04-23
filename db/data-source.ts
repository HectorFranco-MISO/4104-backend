//sample for generating migrations

import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    // host: process.env.DB_HOST || 'localhost',
    url: 'postgres://admin:KUhXnWPfxk3vlR0QO7bAvC0uciwXo3gA@dpg-cojfmsn109ks73f9ed3g-a/db_streamflix',
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
    },
    extra: {
        ssl: true
    }

};

console.log(dataSourceOptions);


const dataSource = new DataSource(dataSourceOptions);
export default dataSource;

/**
 * Command for generating migrations
 * npm run typeorm -- -d dist/db/data-source.js migration:generate ./src/shared/migrations/newMigration
 * / */
