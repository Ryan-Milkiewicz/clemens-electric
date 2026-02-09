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
    title: `Solar Installer in ${cityName}, NY | Clemens Electric`,
    description: `Licensed solar installer serving ${cityName}, NY. Residential and commercial solar services.`,
  };
}

export default async function SolarInstallerCityPage({ params }: Props) {
  const { city } = await params;

  const cityName = formatCity(city);

  return (
    <section className="container py-5">
      <h1 className="text-3xl font-bold">
        Solar Panel Installation in {cityName}, NY
      </h1>
      <p className="mt-4">
        Looking to reduce your electric bills and invest in clean energy?
        Clemens Electric offers professional solar panel installation in{" "}
        {cityName}, NY, designed for long-term performance and New York
        incentives.
      </p>
      <p className="mt-4">
        We handle everything — design, permitting, installation, and utility
        coordination — so your transition to solar is seamless.
      </p>
      <h2 className="text-xl font-semibold mt-6">
        Solar Services in {cityName}, NY
      </h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Residential solar PV systems</li>
        <li>Ground-mount & roof-mount solar</li>
        <li>Battery storage integration</li>
        <li>Solar-ready electrical upgrades</li>
        <li>Utility interconnection & permitting</li>
        <li>NYSERDA-compliant system design</li>
      </ul>
      <p className="mt-4">
        Every system is custom-engineered based on your roof, usage, and future
        electrical needs.
      </p>
      <h2 className="text-xl font-semibold mt-6">
        Is Solar Worth It in {cityName}, NY?
      </h2>
      <p className="mt-4">
        Yes — New York offers strong incentives, and local utility rates make
        solar a smart long-term investment. Our team evaluates:
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>Roof orientation & shading</li>
        <li>Annual energy usage</li>
        <li>Future loads (EVs, heat pumps, generators)</li>
        <li>Battery backup options</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">
        Why Choose Us for Solar in {cityName}, NY?
      </h2>
      <ul className="list-disc ml-6 mt-2">
        <li>NABCEP-trained solar professionals</li>
        <li>Local installer — no out-of-state subcontractors</li>
        <li>High-quality equipment & workmanship</li>
        <li>Clear projections & honest expectations</li>
      </ul>
      <p className="mt-4 font-bold">
        📞 Schedule a solar consultation today and see how much you can save
        with solar in {cityName}, NY.
      </p>
    </section>
  );
}
