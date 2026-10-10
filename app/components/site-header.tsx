"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import BrandMark from "./brand-mark";

const navigation = [
  { label: "Products", href: "#products" },
  { label: "Expertise", href: "#capabilities" },
  { label: "About", href: "#about" }
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = navigation.map(item => document.getElementById(item.href.slice(1)));
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const current = sections.findLast(section => section && section.getBoundingClientRect().top <= 160);
      setActiveSection(current ? `#${current.id}` : null);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const onResize = () => { if (desktop.matches) setMenuOpen(false); };
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  return (
    <header ref={header} className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner container">
        <a className="wordmark" href="#" onClick={() => setMenuOpen(false)} aria-label="GasyCoder home"><BrandMark priority /><span>GasyCoder</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => <a key={item.href} href={item.href} aria-current={activeSection === item.href ? "location" : undefined}>{item.label}</a>)}
        </nav>
        <a className="text-link header-contact" href="mailto:contact@gasycoder.com" target="_blank" rel="noopener noreferrer">Contact <ArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
        <button
          ref={menuButton}
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-navigation" className="mobile-nav container" aria-label="Mobile navigation" hidden={!menuOpen}>
        {navigation.map((item) => (
          <a key={item.href} href={item.href} aria-current={activeSection === item.href ? "location" : undefined} onClick={() => setMenuOpen(false)}>{item.label}<ArrowRight aria-hidden="true" /></a>
        ))}
      </nav>
    </header>
  );
}
