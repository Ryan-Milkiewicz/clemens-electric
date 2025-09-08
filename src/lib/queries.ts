import { client } from "@/sanity/client";
import {
  HeroSection,
  AboutSection,
  ServiceSection,
  MarketSection,
  FAQSection,
  Post,
  FullPost,
} from "./types";
import {
  HERO_QUERY,
  ABOUT_QUERY,
  SERVICE_QUERY,
  MARKET_QUERY,
  FAQ_Query,
  LATEST_BLOG_POSTS_QUERY,
  BLOG_POST_QUERY,
  ALL_BLOG_POST_QUERY,
} from "@/sanity/queries";

const options = { next: { revalidate: 30 } };

export async function getHeaderSection() {
  return await client.fetch<HeroSection>(HERO_QUERY, {}, options);
}

export async function getAboutSection() {
  return await client.fetch<AboutSection>(ABOUT_QUERY, {}, options);
}

export async function getServicesSection() {
  return await client.fetch<ServiceSection>(SERVICE_QUERY, {}, options);
}

export async function getMarketsSection() {
  return await client.fetch<MarketSection>(MARKET_QUERY, {}, options);
}

export async function getFAQSection() {
  return await client.fetch<FAQSection>(FAQ_Query, {}, options);
}

export async function getTop3BlogPosts() {
  return await client.fetch<Post[]>(LATEST_BLOG_POSTS_QUERY, {}, options);
}

export async function getBlogPost(slug: string) {
  return await client.fetch<FullPost>(BLOG_POST_QUERY, { slug }, options);
}

export async function getAllBlogPosts() {
  return await client.fetch<Post[]>(ALL_BLOG_POST_QUERY, {}, options);
}
