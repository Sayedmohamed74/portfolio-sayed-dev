import { createClient } from "@/prismicio";

import HeaderClient from "./HeaderClient";

const Header = async () => {
  const client = createClient();
  const navigation = await client.getSingle("header");
  const data = navigation.data;

  return <HeaderClient data={data} />;
};

export default Header;
