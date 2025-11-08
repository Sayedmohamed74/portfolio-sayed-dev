"use client";

import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/components/Container";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Image from "./Image";
import { motion } from "framer-motion";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  const data = slice.primary;

  return (
    <section
      id={data.section_id || ""}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative isolate mt-header overflow-hidden bg-primary"
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)]/60 via-[var(--color-primary)] to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-tertiary)]/10 blur-[180px] rounded-full pointer-events-none" />

      <Container className="relative z-10 flex items-center justify-between py-24 lg:py-32 max-lg:flex-col max-lg:text-center max-lg:gap-16">
        {/* === LEFT TEXT AREA === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <p className="text-textTertiary text-lg sm:text-xl tracking-wide uppercase font-semibold">
            {data.intro_text}
          </p>

          <h1 className="mt-3 text-5xl sm:text-6xl lg:text-7xl font-orbitron font-extrabold text-textPrimary leading-tight">
            {data.name}
          </h1>

          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold text-textSecondary">
            {data.role}
          </h2>

          {/* CTA Buttons */}
          {/*  <div className="mt-10 flex max-lg:justify-center gap-4 flex-wrap">
            {data.cta_text && (
              <PrismicNextLink field={data.cta_link} className="btn-gradient">
                {data.cta_text}
              </PrismicNextLink>
            )}
            {data.secondary_cta_text && (
              <PrismicNextLink
                field={data.secondary_cta_link}
                className="btn-glass"
              >
                {data.secondary_cta_text}
              </PrismicNextLink>
            )}
          </div>
 */}
          {/* Social Links */}
          <ul className="mt-10 flex flex-wrap max-lg:justify-center gap-3">
            {data.social_links?.map((link, i) => (
              <motion.li
                key={link.icon_social.id || i}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-12 h-12 rounded-full bg-[var(--color-secondary)]/80 border border-[var(--color-textTertiary)]/20 flex items-center justify-center hover:shadow-[0_0_20px_var(--color-textTertiary)] backdrop-blur-sm transition-all duration-300"
              >
                <PrismicNextLink field={link.link_social}>
                  <PrismicNextImage
                    field={link.icon_social}
                    alt=""
                    className="w-6 h-6 object-contain"
                  />
                </PrismicNextLink>
              </motion.li>
            ))}
          </ul>

          <div className="mt-8 flex max-lg:justify-center">
            <PrismicNextLink
              field={data.cv_file}
              className="inline-block px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#00E5FF] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#00E5FF] shadow-lg shadow-[#00E5FF]/30 transition-all duration-500 ease-in-out text-center"
              target="_blank"
            />
          </div>
        </motion.div>

        {/* === RIGHT IMAGE AREA === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full flex-1 max-w-md lg:max-w-lg xl:max-w-xl mx-auto"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,229,255,0.2)] hover:shadow-[0_0_80px_rgba(0,229,255,0.35)] transition-all duration-700">
            <Image field={data.image_hero} />
          </div>

          {/* Decorative glow behind image */}
          <div className="absolute -inset-10 -z-10 bg-[var(--color-tertiary)]/15 blur-3xl rounded-full" />
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
