export enum Env {
  development = "development",
  staging = "staging",
  production = "production",
}

export const supportedEnvs = [Env.development, Env.staging, Env.production];

export const ENV: Env =
  supportedEnvs.find((supportedEnv) => supportedEnv === process.env.ENV) || Env.development;

export const isProduction = ENV === Env.production;
