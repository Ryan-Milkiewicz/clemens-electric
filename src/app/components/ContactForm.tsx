"use client";
import { sendEmail, State } from "@/lib/mail";
import { useActionState } from "react";

export default function ContactForm() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction, isLoading] = useActionState(
    sendEmail,
    initialState
  );

  return (
    <form action={formAction}>
      <div className="row">
        <div className="mb-3">
          <input
            id="fullName"
            type="text"
            name="fullName"
            className="form-control"
            placeholder="Full Name"
            defaultValue=""
          />
        </div>
        {state?.errors?.fullName &&
          state.errors.fullName.map((error: string) => (
            <p className="text-danger" key={error}>
              {error}
            </p>
          ))}
      </div>

      <div className="mb-3">
        <input
          id="email"
          type="email"
          name="email"
          className="form-control"
          placeholder="Email Address"
          defaultValue=""
        />
        {state?.errors?.email &&
          state.errors.email.map((error: string) => (
            <p className="text-danger" key={error}>
              {error}
            </p>
          ))}
      </div>

      <div className="mb-3">
        <input
          id="phoneNumber"
          type="text"
          name="phoneNumber"
          className="form-control"
          placeholder="Phone Number"
          defaultValue=""
        />
        {state?.errors?.phoneNumber &&
          state.errors.phoneNumber.map((error: string) => (
            <p className="text-danger" key={error}>
              {error}
            </p>
          ))}
      </div>

      <div className="mb-3">
        <input
          id="address"
          type="text"
          name="address"
          className="form-control"
          placeholder="Home Address"
          defaultValue=""
        />
        {state?.errors?.address &&
          state.errors.address.map((error: string) => (
            <p className="text-danger" key={error}>
              {error}
            </p>
          ))}
      </div>

      <div className="mb-3">
        <textarea
          id="message"
          rows={8}
          name="message"
          className="form-control"
          placeholder="Enter message"
          defaultValue=""
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn"
        style={{ backgroundColor: "#e21919", color: "white" }}
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Submit"}
      </button>

      {state.status === "success" && (
        <div className="alert alert-success mt-3" role="alert">
          {state.message}
        </div>
      )}

      {state.message && state.status === "error" && (
        <div className="alert alert-danger mt-3" role="alert">
          {state.message}
        </div>
      )}
    </form>
  );
}
