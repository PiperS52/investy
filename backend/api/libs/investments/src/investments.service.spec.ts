import { Brackets, Equal, In } from 'typeorm';

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { investments } from '@test-data/investments';

import { Investment } from './entities/investment.entity';
import { InvestmentsService } from './investments.service';

jest.mock('typeorm', () => ({
  ...jest.requireActual('typeorm'),
  Brackets: jest.fn().mockImplementation((callback) => {
    callback({
      where: jest.fn(),
      andWhere: jest.fn(),
      orWhere: jest.fn(),
      orderBy: jest.fn(),
    });
    return 'mocked brackets';
  }),
}));

describe('InvestmentsService', () => {
  let investmentsService: InvestmentsService;
  const mockCreateQueryBuilder = jest.fn();
  const mockFindOneInvestment = jest.fn();
  const mockFindOneOrFail = jest.fn();
  const mockFind = jest.fn();

  const investment = investments[0];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InvestmentsService,
        {
          provide: getRepositoryToken(Investment),
          useFactory: () => ({
            createQueryBuilder: mockCreateQueryBuilder,
            findOne: mockFindOneInvestment,
            findOneOrFail: mockFindOneOrFail,
            find: mockFind,
          }),
        },
      ],
    }).compile();

    investmentsService = module.get<InvestmentsService>(InvestmentsService);
  });

  it('should be defined', () => {
    expect(investmentsService).toBeDefined();
  });

  describe('findAll', () => {
    const mockQueryBuilder = {
      createQueryBuilder: jest.fn().mockReturnThis(),
      getMany: jest.fn().mockResolvedValue(investments),
      orderBy: jest.fn().mockReturnThis(),
    };

    beforeEach(() => {
      mockCreateQueryBuilder.mockReturnValue(mockQueryBuilder);
    });

    it('should return an array of investments', async () => {
      const result = await investmentsService.findAll();
      expect(result).toEqual(investments);
      expect(result).toBeInstanceOf(Array);
      expect(mockCreateQueryBuilder).toHaveBeenCalledWith('investment');
      expect(mockQueryBuilder.orderBy).toHaveBeenCalledWith(
        'investment.closing_date',
        'DESC',
      );
      expect(mockQueryBuilder.getMany).toHaveBeenCalled();
    });
  });
});
