import { createClient } from "next-sanity";
import createImageUrlbuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_ENVIRONMENT,
  apiVersion: "2024-01-01",
  useCdn: false,
});

export const urlFor = (source: any) =>
  createImageUrlbuilder(client).image(source);
