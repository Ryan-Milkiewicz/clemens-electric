import type { Image } from "sanity";
import type { PortableTextBlock } from "next-sanity";

export interface HeroSection {
  _id: string;
  headerTitle: string;
  altText: string;
  image: Image;
}

export interface AboutSection {
  _id: string;
  title: string;
  altText: string;
  description: PortableTextBlock[];
  image: Image;
}

export interface ServiceSection {
  _id: string;
  title: string;
  subtitle: string;
  services: Services[];
}

export interface Services {
  slug: string;
  title: string;
  description: PortableTextBlock[];
  image: CustomImage;
}

export interface CustomImage extends Image {
  alt: string;
}
