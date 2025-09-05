import Image from "next/image";
import { urlFor } from "@/sanity/sanityImageUrl";
import { getAboutSection } from "../../lib/queries";
import { PortableText } from "@portabletext/react";

export default async function Page() {
  const { _id, title, altText, description, image } = await getAboutSection();

  return (
    <section className="container py-5">
      <div key={_id} className="row">
        <div className="col-md-6 text-center">
          <Image
            className="img-fluid"
            src={urlFor(image).width(545).height(614).url()}
            alt={altText}
            width={545}
            height={614}
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-2 fw-bold redUnderline">{title}</h2>
          <PortableText value={description} />
        </div>
      </div>
    </section>
  );
}
