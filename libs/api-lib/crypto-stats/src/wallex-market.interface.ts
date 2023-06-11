interface SymbolStats {
  bidPrice: string,
  askPrice: string,
  '24h_ch': number,
  '7d_ch': number,
  '24h_volume': string,
  '7d_volume': string,
  '24h_quoteVolume': string,
  '24h_highPrice': string,
  '24h_lowPrice': string,
  lastPrice: string,
  lastQty: string,
  lastTradeSide: 'BUY' | 'SELL',
  bidVolume: string,
  askVolume: string,
  bidCount: number,
  askCount: number,
  direction: {
    SELL: number,
    BUY: number
  }
}

interface WallexSymbol {
  symbol: string,
  baseAsset: string,
  baseAssetPrecision: number,
  quoteAsset: string,
  quotePrecision: number,
  faName: string,
  faBaseAsset: string,
  faQuoteAsset: string,
  stepSize: number,
  tickSize: number,
  minQty: number,
  minNotional: number,
  stats: SymbolStats,
  createdAt: string
}

interface WallexMarket {
  [symbol: string]: WallexSymbol
}

interface Result {
  symbols: WallexMarket
}

export interface WallexMarketResponse {
  success: boolean,
  message: string,
  result: Result
}
