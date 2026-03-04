import type { MetadataRoute } from "next";
import { cities } from "@/lib/cities";
import { getServices } from "@/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://clemenselectric.com";

  const services = await getServices();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/markets`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-us/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const electricianPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/electrician/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const evChargerPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/ev-charger/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const solarInstallerPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/solar-installer/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const standbyGeneratorPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/standby-generator/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...electricianPages,
    ...evChargerPages,
    ...solarInstallerPages,
    ...standbyGeneratorPages,
  ];
}
