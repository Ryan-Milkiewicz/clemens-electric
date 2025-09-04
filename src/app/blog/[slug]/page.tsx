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
        <Image
          src={urlFor(post[0].coverImage).width(553).height(252).url()}
          alt={post[0].coverImage.alt}
          width={553}
          height={252}
          className="float-start me-3 mb-3 rounded shadow-sm"
        />
        <PortableText value={post[0].content} />

        <Link href="/contact">
          <button className="btn rounded-5 buttonColor">Contact Us</button>
        </Link>
      </div>
    </section>
  );
}
