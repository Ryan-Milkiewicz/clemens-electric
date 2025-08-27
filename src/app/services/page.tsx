import Image from "next/image";
import { urlFor } from "@/sanity/sanityImageUrl";
import { getServicesSection } from "../lib/queries";
import { PortableText } from "@portabletext/react";
import { Card } from "../components/Card";

export default async function Page() {
  const [{ title, subtitle, services }] = await getServicesSection();

  return (
    <section className="container py-5">
      <div className="mx-auto text-center" style={{ maxWidth: "600px" }}>
        <h2 className="fw-bold">{title}</h2>
        <p className="text-muted">{subtitle}</p>
      </div>

      <div className="container">
        <div className="row">
          {services.map((service: any) => (
            <div className="col-md-6 g-4" key={service.slug}>
              <Card
                title={service.title}
                slug={service.slug}
                description={service.description}
                // icon={urlFor(service.icon).width(53).height(53).url()}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
