import { Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Investment } from './entities/investment.entity';

@Injectable()
export class InvestmentsService {
  private readonly logger = new Logger(InvestmentsService.name);

  constructor(
    @InjectRepository(Investment)
    private readonly investmentRepository: Repository<Investment>,
  ) {}

  async findAll() {
    return this.investmentRepository
      .createQueryBuilder('investment')
      .orderBy('investment.closing_date', 'DESC')
      .getMany();
  }
}
