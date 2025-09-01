import Image from "next/image";
import { urlFor } from "@/sanity/sanityImageUrl";
import { getMarketSection } from "../../lib/queries";
import { PortableText } from "@portabletext/react";
import styles from "./markets.module.css";
import AnimatedSection from "../components/Animation";

export default async function Page() {
  const [{ title, subtitle, markets }] = await getMarketSection();

  return (
    <section className="container py-5">
      <div className="mx-auto text-center" style={{ maxWidth: "600px" }}>
        <h2 className="fw-bold">{title}</h2>
        <p className="text-muted">{subtitle}</p>
      </div>

      <div className="container">
        <div className="row">
          {markets.map((market: any) => (
            <AnimatedSection key={market.slug}>
              <div className="row py-5 ${styles.slideIn" key={market.slug}>
                <div className="col-md-6">
                  <Image
                    className="img-fluid"
                    src={urlFor(market.image).width(555).height(333).url()}
                    alt={market.altText}
                    width={555}
                    height={333}
                  />
                </div>
                <div className="col-md-6">
                  <h3 className="py-4 fw-bold">{market.title}</h3>
                  <div className={styles.portableText}>
                    <PortableText value={market.description} />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
