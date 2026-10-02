#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "waiqipin",
  boardId: "waiqipin-official",
  domain: "waiqipin.cn",
  npmName: "zc-waiqipin-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
