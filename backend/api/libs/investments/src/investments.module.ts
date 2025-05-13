import { Module } from '@nestjs/common';
import { InvestmentsService } from './investments.service';

@Module({
  providers: [InvestmentsService],
  exports: [InvestmentsService],
})
export class InvestmentsModule {}
