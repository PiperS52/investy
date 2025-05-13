import { Module } from '@nestjs/common';
import { DataRetentionController } from './data-retention.controller';
import { DataRetentionService } from './data-retention.service';

@Module({
  imports: [],
  controllers: [DataRetentionController],
  providers: [DataRetentionService],
})
export class DataRetentionModule {}
