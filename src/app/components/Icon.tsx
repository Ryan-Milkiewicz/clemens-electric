import React from "react";
import { MdConstruction } from "react-icons/md";
import { FaHouseChimney } from "react-icons/fa6";
import { LuUtilityPole } from "react-icons/lu";
import { GiPowerGenerator } from "react-icons/gi";
import { MdElectricCar } from "react-icons/md";
import { FaSolarPanel } from "react-icons/fa";
import { TbPresentationAnalytics } from "react-icons/tb";

const Icon = ({ slug, size = 32 }: { slug: string; size?: number }) => {
  switch (slug) {
    case "commercial-electrical-construction":
      return <MdConstruction size={size} />;
    case "residential-electrical-construction":
      return <FaHouseChimney size={size} />;
    case "utility-and-infrastructure-electrical-construction":
      return <LuUtilityPole size={size} />;
    case "generators":
      return <GiPowerGenerator size={size} />;
    case "electric-vehicle-chargers":
      return <MdElectricCar size={size} />;
    case "solar-installation-residential-and-commercial":
      return <FaSolarPanel size={size} />;
    case "professional-engineering-and-consulting-services":
      return <TbPresentationAnalytics size={size} />;
    default:
      return null;
  }
};

export default Icon;
