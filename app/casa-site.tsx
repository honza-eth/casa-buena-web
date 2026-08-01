import Link from "next/link";
import type { SiteCopy } from "./site-copy";

const email = "casabuena@struhala.cz";

function LanguageSwitcher({ current, label }: { current: "en" | "cs"; label: string }) {
  return (
    <nav className="language-switcher" aria-label={label}>
      <Link href="/" hrefLang="en" lang="en" aria-current={current === "en" ? "page" : undefined}>
        EN
      </Link>
      <span aria-hidden="true">/</span>
      <Link href="/cs" hrefLang="cs" lang="cs" aria-current={current === "cs" ? "page" : undefined}>
        CZ
      </Link>
    </nav>
  );
}

function Brand({ copy }: { copy: SiteCopy }) {
  return (
    <Link className="brand" href={copy.homeHref} aria-label={copy.brandLabel}>
      <span className="brand-mark" aria-hidden="true">
        <span>C</span>
        <span>B</span>
      </span>
      <span className="brand-name">Casa Buena</span>
    </Link>
  );
}

export function CasaSite({ copy }: { copy: SiteCopy }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        {copy.skipLink}
      </a>

      <header className="site-header">
        <Brand copy={copy} />
        <div className="header-actions">
          <LanguageSwitcher current={copy.language} label={copy.languageNavigation} />
          <a className="header-email" href={`mailto:${email}`} aria-label={copy.emailLabel}>
            <span>{copy.primaryAction}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow reveal reveal-one">
              <span aria-hidden="true" />
              {copy.eyebrow}
            </p>
            <h1 id="hero-title" className="reveal reveal-two">
              <span>{copy.headline[0]}</span>
              <em>{copy.headline[1]}</em>
            </h1>
            <p className="hero-intro reveal reveal-three">{copy.introduction}</p>
            <a className="primary-action reveal reveal-four" href={`mailto:${email}`}>
              <span>{copy.primaryAction}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="route-sigil reveal reveal-three" aria-hidden="true">
            <span className="sigil-index">01—04</span>
            <div className="sigil-orbit sigil-orbit-outer" />
            <div className="sigil-orbit sigil-orbit-inner" />
            <div className="sigil-code">
              <strong>EU</strong>
              <span>→</span>
              <strong>CZ</strong>
            </div>
            <span className="sigil-caption">{copy.sigilCaption}</span>
          </div>

          <aside className="scope-note reveal reveal-four">
            <p>{copy.scopeTag}</p>
            <strong>{copy.scopeBoundary}</strong>
          </aside>
        </section>

        <section className="route-section" aria-labelledby="offer-title">
          <div className="route-heading">
            <p className="section-label">{copy.offerLabel}</p>
            <h2 id="offer-title">{copy.offerTitle}</h2>
          </div>
          <ol className="route-list">
            {copy.route.map((item, index) => (
              <li key={item}>
                <span className="route-number">0{index + 1}</span>
                <strong>{item}</strong>
                <span className="route-arrow" aria-hidden="true">
                  →
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section className="model-section" aria-labelledby="model-title">
          <div className="model-heading">
            <p className="section-label">{copy.modelLabel}</p>
            <h2 id="model-title">{copy.modelTitle}</h2>
          </div>
          <div className="model-grid">
            <article>
              <span>01</span>
              <h3>{copy.coordinationTitle}</h3>
              <p>{copy.coordinationText}</p>
            </article>
            <article>
              <span>02</span>
              <h3>{copy.separateTitle}</h3>
              <p>{copy.separateText}</p>
            </article>
          </div>
          <p className="confirmation-note">
            <span aria-hidden="true">●</span>
            {copy.confirmation}
          </p>
        </section>

        <section className="contact-section" aria-labelledby="contact-title">
          <div>
            <p className="section-label">{copy.contactLabel}</p>
            <h2 id="contact-title">{copy.contactTitle}</h2>
          </div>
          <a href={`mailto:${email}`} aria-label={`${copy.emailLabel}: ${email}`}>
            <span>{email}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <Brand copy={copy} />
          <p>{copy.footerService}</p>
        </div>
        <div className="company-data">
          <p>Casa buena s.r.o.</p>
          <p>IČO 23325151 · DIČ CZ23325151 · EORI CZ23325151</p>
          <p>{copy.companyAddress}</p>
        </div>
      </footer>
    </>
  );
}
