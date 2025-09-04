import Image from "next/image";
import { urlFor } from "@/sanity/sanityImageUrl";
import { getAboutSection } from "../../lib/queries";
import { PortableText } from "@portabletext/react";

export default async function Page() {
  const aboutData = await getAboutSection();
  return (
    <section className="container py-5">
      {aboutData.map((about) => (
        <div key={about._id} className="row">
          <div className="col-md-6 text-center">
            <Image
              className="img-fluid"
              src={urlFor(about.image).width(545).height(614).url()}
              alt={about.altText}
              width={545}
              height={614}
            />
          </div>
          <div className="col-md-6">
            <h2 className="mb-2 fw-bold redUnderline">{about.title}</h2>
            <PortableText value={about.description} />
          </div>
        </div>
      ))}
    </section>
  );
}
