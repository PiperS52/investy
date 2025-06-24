import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { CreateInvestmentsTable1750418436740 } from '@app/database/migrations/1750418436740-create-investments-table';
import { registerAs } from '@nestjs/config';
import { getEnv } from './helpers';

export default registerAs(
  'database',
  async (): Promise<PostgresConnectionOptions> => {
    const config: DatabaseConfig = {
      type: 'postgres' as const,
      host: getEnv('DB_HOST'),
      port: getEnv('DB_PORT') as unknown as number,
      username: getEnv('DB_USERNAME'),
      password: getEnv('DB_PASSWORD'),
      database: getEnv('DB_NAME'),
      autoLoadEntities: true as const,
      connectTimeoutMS: 15000 as const,
      extra: {
        query_timeout: 10000 as const,
      },
      migrations: [CreateInvestmentsTable1750418436740],
      migrationsRun: getEnv('DB_MIGRATIONS_RUN') === 'true',
    };
    return config;
  },
);

interface DatabaseConfig extends PostgresConnectionOptions {
  autoLoadEntities: true;
}
