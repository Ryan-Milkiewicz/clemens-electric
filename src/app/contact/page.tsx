import ContactForm from "../components/ContactForm";

export default async function Page() {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <legend>Contact Us</legend>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
