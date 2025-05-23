export type SecurityInfo = {
  anti_whale_modifiable: string;
  buy_tax: string;
  can_take_back_ownership: string;
  cannot_buy: string;
  cannot_sell_all: string;
  creator_address: string;
  creator_balance: string;
  creator_percent: string;
  external_call: string;
  hidden_owner: string;
  holder_count: string;
  holders: SecurityInfoHolder[];
  honeypot_with_same_creator: string;
  is_anti_whale: string;
  is_blacklisted: string;
  is_honeypot: string;
  is_in_dex: string;
  is_mintable: string;
  is_open_source: string;
  is_proxy: string;
  is_whitelisted: string;
  owner_address: string;
  owner_balance: string;
  owner_change_balance: string;
  owner_percent: string;
  personal_slippage_modifiable: string;
  selfdestruct: string;
  sell_tax: string;
  slippage_modifiable: string;
  token_name: string;
  token_symbol: string;
  total_supply: string;
  trading_cooldown: string;
  transfer_pausable: string;
  is_renounced: boolean;
  lp_holder_count: string;
  freezable: {
    status: string;
  };
  mintable: {
    status: string;
  };
};

export interface SecurityInfoHolder {
  address: string;
  tag: string;
  is_contract: number;
  balance: string;
  percent: string;
  is_locked: number;
  locked_detail?: SecurityInfoLockedDetail[];
}

export interface SecurityInfoLockedDetail {
  amount: string;
  end_time: string;
  opt_time: string;
}

export const TokenSecurityLabel = {
  is_open_source: "Contract Verified",
  is_proxy: "Proxy Contract",
  is_mintable: "Mintable",
  can_take_back_ownership: "Reclaimable Ownership",
  owner_change_balance: "Owner can change balance",
  hidden_owner: "Hidden Owner",
  selfdestruct: "Includes selfdestruct()",
  external_call: "External Call",
  gas_abuse: "Abuses Gas",
  buy_tax: "Buy Tax",
  sell_tax: "Sell Tax",
  is_buyable: "Buyable",
  cannot_sell_all: "Can't sell all",
  slippage_modifiable: "Tax Modifiable",
  is_honeypot: "Honeypot",
  transfer_pausable: "Transfer Pausable",
  is_blacklisted: "Has Blacklist",
  is_whitelisted: "Has Whitelist",
  is_anti_whale: "Anti-whale Mechanism",
  trading_cooldown: "Trading Cooldown",
  is_fake_token: "Fake Token",
  is_airdrop_scam: "Airdrop Scam",
  trust_list: "Trusted",
  is_renounced: "Ownership Renounced",
  holder_count: "Holder Count",
  lp_holder_count: "LP Holder Count",
  creator_address: "Creator Address",
  creator_balance: "Creator Balance",
  owner_address: "Owner Address",
  owner_balance: "Owner Balance",
};

export const TokenSecurityMessage = {
  //Contract Security
  is_open_source:
    "Whether the contract for this token is open source. Contracts that aren't open source may hide various unknown mechanisms and can increase risks significantly",
  is_proxy:
    "Whether this token uses a proxy contract. Most proxy contracts are accompanied by modifiable implementation contracts, which may contain significant potential risk",
  is_mintable: "Whether this contract has the function to mint new tokens",
  can_take_back_ownership:
    "Whether or not this contract contains a function that allows the project owner to regain ownership even after relinquishing it.",
  owner_change_balance: "Whether the contract owner can change token holder balances",
  hidden_owner: "Whether the contract has hidden owners",
  selfdestruct:
    "If a self-destruct function exists and is triggered, the contract will be destroyed, all functions will be unavailable, and all related assets will be erased.",
  external_call:
    "Whether the contract can call functions in other contracts during the execution of primary methods",
  gas_abuse: "Indicates whether any gas abuse activity has been detected in this contract.",
  //Trading security
  buy_tax:
    "Whether or not this token contract includes a buy tax. A buy tax will cause the actual token value received to be less than the amount paid. An excessive buy tax may lead to heavy losses.",
  sell_tax:
    "Whether or not this token contract includes a sell tax. A sell tax will cause the actual value received when selling a token to be less than expected, and too much sell tax may lead to large losses.",
  is_buyable:
    "Whether or not this token can be purchased directly by users. Generally, these unbuyable tokens would be found in Reward Tokens. Such tokens are issued as rewards for some on-chain applications.",
  cannot_sell_all:
    "Whether the contract has the function to restrict token holders from selling their entire position",
  slippage_modifiable: "Whether buy/sell tax can be modified in the token contract",
  is_honeypot:
    "Whether the token is a honeypot, a token that can't be sold due to malicious code on its contract",
  transfer_pausable: "Whether trading can be paused by the token contract",
  is_blacklisted:
    "Whether the blacklist function is included in the contract. If there is a blacklist, some addresses may not be able to trade this token",
  is_whitelisted:
    "Whether the whitelist function is included in the contract. Whitelisting is mostly used to allow specific addresses to make early transactions, tax-free, and not affected by transaction suspension",
  is_anti_whale:
    "Whether the contract has the function to limit the maximum amount of transactions or the maximum token position for a single address",
  trading_cooldown:
    "Whether the contract has a trading-cool-down mechanism that can limit the minimum time between two transactions.",
  is_renounced:
    "Whether the contract creator has renounced ownership of this token and has no special privileges to control it",
  //Info security
  is_fake_token: "Whether or not this token is fake or real.",
  is_airdrop_scam: "Whether or not this token is an airdrop scam",
  trust_list: "Whether or not this token is a famous and trustworthy one.",
  holder_count: "Number of token holders",
  lp_holder_count: "Number of liquidity holders",
  creator_address: "Wallet address of contract creator",
  creator_balance: "The balance of the contract creator",
  owner_address: "Wallet address of contract owner",
  owner_balance: "Tokens held by the contract owner",
};
