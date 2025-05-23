// pages/api/generate-image.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { createCanvas, loadImage } from "canvas";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    token = "tokeneqwe",
    avatar = "",
    mcap = "0",
    vol = "0",
    liquidity = "0",
    bg="https://cdn.dexscreener.com/token-images/og/solana/97CAEcds5iXu1L8hUJiKQ1D4zMDM5T2co2Fv38kppump?timestamp=1747986300000"
  } = req.query;

  const width = 1200;
  const height = 600;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, width, height);

  // Load and draw avatar
  try {
    if (avatar && typeof avatar === "string") {
      const avatarImg = await loadImage(avatar);
      ctx.drawImage(avatarImg, 30, 30, 140, 140);
    }
  } catch (err) {
    console.warn("Failed to load avatar:", err);
  }
// Optional: Draw background image if provided in query (e.g., ?bg=https://...)
if (bg && typeof bg === "string") {
    try {
        const bgImg = await loadImage(bg);
        ctx.drawImage(bgImg, 0, 0, width, height);
    } catch (err) {
        console.warn("Failed to load background image:", err);
    }
}

  // Token name
  ctx.fillStyle = "#FFA500";
  ctx.font = "bold 50px Arial";
  ctx.fillText(String(token), 200, 80);

  // Token stats
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "32px Arial";
  ctx.fillText(`MCAP: $${formatNumber(mcap)}`, 200, 140);
  ctx.fillText(`24H VOL: $${formatNumber(vol)}`, 200, 190);
  ctx.fillText(`LIQUIDITY: $${formatNumber(liquidity)}`, 200, 240);

  // Output as PNG stream
  res.setHeader("Content-Type", "image/png");
  canvas.createPNGStream().pipe(res);
}

function formatNumber(value: string | string[]): string {
  const n =
    typeof value === "string" ? parseFloat(value) : parseFloat(value[0] || "0");

  if (isNaN(n)) return "0";
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
  return n.toString();
}
