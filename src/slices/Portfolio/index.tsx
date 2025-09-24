import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Container from "@/components/Container";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Portfolio`.
 */
export type PortfolioProps = SliceComponentProps<Content.PortfolioSlice>;

/**
 * Component for "Portfolio" Slices.
 */
const Portfolio: FC<PortfolioProps> = ({ slice }) => {
  const data = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={data.section_id || ""}
      className="bg-primary/95 pb-20 pt-header shadow shadow-amber-50"
    >
      <Container className="text-center">
        <h2 className="text-5xl font-bold mb-10 text-textPrimary">
          {data.title}
        </h2>
        <div className="flex flex-wrap gap-8">
          {!!data.projects_cards &&
            data.projects_cards.map(
              (item, idx) =>
                (item.description ||
                  item.project_image.url ||
                  !!item.tools.length) && (
                    <div
                    key={idx}
                    className="p-6 w-full sm:w-[48%] lg:w-[31%] bg-primary rounded-xl hover:scale-105 hover:shadow-[0px_1px_5px_2px_white] transition duration-300 ease-in-out flex flex-col"
                    >
                    <div className="w-full aspect-square rounded-lg overflow-hidden mb-4 bg-white/5 backdrop-blur-sm border-4 border-white/10 shadow-2xl shadow-black/30">
                      <PrismicNextImage
                      field={item.project_image}
                      className="w-full h-full mx-auto mb-4"
                      />
                    </div>

                    <p className="text-textPrimary font-semibold line-clamp-4 text-start ">
                      {item.description}
                    </p>
                    <div>
                      {!!item.tools.length && (
                      <>
                        <h3 className="text-textSecondary font-semibold mt-4 mb-2 text-start">
                        Tools:
                        </h3>
                        <ul className="text-start flex flex-wrap gap-2 items-center">
                        {item.tools.map((tool, index) => (
                          <li
                          key={index}
                          className="btn-gradient text-sm text-primary cursor-pointer py-1 px-2"
                          >
                          <PrismicRichText
                            field={[tool]}
                            components={{
                            paragraph: ({ children }) => (
                              <>{children}</>
                            ),
                            }}
                          />
                          </li>
                        ))}
                        </ul>
                      </>
                      )}
                    </div>
                    </div>
                )
            )}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
