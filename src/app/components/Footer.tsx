import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

export function Footer() {
  return (
    <footer>
      <div
        className={`w-100 text-white py-5 border-bottom border-dark border-3 ${styles.footerText}`}
      >
        <h4 className="mb-4 text-center fw-bold">
          Power your home or business with Clemens Electric’s reliable energy
          solutions. Let us help you take the next step toward powering future!
        </h4>

        <div className="text-center">
          <Link href="/contact">
            <button className="btn rounded-5 alternateButtonColor">
              Talk to an Expert
            </button>
          </Link>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-4">
            <Image
              src="/clemens-electric-logo.png"
              height={85}
              width={250}
              alt="Clemens Electric Logo"
              style={{ height: "auto", width: "250px" }}
            />

            <p>
              {" "}
              Clemens Electric proudly serves homeowners and businesses with
              reliable solar, electrical, generator, and EV charging services
              across the Capital District and beyond. Our service area includes
              Albany, Troy, Schenectady, Saratoga Springs, Rensselaer, East
              Greenbush, Colonie, Latham, Clifton Park, Delmar, Slingerlands,
              Selkirk, Wynantskill, Mechanicville, Cohoes, Watervliet, Hudson,
              Glens Falls, Queensbury, Lake George, Kingston, Loudonville,
              Niskayuna, the Hudson Valley, and surrounding communities.
              Wherever you are in upstate New York, Clemens Electric delivers
              trusted solutions to keep your home and business powered.
            </p>
          </div>
          <div className="col-md-8 ms-auto text-end">
            <h3 className="fw-bold">Location</h3>
            <div className="d-flex align-items-center justify-content-end mb-3">
              <span className="pe-2 me-2 border-end border-dark">
                <FaLocationDot size={24} />
              </span>
              <p className="mb-0">
                54 First Dyke Road, Unit 2 Averill Park, NY 12018
              </p>
            </div>

            <h3 className="fw-bold">Contact Us</h3>
            <div
              className={` ${styles.location} d-flex align-items-start justify-content-end mb-31`}
            >
              <span className="pe-2 me-2 border-end border-dark">
                <FaPhone size={24} />
              </span>
              <p className="mb-0">518-617-1016</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 text-center py-2 border-top border-dark">
        <p className="mb-0 small">
          © {new Date().getFullYear()} Clemens Electric. All rights reserved.
          Developed by <span className="fw-bold">RM Web Solutions</span>.
        </p>
      </div>
    </footer>
  );
}
