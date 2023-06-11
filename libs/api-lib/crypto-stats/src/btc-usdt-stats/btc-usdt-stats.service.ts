import {Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {Config} from "../lib/configs/vendors";
import {Observable} from "rxjs";
import {WallexMarketResponse} from "../wallex-market.interface";
import {AxiosResponse} from "axios";

@Injectable()
export class BtcUsdtStatsService {
  constructor(private readonly httpService: HttpService) {
  }

  getAllWallexMarkets(): Observable<AxiosResponse<WallexMarketResponse[]>> {
    return this.httpService.get(Config.API_ENDPOINT + 'markets')
  }

  getSingleWallexMarket(){
    return this.httpService.get(Config.API_ENDPOINT+ 'markets')
  }

}
