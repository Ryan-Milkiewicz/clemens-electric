import Image from "next/image";
import { getServices, getServicesBySlug } from "@/lib/queries";
import { urlFor } from "@/sanity/sanityImageUrl";
import { PortableText } from "@portabletext/react";

type Props = {
  params: Promise<{ slug: string }>;
};

// get the slugs of all the services to generate static pages for each service
export async function generateStaticParams() {
  const pages = await getServices();
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

// sets the metadata for each service page based on the slug
// this is used by next.js to set the title and description of the page for SEO purposes
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { pageTitle, seoContent } = await getServicesBySlug(slug);

  return {
    title: pageTitle,
    description: seoContent,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const { title, image, content } = await getServicesBySlug(slug);

  return (
    <section className="container py-5">
      <h1 className="fw-bold redUnderline display-6 mb-4">{title}</h1>

      <div
        className="float-md-start me-4 mb-3 rounded overflow-hidden shadow"
        style={{ width: "100%", maxWidth: "450px", aspectRatio: "4/3" }}
      >
        <Image
          className="object-fit-cover"
          src={urlFor(image).width(600).url()}
          alt={image.alt}
          width={600}
          height={600}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <PortableText value={content} />
    </section>
  );
}
