import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { InvestmentsController } from './investments.controller';
import { InvestmentsService } from './investments.service';

describe('InvestmentsController', () => {
  let controller: InvestmentsController;
  let service: InvestmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvestmentsController],
      providers: [
        {
          provide: InvestmentsService,
          useValue: {
            getAllInvestments: jest.fn(),
            getInvestmentById: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<InvestmentsController>(InvestmentsController);
    service = module.get<InvestmentsService>(InvestmentsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call getAllInvestments', async () => {
    const result = [];
    jest.spyOn(service, 'getAllInvestments').mockResolvedValue(result);

    expect(await controller.getAllInvestments({})).toBe(result);
    expect(service.getAllInvestments).toHaveBeenCalled();
  });
});
