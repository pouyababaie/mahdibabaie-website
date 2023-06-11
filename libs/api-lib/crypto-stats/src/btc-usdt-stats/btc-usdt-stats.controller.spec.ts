import { Test, TestingModule } from '@nestjs/testing';
import { BtcUsdtStatsController } from './btc-usdt-stats.controller';

describe('BtcUsdtStatsController', () => {
  let controller: BtcUsdtStatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BtcUsdtStatsController],
    }).compile();

    controller = module.get<BtcUsdtStatsController>(BtcUsdtStatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
