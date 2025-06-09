import { Test, TestingModule } from '@nestjs/testing';
import { DataRetentionController } from './data-retention.controller';
import { DataRetentionService } from './data-retention.service';

describe('DataRetentionController', () => {
  let dataRetentionController: DataRetentionController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DataRetentionController],
      providers: [DataRetentionService],
    }).compile();

    dataRetentionController = app.get<DataRetentionController>(
      DataRetentionController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(dataRetentionController.getHello()).toBe('Hello World!');
    });
  });
});
