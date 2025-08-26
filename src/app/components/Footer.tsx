import Image from "next/image";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footerBackground}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-white fw-bold">Construction And Renovation</h1>
            <p className="fw-bold text-white">
              Construction And Renovation offers quality construction and trade
              services for residential and commercial projects.
            </p>
          </div>
          <div className="col-md-3 ms-auto text-end">
            <h3 className="fw-bold text-white">Location</h3>
            <div
              className={` ${styles.location} d-flex align-items-start justify-content-end mb-31`}
            >
              <span className="pe-2 me-2 border-end border-white">
                <Image
                  src="/location-icon.png"
                  height={20}
                  width={20}
                  alt="Location"
                />
              </span>
              <p className="text-white mb-0">
                54 First Dyke Road, Unit 2 Averill Park, NY 12018
              </p>
            </div>

            <h3 className="fw-bold text-white">Contact Us</h3>
            <div
              className={` ${styles.location} d-flex align-items-start justify-content-end mb-31`}
            >
              <span className="pe-2 me-2 border-end border-white">
                <Image
                  src="/phone-icon.png"
                  height={20}
                  width={20}
                  alt="Contact Us"
                />
              </span>
              <p className="text-white mb-0">518-617-1016</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
