import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Container from "@/components/Container";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export type PortfolioProps = SliceComponentProps<Content.PortfolioSlice>;

const Portfolio: FC<PortfolioProps> = ({ slice }) => {
  const data = slice.primary;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={data.section_id || ""}
      className="relative py-24 bg-gradient-to-b from-primary via-secondary to-primary overflow-hidden"
    >
      {/* Soft glow background effects */}
      <div className="absolute -top-24 -left-10 w-80 h-80 bg-tertiary/25 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-tertiary/15 rounded-full blur-3xl animate-pulse" />

      <Container className="relative z-10 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-textPrimary tracking-tight">
          {data.title || "Portfolio"}
        </h2>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {!!data.projects_cards &&
            data.projects_cards.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-tertiary/10 backdrop-blur-md border border-tertiary/30 rounded-2xl shadow-lg hover:shadow-tertiary/40 hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col overflow-hidden"
              >
                {/* Image */}
                {item.project_image?.url && (
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <PrismicNextImage
                      field={item.project_image}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                )}

                {/* Content */}
                <h4 className=" text-textPrimary pt-4 font-bold md:text-2xl">{item.title}</h4>
                <div className="p-6 text-left flex flex-col flex-grow">
                  {item.description && (
                    <p className="text-textPrimary/90 font-medium text-base md:text-lg leading-relaxed mb-4 max-h-32 md:max-h-40 lg:max-h-48 overflow-auto p-3 rounded-xl bg-primary">
                      {item.description}
                    </p>
                  )}

                  {!!item.tools?.length && (
                    <div className="mt-auto">
                      <h3 className="text-textSecondary font-semibold mb-3 text-sm uppercase tracking-wide">
                        Tools Used
                      </h3>
                      <ul className="flex flex-wrap gap-2">
                        {item.tools.map((tool, index) => (
                          <li
                            key={index}
                            className="bg-tertiary/20 text-textPrimary text-xs font-semibold py-1 px-3 rounded-full border border-tertiary/40 hover:bg-tertiary/30 transition-all duration-300"
                          >
                            <PrismicRichText
                              field={[tool]}
                              components={{
                                paragraph: ({ children }) => <>{children}</>,
                              }}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <PrismicNextLink field={item.web_link} className="mb-2.5"/>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-tertiary/10 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500 pointer-events-none" />
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
