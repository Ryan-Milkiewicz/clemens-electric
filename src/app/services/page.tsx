import { getServicesSection } from "../../lib/queries";
import { ServiceCard } from "../components/ServiceCard";

export default async function Page() {
  const [{ title, subtitle, services }] = await getServicesSection();

  return (
    <section className="container py-5">
      <div className="mx-auto text-center" style={{ maxWidth: "600px" }}>
        <h2 className="fw-bold redUnderline">{title}</h2>
        <p className="pt-3 text-muted">{subtitle}</p>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          {services.map(
            (service: {
              title: string;
              slug: string;
              description: string;
              image: string;
            }) => (
              <div className="col" key={service.slug}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
