import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/components/Container";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  const data = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-header   bg-primary"
    >
      <Container className="flex items-center justify-between py-20 h-full max-md:flex-col max-md:gap-10 ">
        <div className=" max-md:self-baseline">
          <small className="text-base lg:text-lg xl:text-xl font-semibold text-textTertiary ">
            {data.intro_text}
          </small>
          <p className="text-textSecondary  mt-3 md:mt-5 lg:mt-8 font-semibold text-3xl lg:text-5xl">
            {data.name}
          </p>
          <h1 className="text-textPrimary mt-4 md:mt-6 lg:mt-10 font-bold text-4xl lg:text-5xl">
            {data.role}
          </h1>

          <ul className="my-10 flex gap-2.5 flex-wrap ">
            {!!data.social_links &&
              data.social_links?.map((link) => (
                <li
                  key={link.icon_social.id}
                  className="w-12 aspect-square rounded-full bg-secondary  flex items-center justify-center hover:bg-tertiary hover:scale-110 transition-all duration-300"
                >
                  <PrismicNextLink className=" block" field={link.link_social}>
                    <PrismicNextImage field={link.icon_social} alt="" />
                  </PrismicNextLink>
                </li>
              ))}
          </ul>
        </div>

        <div className=" max-md:max-w-4/5 md:max-w-[500px]  xl:max-w-[600px] aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border-4 border-white/10 bg-white/5 backdrop-blur-sm">
          <PrismicNextImage
            field={data.image_hero}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </Container>
     
    </section>
  );
};

export default Hero;
