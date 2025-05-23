import { ENV, Env } from "./env.config";

export const API_URLS = <const>{
  [Env.development]: "https://api.degen.limo/",
  [Env.staging]: "https://api.degen.limo/",
  [Env.production]: "https://api.degen.limo/",
};

export const API_URL = API_URLS[ENV];

export const API_GOPLUS_ENV = <const>{
  [Env.development]: "https://api.gopluslabs.io/",
  [Env.staging]: "https://api.gopluslabs.io/",
  [Env.production]: "https://api.gopluslabs.io/",
};

export const API_GOPLUS = API_GOPLUS_ENV[ENV];
