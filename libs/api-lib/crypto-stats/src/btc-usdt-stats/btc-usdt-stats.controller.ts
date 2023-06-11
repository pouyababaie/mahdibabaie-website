import {Controller, Get, Param} from '@nestjs/common';
import {BtcUsdtStatsService} from "./btc-usdt-stats.service";

@Controller('btc-usdt-stats')
export class BtcUsdtStatsController {
  get wallexMarketService(): BtcUsdtStatsService {
    return this._wallexMarketService;
  }
  private _wallexMarketService: BtcUsdtStatsService

  constructor(wallexMarketService: BtcUsdtStatsService
  ) {
    this._wallexMarketService = wallexMarketService;
  }

  @Get('markets')
  getAllMarkets() {
    return this.wallexMarketService.getAllWallexMarkets()
  }

  @Get('specified')
  getSingleMarket(@Param() name:string){
    return this.wallexMarketService.getAllWallexMarkets()
  }
}
