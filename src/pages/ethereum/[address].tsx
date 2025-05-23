import { ChainType, TokenInfo, tokenService } from "@/services/token.service";
import { BaseResponse } from "@/types/service.type";
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import Head from "next/head";

type Repo = BaseResponse<TokenInfo>;

export const getServerSideProps = (async (context: GetServerSidePropsContext) => {
  const address = context.params?.address;
  // Fetch data from external API
  const res = await tokenService.getInfo({
    chain: ChainType.ethereum,
    contract_address: address as string,
  });
  // Pass data to the page via props
  return { props: { repo: res } };
}) satisfies GetServerSideProps<{ repo: Repo }>;

export default function Page({ repo }: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
        <meta
          name="twitter:title"
          content={`${product.symbol} $${product.price_in_usd} / Ethereum / ${product.dex_exchange}`}
        />
        <meta name="twitter:description" content={`${product.description}`} />
        <meta
          name="twitter:image"
          content={`https://degen-pages-router.vercel.app/api/generate-image?`}
        />
      </Head>
      <p>{repo.error_code}</p>
    </main>
  );
}
