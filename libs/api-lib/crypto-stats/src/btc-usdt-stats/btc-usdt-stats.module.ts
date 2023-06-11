import {Module} from '@nestjs/common';
import {BtcUsdtStatsController} from "./btc-usdt-stats.controller";
import {BtcUsdtStatsService} from "./btc-usdt-stats.service";
import {HttpModule} from "@nestjs/axios";

@Module({
  providers: [BtcUsdtStatsService],
  exports: [BtcUsdtStatsController],
  controllers: [BtcUsdtStatsController],
  imports:[HttpModule]
})
export class BtcUsdtStatsModule {
}
