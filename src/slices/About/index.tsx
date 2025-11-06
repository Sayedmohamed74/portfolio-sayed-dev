import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/components/Container";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About: FC<AboutProps> = ({ slice }) => {
  const data = slice.primary;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={data.section_id || ""}
      className="relative py-24 bg-gradient-to-b from-primary via-secondary to-primary overflow-hidden"
    >
      {/* Floating decorative gradient circle */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-tertiary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl" />

      <Container className="relative z-10 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-textPrimary tracking-tight">
          {data.title}
        </h2>

        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text Block */}
          <div className="w-full md:w-1/2 bg-tertiary/20 backdrop-blur-lg p-8 md:p-10 rounded-3xl shadow-2xl hover:shadow-tertiary/30 transition-shadow duration-500">
            <h3 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              About Me
            </h3>
            <p className="text-textSecondary text-lg leading-relaxed md:leading-loose">
              {data.description}
            </p>
          </div>

          {/* Image Block */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative group">
              <PrismicNextImage
                field={data.image_about}
                className="max-w-sm w-full h-auto rounded-3xl shadow-2xl object-cover transform transition duration-500 group-hover:scale-105 group-hover:shadow-tertiary/50"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
