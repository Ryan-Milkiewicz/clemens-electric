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
  const post = await getBlogPost(slug);

  return (
    <section className="container py-5">
      <h2 className="fw-bold redUnderline mb-2">{post[0].title}</h2>
      <h6
        className="text-muted text-center my-3"
        style={{ fontStyle: "italic" }}
      >
        <DateComponent dateString={post[0].date} />
      </h6>
      <div>
        <div
          className="w-100 mb-3 me-md-3 float-md-start rounded shadow-sm"
          style={{ maxWidth: "553px" }}
        >
          <Image
            src={urlFor(post[0].coverImage).width(553).height(252).url()}
            alt={post[0].coverImage.alt}
            width={553}
            height={252}
            className="rounded shadow-sm"
            style={{ height: "auto", width: "100%" }}
          />
        </div>
        <PortableText value={post[0].content} />

        <Link href="/contact">
          <button className="btn rounded-5 buttonColor">Contact Us</button>
        </Link>
      </div>
    </section>
  );
}
