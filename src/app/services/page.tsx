import { getServicesSection } from "../../lib/queries";
import { Card } from "../components/Card";

export default async function Page() {
  const [{ title, subtitle, services }] = await getServicesSection();

  return (
    <section className="container py-5">
      <div className="mx-auto text-center" style={{ maxWidth: "600px" }}>
        <h2 className="fw-bold redUnderline">{title}</h2>
        <p className="pt-3 text-muted">{subtitle}</p>
      </div>

      <div className="container">
        <div className="row">
          {services.map((service: any) => (
            <div className="col-md-6 g-4" key={service.slug}>
              <Card
                title={service.title}
                slug={service.slug}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
