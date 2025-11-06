"use client";
import { useState } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Container from "./Container";

const HeaderClient = ({ data }: { data: any }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-lg bg-header/80 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.25)] transition-all duration-500">
      <Container className="flex items-center justify-between h-[var(--spacing-header)] px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <PrismicNextImage
            field={data.logo}
            className="w-[130px] h-auto max-sm:w-[100px] max-sm:h-[30px] transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-10">
          {data.buttons_nav.map((link: any) => (
            <li
              key={link.key}
              className="relative group text-textSecondary hover:text-textPrimary transition-colors duration-300 text-base font-medium tracking-wide"
            >
              <PrismicNextLink
                field={link}
                className="relative px-1 py-1 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-tertiary after:transition-all after:duration-300 group-hover:after:w-full"
              />
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md bg-tertiary/20 hover:bg-tertiary/40 transition-all focus:outline-none"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-6 h-6 text-textPrimary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-6 h-6 text-textPrimary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`fixed z-30 top-0 right-0 w-4/5 max-w-sm h-screen bg-primary/95 backdrop-blur-2xl shadow-2xl border-l border-white/10 transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col items-start p-8 space-y-10`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="absolute top-6 right-6 text-textPrimary text-3xl"
        >
          ✕
        </button>

        <div className="mt-12 w-full">
          {data.buttons_nav.map((link: any) => (
            <PrismicNextLink
              key={link.key}
              field={link}
              onClick={() => setMenuOpen(false)}
              className="block w-full text-textSecondary hover:text-tertiary text-xl font-semibold tracking-wide py-2 transition-colors duration-300"
            />
          ))}
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-500"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default HeaderClient;
