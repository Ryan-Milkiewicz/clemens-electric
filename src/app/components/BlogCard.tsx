import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/sanityImageUrl";
import DateComponent from "./Date";
import Link from "next/link";
import { CustomImage } from "@/lib/types";

export function BlogCard({
  title,
  slug,
  excerpt,
  date,
  image,
}: {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  image: CustomImage;
}) {
  return (
    <div className="card h-100">
      <div className="imageWrapper">
        <Image
          src={urlFor(image).url()}
          alt={image.alt}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 400px"
          priority
        />
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{excerpt}</p>
        <div className="mt-auto">
          <Link
            href={`/blog/${slug}`}
            className="w-100"
            style={{ color: "#e21919" }}
          >
            Continue reading this post
          </Link>
        </div>
      </div>

      <div className="card-footer text-center">
        <small className="text-body-secondary">
          <DateComponent dateString={date} />
        </small>
      </div>
    </div>
  );
}
