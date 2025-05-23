export interface IFilterToken {
  pair_age_min?: number;
  pair_age_max?: number;
  min_liquidity?: number;
  max_liquidity?: number;
  min_marketcap?: number;
  max_marketcap?: number;
  min_holder?: number;
  max_holder?: number;

  min_24h_txns?: number;
  max_24h_txns?: number;
  min_1h_txns?: number;
  max_1h_txns?: number;
  min_6h_txns?: number;
  max_6h_txns?: number;
  min_5m_txns?: number;
  max_5m_txns?: number;

  min_24h_volumes?: number;
  max_24h_volumes?: number;
  min_1h_volumes?: number;
  max_1h_volumes?: number;
  min_6h_volumes?: number;
  max_6h_volumes?: number;
  min_5m_volumes?: number;
  max_5m_volumes?: number;

  contract_verified?: boolean;
  not_honeypot?: boolean;
  renounced_ownership?: boolean;
  lp_burned?: boolean;
  min_insider_rate?: number;
  max_insider_rate?: number;
}

export interface IFilterListingDate {
  fromTime?: number;
  endTime?: number;
  exactTime?: number;
}

export interface IFilterLiquidity {
  fromAmount?: number;
  endAmount?: number;
  exactAmount?: number;
}

export interface IFilterMarketCap {
  fromAmount?: number;
  endAmount?: number;
  exactAmount?: number;
}

export interface IFilterHolder {
  fromAmount?: number;
  endAmount?: number;
  exactAmount?: number;
}

export interface IFilterTransaction {
  fromAmount?: number;
  endAmount?: number;
  exactAmount?: number;
}

export interface IFilterVolume {
  fromAmount?: number;
  endAmount?: number;
  exactAmount?: number;
}

export interface IFilterDegenAudit {
  fromAmount?: number;
  endAmount?: number;
}

export interface IFilterDegenAuditCheckbox {
  all: string;
  not_honeypot: string;
  contract_verified: string;
  renounced_ownership: string;
  lp_burned: string;
}
