import { Controller, Get } from '@nestjs/common';
import { DataRetentionService } from './data-retention.service';

@Controller()
export class DataRetentionController {
  constructor(private readonly dataRetentionService: DataRetentionService) {}

  @Get()
  getHello(): string {
    return this.dataRetentionService.getHello();
  }
}
