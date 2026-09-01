import Link from "next/link";
import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  return (
    <Layout active="home">

      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-copy">

          <span className="eyebrow">
            SOLAR • CCTV • ELECTRICAL
          </span>

          <h1>
            Turn sunlight into <em>smart savings.</em>
          </h1>

          <p>
            Professional energy, security and electrical solutions
            for homes, shops and businesses.
          </p>

          <div className="buttons">

            <Link className="btn primary" href="/contact">
              Get Solar Quote
            </Link>

            <Link className="btn outline" href="/contact">
              Send Enquiry
            </Link>

          </div>

          <div className="mini-trust">
            <span>✓ Site consultation</span>
            <span>✓ Quality installation</span>
            <span>✓ Responsive support</span>
          </div>

        </div>

        {/* SOLAR ART */}
        <div className="hero-art">

          <div className="sun-orb">
            ☀
          </div>

          <div className="roof">

            <div className="roof-line"></div>

            <div className="panel-grid">
              {Array.from({ length: 12 }, (_, i) => (
                <i key={i}></i>
              ))}
            </div>

          </div>

          <div className="energy-card">
            <b>Clean energy</b>
            <span>Lower electricity bills</span>
          </div>

        </div>

      </section>


      {/* SERVICES SECTION */}
      <section className="section">

        <Reveal>

          <div className="section-head">

            <span className="eyebrow">
              OUR SERVICES
            </span>

            <h2>
              Everything you need, under one roof.
            </h2>

            <p>
              From solar planning to security and electrical work,
              choose a practical solution for your property.
            </p>

          </div>

        </Reveal>


        <div className="service-grid">

          <Reveal>

            <ServiceCard
              icon="☀️"
              title="Solar Solutions"
              text="Plan and install solar systems around your energy needs."
              items={[
                "Residential & commercial",
                "System consultation",
                "Installation support"
              ]}
            />

          </Reveal>


          <Reveal>

            <ServiceCard
              icon="📹"
              title="CCTV Solutions"
              text="Protect your property with a properly planned surveillance setup."
              items={[
                "Camera planning",
                "Installation",
                "Security setup"
              ]}
            />

          </Reveal>


          <Reveal>

            <ServiceCard
              icon="⚡"
              title="Electrical Work"
              text="Dependable electrical installation, repair and maintenance."
              items={[
                "Wiring & installation",
                "Repairs",
                "Maintenance"
              ]}
            />

          </Reveal>

        </div>

      </section>


      {/* PROCESS SECTION */}
      <section className="dark-band">

        <Reveal>

          <div>

            <span className="eyebrow">
              A SIMPLE PROCESS
            </span>

            <h2>
              From first call to finished project.
            </h2>

            <p>
              Clear communication at every stage.
            </p>

          </div>

        </Reveal>


        <div className="steps">

          {["Discuss", "Plan", "Install", "Support"].map(
            (x, i) => (

              <Reveal key={x}>

                <div className="step">

                  <b>
                    0{i + 1}
                  </b>

                  <span>
                    {x}
                  </span>

                </div>

              </Reveal>

            )
          )}

        </div>

      </section>


      {/* CTA SECTION */}
      <section className="section">

        <Reveal>

          <div className="cta-box">

            <div>

              <span className="eyebrow">
                READY TO START?
              </span>

              <h2>
                Let's plan your project.
              </h2>

              <p>
                Send your requirement and get in touch with our team.
              </p>

            </div>

            <Link
              className="btn primary"
              href="/contact"
            >
              Send Enquiry
            </Link>

          </div>

        </Reveal>

      </section>

    </Layout>
  );
}
