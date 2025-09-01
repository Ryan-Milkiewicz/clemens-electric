import Image from "next/image";
import { getHeaderSection } from "../lib/queries";
import { urlFor } from "@/sanity/sanityImageUrl";

export default async function Home() {
  const headerData = await getHeaderSection();

  return (
    <>
      <section id="home" className="position-relative">
        {headerData.map((header) => (
          <div key={header._id}>
            <Image
              style={{ objectFit: "cover", width: "100%" }}
              src={urlFor(header.image).width(966).height(646).url()}
              alt={header.altText}
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
    </>
  );
}
