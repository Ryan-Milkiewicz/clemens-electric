"use client";
import Image from "next/image";

type Props = {
  headerTitle: string;
  imageUrls: { url: string; alt: string }[];
};

export default function Carousel({ headerTitle, imageUrls }: Props) {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {imageUrls.map(({ url, alt }, index) => (
          <div
            className={`carousel-item position-relative ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <Image
              style={{ objectFit: "cover", width: "100%" }}
              src={url}
              alt={alt}
              width={966}
              height={646}
              priority={index === 0}
            />
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            />
            <div
              className="position-absolute top-50 start-50 translate-middle text-center"
              style={{ color: "white" }}
            >
              <h1 className="fw-bold">{headerTitle}</h1>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
