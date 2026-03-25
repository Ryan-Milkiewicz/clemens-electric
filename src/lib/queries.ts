import { client } from "@/sanity/client";
import {
  HeroSection,
  AboutSection,
  DynamicPages,
  Services,
  MarketSection,
  FAQSection,
  Post,
  FullPost,
} from "./types";
import {
  HERO_QUERY,
  ABOUT_QUERY,
  DYNAMIC_PAGE_QUERY,
  SERVICE_QUERY,
  GET_SERVICE_BY_SLUG,
  MARKET_QUERY,
  FAQ_Query,
  LATEST_BLOG_POSTS_QUERY,
  BLOG_POST_QUERY,
  ALL_BLOG_POST_QUERY,
} from "@/sanity/queries";

const staticOptions = { next: { revalidate: 86400 } }; // 24h - rarely changes
const contentOptions = { next: { revalidate: 3600 } }; // 1h - moderate changes

export async function getHeaderSection() {
  return await client.fetch<HeroSection>(HERO_QUERY, {}, staticOptions);
}

export async function getAboutSection() {
  return await client.fetch<AboutSection>(ABOUT_QUERY, {}, staticOptions);
}

export async function getServices() {
  return await client.fetch<Services[]>(SERVICE_QUERY, {}, staticOptions);
}

export async function getServicesBySlug(slug: string) {
  return await client.fetch<Services>(
    GET_SERVICE_BY_SLUG,
    { slug },
    staticOptions,
  );
}

export async function getMarketsSection() {
  return await client.fetch<MarketSection>(MARKET_QUERY, {}, staticOptions);
}

export async function getFAQSection() {
  return await client.fetch<FAQSection>(FAQ_Query, {}, staticOptions);
}

export async function getTop3BlogPosts() {
  return await client.fetch<Post[]>(
    LATEST_BLOG_POSTS_QUERY,
    {},
    contentOptions,
  );
}

export async function getBlogPost(slug: string) {
  return await client.fetch<FullPost>(
    BLOG_POST_QUERY,
    { slug },
    contentOptions,
  );
}

export async function getAllBlogPosts() {
  return await client.fetch<Post[]>(ALL_BLOG_POST_QUERY, {}, contentOptions);
}

export async function getDynamicPage(pageType: string) {
  return await client.fetch<DynamicPages>(
    DYNAMIC_PAGE_QUERY,
    { pageType },
    staticOptions,
  );
}
