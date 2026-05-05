import Image from "next/image";
import { getServices, getServicesBySlug } from "@/lib/queries";
import { urlFor } from "@/sanity/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/app/components/PortableTextComponent";

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
    <section className="container pb-5 py-5" style={{ overflow: "hidden" }}>
      <h1 className="fw-bold redUnderline mb-4">{title}</h1>
      <div>
        <div
          className="mb-3 me-md-4 float-md-start rounded overflow-hidden shadow-sm"
          style={{ maxWidth: "380px", width: "100%" }}
        >
          <Image
            src={urlFor(image).width(380).url()}
            alt={image.alt}
            width={380}
            height={280}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            priority
          />
        </div>
        <PortableText value={content} components={portableTextComponents} />
      </div>
    </section>
  );
}
