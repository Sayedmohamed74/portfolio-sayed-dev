import Link from "next/link";
/* import { Github, Linkedin, Twitter, Facebook } from "lucide-react";
 */
export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-textPrimary)] border-t border-[var(--color-textTertiary)] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-14">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-orbitron font-bold mb-4 tracking-wide text-[var(--color-textPrimary)]">
            Sayed Dev
          </h2>
          <p className="text-[var(--color-textSecondary)] text-base leading-relaxed">
            Crafting elegant, performant web experiences with modern
            technologies — accessible, responsive, and beautifully coded.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-[var(--color-textTertiary)]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-[var(--color-textSecondary)]">
            {[
              { name: "Home", href: "/" },
              { name: "Projects", href: "/projects" },
              { name: "About", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-[var(--color-textTertiary)] transition-colors duration-300 inline-block relative after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-[var(--color-textTertiary)] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        {/* <div>
          <h3 className="text-xl font-semibold mb-5 text-[var(--color-textTertiary)]">
            Connect with Me
          </h3>
          <div className="flex items-center gap-5 text-2xl">
            <Link
              href="https://github.com/"
              target="_blank"
              className="hover:text-[#00E5FF] transition-transform duration-300 hover:scale-110"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://linkedin.com/"
              target="_blank"
              className="hover:text-[#00E5FF] transition-transform duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="https://twitter.com/"
              target="_blank"
              className="hover:text-[#00E5FF] transition-transform duration-300 hover:scale-110"
            >
              <Twitter size={24} />
            </Link>
            <Link
              href="https://facebook.com/"
              target="_blank"
              className="hover:text-[#00E5FF] transition-transform duration-300 hover:scale-110"
            >
              <Facebook size={24} />
            </Link>
          </div>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm py-6 border-t border-[var(--color-textTertiary)] text-[var(--color-textSecondary)]">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-[var(--color-textTertiary)]">
          Sayed Dev
        </span>{" "}
        — All rights reserved.
      </div>
    </footer>
  );
}
