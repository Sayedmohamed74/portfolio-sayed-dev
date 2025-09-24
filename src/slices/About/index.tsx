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
      className="py-20 bg-primary/95"
      id={data.section_id || ""}
    >
      <Container className="text-center">
        <h2 className="text-5xl font-bold mb-10 text-textPrimary">
          {data.title}
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-14">
          {/* الصورة */}
          <div className="w-full md:w-2/3 flex justify-center">
            <PrismicNextImage
              field={data.image_about}
              className="max-w-sm w-full h-auto rounded-2xl shadow-xl object-cover"
            />
          </div>

          {/* النص */}
          <div className="bg-secondary/90 py-6 px-8 w-full md:w-1/2 rounded-2xl shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              About Me
            </h2>
            <p className="text-textPrimary/90 text-base md:text-lg leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
