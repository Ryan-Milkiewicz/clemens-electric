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
