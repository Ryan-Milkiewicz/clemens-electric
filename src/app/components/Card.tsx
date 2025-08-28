import React from "react";
import { PortableText } from "@portabletext/react";
import Icon from "./Icon";

export function Card({
  title,
  slug,
  description,
}: {
  title: string;
  slug: string;
  description: any;
}) {
  return (
    <div className="card p- h-100">
      <div className="d-flex mb-3 p-2">
        <Icon size={32} slug={slug} />
      </div>
      <div className="card-body">
        <div className="card-title h3 mb-3">{title}</div>
        <PortableText value={description} />
      </div>
    </div>
  );
}
