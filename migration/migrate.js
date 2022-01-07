const fs = require('fs');
const path = require('path');
const merge = require('lodash/merge');

const mainConfig = JSON.parse(
  fs.readFileSync(path.resolve('config', 'main.json'), 'utf-8'),
);

const secretConfig = JSON.parse(
  fs.readFileSync(path.resolve('config', '.secrets.json'), 'utf-8'),
);

const envConfig = JSON.parse(
  fs.readFileSync(
    path.resolve('config', `${process.env.NODE_ENV || 'development'}.json`),
    'utf-8',
  ),
);

const migrationsConfig = JSON.parse(
  fs.readFileSync(path.resolve('config', `migrations.json`), 'utf-8'),
);

const dbConfig = merge(
  mainConfig,
  secretConfig,
  envConfig,
  migrationsConfig,
).db;

const dbConfigJSON = JSON.stringify(dbConfig, ' ', 4);

fs.writeFileSync(path.resolve('./ormconfig.json'), dbConfigJSON);
