import React from "react";
import Image from "next/image";
import { Services } from "@/lib/types";
import { urlFor } from "@/sanity/sanityImageUrl";
import { PortableText } from "@portabletext/react";

export function ServiceCard({ service }: { service: Services }) {
  return (
    <div className="card h-100">
      <div className="imageWrapper">
        <Image
          src={urlFor(service.image).url()}
          alt={service.image.alt}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 400px"
          priority
        />
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{service.title}</h5>
        <div className="card-text">
          <PortableText value={service.description} />
        </div>
      </div>
    </div>
  );
}
