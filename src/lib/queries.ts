import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const options = { next: { revalidate: 30 } };

export async function getHeaderSection() {
  const HEADER_QUERY = `*[
  _type == "hero-section"]{_id, headerTitle,altText,image}`;

  const headerData = await client.fetch<SanityDocument[]>(
    HEADER_QUERY,
    {},
    options
  );
  return headerData;
}

export async function getAboutSection() {
  const ABOUT_QUERY = `*[
  _type == "about-section"]{_id, title, altText, description, image}`;

  const aboutData = await client.fetch<SanityDocument[]>(
    ABOUT_QUERY,
    {},
    options
  );
  return aboutData;
}

export async function getServicesSection() {
  const SERVICE_QUERY = `*[
  _type == "services-section"]{_id, title, subtitle, services[]->{title, description, "slug":slug.current}}`;

  const serviceData = await client.fetch(SERVICE_QUERY, {}, options);
  return serviceData;
}

export async function getMarketSection() {
  const MARKET_QUERY = `*[
  _type == "market-section"]{_id, title, subtitle, markets[]->{title, description, altText, "slug":slug.current, image}}`;

  const marketData = await client.fetch(MARKET_QUERY, {}, options);
  return marketData;
}

export async function getFAQSection() {
  const FAQ_Query = `*[
  _type == "FAQ-section"]{_id, title, question[]->{question, answer, category[0]->{category, "slug":slug.current}}}`;

  const faqData = await client.fetch(FAQ_Query, {}, options);
  return faqData;
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
