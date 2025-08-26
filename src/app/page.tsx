import Image from "next/image";
import {
  getHeaderSection,
  getAboutSection,
  getServicesSection,
} from "./lib/queries";
import { urlFor } from "@/sanity/sanityImageUrl";
import { Card } from "./components/Card";

export default async function Home() {
  const headerData = await getHeaderSection();
  const [{ title, subtitle, services }] = await getServicesSection();

  return (
    <>
      <section id="home" className="position-relative">
        {headerData.map((header) => (
          <div key={header._id}>
            <Image
              style={{ objectFit: "cover", width: "100%" }}
              src={urlFor(header.image).width(966).height(646).url()}
              alt="Clemens Electric Header Image"
              width={966}
              height={646}
              priority
            />
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            />
            <div
              className="position-absolute top-50 start-50 translate-middle text-center"
              style={{ color: "white" }}
            >
              <h1 className="fw-bold">{header.headerTitle}</h1>
              <p className="text-white">{header.subtitle}</p>
            </div>
          </div>
        ))}
      </section>

      {/* <section id="about" className="container py-5">
        {aboutData.map((about) => (
          <div key={about._id} className="row">
            <div className="col-md-6 text-center">
              <Image
                className="img-fluid"
                src={urlFor(about.image).width(545).height(614).url()}
                alt="Clemens Electric Worker"
                width={545}
                height={614}
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">{about.title}</h2>
              <p className="text-muted">{about.description}</p>

              <h4 className="pb-3">Why Choose Us?</h4>
              <ul className="ps-3">
                {about.whyChooseUs.map((listItem: string, j: number) => (
                  <li key={j} className="text-muted pb-3">
                    {listItem}
                  </li>
                ))}
              </ul>
              <button className="btn btn-danger rounded-5">
                Get Free Quote
              </button>
            </div>
          </div>
        ))}
      </section> */}

      <section id="services" className="container p-4">
        <div className="mx-auto text-center" style={{ maxWidth: "600px" }}>
          <h2 className="fw-bold">{title}</h2>
          <p className="text-muted">{subtitle}</p>
        </div>

        <div className="container">
          <div className="row">
            {services.map((service: any) => (
              <div className="col-md-3" key={service.slug}>
                <Card
                  title={service.title}
                  slug={service.slug}
                  description={service.description}
                  icon={urlFor(service.icon).width(53).height(53).url()}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section id="ourWork" className="py-5">
        <h2 className="text-center fw-bold">See Our Work in Action</h2>
        <p className="text-muted text-center">
          We take pride in every project we complete.
        </p>

        <div className="row">
          <Image
            src="/our-work.webp"
            alt="Clemens Electric Work"
            width={1190}
            height={275}
          />
        </div>
      </section> */}
    </>
  );
}
