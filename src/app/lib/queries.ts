import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const options = { next: { revalidate: 30 } };

export async function getHeaderSection() {
  const HEADER_QUERY = `*[
  _type == "hero-section"]{slug, headerTitle,subtitle,slug,image}`;

  const posts = await client.fetch<SanityDocument[]>(HEADER_QUERY, {}, options);
  return posts;
}
