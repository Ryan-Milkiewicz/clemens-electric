"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { z } from "zod";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  email: z.email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone Number is required"),
  address: z.string().min(1, "Address is required"),
  message: z.string().optional(),
});

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form with Zod
    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      const zodError = result.error.issues;

      // Get erros from Zod so we can display them
      zodError.forEach((err) => {
        const fieldName = err.path[0];
        if (fieldName) {
          fieldErrors[fieldName as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        setSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          address: "",
          message: "",
        });
        // hide alert after 3 seconds
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setSuccess(false);
        alert("Failed to send email: " + result.error);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="mb-3">
          <input
            type="text"
            name="fullName"
            className="form-control"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        {errors.fullName && <p className="text-danger">{errors.fullName}</p>}
      </div>

      <div className="mb-3">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email Address"
          onChange={handleChange}
          value={formData.email}
        />
        {errors.email && <p className="text-danger">{errors.email}</p>}
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="phoneNumber"
          className="form-control"
          placeholder="Phone Number"
          onChange={handleChange}
          value={formData.phoneNumber}
        />
        {errors.phoneNumber && (
          <p className="text-danger">{errors.phoneNumber}</p>
        )}
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="address"
          className="form-control"
          placeholder="Home Address"
          onChange={handleChange}
          value={formData.address}
        />
        {errors.address && <p className="text-danger">{errors.address}</p>}
      </div>

      <div className="mb-3">
        <textarea
          rows={8}
          name="message"
          className="form-control"
          placeholder="Enter message"
          onChange={handleChange}
          value={formData.message}
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn"
        style={{ backgroundColor: "#e21919", color: "white" }}
      >
        Submit
      </button>
      {success && (
        <div className="alert alert-success mt-3" role="alert">
          Email sent successfully!
        </div>
      )}
    </form>
  );
}
