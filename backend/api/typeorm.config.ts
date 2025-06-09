import { config } from 'dotenv';
import { DataSource } from 'typeorm';

import databaseConfig from './libs/config/src/database.config';

config();

const buildDataSource = async () => {
  const config = await databaseConfig();
  return new DataSource({
    ...config,
    entities: [__dirname + '/**/*.entity.ts'],
  });
};

export default buildDataSource();
