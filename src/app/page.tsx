import Image from "next/image";
import { getHeaderSection, getAboutSection } from "./lib/queries";
import { urlFor } from "@/sanity/sanityImageUrl";

export default async function Home() {
  const headerData = await getHeaderSection();
  const aboutData = await getAboutSection();

  return (
    <>
      <section id="home" className="position-relative">
        {headerData.map((header) => (
          <div key={header._id}>
            <Image
              key={header._id}
              style={{ objectFit: "cover", width: "100%" }}
              src={urlFor(header.image).width(966).height(646).url()}
              alt={header.slug.current}
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

      <section id="about" className="container py-5">
        {aboutData.map((about) => (
          <div key={about._id} className="row">
            <div className="col-md-6">
              <Image
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
              <button className="btn btn-warning rounded-5">
                Get Free Quote
              </button>
            </div>
          </div>
        ))}
      </section>

      <section id="services" className="container">
        <div className="mx-auto text-center" style={{ maxWidth: "600px" }}>
          <h2 className="fw-bold">
            Expert Construction & Trade Solutions for Every Project
          </h2>
          <p className="text-muted">
            We offer a wide range of construction and trade services for homes,
            businesses, and industrial projects.
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card p-4">
                <Image
                  src="/drawing.png"
                  height={53}
                  width={53}
                  alt="Clemens Electric Drawing"
                  style={{ objectFit: "contain" }}
                />
                <div className="card-body">
                  <div className="card-title h5 mb-3">General Construction</div>
                  <div className="card-text">
                    New builds, renovations, and extension for all construction
                    types
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-4">
                <Image
                  src="/tools.png"
                  height={53}
                  width={53}
                  alt="Clemens Electric Tool"
                  style={{ objectFit: "contain" }}
                />
                <div className="card-body">
                  <div className="card-title h5 mb-3">Carpentry & Joinery</div>
                  <div className="card-text">
                    5+ Years of experience with custom woodwork, framing, and
                    installations
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-4">
                <Image
                  src="/roof.png"
                  height={53}
                  width={53}
                  alt="Clemens Electic Roof"
                  style={{ objectFit: "contain" }}
                />
                <div className="card-body">
                  <div className="card-title h5 mb-3">Roofing</div>
                  <div className="card-text">
                    Installation, maintenance and repairs for all different roof
                    types
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-4">
                <Image
                  src="/electric.png"
                  height={53}
                  width={53}
                  alt="Clemens Electric"
                  style={{ objectFit: "contain" }}
                />
                <div className="card-body">
                  <div className="card-title h5 mb-3">Electrical Services</div>
                  <div className="card-text">
                    Wiring, lighting, panel upgrades, and safety inspections
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ourWork" className="py-5">
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
      </section>
    </>
  );
}
