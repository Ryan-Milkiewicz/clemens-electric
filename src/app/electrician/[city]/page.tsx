import { cities } from "@/lib/cities";

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

// move this to utils
function formatCity(citySlug: string) {
  return citySlug
    .replace("-ny", "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default async function ElectricianCityPage({ params }: Props) {
  const { city } = await params;

  const cityName = formatCity(city);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">
        Electrician in {cityName}, NY – Residential & Commercial Electrical
        Services
      </h1>

      <p className="mt-4">
        If you’re looking for a licensed, local electrician in {cityName}, NY,
        Clemens Electric provides professional residential and commercial
        electrical services throughout the Capital Region.
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
    </div>
  );
}
