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
    title: `Standby Generator Installer in ${cityName}, NY | Clemens Electric`,
    description: `Licensed standby generator installer serving ${cityName}, NY.`,
  };
}

export default async function StandbyGeneratorCityPage({ params }: Props) {
  const { city } = await params;

  const cityName = formatCity(city);

  return (
    <section className="container py-5">
      <h1 className="text-3xl font-bold">
        Standby Generator Installation in {cityName}, NY
      </h1>
      <div
        className="w-100 mb-3 me-md-3 float-md-start rounded p-3"
        style={{ maxWidth: "550px" }}
      >
        <Image
          src="/generator-install.jpg"
          alt="Generator Install"
          width={550}
          height={400}
          className="rounded shadow-sm"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <p className="mt-4">
        Power outages are common in Upstate New York. Clemens Electric offers
        standby generator installation in {cityName}, NY, providing automatic
        backup power when you need it most.
      </p>
      <p className="mt-4">
        We design systems that keep your home or business running during storms,
        utility outages, and emergencies.
      </p>
      <h2 className="text-xl font-semibold mt-6">
        Generator Services in {cityName}, NY
      </h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Whole-home standby generators</li>
        <li>Partial-home backup systems</li>
        <li>Generator load calculations</li>
        <li>Transfer switch installation</li>
        <li>Electrical permitting & inspections</li>
      </ul>
      <p className="mt-4">
        We coordinate with utilities and inspectors to ensure a smooth,
        compliant installation.
      </p>
      <h2 className="text-xl font-semibold mt-6">
        Choosing the Right Generator for Your Home
      </h2>
      <p className="mt-2">We help determine:</p>
      <ul className="list-disc ml-6 mt-2">
        <li>Generator size & fuel type</li>
        <li>Critical vs full-home loads</li>
        <li>Electrical and panel requirements</li>
        <li>Long-term reliability & maintenance needs</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">
        Why Homeowners Trust Us for Generators
      </h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Experienced generator installers</li>
        <li>Clean, professional installations</li>
        <li>Local service & support</li>
        <li>Designed to meet NY codes & utility rules</li>
      </ul>
      <p className="mt-4 font-bold">
        📞 Get peace of mind — request a generator installation estimate in{" "}
        {cityName}, NY today.
      </p>
    </section>
  );
}
