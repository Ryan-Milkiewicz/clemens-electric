import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import Icon from "./Icon";

export function ServiceCard({
  title,
  description,
  image,
}: {
  title: string;
  description: any;
  image: string;
}) {
  return (
    <div className="card h-100">
      <div className="imageWrapper">
        <Image
          src={urlFor(image).url()}
          alt="Clemens Electric"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 400px"
          priority
        />
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <div className="card-text">
          <PortableText value={description} />
        </div>
      </div>
    </div>
  );
}
