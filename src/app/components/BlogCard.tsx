import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/sanityImageUrl";
import DateComponent from "./Date";
import styles from "./BlogCard.module.css";

export function BlogCard({
  title,
  slug,
  //alt,
  excerpt,
  date,
  image,
}: {
  title: string;
  slug: string;
  //  alt: string;
  excerpt: string;
  date: string;
  image: string;
}) {
  console.log(image);
  return (
    <div className="card h-100">
      <div className={styles.imageWrapper}>
        <Image
          src={urlFor(image).height(200).url()}
          alt="Clemens Electric"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{excerpt}</p>
        <div className="mt-auto">
          <a href="#" className="w-100" style={{ color: "#e21919" }}>
            Continue reading this post
          </a>
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
