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

export const LATEST_BLOG_POSTS_QUERY = defineQuery(
  `*[
  _type == "post"]| order(date desc){_id, title, "slug":slug.current, excerpt, date, coverImage}[0...3]`
);

export const BLOG_POST_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    coverImage,
    content,
    date
  }
`);

export const ALL_BLOG_POST_QUERY = defineQuery(
  `*[_type == 'post']{ _id, title, excerpt, "slug":slug.current, date }`
);
