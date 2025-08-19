import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/sanityImageUrl";

export function Card({
  title,
  slug,
  description,
  icon,
}: {
  title: string;
  slug: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="card p-4">
      <Image
        src={icon}
        height={53}
        width={53}
        alt="Clemens Electric Drawing"
        style={{ objectFit: "contain" }}
      />
      <div className="card-body">
        <div className="card-title h5 mb-3">{title}</div>
        <div className="card-text">{description}</div>
      </div>
    </div>
  );
}
