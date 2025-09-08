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

export interface MarketSection {
  _id: string;
  title: string;
  subtitle: string;
  markets: Markets[];
}

export interface FAQSection {
  _id: string;
  title: string;
  question: Question[];
}

export interface Services {
  slug: string;
  title: string;
  description: PortableTextBlock[];
  image: CustomImage;
}

export interface Markets {
  slug: string;
  title: string;
  description: PortableTextBlock[];
  image: CustomImage;
}

export interface Question {
  question: string;
  answer: string;
  category: Category;
}

export interface Category {
  slug: string;
  category: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: string;
  date: Date;
  excerpt: string;
  coverImage: CustomImage;
}

export interface CustomImage extends Image {
  alt: string;
}

export interface FullPost extends Post {
  content: PortableTextBlock[];
}
