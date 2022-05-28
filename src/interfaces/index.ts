interface Istock {
  language: string;
  region: string;
  quoteType: string;
  typeDisp: string;
  quoteSourceName: string;
  triggerable: boolean;
  customPriceAlertConfidence: string;
  currency: string;
  exchange: string;
  shortName: string;
  longName: string;
  messageBoardId: string;
  exchangeTimezoneName: string;
  exchangeTimezoneShortName: string;
  gmtOffSetMilliseconds: number;
  market: string;
  esgPopulated: boolean;
  firstTradeDateMilliseconds: number;
  priceHint: number;
  postMarketChangePercent: number;
  postMarketTime: number;
  postMarketPrice: number;
  postMarketChange: number;
  regularMarketChange: number;
  regularMarketChangePercent: number;
  regularMarketTime: number;
  regularMarketPrice: number;
  regularMarketDayHigh: number;
  regularMarketDayRange: string;
  regularMarketDayLow: number;
  regularMarketVolume: number;
  regularMarketPreviousClose: number;
  bid: number;
  ask: number;
  bidSize: number;
  marketState: string;
  askSize: number;
  fullExchangeName: string;
  financialCurrency: string;
  regularMarketOpen: number;
  averageDailyVolume3Month: number;
  averageDailyVolume10Day: number;
  fiftyTwoWeekLowChange: number;
  fiftyTwoWeekLowChangePercent: number;
  fiftyTwoWeekRange: string;
  fiftyTwoWeekHighChange: number;
  fiftyTwoWeekHighChangePercent: number;
  fiftyTwoWeekLow: number;
  fiftyTwoWeekHigh: number;
  earningsTimestamp: number;
  earningsTimestampStart: number;
  earningsTimestampEnd: number;
  trailingAnnualDividendRate: number;
  trailingAnnualDividendYield: number;
  epsTrailingTwelveMonths: number;
  epsForward: number;
  epsCurrentYear: number;
  priceEpsCurrentYear: number;
  sharesOutstanding: number;
  bookValue: number;
  fiftyDayAverage: number;
  fiftyDayAverageChange: number;
  fiftyDayAverageChangePercent: number;
  twoHundredDayAverage: number;
  twoHundredDayAverageChange: number;
  twoHundredDayAverageChangePercent: number;
  marketCap: number;
  forwardPE: number;
  priceToBook: number;
  sourceInterval: number;
  exchangeDataDelayedBy: number;
  pageViewGrowthWeekly: number;
  averageAnalystRating: string;
  tradeable: boolean;
  symbol: string;
}

interface ICrypto {
  name: string;
  enabled: boolean;
  postOnly: boolean;
  priceIncrement: number;
  sizeIncrement: number;
  minProvideSize: number;
  last: number;
  bid: number;
  ask: number;
  price: number;
  type: string;
  baseCurrency: string;
  isEtfMarket: boolean;
  quoteCurrency: string;
  underlying?: any;
  restricted: boolean;
  highLeverageFeeExempt: boolean;
  largeOrderThreshold: number;
  change1h: number;
  change24h: number;
  changeBod: number;
  quoteVolume24h: number;
  volumeUsd24h: number;
  priceHigh24h: number;
  priceLow24h: number;
}

export interface Ifinance {
  quoteResponse: {
    result: Istock[];
    error: any;
  };
}

export interface Iftx {
  sucess: boolean;
  result: ICrypto;
}
