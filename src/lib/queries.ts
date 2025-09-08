import { client } from "@/sanity/client";
import {
  HeroSection,
  AboutSection,
  ServiceSection,
  MarketSection,
  FAQSection,
} from "./types";
import {
  HERO_QUERY,
  ABOUT_QUERY,
  SERVICE_QUERY,
  MARKET_QUERY,
  FAQ_Query,
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

export async function getBlogPosts() {
  const BLOG_QUERY = `*[
  _type == "post"]| order(date desc){_id, title, "slug":slug.current, excerpt, date, coverImage}[0...3]`;

  const blogData = await client.fetch(BLOG_QUERY, {}, options);
  return blogData;
}

export async function getBlogPost(slug: string) {
  const BLOG_QUERY = `*[_type == 'post' && slug.current =='${slug}']{ _id, title, "slug":slug.current, coverImage, content, date }`;

  const post = await client.fetch(BLOG_QUERY, {}, options);
  return post;
}

export async function getAllBlogPosts() {
  const BLOG_QUERY = `*[_type == 'post']{ _id, title, excerpt, "slug":slug.current, date }`;

  const post = await client.fetch(BLOG_QUERY, {}, options);
  return post;
}
