import { BaseResponse } from "@/types/service.type";
import { axiosInstanceApp } from "@/utils/axios-instance";

export const tokenService = {
  getInfo: async (params: { chain: ChainType; contract_address: string }) => {
    const { data } = await axiosInstanceApp().get<BaseResponse<TokenInfo>>("/token/info", {
      params,
    });
    return data;
  },
};

export enum ChainType {
  ethereum = "ethereum",
  solana = "solana",
}

export interface TokenInfo {
  contract_address?: string;
  token_address?: string;
  symbol?: string;
  name?: string;
  quote?: string;
  init_liquid_base?: number;
  init_liquid_quote?: number;
  pair_created?: string;
  telegram?: string;
  twitter_username?: string;
  website?: string;
  description?: string;
  token_logo?: string;
  token_banner?: string;
  liquidity?: number;
  liquid_base?: number;
  liquid_quote?: number;
  liquid_base_usd?: number;
  liquid_quote_usd?: number;
  quote_price_in_usd?: number;
  price_in_quote?: number;
  price_in_usd?: number;
  marketcap_in_usd?: number;
  marketcap_in_quote?: number;
  fdv?: number;
  total_txns?: string;
  total_volumes?: number;
  total_makers?: string;
  total_holders?: string;
  "5m_txns"?: string;
  "5m_volumes"?: number;
  "5m_makers"?: string;
  "5m_buys"?: string;
  "5m_sells"?: string;
  "5m_buyers"?: string;
  "5m_sellers"?: string;
  "5m_buy_vol"?: number;
  "5m_sell_vol"?: number;
  "5m_holders"?: string;
  "1h_txns"?: string;
  "1h_volumes"?: number;
  "1h_makers"?: string;
  "1h_buys"?: string;
  "1h_sells"?: string;
  "1h_buyers"?: string;
  "1h_sellers"?: string;
  "1h_buy_vol"?: number;
  "1h_sell_vol"?: number;
  "1h_holders"?: string;
  "6h_txns"?: string;
  "6h_volumes"?: number;
  "6h_makers"?: string;
  "6h_buys"?: string;
  "6h_sells"?: string;
  "6h_buyers"?: string;
  "6h_sellers"?: string;
  "6h_buy_vol"?: number;
  "6h_sell_vol"?: number;
  "6h_holders"?: string;
  "24h_txns"?: string;
  "24h_volumes"?: number;
  "24h_makers"?: string;
  "24h_buys"?: string;
  "24h_sells"?: string;
  "24h_buyers"?: string;
  "24h_sellers"?: string;
  "24h_buy_vol"?: number;
  "24h_sell_vol"?: number;
  "24h_holders"?: string;
  "5m_change"?: number;
  "1h_change"?: number;
  "6h_change"?: number;
  "24h_change"?: number;
  top_trending_6h?: number;
  dex_exchange?: DEX_EXCHANGE;
  updated_time?: string;
  block_number?: string;
  log_index?: string;
  quote_address?: string;
}

export enum DEX_EXCHANGE {
  "uniswapv2" = "uniswapv2",
  "uniswapv3" = "uniswapv3",
  "sushiswap" = "sushiswap",
  "pancakeswap" = "pancakeswap",
  "quick" = "quick",
  "spookyswap" = "spookyswap",
  "comethswap" = "comethswap",
  "raydium" = "raydium",
}
