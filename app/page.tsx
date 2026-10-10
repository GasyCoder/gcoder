import { ArrowRight, ArrowUpRight } from "lucide-react";
import SiteHeader from "./components/site-header";
import CopyEmail from "./components/copy-email";
import BrandMark from "./components/brand-mark";

const products = [
  {
    name: "UNUVIA",
    number: "01",
    sector: "Higher education",
    title: "AI Workspace for Universities",
    description: "A unified AI workspace for students, faculty, researchers and university staff.",
    href: "https://unuvia.gasycoder.com"
  },
  {
    name: "RIVO",
    number: "02",
    sector: "Healthcare",
    title: "Healthcare Management Platform",
    description: "A modular platform connecting clinical, administrative and operational workflows.",
    href: "https://rivo.mg"
  }
];

const expertise = [
  { title: "Software Engineering", description: "Backend architecture, APIs, web applications and SaaS platforms." },
  { title: "AI Engineering", description: "LLM integrations, intelligent assistants, document workflows and automation." },
  { title: "Product Systems", description: "Business applications designed around real operational requirements." },
  { title: "Cloud & Infrastructure", description: "Deployment, Linux, Docker, data systems and production environments." }
];

const technologies = [
  "Laravel", "PHP", "Python", "Node.js", "Next.js", "Vue", "React",
  "TypeScript", "PostgreSQL", "MySQL", "Docker", "Linux", "Claude", "OpenAI"
];

const principles = [
  "Simple over unnecessary complexity",
  "Built around real workflows",
  "Maintainable by design",
  "AI where it creates measurable value"
];

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-content">
          <p className="eyebrow hero-eyebrow">
            <span className="studio-dot" aria-hidden="true" />
            Independent Software Studio <span aria-hidden="true">·</span> Madagascar
          </p>
          <h1 id="hero-title">Software products built<br className="hero-break" /> <span>for real-world systems.</span></h1>
          <p className="hero-description">
            GasyCoder builds software products, SaaS platforms and intelligent
            systems for healthcare, higher education and modern organizations.
          </p>
          <div className="hero-actions">
            <a className="text-link primary-link" href="#products">View products <ArrowRight aria-hidden="true" /></a>
            <a className="text-link secondary-link" href="mailto:contact@gasycoder.com" target="_blank" rel="noopener noreferrer">Contact <ArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
          </div>
          </div>
          <aside className="studio-map" aria-label="GasyCoder product studio">
            <p className="map-caption">Independent thinking. Connected systems.</p>
            <div className="map-studio"><BrandMark /><span>GasyCoder<small>Software &amp; digital products</small></span></div>
            <div className="map-branches">
              {products.map((product) => (
                <a className="map-product" key={product.name} href={product.href} target="_blank" rel="noopener noreferrer">
                  <span className="index" aria-hidden="true">{product.number}</span>
                  <span>{product.name}<small>{product.sector}</small></span>
                  <ArrowUpRight aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            </div>
            <p className="map-footnote"><span aria-hidden="true">↳</span> Built around people and their workflows.</p>
          </aside>
        </section>

        <section id="products" className="products container section" aria-labelledby="products-title">
          <div className="section-intro">
            <div>
            <p className="eyebrow">Products</p>
            <h2 id="products-title">Products built around<br /> real operational needs.</h2>
            </div>
            <p className="section-note">From academic work to clinical operations.<br /> Purpose-built, with a long-term view.</p>
          </div>
          <div className="product-list">
            {products.map((product) => (
              <article className="product-row" key={product.name}>
                <a className="product-row-link" href={product.href} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${product.name} (opens in a new tab)`}>
                <div className="product-identity">
                  <p className="product-sector"><span className="index">{product.number}</span><span>{product.sector}</span></p>
                  <h3>{product.name}</h3>
                  <p className="product-subtitle">{product.title}</p>
                </div>
                <div className="product-detail">
                  <p>{product.description}</p>
                  <span className="text-link product-link">
                    Explore {product.name} <ArrowUpRight aria-hidden="true" />
                  </span>
                </div>
                <span className="product-launch" aria-hidden="true"><ArrowUpRight /></span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="capabilities" className="container section expertise-section" aria-labelledby="expertise-title">
          <div id="expertise" className="section-intro">
            <div>
            <p className="eyebrow">Expertise</p>
            <h2 id="expertise-title">What we work on</h2>
            </div>
            <p className="section-note">Thoughtful engineering, from the first<br /> architecture decision to production.</p>
          </div>
          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <article className="expertise-item" key={item.title}>
                <span className="index" aria-hidden="true">0{index + 1}</span>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
              </article>
            ))}
          </div>
          <div className="technology-strip">
            <h3 className="eyebrow">Technology we work with</h3>
            <ul aria-label="Technologies">
              {technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </div>
        </section>

        <section id="about" className="container section about-section" aria-labelledby="about-title">
          <div className="editorial-grid">
            <h2 id="about-title" className="section-label">About GasyCoder</h2>
            <div className="about-copy">
              <p className="about-lead">GasyCoder is an independent software engineering studio based in Madagascar.</p>
              <p>We design and build digital products, business applications and AI-enabled systems with a focus on maintainability, clarity and real operational value.</p>
              <p>Our work spans healthcare, higher education, organizational systems and digital transformation.</p>
            </div>
          </div>
          <div className="editorial-grid founder-row">
            <p className="eyebrow">The founder</p>
            <div className="founder-copy">
              <span className="founder-initials" aria-hidden="true">FB</span>
              <div>
              <h3>Florent Bezara</h3>
              <p className="founder-role">Founder &amp; Software Engineer</p>
              <p>Software engineer focused on backend architecture, SaaS products, AI integration and digital transformation.</p>
              <div className="founder-links">
                <a className="text-link" href="https://github.com/GasyCoder/" target="_blank" rel="noopener noreferrer">
                  GitHub <ArrowUpRight aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <a className="text-link" href="https://me.gasycoder.com/" target="_blank" rel="noopener noreferrer">
                  Portfolio <ArrowUpRight aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container section principles-section" aria-labelledby="principles-title">
          <div className="editorial-grid">
            <h2 id="principles-title" className="section-label">How we build</h2>
            <ol className="principles-list">
              {principles.map((principle, index) => (
                <li key={principle}><span className="index" aria-hidden="true">0{index + 1}</span><span>{principle}</span></li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="container contact-section" aria-labelledby="contact-title">
          <div>
          <p className="eyebrow">Let’s talk</p>
          <h2 id="contact-title">Have something worth building?</h2>
          <p>Tell us about the product, system or workflow you’re working on.</p>
          </div>
          <div className="contact-actions">
            <a className="text-link contact-link" href="mailto:contact@gasycoder.com" target="_blank" rel="noopener noreferrer">contact@gasycoder.com <ArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
            <CopyEmail />
          </div>
        </section>
      </main>

      <footer className="site-footer container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="wordmark" aria-label="GasyCoder home"><BrandMark /><span>GasyCoder</span></a>
            <p>Software Engineering &amp; Digital Products</p>
          </div>
          <nav className="footer-nav" aria-label="Products">
            <p>Products</p>
            {products.map((product) => (
              <a key={product.name} href={product.href} target="_blank" rel="noopener noreferrer">
                {product.name}<span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </nav>
          <nav className="footer-nav" aria-label="Company">
            <p>Company</p><a href="#about">About</a><a href="mailto:contact@gasycoder.com" target="_blank" rel="noopener noreferrer">Contact <ArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
          </nav>
        </div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} GasyCoder</p><p>Mahajanga, Madagascar</p></div>
      </footer>
    </>
  );
}
