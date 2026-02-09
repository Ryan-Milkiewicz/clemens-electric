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
    title: `EV installer in ${cityName}, NY | Clemens Electric`,
    description: `Licensed EV installer serving ${cityName}, NY.`,
  };
}

export default async function ElectricianCityPage({ params }: Props) {
  const { city } = await params;

  const cityName = formatCity(city);

  return (
    <section className="container py-5">
      <h1 className="text-3xl font-bold">
        EV Charger Installation in {cityName}, NY
      </h1>
      <p className="mt-4">
        Clemens Electric provides EV charger installation in {cityName}, NY for
        homeowners and businesses looking for safe, fast, and future-proof
        charging solutions.
      </p>
      <p className="mt-4">
        Whether you drive a Tesla or another electric vehicle, we install
        charging systems that match your electrical capacity and driving needs.
      </p>
      <h2 className="text-xl font-semibold mt-6">
        EV Charging Services in {cityName}, NY
      </h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Level 2 home EV charger installation</li>
        <li>Tesla Wall Connector installation</li>
        <li>Load calculations & panel evaluations</li>
        <li>Electrical upgrades for EV charging</li>
        <li>Indoor & outdoor charger installations</li>
      </ul>
      <p className="mt-4">
        We ensure your charger is installed safely, permitted correctly, and
        optimized for your electrical system.
      </p>
      <h2 className="text-xl font-semibold mt-6">
        Do I Need an Electrical Upgrade for an EV Charger?
      </h2>
      <p className="mt-4">Not always — but many homes require:</p>
      <ul className="list-disc ml-6 mt-2">
        <li>Panel upgrades</li>
        <li>Load management solutions</li>
        <li>Dedicated circuits</li>
      </ul>
      <p className="mt-4">
        We evaluate your system and recommend the most cost-effective option.
      </p>
      <h2 className="text-xl font-semibold mt-6">
        Why Install an EV Charger with Clemens Electric
      </h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Code-compliant installations</li>
        <li>Clean, professional workmanship</li>
        <li>Experience with NY electrical requirements</li>
        <li>Designed for future vehicle upgrades</li>
      </ul>
      <p className="mt-4">
        📞 Contact us today to install an EV charger at your home or business in{" "}
        {cityName}, NY.
      </p>
    </section>
  );
}
