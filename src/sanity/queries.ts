import { defineQuery } from "next-sanity";

export const HERO_QUERY = defineQuery(
  `*[_type == "hero-section"][0]{_id, headerTitle,altText,image}`
);

export const ABOUT_QUERY = defineQuery(
  `*[
  _type == "about-section"][0]{_id, title, altText, description, image}`
);

export const SERVICE_QUERY = defineQuery(
  `*[
  _type == "services-section"][0]{_id, title, subtitle, services[]->{title, description, "slug":slug.current, image}}`
);

export const MARKET_QUERY = defineQuery(
  `*[
  _type == "market-section"][0]{_id, title, subtitle, markets[]->{title, description, altText, "slug":slug.current, image}}`
);

export const FAQ_Query = defineQuery(
  `*[
  _type == "FAQ-section"][0]{_id, title, question[]->{question, answer, category[0]->{category, "slug":slug.current}}}`
);
