import { defineConfig } from "astro/config";
import { remarkModifiedTime } from "./src/utils/remark-modified-time.mjs";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import pagefind from "astro-pagefind";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import vercelServerless from "@astrojs/vercel/serverless";
import vercelStatic from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://diversparadisekomodo.com",
  trailingSlash: "always",
  output: 'static',
  adapter: vercelStatic({
    webAnalytics: { enabled: true }
  }),
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  experimental: {
    contentCollectionCache: true,
  },

  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.cloudinary.com"
      }
    ],
  },

  markdown: {
    remarkPlugins: [remarkModifiedTime],
  },

  integrations: [
    mdx(),
    sitemap(),
    pagefind(),
    tailwind(),

    partytown({
      config: {
        forward: ["dataLayer.push"],
        debug: false,
      },
    }),

    icon({
      include: {
        tabler: ["*"],
      },
    }),
    
  ],
});
