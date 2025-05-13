import { Injectable } from '@nestjs/common';

@Injectable()
export class DataRetentionService {
  getHello(): string {
    return 'Hello World!';
  }
}
