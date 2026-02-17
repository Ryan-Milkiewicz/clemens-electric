import Image from "next/image";
import { getDynamicPage } from "@/lib/queries";
import { urlFor } from "@/sanity/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import { cities } from "@/lib/cities";
import { formatCity, replaceCity } from "@/util/helper";

type Props = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;

  const cityName = formatCity(city);

  return {
    title: `Electrician in ${cityName}, NY | Clemens Electric`,
    description: `Licensed electrician serving ${cityName}, NY. Residential and commercial electrical services.`,
  };
}

export default async function ElectricianCityPage({ params }: Props) {
  const { city } = await params;
  const { content, image } = await getDynamicPage("electrician");

  const cityName = formatCity(city);
  const updatedContent = replaceCity(content, cityName);

  return (
    <section className="container py-5">
      <div
        className="w-100 mb-3 me-md-3 float-md-start rounded p-3"
        style={{ maxWidth: "553px" }}
      >
        <Image
          className="img-fluid"
          src={urlFor(image).width(553).url()}
          alt="Clemens Electric Electrician"
          width={553}
          height={600}
        />
      </div>
      <PortableText value={updatedContent} />
    </section>
  );
}
