import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { InvestmentsController } from './investments.controller';
import { InvestmentsService } from './investments.service';
import { investments } from '@test-data/investments';

describe('InvestmentsController', () => {
  let investmentsController: InvestmentsController;
  // let service: InvestmentsService;
  const mockInvestmentsService = {
    findAll: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvestmentsController],
      providers: [
        {
          provide: InvestmentsService,
          useValue: mockInvestmentsService,
        },
      ],
    }).compile();

    investmentsController = module.get<InvestmentsController>(
      InvestmentsController,
    );
  });

  it('should be defined', () => {
    expect(InvestmentsController).toBeDefined();
  });

  // it('should call getAllInvestments', async () => {
  //   const result = [];
  //   jest.spyOn(service, 'getAllInvestments').mockResolvedValue(result);

  //   expect(await controller.getAllInvestments({})).toBe(result);
  //   expect(service.getAllInvestments).toHaveBeenCalled();
  // });

  describe('getAllInvestments', () => {
    it('should return an array of investments', async () => {
      mockInvestmentsService.findAll.mockResolvedValue(investments);
      const result = await investmentsController.getAllInvestments({});
      expect(result).toEqual(investments);
      expect(mockInvestmentsService.findAll).toHaveBeenCalled();
    });

    // it('should throw NotFoundException if no investments found', async () => {
    //   mockInvestmentsService.findAll.mockResolvedValue([]);
    //   await expect(investmentsController.getAllInvestments({})).rejects.toThrow(NotFoundException);
    // });
  });
});
