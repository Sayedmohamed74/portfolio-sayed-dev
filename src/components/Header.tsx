import { createClient } from "@/prismicio";
import Container from "./Container";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const Header = async () => {
  const client = createClient();
  const navigation = await client.getSingle("header");
  const data = navigation.data;
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-10">
      <nav className="bg-header text-textPrimary shadow-[1px_-4px_10px_0px]">
        <Container className=" h-header">
          <div className="flex items-center justify-between h-full">
            <div className="shrink-0">
              <PrismicNextImage field={data.logo} alt=""  className="max-sm:w-[100px] max-sm:h-[30px]"/>
            </div>
            <ul>
              {data.buttons_nav.map((link) => (
                <li key={link.key} className="inline-block ml-3.5 md:ml-6 text-sm md:text-lg font-medium text-textSecondary hover:text-textTertiary ">
                  <PrismicNextLink field={link} />
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
