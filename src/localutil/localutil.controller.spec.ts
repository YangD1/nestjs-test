import { Test, TestingModule } from '@nestjs/testing';
import { LocalutilController } from './localutil.controller';

describe('LocalutilController', () => {
  let controller: LocalutilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocalutilController],
    }).compile();

    controller = module.get<LocalutilController>(LocalutilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
