import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export default async function Footer() {
  const client = createClient();
  const navigation = await client.getSingle("footer");
  const data = navigation.data;

  return (
    <footer className="relative mt-32 border-t border-[var(--color-textTertiary)] bg-[var(--color-primary)] text-[var(--color-textPrimary)] overflow-hidden">
      {/* Subtle gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-secondary)]/40 via-[var(--color-primary)] to-[var(--color-primary)] opacity-80 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand / Description */}
        <div>
          <h2 className="text-3xl font-orbitron font-bold mb-4 text-[var(--color-textTertiary)]">
            Sayed Dev
          </h2>
          <p className="text-[var(--color-textSecondary)] leading-relaxed text-base">
            Turning creative ideas into elegant, performant web experiences —
            clean, modern, and human-centered.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-5 text-[var(--color-textTertiary)] uppercase tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {data?.quick_links?.map((link) => (
              <li key={link.quick_link.text}>
                <PrismicNextLink
                  field={link.quick_link}
                  className="text-[var(--color-textSecondary)] hover:text-[var(--color-textTertiary)] transition-all duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[var(--color-textTertiary)] hover:after:w-full after:transition-all"
                >
                  {link.quick_link.text}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-5 text-[var(--color-textTertiary)] uppercase tracking-wide">
            Connect
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            {data?.social_links?.map((item,i) => (
              <PrismicNextLink
                key={i}
                field={item.media_link}
                target="_blank"
                className="group flex items-center justify-center w-11 h-11 rounded-xl border border-[var(--color-textTertiary)]/40 bg-[var(--color-secondary)] hover:bg-[var(--color-tertiary)]/10 hover:scale-105 transition-all duration-300 shadow-[0_0_12px_rgba(0,229,255,0.15)] hover:shadow-[0_0_25px_rgba(0,229,255,0.3)]"
              >
                <PrismicNextImage
                  field={item.media_icon}
                  width={28}
                  height={28}
                  className="opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </PrismicNextLink>
            ))}
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="relative border-t border-[var(--color-textTertiary)]/20 mt-10"></div>

      {/* Bottom Bar */}
      <div className="relative text-center py-6 text-sm text-[var(--color-textSecondary)]">
        © {new Date().getFullYear()}{" "}
        <span className="text-[var(--color-textTertiary)] font-semibold">
          Sayed Dev
        </span>{" "}
        — All rights reserved.
      </div>
    </footer>
  );
}
