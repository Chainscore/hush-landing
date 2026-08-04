import { ScrollEffects } from "./components/ScrollEffects";
import { WaitlistForm } from "./components/WaitlistForm";

const assets = {
  hero: "/assets/hero-section.png",
  modes: "/assets/section-3-modes.png",
  guarantees: "/assets/section-5-value-props.png",
  closing: "/assets/section-8-closing.png",
  ada: "/assets/cardano-icon.svg",
  usdc: "/assets/usdc-token.svg",
  swap: "/assets/refresh-cw.svg",
  pay: "/assets/file-text.svg",
  send: "/assets/send.svg",
  glow: "/assets/signature-circle-glow.svg",
  arc: "/assets/veiled-arc.svg",
};

const communityLinks = {
  docs: "/docs/",
  waitlist: "#waitlist",
  twitter: "https://x.com/HushProtocolHQ",
};

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "solid" | "outline";
  className?: string;
  external?: boolean;
};

function Button({
  children,
  href = "#waitlist",
  variant = "solid",
  className = "",
  external = false,
}: ButtonProps) {
  return (
    <a
      className={`button button--${variant} ${className}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function BackgroundArt({ src, overlay = "surface-overlay" }: { src: string; overlay?: string }) {
  return (
    <div className="surface-art" aria-hidden="true">
      <img src={src} alt="" />
      <div className={overlay} />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

function Token({ icon, label, tone }: { icon: string; label: string; tone: "ada" | "usdc" }) {
  return (
    <div className="token">
      <span className={`token__icon token__icon--${tone}`}>
        <img src={icon} alt="" />
      </span>
      <span className={`token__label token__label--${tone}`}>{label}</span>
    </div>
  );
}

function TransactionMockup() {
  return (
    <div className="transaction-card">
      <div className="transaction-panel">
        <p className="transaction-label">You Sell</p>
        <div className="transaction-amount">
          <strong>1,000</strong>
          <Token icon={assets.ada} label="ADA" tone="ada" />
        </div>
      </div>

      <div className="transaction-panel">
        <p className="transaction-label">Receive exactly</p>
        <div className="transaction-amount">
          <strong>162.35</strong>
          <Token icon={assets.usdc} label="USDCx" tone="usdc" />
        </div>
      </div>

      <div className="transaction-details">
        <div>
          <span>Network fee</span>
          <b>sponsored</b>
        </div>
        <div>
          <span>Privacy protection</span>
          <em>shielded</em>
        </div>
      </div>

      <a className="button button--solid transaction-button" href="#waitlist">
        Confirm &amp; Sign
      </a>
    </div>
  );
}

const modes = [
  {
    icon: assets.swap,
    title: "Swap",
    copy: "Exchange any Cardano asset. Exact amount received or nothing moves. Complete slip protection automatically handled.",
  },
  {
    icon: assets.pay,
    title: "Pay",
    copy: "Merchant requests USDCx. You hold ADA. Hush converts and delivers exactly. One signature covers both actions.",
  },
  {
    icon: assets.send,
    title: "Send",
    copy: "Send the asset you hold and let Hush find the private route. Set the outcome once, then settle atomically.",
  },
];

const workflow = [
  ["01", "Define the outcome", "You lock the exact requirements of your swap or payment in an encrypted format."],
  ["02", "Request quotes privately", "Intent is shared over private channels with certified network solvers."],
  ["03", "Solvers compete", "Our network of competing execution partners calculate optimal paths to match your criteria."],
  ["04", "Verify and sign", "The winning quote is returned directly to your wallet. You verify constraints and sign."],
  ["05", "Atomic settlement", "Either the execution lands precisely with the specified assets, or nothing executes."],
];

const guarantees = [
  ["Exact settlement", "Say goodbye to slips and estimations. The amount of assets displayed on your confirmation screen is exactly what lands in your ledger."],
  ["No deposit, no contract", "Your assets never leave your custody during the negotiation. Everything remains inside your security scope until the atomic execution step."],
  ["Sponsored fees", "You don't need native gas tokens to interact. Winning solvers sponsor native network transaction fees directly."],
  ["Private until settlement", "Your swap intent is negotiated completely in private. Sibling nodes and losing solvers never learn your balance or transaction details."],
];

const trustPoints = [
  ["Noncustodial", "Your unique signature covers the complete constraints. No smart contract holds intermediate funds; you keep total absolute custody."],
  ["Verifiable", "An independent, cryptographic verifier confirms every constraint and transaction input before your wallet invocation."],
  ["Atomic", "All steps are tightly coupled in a single step execution sequence. It settles for the exact amount or nothing moves."],
];

function SiteHeader() {
  return (
    <header className="site-header reveal reveal--down" data-reveal>
      <a className="brand" href="#top" aria-label="Hush home">
        hush<span>.</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#protocol">Protocol</a>
        <a href="#developers">Developers</a>
        <a href={communityLinks.docs}>Docs</a>
        <a href="#ecosystem">Ecosystem</a>
      </nav>

      <Button href={communityLinks.waitlist} className="header-button">
        Join waitlist
      </Button>

      <details className="mobile-nav">
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Mobile navigation">
          <a href="#protocol">Protocol</a>
          <a href="#developers">Developers</a>
          <a href={communityLinks.docs}>Docs</a>
          <a href="#ecosystem">Ecosystem</a>
          <a href={communityLinks.waitlist}>Join waitlist</a>
        </nav>
      </details>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero scroll-section" id="top" data-scroll-section>
      <BackgroundArt src={assets.hero} overlay="hero-overlay" />
      <div className="hero-inner">
        <SiteHeader />

        <div className="hero-copy reveal reveal--up" data-reveal data-delay="120">
          <div className="hero-copy__content">
            <SectionLabel>Cardano Private Execution</SectionLabel>
            <h1>
              Pay with anything.
              <br />
              Receive exactly.
            </h1>
            <p className="hero-description">
              Hush privately finds competing quotes, sponsors the network fee, and settles directly from your wallet.
            </p>
            <div className="hero-actions">
              <Button href={communityLinks.waitlist}>Join the waitlist</Button>
              <Button href={communityLinks.twitter} variant="outline" external>
                Follow on X
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className="problem-solution scroll-section" id="protocol" data-scroll-section>
      <div className="section-inner problem-solution__inner">
        <div className="problem-column reveal reveal--left" data-reveal data-delay="40">
          <h2>Every transaction is a broadcast.</h2>
          <div className="problem-statements">
            <p>A public order reveals your strategy.</p>
            <p>A large swap signals your urgency.</p>
            <p>A treasury movement exposes your position.</p>
          </div>
          <Button href={`${communityLinks.docs}protocol/overview/`} variant="outline">
            Read the docs →
          </Button>
        </div>

        <div className="solution-column reveal reveal--right" data-reveal data-delay="140">
          <h3>One signature. Exact amount. Nothing else moves.</h3>
          <TransactionMockup />
          <p className="solution-note">The transaction either delivers the accepted amount or does not execute.</p>
        </div>
      </div>
    </section>
  );
}

function Modes() {
  return (
    <section className="modes scroll-section" id="ecosystem" data-scroll-section>
      <BackgroundArt src={assets.modes} overlay="surface-overlay" />
      <div className="section-inner modes__inner">
        <div className="section-heading reveal reveal--up" data-reveal>
          <SectionLabel>Capabilities</SectionLabel>
          <h2>Three actions. One protocol.</h2>
        </div>
        <div className="mode-grid">
          {modes.map((mode, index) => (
            <article className="mode-card reveal reveal--up" data-reveal data-delay={String(120 + index * 100)} key={mode.title}>
              <span className="mode-card__icon">
                <img src={mode.icon} alt="" />
              </span>
              <h3>{mode.title}</h3>
              <p>{mode.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="how-it-works scroll-section" id="developers" data-scroll-section>
      <div className="section-inner how-it-works__inner">
        <div className="section-heading reveal reveal--up" data-reveal>
          <SectionLabel>Workflow</SectionLabel>
          <h2>From intent to settlement.</h2>
        </div>
        <div className="workflow-steps">
          {workflow.map(([number, title, copy], index) => (
            <div className="workflow-step reveal reveal--left" data-reveal data-delay={String(100 + index * 70)} key={number}>
              <span className="workflow-step__number">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Guarantees() {
  return (
    <section className="guarantees scroll-section" id="guarantees" data-scroll-section>
      <BackgroundArt src={assets.guarantees} overlay="surface-overlay" />
      <div className="section-inner guarantees__inner">
        <div className="section-heading reveal reveal--up" data-reveal>
          <SectionLabel>Guarantees</SectionLabel>
          <h2>Receive the amount shown — or nothing moves.</h2>
        </div>
        <div className="guarantee-grid">
          {guarantees.map(([title, copy], index) => (
            <article className="guarantee reveal reveal--up" data-reveal data-delay={String(120 + index * 90)} key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Taglines() {
  return (
    <section className="taglines scroll-section" data-scroll-section>
      <div className="tagline-glow" aria-hidden="true">
        <img src={assets.glow} alt="" />
      </div>
      <div className="tagline-arc" aria-hidden="true">
        <img src={assets.arc} alt="" />
      </div>

      <div className="taglines__inner">
        <div className="tagline-stack">
          <div className="tagline-row tagline-row--primary reveal reveal--left" data-reveal>
            <p>Trade without telling.</p>
          </div>
          <div className="tagline-row tagline-row--secondary reveal reveal--right" data-reveal data-delay="100">
            <p>Keep the alpha. Lose the trail.</p>
            <span>Open markets. Closed books.</span>
          </div>
          <div className="tagline-row tagline-row--tertiary reveal reveal--left" data-reveal data-delay="200">
            <p>Make moves, not announcements.</p>
            <span>[ your wallet says too much ]</span>
          </div>
          <div className="tagline-row tagline-row--quaternary reveal reveal--right" data-reveal data-delay="300">
            <span>The market does not need to know.</span>
            <p>Do not show your hand.</p>
          </div>
          <div className="tagline-row tagline-row--footer reveal reveal--up" data-reveal data-delay="400">
            <span>Nothing to see. Everything verified.</span>
            <span>Move markets quietly.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="trust scroll-section" data-scroll-section>
      <div className="section-inner trust__inner">
        <h2 className="reveal reveal--up" data-reveal>No contract. No token. No trust required.</h2>
        <div className="trust-grid">
          {trustPoints.map(([title, copy], index) => (
            <article className="trust-point reveal reveal--up" data-reveal data-delay={String(120 + index * 100)} key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="closing scroll-section" id="closing" data-scroll-section>
      <BackgroundArt src={assets.closing} overlay="surface-overlay" />
      <div className="closing__inner">
        <div className="closing-content reveal reveal--scale" data-reveal>
          <h2>The market does not need to know.</h2>
          <p>Execute through Hush.</p>
          <div className="closing-actions">
            <Button href={communityLinks.waitlist}>Join the waitlist</Button>
            <Button href={communityLinks.twitter} variant="outline" external>Follow on X</Button>
          </div>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}

function HushFooter() {
  return (
    <footer className="hush-footer">
      <div className="hush-footer__inner">
        <div className="hush-footer__utility reveal reveal--up" data-reveal>
          <span>Confidential execution for open markets</span>
          <a href={communityLinks.waitlist}>Join the waitlist <b>↗</b></a>
        </div>

        <a className="hush-footer__wordmark reveal reveal--up" data-reveal data-delay="100" href="#top" aria-label="Hush home">
          hush<span>.</span>
        </a>

        <div className="hush-footer__meta reveal reveal--up" data-reveal data-delay="180">
          <span>© 2026 hush</span>
          <span>Built on Cardano</span>
          <nav aria-label="Footer navigation">
            <a href={communityLinks.docs}>Docs</a>
            <a href="#developers">Developers</a>
            <a href={communityLinks.twitter} target="_blank" rel="noreferrer">X</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <ScrollEffects />
      <Hero />
      <ProblemSolution />
      <Modes />
      <HowItWorks />
      <Guarantees />
      <Taglines />
      <Trust />
      <Closing />
      <HushFooter />
    </main>
  );
}
