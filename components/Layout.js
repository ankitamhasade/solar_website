import Link from "next/link";
import { useState } from "react";

export default function Layout({ children, active = "" }) {
  const [open, setOpen] = useState(false);

  const nav = [
    ["/", "Home"],
    ["/about", "About"],
    ["/services", "Services"],
    ["/contact", "Contact"],
  ];

  return (
    <>
      <header className="header">
        <Link href="/" className="brand">
          <span className="brand-sun">☀</span>
          <span>Aarambh Suntech Solution</span>
        </Link>

        <button
          className="menu"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          ☰
        </button>

        <nav className={open ? "nav open" : "nav"}>
          {nav.map(([href, label]) => (
            <Link
              className={
                active === label.toLowerCase() ? "active" : ""
              }
              onClick={() => setOpen(false)}
              href={href}
              key={label}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link className="small-wa" href="/contact">
          Enquiry
        </Link>
      </header>

      {children}

      <Link className="floating-wa" href="/contact" aria-label="Enquiry">
        💬
      </Link>

      <footer className="footer">
        <div>
          <div className="brand">
            <span className="brand-sun">☀</span>
            <span>Aarambh Suntech Solution</span>
          </div>

          <p>Solar • CCTV • Electrical solutions</p>
        </div>

        <div className="footer-links">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div>
          <p>© 2026 Aarambh Suntech Solution. All rights reserved.</p>
          <p>Professional solutions for homes, shops & businesses.</p>
        </div>
      </footer>
    </>
  );
}
