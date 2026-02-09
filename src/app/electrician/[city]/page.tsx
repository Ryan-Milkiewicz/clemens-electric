import Image from "next/image";
import { cities } from "@/lib/cities";
import { formatCity } from "@/util/helper";

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

  const cityName = formatCity(city);

  return (
    <section className="container py-5">
      <h1 className="text-3xl font-bold">
        Electrician in {cityName}, NY – Residential & Commercial Electrical
        Services
      </h1>
      <div
        className="w-100 mb-3 me-md-3 float-md-start rounded p-3"
        style={{ maxWidth: "553px" }}
      >
        <Image
          src="/electric-install.jpg"
          alt="Electric Installer"
          width={553}
          height={400} // approximate, doesn't crop
          className="rounded shadow-sm"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <p className="mt-4">
        If you’re looking for a licensed, local electrician in {cityName}, NY,
        Clemens Electric provides professional residential and commercial
        electrical services throughout the Capital Region. From small repairs to
        full electrical upgrades, our team delivers safe, code-compliant work
        you can trust.
      </p>
      <p className="mt-4">
        We understand local permitting requirements, utility coordination, and
        New York State electrical code — so your project is done right the first
        time.
      </p>
      <h2 className="text-xl font-semibold mt-6">
        Our Electrical Services in {cityName}, NY
      </h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Residential electrical repairs & troubleshooting</li>
        <li>Electrical panel upgrades & service replacements</li>
        <li>New circuit installations & load calculations</li>
        <li>Lighting upgrades</li>
        <li>Commercial electrical installations</li>
        <li>Code corrections & safety upgrades</li>
      </ul>
      <p className="mt-4">
        Whether you’re upgrading an older home or adding new electrical loads,
        we tailor solutions to your property and future needs.
      </p>
      <h2 className="text-xl font-semibold mt-6">
        Why Choose a Local Electrician in {cityName}, NY?
      </h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Licensed & insured New York electrician</li>
        <li>Familiar with local inspectors & AHJs</li>
        <li>Clean, professional job sites</li>
        <li>Clear pricing & honest recommendations</li>
        <li>Responsive scheduling & communication</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">
        Serving Homes & Businesses Near You
      </h2>
      <p className="mt-4">
        We proudly serve homeowners and businesses throughout {cityName} and
        surrounding areas, providing fast response times and dependable service.
      </p>
      <p className="mt-4">
        📞 Call today for an estimate or to schedule service with a trusted
        electrician in {cityName}, NY.
      </p>
    </section>
  );
}
