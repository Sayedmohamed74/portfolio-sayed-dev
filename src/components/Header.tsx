import { createClient } from "@/prismicio";
import Container from "./Container";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import HeaderClient from "./HeaderClient";

const Header = async () => {
  const client = createClient();
  const navigation = await client.getSingle("header");
  const data = navigation.data;

  return <HeaderClient data={data} />;
};

export default Header;
