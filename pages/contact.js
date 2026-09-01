import {useState} from "react";
import Layout from "../components/Layout";
import Reveal from "../components/Reveal";

export default function Contact(){
  const [sent,setSent]=useState(false);

  const submit=e=>{
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout active="contact">

      <section className="page-hero">
        <span className="eyebrow">CONTACT</span>

        <h1>
          Let's build your <em>next project.</em>
        </h1>

        <p>
          Tell us about your solar, CCTV or electrical requirement.
        </p>
      </section>


      <section className="contact-section">

        <Reveal>
          <div className="contact-copy">

            <span className="eyebrow">
              GET IN TOUCH
            </span>

            <h2>
              Start with a conversation.
            </h2>

            <p>
              Call or WhatsApp directly, or use the enquiry form.
              The form is ready for connection to an email, CRM or database.
            </p>

            <div className="contact-box">

              <a href="https://wa.me/918850050126">
                💬 <b>WhatsApp</b>
                <span>+91 88500 50126</span>
              </a>

              <a href="tel:+918850050126">
                📞 <b>Quick Call</b>
                <span>+91 88500 50126</span>
              </a>

              <a href="mailto:arambhsuntechsoln@gmail.com">
                ✉️ <b>Email</b>
                <span>arambhsuntechsoln@gmail.com</span>
              </a>

            </div>

          </div>
        </Reveal>


        <Reveal>

          <form
            className="form"
            onSubmit={submit}
          >

            <h3>
              Request a quotation
            </h3>

            <label>
              Name
              <input
                required
                placeholder="Your name"
              />
            </label>

            <label>
              Phone
              <input
                required
                type="tel"
                placeholder="10-digit mobile number"
              />
            </label>

            <label>
              Service

              <select defaultValue="Solar">
                <option>Solar</option>
                <option>CCTV</option>
                <option>Electrical Work</option>
                <option>
                  Solar + CCTV + Electrical
                </option>
              </select>

            </label>

            <label>
              Requirement

              <textarea
                required
                placeholder="Tell us about your project"
              ></textarea>

            </label>

            <button
              className="btn primary"
              type="submit"
            >
              Submit Enquiry
            </button>

            {sent && (
              <div className="success">
                ✓ Enquiry captured successfully in this demo.
                Connect the form backend before production.
              </div>
            )}

          </form>

        </Reveal>

      </section>

    </Layout>
  );
}
