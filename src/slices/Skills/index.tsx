import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/components/Container";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Skills`.
 */
export type SkillsProps = SliceComponentProps<Content.SkillsSlice>;

/**
 * Component for "Skills" Slices.
 */
const Skills: FC<SkillsProps> = ({ slice }) => {
  const data = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={data.section_id || ""}
      className=" bg-primary pb-20 pt-header shadow shadow-amber-50"
    >
      <Container className="text-center">
        <h2 className="text-5xl font-bold mb-10 text-textPrimary">Skills</h2>
        <div>
          <h3 className="text-xl text-textSecondary md:text-2xl font-semibold my-5">
            Frontend
          </h3>
          <div className="flex flex-wrap gap-8">
            {!!data.frontend_skills &&
              data.frontend_skills.map((item) => (
                <div
                  key={item.title}
                  className="p-6 min-w-1/12 grow bg-[#bdbdbd]  rounded-xl hover:scale-105 hover:shadow-[3px_1px_5px_2px_white] transition duration-300 ease-in-out"
                >
                  <PrismicNextImage
                    field={item.image_skill}
                    className="w-12 mx-auto mb-4"
                  />
                  <p className="text-textTertiary font-semibold">
                    {item.title}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl text-textSecondary md:text-2xl font-semibold my-5">
            Styling & UI
          </h3>
          <div className="flex flex-wrap gap-8">
            {!!data.styling_ui &&
              data.styling_ui.map((item) => (
                <div
                  key={item.title}
                  className="p-6 min-w-1/12 grow bg-[#bdbdbd]  rounded-xl hover:scale-105 hover:shadow-[3px_1px_5px_2px_white] transition duration-300 ease-in-out"
                >
                  <PrismicNextImage
                    field={item.image_skill}
                    className="w-12 mx-auto mb-4"
                  />
                  <p className="text-textTertiary font-semibold">
                    {item.title}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl text-textSecondary md:text-2xl font-semibold my-5">
            Tools & Workflow
          </h3>
          <div className="flex flex-wrap gap-8">
            {!!data.tools_workflow &&
              data.tools_workflow.map((item) => (
                <div
                  key={item.title}
                  className="p-6 min-w-1/12 grow bg-[#bdbdbd]  rounded-xl hover:scale-105 hover:shadow-[3px_1px_5px_2px_white] transition duration-300 ease-in-out"
                >
                  <PrismicNextImage
                    field={item.image_skill}
                    className="w-12 mx-auto mb-4"
                  />
                  <p className="text-textTertiary font-semibold">
                    {item.title}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
