"use client";
import { FormEvent } from "react";

export default function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const email = data.get("email");
    const phoneNumber = data.get("phoneNumber");
    const address = data.get("address");
    const zipCode = data.get("zipCode");
    const message = data.get("message");

    // Construct email body
    const subject = `New Contact Form Submission from ${firstName} ${lastName}`;
    const body = `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phoneNumber}
        Address: ${address}
        Zip Code: ${zipCode}

        Message:
        ${message}`;

    // Gmail compose link
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      "Stephenc@clemenselectric.com"
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open Gmail compose in new tab
    window.open(gmailUrl, "_blank");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6 mb-3">
          <input
            type="text"
            name="firstName"
            className="form-control"
            placeholder="First Name"
          />
        </div>
        <div className="col-md-6 mb-3">
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Last Name"
          />
        </div>
      </div>

      <div className="mb-3">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email Address"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="phoneNumber"
          className="form-control"
          placeholder="Phone Number"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="address"
          className="form-control"
          placeholder="Home Address"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="zipCode"
          className="form-control"
          placeholder="Zip Code"
        />
      </div>

      <div className="mb-3">
        <textarea
          rows={8}
          name="message"
          className="form-control"
          placeholder="Enter message"
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn"
        style={{ backgroundColor: "#e21919", color: "white" }}
      >
        Submit
      </button>
    </form>
  );
}
