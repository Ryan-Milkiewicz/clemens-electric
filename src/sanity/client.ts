import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_ENVIRONMENT,
  apiVersion: "2025-03-01",
  useCdn: false,
});
