import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const options = { next: { revalidate: 30 } };

export async function getHeaderSection() {
  const HEADER_QUERY = `*[
  _type == "hero-section"]{_id, slug, headerTitle,subtitle,slug,image}`;

  const headerData = await client.fetch<SanityDocument[]>(
    HEADER_QUERY,
    {},
    options
  );
  return headerData;
}

export async function getAboutSection() {
  const ABOUT_QUERY = `*[
  _type == "about-section"]{_id, title, description, whyChooseUs, image}`;

  const aboutData = await client.fetch<SanityDocument[]>(
    ABOUT_QUERY,
    {},
    options
  );
  return aboutData;
}
