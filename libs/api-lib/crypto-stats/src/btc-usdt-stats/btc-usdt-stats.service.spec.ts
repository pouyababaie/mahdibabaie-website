import { Test, TestingModule } from '@nestjs/testing';
import { BtcUsdtStatsService } from './btc-usdt-stats.service';

describe('BtcUsdtStatsService', () => {
  let service: BtcUsdtStatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BtcUsdtStatsService],
    }).compile();

    service = module.get<BtcUsdtStatsService>(BtcUsdtStatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
