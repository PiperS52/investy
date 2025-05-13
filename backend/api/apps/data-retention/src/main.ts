import { NestFactory } from '@nestjs/core';
import { DataRetentionModule } from './data-retention.module';

async function bootstrap() {
  const app = await NestFactory.create(DataRetentionModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
