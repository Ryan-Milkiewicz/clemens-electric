import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/sanityImageUrl";
import { PortableText } from "@portabletext/react";

export function Card({
  title,
  slug,
  description,
  //  icon,
}: {
  title: string;
  slug: string;
  description: any;
  //icon: string;
}) {
  return (
    <div className="card p- h-100">
      {/* <Image
        src={icon}
        height={53}
        width={53}
        alt="Clemens Electric Drawing"
        style={{ objectFit: "contain" }}
      /> */}
      <div className="card-body">
        <div className="card-title h3 mb-3">{title}</div>
        <PortableText value={description} />
      </div>
    </div>
  );
}
