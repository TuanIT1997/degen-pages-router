import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Head from "next/head";

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
  dex_exchange?: string;
  updated_time?: string;
  block_number?: string;
  log_index?: string;
  quote_address?: string;
}

type Repo = {
  data: TokenInfo;
  error_code: string;
};

export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await fetch(
    "https://api.degen.limo/token/info?chain=ethereum&contract_address=0x593e5deaac1c04ee48d3259d77c31d0e2176f1b4"
  );
  const repo: Repo = await res.json();
  // Pass data to the page via props
  return { props: { repo } };
}) satisfies GetServerSideProps<{ repo: Repo }>;

export default function Page({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data: product } = repo;
  return (
    <main>
      <Head>
        <title>{`${product.symbol} $${product.price_in_usd} / Ethereum / ${product.dex_exchange}`}</title>
        <meta name="description" content={`${product.description}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content={`${product.symbol} $${product.price_in_usd} / Ethereum / ${product.dex_exchange}`}
        />
        <meta property="og:description" content={`${product.description}`} />
        <meta property="og:image" content={`${product.token_banner}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${product.symbol} $${product.price_in_usd} / Ethereum / ${product.dex_exchange}`} />
        <meta name="twitter:description" content={`${product.description}`} />
        <meta name="twitter:image" content={`https://degen-pages-router.vercel.app/api/generate-image`} />
      </Head>
      <p>{repo.error_code}</p>
    </main>
  );
}
