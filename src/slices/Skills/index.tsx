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

  const sections = [
    { title: "Frontend", skills: data.frontend_skills },
    { title: "Styling & UI", skills: data.styling_ui },
    { title: "Tools & Workflow", skills: data.tools_workflow },
  ];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={data.section_id || ""}
      className="relative py-24 bg-gradient-to-b from-primary via-secondary to-primary overflow-hidden"
    >
      {/* Soft background lighting */}
      <div className="absolute -top-20 left-10 w-72 h-72 bg-tertiary/25 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-tertiary/15 rounded-full blur-3xl animate-pulse" />

      <Container className="relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-textPrimary tracking-tight">
          Skills
        </h2>

        {/* Loop through each skill category */}
        {sections.map(
          (section, i) =>
            !!section.skills?.length && (
              <div key={i} className="mb-16">
                <h3 className="text-xl md:text-2xl font-semibold text-textSecondary mb-8 uppercase tracking-wider">
                  {section.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {section.skills.map((item) => (
                    <div
                      key={item.title}
                      className="group relative p-6 w-32 sm:w-36 md:w-40 bg-tertiary/20 backdrop-blur-md rounded-2xl border border-tertiary/30 shadow-md hover:shadow-tertiary/40 hover:-translate-y-2 transition-all duration-500 ease-out"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <PrismicNextImage
                          field={item.image_skill}
                          className="w-12 h-12 mb-3 transition-transform duration-300 group-hover:scale-110"
                        />
                        <p className="text-textPrimary font-semibold text-sm md:text-base tracking-wide">
                          {item.title}
                        </p>
                      </div>

                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-tertiary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            )
        )}
      </Container>
    </section>
  );
};

export default Skills;
