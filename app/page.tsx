const services = [
  {
    number: "01",
    title: "Pre-arrival control",
    text: "A document and responsibility check before the vehicle reaches Europe, so missing inputs surface early.",
  },
  {
    number: "02",
    title: "Release & inland movement",
    text: "Coordination of carrier release, collection readiness and onward movement from the agreed European port.",
  },
  {
    number: "03",
    title: "Customs preparation",
    text: "A controlled information pack for the appointed customs representative, importer and relevant authorities.",
  },
  {
    number: "04",
    title: "Technical route",
    text: "Coordination of the vehicle’s technical approval and Czech registration path with authorised specialists.",
  },
];

const stages = [
  ["Before arrival", "Documents, roles and route confirmed"],
  ["At the port", "Release and collection coordinated"],
  ["In the Czech Republic", "Customs and technical work aligned"],
  ["Ready for handover", "Registration path and final delivery coordinated"],
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Casa Buena home">
          <span className="brand-mark">CB</span>
          <span>Casa Buena</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#scope">Scope</a>
          <a href="#process">Process</a>
          <a className="nav-contact" href="mailto:casabuena@struhala.cz">
            Contact
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">European vehicle import coordination</p>
          <h1>
            From European port
            <br />
            to Czech <em>handover.</em>
          </h1>
          <p className="hero-intro">
            Casa Buena coordinates the European side of China-origin vehicle
            imports: readiness, release, customs preparation, technical approval
            and registration.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:casabuena@struhala.cz">
              Discuss an import <ArrowIcon />
            </a>
            <a className="text-link" href="#process">
              See how it works
            </a>
          </div>
        </div>

        <div className="route-card" aria-label="Casa Buena service route">
          <div className="route-card-top">
            <span>Operating boundary</span>
            <span>EU → CZ</span>
          </div>
          <div className="route-map">
            <div className="route-line" />
            <div className="route-point route-point-start">
              <span className="route-dot" />
              <small>Agreed EU port</small>
              <strong>START</strong>
            </div>
            <div className="route-point route-point-middle">
              <span className="route-dot" />
              <small>Customs & technical</small>
              <strong>CONTROL</strong>
            </div>
            <div className="route-point route-point-end">
              <span className="route-dot" />
              <small>Czech handover</small>
              <strong>READY</strong>
            </div>
          </div>
          <div className="route-note">
            <span>Important</span>
            <p>
              Our standard scope begins at the agreed European port. China-side
              sourcing and ocean freight stay with the exporter.
            </p>
          </div>
        </div>
      </section>

      <section className="signal-bar" aria-label="Service principles">
        <span>One accountable coordinator</span>
        <span>Vehicle-level document control</span>
        <span>Authorised local specialists</span>
      </section>

      <section className="section section-scope" id="scope">
        <div className="section-heading">
          <p className="eyebrow">What we coordinate</p>
          <h2>European execution, without the loose ends.</h2>
          <p>
            One operational thread connects the exporter, importer, carrier,
            customs representative and technical specialists.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-process" id="process">
        <div className="process-intro">
          <p className="eyebrow">Working model</p>
          <h2>A controlled route, agreed vehicle by vehicle.</h2>
          <p>
            Eligibility, responsibility, price and timing depend on the vehicle,
            port and import structure. We confirm them before execution starts.
          </p>
          <a className="button button-light" href="mailto:casabuena@struhala.cz">
            Send us the vehicle details <ArrowIcon />
          </a>
        </div>
        <ol className="stage-list">
          {stages.map(([label, text], index) => (
            <li key={label}>
              <span className="stage-number">0{index + 1}</span>
              <div>
                <strong>{label}</strong>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section section-model">
        <div className="model-heading">
          <p className="eyebrow">Two ways to work</p>
          <h2>The commercial structure follows the shipment.</h2>
        </div>
        <div className="model-grid">
          <article>
            <span>Coordination</span>
            <h3>Your European buyer remains the importer.</h3>
            <p>
              Casa Buena coordinates the appointed parties and keeps the
              vehicle-level work moving from the agreed port to handover.
            </p>
          </article>
          <article>
            <span>Principal import</span>
            <h3>Casa Buena buys, imports and resells.</h3>
            <p>
              Available case by case, after the vehicle, commercial terms and
              regulatory route have been reviewed.
            </p>
          </article>
        </div>
      </section>

      <section className="contact-section">
        <div>
          <p className="eyebrow">Start with the facts</p>
          <h2>Send the VIN, vehicle documents and expected EU port.</h2>
        </div>
        <a href="mailto:casabuena@struhala.cz">
          casabuena@struhala.cz <ArrowIcon />
        </a>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark">CB</span>
          <div>
            <strong>Casa buena s.r.o.</strong>
            <span>European vehicle import coordination</span>
          </div>
        </div>
        <div className="company-data">
          <p>IČO 23325151 · DIČ CZ23325151 · EORI CZ23325151</p>
          <p>Partyzánské náměstí 1738/3, 702 00 Ostrava, Czech Republic</p>
        </div>
        <p className="legal-note">
          Casa Buena coordinates authorised third-party providers. Scope and
          responsibility are confirmed separately for each engagement.
        </p>
      </footer>
    </main>
  );
}
