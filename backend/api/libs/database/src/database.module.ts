import { Module } from '@nestjs/common';
import databaseConfig from '@app/config/database.config';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forFeature(databaseConfig)],
      useFactory: (config: ConfigType<typeof databaseConfig>) => config,
      inject: [databaseConfig.KEY],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
