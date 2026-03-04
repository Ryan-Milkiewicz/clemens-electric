import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import DateComponent from "@/app/components/Date";
import { getBlogPost } from "@/lib/queries";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { title, coverImage, content, date } = await getBlogPost(slug);

  return (
    <section className="container py-5">
      <h2 className="fw-bold redUnderline mb-2">{title}</h2>
      <h6
        className="text-muted text-center my-3"
        style={{ fontStyle: "italic" }}
      >
        <DateComponent dateString={date.toString()} />
      </h6>
      <div>
        <div
          className="mb-3 me-md-4 float-md-start rounded overflow-hidden shadow-sm"
          style={{
            maxWidth: "700px",
          }}
        >
          <Image
            src={urlFor(coverImage).width(700).url()}
            alt={coverImage.alt}
            width={700}
            height={525}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <PortableText value={content} />

        <Link href="/contact">
          <button className="btn rounded-5 buttonColor">Contact Us</button>
        </Link>
      </div>
    </section>
  );
}
